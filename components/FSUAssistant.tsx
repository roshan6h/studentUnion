import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Bot, User, Trash2, Clock, Globe, ArrowRight } from "lucide-react";

export interface ChatMessage {
    id: string;
    role: "user" | "model";
    text: string;
    timestamp: Date;
}

interface FSUAssistantProps {
    language: "en" | "np";
}

const SUGGESTED_PROMPTS = [
    {
        en: "Who is the FSU President?",
        np: "स्ववियु अध्यक्ष को हुनुहुन्छ?",
    },
    {
        en: "What are FSU's core manifestos?",
        np: "स्ववियुका मुख्य प्रतिबद्धताहरू के हुन्?",
    },
    {
        en: "How do I submit an academic grievance?",
        np: "म कसरी शैक्षिक गुनासो पेस गर्न सक्छु?",
    },
    {
        en: "Tell me about solidarity with Inisha BK",
        np: "इनिसा विकको न्याय आन्दोलनबारे भन्नुहोस्",
    },
];

export default function FSUAssistant({ language }: FSUAssistantProps) {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const chatHistoryContainerRef = useRef<HTMLDivElement>(null);

    // Initialize with a welcome message
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: "welcome",
                    role: "model",
                    text:
                        language === "en"
                            ? "Namaste! 🙏 I am the official Free Students' Union (FSU) AI Helpdesk at Aadikavi Bhanubhakta Campus. How can I assist you today regarding student welfare, union members, notice schedules, or grievance submissions?"
                            : "नमस्ते! 🙏 म आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियन (स्ववियु) एआई सहायता केन्द्र हुँ। विद्यार्थी कल्याण, स्ववियु टिम, सूचनाहरू वा गुनासो दर्ताका बारेमा म तपाईंलाई कसरी मद्दत गर्न सक्छु?",
                    timestamp: new Date(),
                },
            ]);
        }
    }, [language]);

    // Scroll to bottom of chat history container without scrolling the main browser window
    useEffect(() => {
        if (chatHistoryContainerRef.current) {
            chatHistoryContainerRef.current.scrollTo({
                top: chatHistoryContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, isLoading]);

    const handleSendMessage = async (textToSend: string) => {
        if (!textToSend.trim() || isLoading) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: "user",
            text: textToSend,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);
        setErrorMsg("");

        try {
            // Gather history (excluding welcome and current message)
            const formattedHistory = messages
                .filter((m) => m.id !== "welcome")
                .map((m) => ({
                    role: m.role,
                    text: m.text,
                }));

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: textToSend,
                    history: formattedHistory,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const modelMsg: ChatMessage = {
                    id: (Date.now() + 1).toString(),
                    role: "model",
                    text: data.text,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, modelMsg]);
            } else {
                const errData = await response.json();
                setErrorMsg(errData.error || "Failed to communicate with AI.");
            }
        } catch (e) {
            setErrorMsg("Failed to connect to backend server. Ensure server is running.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearChat = () => {
        setMessages([
            {
                id: "welcome_reset",
                role: "model",
                text:
                    language === "en"
                        ? "Chat restarted. Let me know what you need!"
                        : "कुराकानी पुनः सुरु भयो। तपाईंलाई के आवश्यक छ भन्नुहोस्!",
                timestamp: new Date(),
            },
        ]);
    };

    return (
        <section id="assistant" className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Guide column */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <span className="bg-blue-900/10 text-blue-950 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                                <Sparkles className="w-3.5 h-3.5" />
                                {language === "en" ? "Interactive AI Support" : "एआई सहायता केन्द्र"}
                            </span>
                            <h2 className="text-3xl font-extrabold text-slate-900 font-devanagari tracking-tight sm:text-4xl">
                                {language === "en" ? "FSU AI Helpdesk" : "स्ववियु एआई असिस्टेन्ट"}
                            </h2>
                            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                                {language === "en"
                                    ? "Powered by server-side Gemini 3.5 Flash, this intelligent assistant is customized with all official executive contacts, student manifestos, and local campus campaigns. Feel free to ask in English, Nepali, or Romanized script!"
                                    : "क्याम्पस, स्ववियुका माग, आन्दोलन र पदाधिकारीहरूका आधिकारिक फोन नम्बरहरूसँग एकीकृत एआई। अंग्रेजी वा नेपाली दुवै भाषामा सोध्न सक्नुहुन्छ।"}
                            </p>

                            {/* Status card */}
                            <div className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-3">
                                <Bot className="w-8 h-8 text-blue-900 shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold text-slate-900">
                                        {language === "en" ? "Model: Gemini 3.5 Flash" : "मोडेल: जेमिनी ३.५ फ्ल्यास"}
                                    </p>
                                    <p className="text-[10px] text-slate-500 flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block animate-ping"></span>
                                        {language === "en" ? "Online & Grounded server-side" : "अनलाइन र सर्भर सुरक्षित"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Suggested prompts list */}
                        <div className="mt-8">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                {language === "en" ? "Suggested Questions" : "प्रायः सोधिने प्रश्नहरू"}
                            </h3>
                            <div className="space-y-2.5">
                                {SUGGESTED_PROMPTS.map((p, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSendMessage(language === "en" ? p.en : p.np)}
                                        className="w-full text-left bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 p-3 rounded-xl text-xs text-slate-700 transition-all flex items-center justify-between group cursor-pointer"
                                    >
                                        <span>{language === "en" ? p.en : p.np}</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-900 group-hover:translate-x-0.5 transition-all shrink-0" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Chat window */}
                    <div className="lg:col-span-8 bg-white border border-slate-200/60 rounded-2xl shadow-xl flex flex-col h-[520px] overflow-hidden">
                        {/* Chat header */}
                        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold">FSU Smart Assistant</h3>
                                    <p className="text-[10px] text-blue-300">Aadikavi Bhanubhakta Campus, Tanahun</p>
                                </div>
                            </div>

                            <button
                                onClick={handleClearChat}
                                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-all cursor-pointer"
                                title="Restart Chat"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Chat history list */}
                        <div ref={chatHistoryContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/60">
                            {messages.map((m) => (
                                <div key={m.id} className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
                                    <div
                                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-red-600 text-white" : "bg-blue-900 text-white"
                                            }`}
                                    >
                                        {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>

                                    <div
                                        className={`p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${m.role === "user"
                                                ? "bg-red-600 text-white rounded-tr-none"
                                                : "bg-white text-slate-800 border border-slate-100 rounded-tl-none font-sans"
                                            }`}
                                    >
                                        <p className="whitespace-pre-line">{m.text}</p>
                                        <div className={`text-[9px] mt-1.5 font-mono text-right ${m.role === "user" ? "text-white/60" : "text-slate-400"}`}>
                                            {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-3 max-w-[80%]">
                                    <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0">
                                        <Bot className="w-4 h-4 animate-pulse" />
                                    </div>
                                    <div className="bg-white border border-slate-100 p-3.5 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                        <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}

                            {errorMsg && (
                                <div className="p-3 bg-red-50 text-red-700 text-center rounded-xl text-xs border border-red-100">
                                    {errorMsg}
                                </div>
                            )}
                        </div>

                        {/* Input form */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSendMessage(input);
                            }}
                            className="p-4 bg-white border-t border-slate-100 flex gap-3"
                        >
                            <input
                                type="text"
                                disabled={isLoading}
                                className="flex-1 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-900 rounded-xl px-4 text-xs text-slate-800 placeholder:text-slate-400 disabled:opacity-50"
                                placeholder={
                                    language === "en"
                                        ? "Ask FSU Assistant anything..."
                                        : "स्ववियु सहयोगीलाई जे पनि सोध्नुहोस्..."
                                }
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-blue-900 hover:bg-blue-800 text-white p-3 rounded-xl transition-all cursor-pointer disabled:opacity-50"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
