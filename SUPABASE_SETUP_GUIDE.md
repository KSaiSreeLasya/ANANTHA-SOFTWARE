# Supabase Authentication Setup Guide

## Quick Overview

Your app is **almost fully configured** with Supabase! Here's what's already in place:

✅ **Already Configured:**
- Supabase client initialized in `lib/supabase.ts`
- Login component (`components/Login.tsx`) with email/password auth
- Signup component (`components/Signup.tsx`) with profile data collection
- Form validation and error handling
- Navigation integration

❌ **What You Still Need:**
1. Create the database tables in Supabase
2. Enable Row-Level Security (RLS) policies
3. Configure email confirmation (optional)

---

## Step-by-Step Setup

### Step 1: Access Your Supabase Dashboard

1. Go to [supabase.com](https://supabase.com) and log in
2. Open your project: **anantha-software---digital-solutions**
3. Navigate to the **SQL Editor** section

### Step 2: Run the SQL Schema

1. Copy all the SQL from `supabase-setup.sql` (provided in your project)
2. Open **SQL Editor** → Click **New Query**
3. **Paste the entire SQL script** and click **Run**

> ⚠️ **Important:** This must be run as a **single transaction**. If you get errors, check that:
> - All tables are created BEFORE policies
> - Table names match exactly: `users`, `sessions`, `password_reset_tokens`, `login_audit_logs`

### Step 3: Verify Tables Were Created

1. Go to **Table Editor** in your Supabase dashboard
2. Verify these tables exist:
   - `users` (with columns: id, email, first_name, last_name, company, phone, bio, is_active, role, etc.)
   - `sessions` (optional, for token management)
   - `password_reset_tokens` (for password reset feature)
   - `login_audit_logs` (for tracking login attempts)

### Step 4: Check Row-Level Security (RLS)

1. Go to **Authentication** → **Policies**
2. Select table `users`
3. Verify these policies exist:
   - ✅ "Users can view own profile"
   - ✅ "Users can update own profile"
   - ✅ "Users can insert own profile"

> If policies don't appear, re-run the SQL script.

### Step 5: Configure Email Confirmation (Optional but Recommended)

1. Go to **Authentication** → **Providers**
2. Click **Email**
3. Enable **Confirm email** (toggle ON)
4. Set **Mailer OTP validity duration** to your preference (default: 24 hours)

---

## How It Works: Login & Signup Flow

### Signup Flow:
```
User fills signup form
    ↓
Validation (email format, password length, terms)
    ↓
supabase.auth.signUp() - Creates auth.users entry
    ↓
Insert into users table - Stores profile data
    ↓
Redirect to home page
```

### Login Flow:
```
User enters email & password
    ↓
supabase.auth.signInWithPassword()
    ↓
JWT token created & stored
    ↓
Redirect to home page
```

---

## Current Code Structure

### Supabase Client (`lib/supabase.ts`)
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://shozruvlgahshkmkzxft.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Login Component (`components/Login.tsx`)
- Email & password validation
- `supabase.auth.signInWithPassword()` call
- Error handling & loading state
- Password visibility toggle

### Signup Component (`components/Signup.tsx`)
- Full form validation (8+ char password, matching passwords)
- Creates auth user + profile record
- Stores: first_name, last_name, email, company
- Terms acceptance checkbox

---

## Key Features Already Implemented

### Password Security
- ✅ Minimum 8 characters required
- ✅ Confirm password validation
- ✅ Password visibility toggle
- ✅ Supabase handles hashing & encryption

### Form Validation
- ✅ Email format validation
- ✅ Required field checking
- ✅ Password match verification
- ✅ Terms & conditions acceptance

### User Experience
- ✅ Loading states (disable button while submitting)
- ✅ Error messages display
- ✅ Smooth transitions & animations
- ✅ Dark theme (matches your design)

---

## Database Schema Overview

### `users` Table
```sql
- id (UUID, Primary Key) → References auth.users(id)
- email (VARCHAR) → User's email
- first_name, last_name → User's name
- company → Company affiliation
- phone → Contact number
- bio → User biography
- profile_picture_url → Avatar URL
- is_active → Account status (true/false)
- role → 'user', 'admin', 'moderator'
- last_login_at → Timestamp of last login
- created_at, updated_at → Timestamps
```

### Row-Level Security (RLS) Policies
- **SELECT:** Users can only see their own profile
- **UPDATE:** Users can only update their own profile
- **INSERT:** Users can create their own profile on signup
- **ADMINS:** Can view all login audit logs

---

## Testing Your Setup

### Test Signup:
1. Go to [your-app](#)→ **Sign up**
2. Fill in the form with test data
3. Use a valid email address (or any format if email confirmation is off)
4. Create the account
5. Check Supabase → **Table Editor** → `users` table (new row should appear)

### Test Login:
1. Go to [your-app](#) → **Log In**
2. Enter the email and password you just created
3. Should redirect to home page
4. Check browser console (F12) for any errors

### Check Audit Logs (Optional):
1. Go to Supabase → **Table Editor** → `login_audit_logs`
2. Should see a record of your login attempt with status "success" or "failed"

---

## Common Issues & Solutions

### ❌ Error: "relation 'login_audit_logs' does not exist"
**Solution:** All the tables weren't created. Run the complete SQL script again, making sure all statements execute successfully.

### ❌ Error: "permission denied for schema public"
**Solution:** Your user role might not have table creation permissions. Go to **Settings** → **API** and ensure you're using the correct role.

### ❌ Error: "new row violates row-level security policy"
**Solution:** RLS policies aren't set up correctly. Re-run the SQL script focusing on the RLS section.

### ❌ Signup succeeds but users table doesn't get populated
**Solution:** Check if email confirmation is enabled (it blocks profile insertion). Go to **Authentication** → **Providers** → **Email** and check settings.

---

## Optional: Add More Features

### Password Reset (Already prepared in schema)
Create a password reset flow using the `password_reset_tokens` table:
```typescript
// Generate token and send email
// User clicks link in email
// Verify token and reset password
```

### Session Tracking (Already prepared in schema)
Track user sessions in the `sessions` table for logout and multi-device management.

### Last Login Timestamp
Update `users.last_login_at` after successful login:
```typescript
const { error } = await supabase
  .from('users')
  .update({ last_login_at: new Date().toISOString() })
  .eq('id', user.id);
```

---

## Next Steps

1. **[Connect to Supabase](#open-mcp-popover)** using the MCP integration (if not already connected)
2. Run the `supabase-setup.sql` file in your Supabase SQL Editor
3. Test signup and login locally
4. Monitor login_audit_logs table for login attempts
5. Configure email confirmation in Authentication settings

---

## Security Best Practices

✅ **Already implemented:**
- Password hashing (Supabase handles)
- JWT tokens for session management
- Row-Level Security for data isolation
- Input validation on client side

✅ **To implement:**
- Rate limiting on login attempts
- Password reset functionality
- Email verification
- Two-factor authentication (optional)

---

## Files Reference

- **SQL Setup:** `supabase-setup.sql`
- **Supabase Client:** `lib/supabase.ts`
- **Login Component:** `components/Login.tsx`
- **Signup Component:** `components/Signup.tsx`
- **App Router:** `App.tsx` (handles navigation)

---

## Support

- Supabase Docs: https://supabase.com/docs
- Authentication Docs: https://supabase.com/docs/guides/auth
- Row-Level Security: https://supabase.com/docs/guides/auth/row-level-security

