import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Mail, Phone, User, Send } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

export default function ContactUs() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How does FastTV work?",
            answer: "FastTV lets you watch short, high-impact drama episodes designed for quick viewing. Download the app, choose a series, and start watching instantly."
        },
        {
            question: "How can I download the FastTV app?",
            answer: "You can download the FastTV app from the Apple App Store for iOS devices and the Google Play Store for Android devices."
        },
        {
            question: "What makes FastTV different?",
            answer: "FastTV specializes in vertical, short-form storytelling that perfectly fits your mobile lifestyle, offering premium production value in bite-sized episodes."
        },
        {
            question: "What plans are available on FastTV?",
            answer: "We offer flexible subscription plans including weekly, monthly, and annual options. Check the app for the latest pricing and offers."
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen">
            {/* Contact Form Section */}
            <section className="container mx-auto px-6 relative mb-32">
                {/* Center Title */}
                <ScrollAnimation>
                    <h2 className="text-4xl md:text-[56px] font-bold text-center mb-16">We’re Here to Help</h2>
                </ScrollAnimation>

                <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-24">
                    {/* Left: Contact Info */}
                    <div className="lg:w-[400px] flex flex-col gap-10 pt-8">
                        <ScrollAnimation delay={0.1}>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="text-[#009cdb]" size={24} />
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm mb-1 uppercase tracking-wider font-bold">Email</p>
                                    <a href="mailto:support@fasttv.app" className="block text-2xl font-medium hover:text-[#009cdb] transition-colors mb-2">support@fasttv.app</a>
                                    <p className="text-white/50 text-sm mb-1 uppercase tracking-wider font-bold mt-4">Partnerships</p>
                                    <a href="mailto:partnerships@fasttv.app" className="block text-2xl font-medium hover:text-[#009cdb] transition-colors">partnerships@fasttv.app</a>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={0.2}>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="text-[#009cdb]" size={24} />
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm mb-1 uppercase tracking-wider font-bold">Phone Number</p>
                                    <p className="text-2xl font-medium">+44 07466 331893</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-[500px]">
                        <ScrollAnimation delay={0.3}>
                            <form className="space-y-6">
                                <div className="bg-[#1d1d1e] border border-white/10 rounded-xl px-5 py-4 focus-within:border-[#009cdb] transition-colors">
                                    <label className="block text-xs uppercase tracking-wider text-white/40 font-bold mb-1">Name</label>
                                    <input type="text" className="w-full bg-transparent border-none outline-none text-white text-lg placeholder-white/20" placeholder="Your Name" />
                                </div>
                                <div className="bg-[#1d1d1e] border border-white/10 rounded-xl px-5 py-4 focus-within:border-[#009cdb] transition-colors">
                                    <label className="block text-xs uppercase tracking-wider text-white/40 font-bold mb-1">Email</label>
                                    <input type="email" className="w-full bg-transparent border-none outline-none text-white text-lg placeholder-white/20" placeholder="your@email.com" />
                                </div>
                                <div className="bg-[#1d1d1e] border border-white/10 rounded-xl px-5 py-4 focus-within:border-[#009cdb] transition-colors flex gap-4">
                                    <div className="shrink-0 border-r border-white/10 pr-4 flex items-center gap-2">
                                        <span className="text-white font-medium">+91</span>
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-xs uppercase tracking-wider text-white/40 font-bold mb-1">Phone</label>
                                        <input type="tel" className="w-full bg-transparent border-none outline-none text-white text-lg placeholder-white/20" placeholder="98765 43210" />
                                    </div>
                                </div>
                                <div className="bg-[#1d1d1e] border border-white/10 rounded-xl px-5 py-4 focus-within:border-[#009cdb] transition-colors">
                                    <label className="block text-xs uppercase tracking-wider text-white/40 font-bold mb-1">Message</label>
                                    <textarea rows={4} className="w-full bg-transparent border-none outline-none text-white text-lg placeholder-white/20 resize-none" placeholder="How can we help?" />
                                </div>

                                <button type="submit" className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-[#009cdb] hover:text-white transition-all transform active:scale-95 flex items-center justify-center gap-2">
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 opacity-20">
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full" />
                    </div>

                    {/* Left: Header */}
                    <div className="lg:w-1/3">
                        <ScrollAnimation>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Got questions?<br />We have the answers
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed">
                                FastTV is all about quick, addictive short-drama series. Here are answers to the most common questions to help you get started.
                            </p>
                        </ScrollAnimation>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <div
                                    className="border-b border-white/10 pb-6 cursor-pointer group"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="flex justify-between items-center py-2">
                                        <h3 className="text-xl font-medium text-white group-hover:text-[#009cdb] transition-colors">
                                            {faq.question}
                                        </h3>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                            {openFaq === index ? (
                                                <Minus size={18} className="text-[#009cdb]" />
                                            ) : (
                                                <Plus size={18} className="text-white" />
                                            )}
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/60 pt-2 pb-2 leading-relaxed text-lg">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
