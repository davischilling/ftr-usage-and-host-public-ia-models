import express from 'express';
import cors from 'cors';
import { translate } from './models/api.js';
import { Translator } from './models/Translator.js';

const app = express();
const PORT = process.env.PORT || 3000;

Translator.getTranslator(); // Preload the translation model

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Add your frontend URLs
    credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});

// Proxy endpoint for images to avoid CORS issues
app.get('/proxy-image', async (req, res) => {
    const { url } = req.query;
    
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Set appropriate headers
        res.set({
            'Content-Type': response.headers.get('content-type') || 'image/jpeg',
            'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
        });
        
        // Pipe the image data
        const buffer = await response.arrayBuffer();
        res.send(Buffer.from(buffer));
        
    } catch (error) {
        console.error('Error proxying image:', error);
        res.status(500).json({ error: 'Failed to fetch image' });
    }
});

app.post('/translate', async (req, res) => {
    console.log("Translation request received!");
    
    try {
        const { text } = req.body;
        console.log('Translating:', text);

        const translation = await translate(text);
        console.log('Translation result:', translation);
        
        res.json({ 
            message: 'Translation created', 
            translations: translation 
        });
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'Translation failed' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});