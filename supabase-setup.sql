-- Create the projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  project_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert the MARLEY Dashboard projects
INSERT INTO projects (title, description, image_url, project_url) VALUES
(
  'ARIA MARKET',
  'A marketplace for creative assets with a retro-futuristic flair.',
  '/images/aria-market.png',
  'https://aria-market.marleydashboard.co.uk/'
),
(
  'ARIA DASHBOARDS',
  'Dashboards for managing ARIA projects with real-time insights.',
  '/images/aria-dashboards.png',
  'https://aria-dashboards.marleydashboard.co.uk/'
),
(
  'ARIA LANDING PAGE',
  'A landing page for ARIA projects with a sleek, modern design.',
  '/images/aria-landing-page.png',
  'https://aria-landing.marleydashboard.co.uk/'
),
(
  'AMTRAC TOKEN',
  'A tokenized platform for AMTRAC assets and transactions.',
  '/images/amtrac-token.png',
  'https://amtrac-token.marleydashboard.co.uk/'
),
(
  'MARLEY QR GENERATOR',
  'Generate custom QR codes with MARLEY''s vibrant styling.',
  '/images/marley-qr-generator.png',
  'https://qr.marleydashboard.co.uk/'
),
(
  'MARLEY TRAILER GENERATOR',
  'Create stunning trailers with MARLEY''s retro-futuristic effects.',
  '/images/marley-trailer-generator.png',
  'https://trailer.marleydashboard.co.uk/'
),
(
  'MARLEY IMAGE OPTIMISER',
  'Optimize images while preserving MARLEY''s vibrant quality.',
  '/images/marley-image-optimiser.png',
  'https://image-optimiser.marleydashboard.co.uk/'
),
(
  'MARLEY JINGLE CREATOR',
  'Create catchy jingles with MARLEY''s unique sound design.',
  '/images/marley-jingle-creator.png',
  'https://jingle.marleydashboard.co.uk/'
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);

-- Create a policy to allow service role to insert/update/delete
CREATE POLICY "Allow service role to modify" ON projects
  FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Enable real-time for the projects table
ALTER PUBLICATION supabase_realtime ADD TABLE projects;
