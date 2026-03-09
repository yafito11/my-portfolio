import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Groq from 'groq-sdk';
import * as fs from 'fs/promises';
import * as path from 'path';

// Load keys
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GROQ_API_KEY = process.env.GROQ_API_KEY || '';

// Initialize SDKs
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const groq = new Groq({ apiKey: GROQ_API_KEY });

// System Instruction Generator
async function getSystemInstruction() {
  try {
    const knowledgePath = path.join(process.cwd(), 'RAG', 'knowledge.txt');
    const knowledgeContent = await fs.readFile(knowledgePath, 'utf-8');
    return `Kamu adalah Revis, AI Assistant pribadi untuk portfolio Yafie Yulianto (seorang GenAI Engineer & AI Enthusiast).
Tugas utamamu adalah menjawab pertanyaan pengunjung website dengan ramah, profesional, antusias, dan informatif.
Gunakan informasi dalam KNOWLEDGE BASE di bawah ini untuk menjawab pertanyaan. Jika ada yang bertanya di luar konteks Yafie Yulianto atau tidak ada di knowledge base, jawablah secara sopan bahwa kamu hanya dikhususkan untuk membantu informasi seputar Yafie Yulianto. Jangan mengarang informasi. Berikan respon yang ringkas namun bermanfaat.

KNOWLEDGE BASE:
${knowledgeContent}
`;
  } catch (error) {
    console.error("Error reading knowledge.txt", error);
    return "Kamu adalah Revis, AI Assistant pribadi untuk Yafie Yulianto.";
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const systemInstruction = await getSystemInstruction();
    const latestUserMessage = messages[messages.length - 1].content;

    // Build chat history for Gemini (excluding the system prompt / standardizing format)
    // Gemini uses 'user' and 'model' roles
    const geminiHistory = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    try {
      console.log("Attempting to use Gemini API (gemini-3-preview fallback to gemini-2.5-flash)...");
      // Trying with a preview model name as requested. If it fails due to model not found, it will catch and fallback.
      // Usually, Google GenAI SDK allows standard models. We will try 2.5 flash first since preview names often change quickly without notice.
      // Wait, user explicitly requested "gemini-3-preview". Let's try that first.
      const model = genAI.getGenerativeModel({ 
        model: "gemini-3-preview", // The user specifically requested this
        systemInstruction: systemInstruction 
      });

      const chat = model.startChat({
        history: geminiHistory,
      });

      const result = await chat.sendMessage(latestUserMessage);
      const responseText = result.response.text();

      return NextResponse.json({ reply: responseText, source: 'gemini' });
    } catch (geminiError) {
      console.error("Gemini API Error, falling back to Groq:", geminiError);
      
      // FALLBACK TO GROQ
      // Output log to terminal to confirm fallback is happening
      console.log("Using Groq API fallback (llama-3.3-70b-versatile)...");
      
      const groqMessages = [
        { role: 'system', content: systemInstruction },
        ...messages
      ];

      const chatCompletion = await groq.chat.completions.create({
        messages: groqMessages,
        model: "llama-3.3-70b-versatile",
      });

      const reply = chatCompletion.choices[0]?.message?.content || "Maaf, saya sedang mengalami gangguan teknis.";
      return NextResponse.json({ reply, source: 'groq' });
    }

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
