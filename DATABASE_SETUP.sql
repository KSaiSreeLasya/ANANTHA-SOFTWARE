-- ============================================================================
-- USER AUTHENTICATION & PROFILE SETUP
-- ============================================================================
-- This SQL file contains all the necessary queries to set up the database
-- for the login and signup functionality using Supabase.
--
-- IMPORTANT: When using Supabase:
-- 1. Supabase automatically manages the `auth.users` table via Auth
-- 2. You only need to create a public `users` table for additional profile data
-- 3. The Auth service handles password hashing, encryption, and JWT tokens
-- ============================================================================

-- ============================================================================
-- 1. CREATE USERS TABLE (Public Profile Data)
-- ============================================================================
-- This table stores additional user profile information beyond what Supabase Auth provides.
-- It's linked to auth.users via the user ID.

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

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_is_active ON users(is_active);

-- ============================================================================
-- 2. CREATE SESSIONS TABLE (Optional - for session management)
-- ============================================================================
-- Use this if you want to track user sessions separately

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
-- For handling password reset functionality

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
-- This ensures users can only access their own data

-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Policy: Users can insert their own profile (signup)
CREATE POLICY "Users can insert own profile"
  ON users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Enable RLS on sessions table
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions"
  ON sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own sessions"
  ON sessions FOR DELETE
  USING (auth.uid() = user_id);

-- Enable RLS on password_reset_tokens table
ALTER TABLE password_reset_tokens ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own reset tokens"
  ON password_reset_tokens FOR SELECT
  USING (auth.uid() = user_id);

-- Enable RLS on login_audit_logs table
ALTER TABLE login_audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own login logs"
  ON login_audit_logs FOR SELECT
  USING (
    auth.uid() = user_id
    OR (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
  );

-- ============================================================================
-- 6. CREATE UPDATED_AT TRIGGER (Auto-update timestamp)
-- ============================================================================
-- Automatically updates the updated_at field when a record is modified

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to users table
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 7. SAMPLE DATA (Optional - for testing)
-- ============================================================================
-- You can uncomment and modify these queries to add test data
-- DO NOT use in production with real data

/*
-- Insert a test user (Note: You'll need to create the auth user first via Supabase Auth UI)
INSERT INTO users (id, email, first_name, last_name, company)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'testuser@example.com',
  'Test',
  'User',
  'Test Company'
)
ON CONFLICT (id) DO NOTHING;
*/

-- ============================================================================
-- 8. USEFUL QUERIES FOR MANAGEMENT
-- ============================================================================

-- Get all users with their profile info
-- SELECT id, email, first_name, last_name, company, is_active, role, created_at FROM users;

-- Get total number of users
-- SELECT COUNT(*) as total_users FROM users;

-- Get active users count
-- SELECT COUNT(*) as active_users FROM users WHERE is_active = true;

-- Get users created in the last 30 days
-- SELECT id, email, first_name, created_at FROM users 
-- WHERE created_at >= NOW() - INTERVAL '30 days' 
-- ORDER BY created_at DESC;

-- Get recent login attempts
-- SELECT user_id, email, login_attempt_status, ip_address, created_at FROM login_audit_logs
-- ORDER BY created_at DESC LIMIT 50;

-- Find users who haven't logged in for more than 90 days
-- SELECT id, email, last_login_at FROM users 
-- WHERE last_login_at < NOW() - INTERVAL '90 days' OR last_login_at IS NULL;

-- ============================================================================
-- 9. ADMIN FUNCTIONS
-- ============================================================================

-- Function to deactivate a user
CREATE OR REPLACE FUNCTION deactivate_user(user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE users SET is_active = false WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Function to activate a user
CREATE OR REPLACE FUNCTION activate_user(user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE users SET is_active = true WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Function to update last login timestamp
CREATE OR REPLACE FUNCTION update_last_login(user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- NOTES ON SUPABASE INTEGRATION:
-- ============================================================================
-- 1. The `auth.users` table is managed entirely by Supabase Auth
-- 2. Do NOT try to insert directly into auth.users
-- 3. Use supabase.auth.signUp() and signInWithPassword() from your app
-- 4. The `id` field in your users table references auth.users(id)
-- 5. RLS policies are crucial for security - keep them enabled
-- 6. Supabase automatically handles JWT token generation and refresh
-- 7. Email confirmation and password reset can be configured in Supabase settings
