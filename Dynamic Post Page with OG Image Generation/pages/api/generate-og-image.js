import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const form = new formidable.IncomingForm({ maxFileSize: 10 * 1024 * 1024 }); // 10MB limit

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ error: 'Error parsing the form data.' });
    }

    const { title, content } = fields;
    const imageFile = files.image && files.image[0];

    console.log('Parsed fields:', fields);
    console.log('Parsed files:', files);

    if (!title || !content || !imageFile) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    try {
      // Create the OG image
      const width = 1200;
      const height = 630;
      const canvas = createCanvas(width, height);
      const context = canvas.getContext('2d');

      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, width, height);

      context.font = 'bold 60pt Sans';
      context.textAlign = 'center';
      context.fillStyle = '#333333';
      context.fillText(title, width / 2, 150);

      context.font = '30pt Sans';
      context.fillText(content.substring(0, 80) + '...', width / 2, 250);

      const buffer = canvas.toBuffer('image/png');
      const filePath = path.join(process.cwd(), 'public', 'og-images', `${Date.now()}.png`);

      fs.writeFileSync(filePath, buffer);

      const imageUrl = `/og-images/${path.basename(filePath)}`;

      res.status(200).json({ imageUrl });
    } catch (error) {
      console.error('Error generating OG image:', error);
      res.status(500).json({ error: 'Error generating OG image.' });
    }
  });
}
