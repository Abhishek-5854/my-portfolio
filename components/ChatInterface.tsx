'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export default function ChatInterface({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hi! 👋 I\'m an AI assistant representing Abhishek. Ask me about his projects, learning journey, internship, or anything on his portfolio.',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Send to backend API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: input,
                    conversationHistory: messages,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();

            // Add assistant message
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.reply,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error:', error);
            // Fallback response
            const fallbackMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content:
                    'I apologize, but I\'m having trouble connecting to the backend. Please try again later.',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, fallbackMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end md:justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Chat Window */}
            <div className="relative z-10 w-full md:w-96 h-[600px] md:h-[700px] bg-slate-900 rounded-t-2xl md:rounded-2xl border border-blue-900/30 shadow-2xl shadow-blue-500/20 flex flex-col">
                {/* Header */}
                <div className="border-b border-blue-900/30 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">🤖</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">AI Assistant</h3>
                            <p className="text-xs text-green-400">Online</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
                    {/* Work in progress background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 color yellow-500">
                        <div className="text-center">
                            <div className="text-2xl mb-2">🚧</div>
                            <div className="text-slate-500 text-sm">Stay Tuned</div>
                            <div className="text-slate-500 text-xs">Work in Progress</div>
                        </div>
                    </div>
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                                } animate-slide-in-right`}
                        >
                            <div
                                className={`max-w-xs px-4 py-2 rounded-lg ${message.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-slate-800 text-slate-100 rounded-bl-none border border-blue-900/30'
                                    }`}
                            >
                                <p className="text-sm">{message.content}</p>
                                <p
                                    className={`text-xs mt-1 ${message.role === 'user'
                                        ? 'text-blue-100'
                                        : 'text-slate-400'
                                        }`}
                                >
                                    {message.timestamp.toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-slate-800 text-slate-100 px-4 py-2 rounded-lg border border-blue-900/30 rounded-bl-none">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t border-blue-900/30 p-4">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            disabled={isLoading}
                            className="flex-1 bg-slate-800 border border-blue-900/30 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? '...' : '→'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
