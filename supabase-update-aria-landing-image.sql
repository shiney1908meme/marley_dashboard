-- Update the ARIA LANDING PAGE project with the correct image path
UPDATE projects 
SET 
  image_url = '/images/aria-landing-page.png',
  description = 'A landing page for ARIA projects with a sleek, modern design.'
WHERE title = 'ARIA LANDING PAGE';

-- Verify the update
SELECT id, title, image_url, description 
FROM projects 
WHERE title = 'ARIA LANDING PAGE';
