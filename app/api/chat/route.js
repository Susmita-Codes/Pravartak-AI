import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- CAREER COUNSELING CHAT API ---
// This API endpoint provides career counseling assistance using Google's Gemini AI
// Required environment variable: GEMINI_API_KEY
// 
// Guardrails implemented:
// 1. CV/Resume analysis rejection
// 2. Fictional career rejection  
// 3. Off-topic conversation redirection
// 4. Professional and concise responses only

// --- GUARDRAILS AND SYSTEM PROMPT ---
// Local blocklists for immediate refusal without wasting an API call.
const CV_RESUME_BLOCKLIST = [
  'cv', 'resume', 'curriculum vitae', 'analyze my profile', 'review my resume'
];

const FICTIONAL_CAREERS_BLOCKLIST = [
  'jedi', 'wizard', 'dragon rider', 'superhero', 'hobbit', 'elf', 
  'vampire hunter', 'time lord', 'starfleet'
];

// This is the crucial system prompt that instructs the AI on how to behave.
const SYSTEM_PROMPT = `
You are a specialized Career Counseling Assistant. Your sole purpose is to provide helpful, accurate, and realistic information about real-world careers.

Follow these rules strictly:
1.  **Scope:** Only answer questions directly related to careers, jobs, skills, education, professional development, and salaries.
2.  **Refuse Resume/CV Analysis:** You MUST refuse to analyze, review, or give feedback on any text that appears to be a resume, CV, or personal profile. If asked, politely decline and state that you cannot handle personal documents.
3.  **Refuse Fictional Careers:** You MUST refuse to answer any questions about fictional careers (e.g., "how to become a Jedi Knight", "salary of a dragon rider"). Politely state that you only provide information on real-world professions.
4.  **Stay on Topic:** If the user asks a question unrelated to careers (e.g., about movies, recipes, history, general chit-chat), you MUST politely decline and steer the conversation back to career topics.
5.  **Be Concise and Professional:** Provide clear and helpful answers. Do not invent information.
`;

// Initialize Gemini AI
let genAI;
let textModel;
let visionModel;

try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set");
  }
  
  genAI = new GoogleGenerativeAI(apiKey);
  textModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
  visionModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
  console.log("Gemini API configured successfully.");
} catch (error) {
  console.error("Error configuring Gemini API:", error);
}

export async function POST(request) {
  try {
    // Check if API is configured
    if (!textModel || !visionModel) {
      return NextResponse.json(
        { 
          error: "Gemini API is not configured. Please check your API key.", 
          success: false 
        },
        { status: 500 }
      );
    }

    const { message, hasImage = false } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { 
          error: "Message is required and must be a string.", 
          success: false 
        },
        { status: 400 }
      );
    }

    const userMessageLower = message.toLowerCase();

    // --- Local Guardrail Checks (Fast Fail) ---
    if (CV_RESUME_BLOCKLIST.some(keyword => userMessageLower.includes(keyword))) {
      return NextResponse.json({
        response: "I'm sorry, but I cannot analyze personal documents like CVs or resumes.",
        success: true
      });
    }

    if (FICTIONAL_CAREERS_BLOCKLIST.some(keyword => userMessageLower.includes(keyword))) {
      return NextResponse.json({
        response: "I can only provide information on real-world careers. Please ask about a non-fictional profession.",
        success: true
      });
    }

    // --- API Call ---
    try {
      // Prepare the content for the API call
      const promptParts = [SYSTEM_PROMPT, `User's question: '${message}'`];
      
      let response;
      if (hasImage) {
        // Use the vision model if there's an image (for future implementation)
        response = await visionModel.generateContent(promptParts);
      } else {
        // Use the text model if there's no image
        response = await textModel.generateContent(promptParts);
      }

      const botResponse = response.response.text();

      return NextResponse.json({
        response: botResponse,
        success: true
      });

    } catch (apiError) {
      console.error("Error during API call:", apiError);
      return NextResponse.json({
        response: "Sorry, I encountered an error. Please try again later.",
        success: false,
        error: apiError.message
      }, { status: 500 });
    }

  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { 
        error: "Internal server error", 
        success: false 
      },
      { status: 500 }
    );
  }
}