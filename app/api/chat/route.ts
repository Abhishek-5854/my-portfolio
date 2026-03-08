import { NextRequest, NextResponse } from 'next/server';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

interface RequestBody {
    message: string;
    conversationHistory: Message[];
}

// Mock agentic system response
async function generateAgentResponse(userMessage: string): Promise<string> {
    // In a real implementation, this would call your backend agentic architecture
    // For now, we'll provide intelligent mock responses

    const lowerMessage = userMessage.toLowerCase();

    // Portfolio-specific responses
    if (
        lowerMessage.includes('project') ||
        lowerMessage.includes('portfolio')
    ) {
        return "My portfolio showcases a mix of GenAI web applications and embedded‑system contributions. You can explore the code on GitHub (username Abhishek‑5854) or check the Projects section for details. I focus on what I built and what I learned along the way.";
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('experience')) {
        return "I hold a B.Tech. in IoT and my skills include React/Next.js, Node.js, Python, LangChain, and embedded C for sensor systems. I've learned by contributing to an embedded-systems internship and working on a Hyperloop dashboard; now I focus on GenAI web projects and continuous improvement.";
    }

    if (lowerMessage.includes('github') || lowerMessage.includes('repository')) {
        return "My GitHub (Abhishek-5854) contains GenAI web apps and embedded system demos; it reflects what I built and learned rather than a long list of years. Check the README files for insights into my workflow.";
    }

    if (
        lowerMessage.includes('leetcode') ||
        lowerMessage.includes('dsa') ||
        lowerMessage.includes('algorithm')
    ) {
        return "I've solved about 150 problems on LeetCode, with strengths in binary search, dynamic programming, and graph theory. Problem-solving has been an integral part of my development journey.";
    }

    if (lowerMessage.includes('genai') || lowerMessage.includes('agent')) {
        return "I'm passionate about GenAI and agentic systems! I've built multi-agent systems with LangChain, integrated OpenAI APIs, and created autonomous agents that can perceive, reason, and act. This is one of the most exciting areas of development right now!";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
        return "I'd love to connect! You can reach out to me via email or LinkedIn. I'm always interested in interesting projects and conversations about technology, AI, and software engineering.";
    }

    // Default intelligent response
    const responses = [
        "That's an interesting question! Based on my experience with various technologies and projects, I can help you understand more about my work and expertise. What specific area would you like to know more about?",
        "Good question! I'm knowledgeable about full-stack development, AI systems, and problem-solving. Feel free to ask about my projects, skills, or experience!",
        "I appreciate the question! Feel free to ask me about my experience with different technologies, projects I've built, or my competitive programming background.",
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}

export async function POST(req: NextRequest) {
    try {
        const body: RequestBody = await req.json();
        const { message } = body;

        if (!message || !message.trim()) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Generate response from agent
        const reply = await generateAgentResponse(message);

        return NextResponse.json({ reply });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Failed to process chat message' },
            { status: 500 }
        );
    }
}
