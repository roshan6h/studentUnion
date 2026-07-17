import React, { useState, useEffect } from "react";
import { MessageSquare, Shield, HelpCircle, Send, CheckCircle, Clock } from "lucide-react";

interface GrievanceFormProps {
    language: "en" | "np";
}

export interface Grievance {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    subject: string;
    category: string;
    message: string;
    status: "Pending" | "In Review" | "Resolved";
    createdAt: string;
    isAnonymous: boolean;
    response?: string;
}
export default function GrievanceForm({ language }: GrievanceFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("Academic");
    const [message, setMessage] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(false);

    const [grievances, setGrievances] = useState<Grievance[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const categories = [
        { value: "Academic", labelEn: "Academic & Policy", labelNp: "शैक्षिक तथा नीति" },
        { value: "Exams", labelEn: "Exams & Timetables", labelNp: "परीक्षा तथा समयतालिका" },
        { value: "Infrastructure", labelEn: "Campus Facilities", labelNp: "क्याम्पस भौतिक पूर्वाधार" },
        { value: "Sports", labelEn: "Sports & Activities", labelNp: "खेलकुद तथा अतिरिक्त क्रियाकलाप" },
        { value: "General", labelEn: "Other / General", labelNp: "अन्य / सामान्य" },
    ];

    const fetchGrievances = async () => {
        try {
            const res = await fetch("/api/grievances");
            if (res.ok) {
                const data = await res.json();
                // Sort descending by date
                setGrievances(data.reverse());
            }
        } catch (e) {
            console.error("Error fetching grievances:", e);
        }
    };

    useEffect(() => {
        fetchGrievances();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!subject.trim() || !message.trim()) {
            setErrorMsg(language === "en" ? "Subject and message are required." : "विषय र सन्देश आवश्यक छ।");
            return;
        }

        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const response = await fetch("/api/grievances", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: isAnonymous ? "" : name,
                    email: isAnonymous ? "" : email,
                    phone: isAnonymous ? "" : phone,
                    subject,
                    category,
                    message,
                    isAnonymous,
                }),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setName("");
                setEmail("");
                setPhone("");
                setSubject("");
                setMessage("");
                setIsAnonymous(false);
                fetchGrievances();
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                const errorData = await response.json();
                setErrorMsg(errorData.error || "Failed to submit. Please try again.");
            }
        } catch (e) {
            setErrorMsg("Connection failed. Please verify the dev server is active.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="grievances" className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="bg-blue-900/10 text-blue-950 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                        <MessageSquare className="w-3.5 h-3.5" />
                        {language === "en" ? "Voice Box" : "विद्यार्थी आवाज तथा गुनासो पेटी"}
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 font-devanagari tracking-tight sm:text-4xl">
                        {language === "en" ? "Grievance & Suggestion Desk" : "गुनासो तथा सुझाव संकलन केन्द्र"}
                    </h2>
                    <p className="mt-3 text-slate-500 max-w-2xl mx-auto text-sm">
                        {language === "en"
                            ? "Submit official requests, infrastructural complaints, or academic recommendations directly to the FSU. Choose anonymous mode if you want absolute privacy."
                            : "क्याम्पसभित्रका समस्या वा रचनात्मक सुझावहरू स्ववियु समक्ष सिधै पेस गर्नुहोस्। आफ्नो गोपनियता चाहेमा बेनामी (Anonymous) मोड छान्न सक्नुहुन्छ।"}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Submission Form */}
                    <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-md">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">
                            {language === "en" ? "Draft Your Petition" : "ज्ञापन पत्र / गुनासो ड्राफ्ट"}
                        </h3>

                        {submitSuccess && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                <p className="text-xs">
                                    {language === "en"
                                        ? "Thank you! Your grievance has been recorded and submitted to the FSU committee."
                                        : "धन्यवाद! तपाईको गुनासो स्ववियु समितिमा दर्ता भएको छ। हामी यस विषयमा काम गर्नेछौं।"}
                                </p>
                            </div>
                        )}

                        {errorMsg && (
                            <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs">
                                {errorMsg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Anonymous Toggle */}
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2.5">
                                    <Shield className="w-5 h-5 text-blue-900 shrink-0" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-900">
                                            {language === "en" ? "Submit Anonymously" : "बेनामी पेस गर्नुहोस्"}
                                        </p>
                                        <p className="text-[10px] text-slate-500">
                                            {language === "en"
                                                ? "Hides your name, email, and phone from the committee"
                                                : "तपाईको नाम, इमेल र सम्पर्क विवरण गोप्य राखिन्छ।"}
                                        </p>
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={isAnonymous}
                                    onChange={(e) => setIsAnonymous(e.target.checked)}
                                    className="w-4 h-4 text-blue-900 focus:ring-blue-900 border-slate-300 rounded"
                                />
                            </div>

                            {/* Personal Details */}
                            {!isAnonymous && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-700 mb-1">
                                            {language === "en" ? "Student Name" : "विद्यार्थीको नाम"}
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full border border-slate-200 rounded-lg p-2.5 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-900"
                                            placeholder={language === "en" ? "Ram Bahadur" : "राम बहादुर"}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-700 mb-1">
                                            {language === "en" ? "Email Address" : "इमेल ठेगाना"}
                                        </label>
                                        <input
                                            type="email"
                                            className="block w-full border border-slate-200 rounded-lg p-2.5 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-900"
                                            placeholder="ram@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-medium text-slate-700 mb-1">
                                            {language === "en" ? "Phone / Mobile Number" : "सम्पर्क फोन नम्बर"}
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full border border-slate-200 rounded-lg p-2.5 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-900"
                                            placeholder="98XXXXXXXX"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Subject & Category */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-medium text-slate-700 mb-1">
                                        {language === "en" ? "Grievance Subject" : "गुनासोको मुख्य विषय"} *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="block w-full border border-slate-200 rounded-lg p-2.5 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-900"
                                        placeholder={language === "en" ? "E.g., Digital library access issue" : "जस्तै: पुस्तकालयमा नयाँ पुस्तक थप गर्ने सम्बन्धमा"}
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-700 mb-1">
                                        {language === "en" ? "Category" : "विधा छान्नुहोस्"}
                                    </label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="block w-full border border-slate-200 rounded-lg p-2.5 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-900"
                                    >
                                        {categories.map((c) => (
                                            <option key={c.value} value={c.value}>
                                                {language === "en" ? c.labelEn : c.labelNp}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-1">
                                    {language === "en" ? "Detailed Description" : "समस्या / सुझावको विस्तृत विवरण"} *
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                    className="block w-full border border-slate-200 rounded-lg p-2.5 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-900"
                                    placeholder={
                                        language === "en"
                                            ? "Write details here... Be clear about dates, classroom sections, or specific academic terms."
                                            : "कृपया आफ्नो विषय यहाँ विस्तृत रूपमा लेख्नुहोस्..."
                                    }
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium text-xs py-3 rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    language === "en" ? "Submitting..." : "पेस हुँदैछ..."
                                ) : (
                                    <>
                                        {language === "en" ? "Submit official petition" : "आधिकारिक गुनासो दर्ता गर्नुहोस्"}
                                        <Send className="w-3.5 h-3.5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Resolutions & Updates Log */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-slate-950 text-white p-6 rounded-2xl border border-blue-900/20 shadow-md">
                            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-400" />
                                {language === "en" ? "Live Action Tracker" : "गुनासो सुनुवाई रेकर्ड"}
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                {language === "en"
                                    ? "Transparency is our foundation. Below are real-time grievance filings showing FSU's processing and status updates."
                                    : "पारदर्शिता नै हाम्रो आधार हो। स्ववियु टिमले प्राप्त गरेका गुनासाहरू र तिनको सम्बोधन स्थिति यहाँ हेर्न सक्नुहुन्छ।"}
                            </p>

                            {/* Grievances List */}
                            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
                                {grievances.length > 0 ? (
                                    grievances.map((g) => (
                                        <div key={g.id} className="bg-white/5 border border-white/5 p-3.5 rounded-xl text-xs space-y-2">
                                            <div className="flex justify-between items-start gap-2">
                                                <span className="font-bold text-white truncate max-w-[160px]">{g.subject}</span>
                                                <span
                                                    className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase ${g.status === "Pending"
                                                        ? "bg-amber-500/10 text-amber-400"
                                                        : g.status === "In Review"
                                                            ? "bg-blue-500/10 text-blue-400"
                                                            : "bg-green-500/10 text-green-400"
                                                        }`}
                                                >
                                                    {g.status}
                                                </span>
                                            </div>
                                            <p className="text-slate-400 text-[11px] line-clamp-2 leading-relaxed italic">
                                                "{g.message}"
                                            </p>
                                            <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1.5 border-t border-white/5 font-mono">
                                                <span>{g.isAnonymous ? "Anonymous Student" : g.name}</span>
                                                <span>{new Date(g.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-slate-500 text-xs italic">
                                        {language === "en" ? "No entries submitted yet. Be the first!" : "अहिलेसम्म कुनै गुनासो रेकर्ड गरिएको छैन।"}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Information Card */}
                        <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl">
                            <h4 className="text-xs font-bold text-red-950 mb-1 flex items-center gap-1.5">
                                <HelpCircle className="w-4 h-4 text-red-600" />
                                {language === "en" ? "How does it work?" : "सुनुवाई प्रक्रिया कसरी हुन्छ?"}
                            </h4>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                                {language === "en"
                                    ? "Every submitted petition is logged in the secretary's file within 24 hours. Valid complaints are formally presented as a dispatch memo to the Campus Chief by our President, Anup Ale Magar."
                                    : "दर्ता भएका हरेक सुझाव वा गुनासोलाई स्ववियु सचिवले २४ घण्टाभित्र फाइलमा चढाउनुहुन्छ। महत्वपूर्ण विषयहरूलाई स्ववियु अध्यक्ष अनुप आले मगरले सिधै क्याम्पस प्रमुख समक्ष पुर्याउनुहुनेछ।"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
