-- Drop existing table if you want to recreate with new schema
-- DROP TABLE IF EXISTS projects;

-- Create the enhanced projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(500),
  project_url VARCHAR(500) NOT NULL,
  is_external BOOLEAN DEFAULT false,
  category VARCHAR(100) NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'maintenance', 'coming_soon')),
  featured BOOLEAN DEFAULT false,
  tags TEXT[] DEFAULT '{}',
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_tags ON projects USING GIN(tags);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_projects_updated_at 
    BEFORE UPDATE ON projects 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert enhanced project data
INSERT INTO projects (title, description, image_url, project_url, is_external, category, order_index, status, featured, tags) VALUES
(
  'ARIA Landing Page',
  'Love The Music... Trade The Artist! This is our landing page where we introduce you to ARIA is the first decentralized marketplace where you can invest in musical artists using AMTRAC (AMTRC) cryptocurrency.',
  '/placeholder.svg?height=200&width=400&query=ARIA Landing Page music investment platform with purple and blue theme',
  'https://www.ariatrader.com/',
  true,
  'aria',
  1,
  'active',
  true,
  ARRAY['music', 'investment', 'cryptocurrency', 'blockchain']
),
(
  'ARIA Market',
  'Revolutionise Music Investment. ARIA Market enables you to discover, invest, and grow with emerging musical talent. Use blockchain technology to build a portfolio of promising artists and earn as they rise! Truly Ground-breaking!',
  '/placeholder.svg?height=200&width=400&query=ARIA Market cryptocurrency trading platform with charts and artist profiles',
  'https://app.ariatrader.com/',
  true,
  'aria',
  2,
  'active',
  true,
  ARRAY['trading', 'music', 'investment', 'portfolio', 'blockchain']
),
(
  'ARIA Dashboards',
  'Empowering Artists Through Market-Driven Music. ARIA Dashboards give Musicians and Record Labels access to a ground-breaking new model of exposure, valuation, and revenue.',
  '/placeholder.svg?height=200&width=400&query=ARIA Dashboards analytics interface for musicians and record labels',
  'https://dashboards.ariatrader.com/',
  true,
  'aria',
  3,
  'active',
  true,
  ARRAY['analytics', 'music', 'dashboard', 'artists', 'revenue']
),
(
  'AMTRAC Digital Token',
  'The Sound of the Future. Traded Today. AMTRAC is the native token of the ARIA platform — a groundbreaking marketplace where fans can invest in music artists like stocks.',
  '/placeholder.svg?height=200&width=400&query=AMTRAC cryptocurrency token interface with blockchain elements',
  'https://v0-aria-music-website.vercel.app/',
  true,
  'amtrac',
  4,
  'active',
  false,
  ARRAY['token', 'cryptocurrency', 'music', 'investment']
),
(
  'MARLEY QR App',
  'Generate custom QR codes with your brand colors and logo for enhanced engagement.',
  '/placeholder.svg?height=200&width=400&query=QR code generator app with orange theme and custom branding',
  '#',
  false,
  'marley',
  5,
  'coming_soon',
  false,
  ARRAY['qr-code', 'branding', 'marketing', 'tools']
),
(
  'MARLEY Image Optimiser',
  'Optimize your images for web with advanced compression algorithms and format conversion.',
  '/placeholder.svg?height=200&width=400&query=Image optimization tool with compression and format conversion',
  '#',
  false,
  'marley',
  6,
  'coming_soon',
  false,
  ARRAY['image', 'optimization', 'compression', 'web']
),
(
  'MARLEY Trailer Generator',
  'Create stunning video trailers for your projects with AI-powered editing tools.',
  '/placeholder.svg?height=200&width=400&query=video trailer generator app with purple theme and AI elements',
  '#',
  false,
  'marley',
  7,
  'coming_soon',
  false,
  ARRAY['video', 'trailer', 'ai', 'editing']
),
(
  'MARLEY Jingle Maker',
  'Create catchy jingles and audio branding with AI-powered music composition tools.',
  '/placeholder.svg?height=200&width=400&query=music jingle maker app with sound waves and orange theme',
  '#',
  false,
  'marley',
  8,
  'coming_soon',
  false,
  ARRAY['music', 'jingle', 'ai', 'composition', 'branding']
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);

-- Create policies for authenticated users to modify
CREATE POLICY "Allow authenticated users to insert" ON projects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update" ON projects
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete" ON projects
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create a view for public project data (optional)
CREATE OR REPLACE VIEW public_projects AS
SELECT 
  id,
  title,
  description,
  image_url,
  project_url,
  is_external,
  category,
  order_index,
  status,
  featured,
  tags,
  view_count,
  created_at
FROM projects
WHERE status = 'active'
ORDER BY order_index;
