import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY
});

app.post('/api/generate-plan', async (req, res) => {
  try {
    const { email, businessModel, businessDescription, targetAudience, geographic, budget, timeline } = req.body;

    // First, send email to webhook
    await axios.post(process.env.VITE_WEBHOOK_URL, { email });

    // Generate prompt for OpenAI
    const prompt = `Create a detailed business plan for an online business with the following specifications:
    - Business Model: ${businessModel}
    - Business Description: ${businessDescription}
    - Target Audience: ${targetAudience}
    - Geographic Focus: ${geographic}
    - Initial Budget: ${budget}
    - Timeline to Launch: ${timeline}

    Please include the following sections:
    1. Executive Summary
    2. Business Description
    3. Market Analysis
    4. Organization and Management
    5. Service/Product Line
    6. Marketing and Sales Strategy
    7. Funding Requirements
    8. Financial Projections
    9. Implementation Timeline
    10. Risk Analysis`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional business consultant specializing in creating detailed, actionable business plans."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 4000
    });

    res.json({ businessPlan: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate business plan' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});