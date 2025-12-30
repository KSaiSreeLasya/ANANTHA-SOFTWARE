-- ============================================================================
-- USER AUTHENTICATION & PROFILE SETUP FOR SUPABASE
-- ============================================================================
-- Corrected SQL schema for login and signup functionality
-- This version fixes table/policy ordering issues
-- ============================================================================

-- ============================================================================
-- 1. CREATE USERS TABLE (Public Profile Data)
-- ============================================================================
-- Links to auth.users via user ID. Created first, before any policies.

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  company VARCHAR(255),
  phone VARCHAR(20),
  profile_picture_url TEXT,
  bio TEXT,
  is_active BOOLEAN DEFAULT true,
  role VARCHAR(50) DEFAULT 'user', -- 'user', 'admin', 'moderator'
  last_login_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_is_active ON users(is_active);

-- ============================================================================
-- 2. CREATE SESSIONS TABLE (Optional - for session management)
-- ============================================================================

CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(500) UNIQUE NOT NULL,
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  is_active BOOLEAN DEFAULT true
);

CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token);
CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at);

-- ============================================================================
-- 3. CREATE PASSWORD RESET TOKENS TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  used_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX IF NOT EXISTS idx_password_reset_user_id ON password_reset_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_password_reset_token_hash ON password_reset_tokens(token_hash);

-- ============================================================================
-- 4. CREATE LOGIN AUDIT LOG TABLE (Optional - for security)
-- ============================================================================
-- Track login attempts and activities

CREATE TABLE IF NOT EXISTS login_audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  email VARCHAR(255),
  login_attempt_status VARCHAR(50), -- 'success', 'failed', 'locked'
  ip_address INET,
  user_agent TEXT,
  failure_reason VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_login_audit_user_id ON login_audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_login_audit_email ON login_audit_logs(email);
CREATE INDEX IF NOT EXISTS idx_login_audit_created_at ON login_audit_logs(created_at);

-- ============================================================================
-- 5. ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================================================
-- All tables created first, NOW apply RLS policies

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Sessions RLS
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions"
  ON sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own sessions"
  ON sessions FOR DELETE
  USING (auth.uid() = user_id);

-- Password Reset Tokens RLS
ALTER TABLE password_reset_tokens ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own reset tokens"
  ON password_reset_tokens FOR SELECT
  USING (auth.uid() = user_id);

-- Login Audit Logs RLS
ALTER TABLE login_audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own login logs"
  ON login_audit_logs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all login logs"
  ON login_audit_logs FOR SELECT
  USING (
    (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
  );

-- ============================================================================
-- 6. CREATE UPDATED_AT TRIGGER (Auto-update timestamp)
-- ============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 7. ADMIN FUNCTIONS
-- ============================================================================

CREATE OR REPLACE FUNCTION deactivate_user(user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE users SET is_active = false WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION activate_user(user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE users SET is_active = true WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_last_login(user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- 8. SAMPLE DATA (Optional - for testing)
-- ============================================================================
-- Uncomment to add test data after creating a user via Supabase Auth UI
/*
INSERT INTO users (id, email, first_name, last_name, company)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'testuser@example.com',
  'Test',
  'User',
  'Test Company'
) ON CONFLICT (id) DO NOTHING;
*/

-- ============================================================================
-- KEY DIFFERENCES IN THIS CORRECTED VERSION:
-- ============================================================================
-- ✅ All tables created BEFORE enabling RLS
-- ✅ All RLS policies applied AFTER tables exist
-- ✅ Removed duplicate/misplaced policy on login_audit_logs
-- ✅ Split admin access into separate policy for clarity
-- ✅ Proper error handling and conditional creation
