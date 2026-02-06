'use client';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white font-sans relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#2D2E3E] mb-6 tracking-tight">
                        Let's Build Something <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Amazing</span>
                    </h2>
                    <p className="text-[#6B7280] text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? We'd love to help you bring it to life. Get in touch with our team today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                    {/* Left Side: Contact Info */}
                    <div className="flex flex-col justify-between py-4">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-bold text-[#2D2E3E] mb-6">Ready to Start?</h3>
                                <p className="text-[#6B7280] text-lg leading-relaxed max-w-md">
                                    We're excited to hear about your project. Drop us a message and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-10">
                                {/* Contact Item: Email */}
                                <div className="flex items-center gap-7 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        <span className="filter drop-shadow-md">📧</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-1.5 font-sans">Email</p>
                                        <p className="text-xl font-bold text-[#2D2E3E] group-hover:text-indigo-600 transition-colors">hello@techsparks.com</p>
                                    </div>
                                </div>

                                {/* Contact Item: Phone */}
                                <div className="flex items-center gap-7 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        <span className="filter drop-shadow-md">📱</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-1.5 font-sans">Phone</p>
                                        <p className="text-xl font-bold text-[#2D2E3E] group-hover:text-indigo-600 transition-colors">+92 300 1234567</p>
                                    </div>
                                </div>

                                {/* Contact Item: Location */}
                                <div className="flex items-center gap-7 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        <span className="filter drop-shadow-md">📍</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-1.5 font-sans">Location</p>
                                        <p className="text-xl font-bold text-[#2D2E3E] group-hover:text-indigo-600 transition-colors">Karachi, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional info or social links could go here */}
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="relative">
                        {/* Glow effect for form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-[2.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-gray-50/50 backdrop-blur-sm">
                            <form className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[15px] font-bold text-[#2D2E3E] ml-1 tracking-tight">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-8 py-5 bg-[#F8FAFC] border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#9195F6] focus:bg-white focus:border-transparent transition-all outline-none text-[#2D2E3E] placeholder:text-gray-400 font-medium"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[15px] font-bold text-[#2D2E3E] ml-1 tracking-tight">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-8 py-5 bg-[#F8FAFC] border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#9195F6] focus:bg-white focus:border-transparent transition-all outline-none text-[#2D2E3E] placeholder:text-gray-400 font-medium"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[15px] font-bold text-[#2D2E3E] ml-1 tracking-tight">Project Type</label>
                                    <input
                                        type="text"
                                        placeholder="Website, Web App, etc."
                                        className="w-full px-8 py-5 bg-[#F8FAFC] border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#9195F6] focus:bg-white focus:border-transparent transition-all outline-none text-[#2D2E3E] placeholder:text-gray-400 font-medium"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[15px] font-bold text-[#2D2E3E] ml-1 tracking-tight">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                        className="w-full px-8 py-5 bg-[#F8FAFC] border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#9195F6] focus:bg-white focus:border-transparent transition-all outline-none resize-none text-[#2D2E3E] placeholder:text-gray-400 font-medium"
                                    ></textarea>
                                </div>

                                <button className="w-full py-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-2xl text-lg font-bold shadow-[0_15px_40px_rgba(118,75,162,0.25)] hover:shadow-[0_20px_50px_rgba(118,75,162,0.35)] hover:scale-[1.01] active:scale-[0.98] transform transition-all duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
