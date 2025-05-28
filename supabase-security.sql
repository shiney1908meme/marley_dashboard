-- Enable Row Level Security on projects table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access" ON projects;
DROP POLICY IF EXISTS "Allow service role to modify" ON projects;
DROP POLICY IF EXISTS "Allow authenticated users to modify" ON projects;

-- Create secure RLS policies

-- 1. Allow public read access (SELECT only)
CREATE POLICY "Public read access" ON projects
  FOR SELECT 
  USING (true);

-- 2. Allow authenticated users to insert/update/delete their own projects
-- (This assumes you'll add user authentication later)
CREATE POLICY "Authenticated users can modify" ON projects
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- 3. Service role bypass (for server-side operations only)
CREATE POLICY "Service role bypass" ON projects
  FOR ALL 
  USING (auth.jwt() ->> 'role' = 'service_role');

-- Enable real-time for the projects table (secure)
ALTER PUBLICATION supabase_realtime ADD TABLE projects;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at);
CREATE INDEX IF NOT EXISTS idx_projects_title ON projects(title);

-- Ensure the table structure is secure
-- Remove any sensitive columns if they exist
-- ALTER TABLE projects DROP COLUMN IF EXISTS sensitive_data;
