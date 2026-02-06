'use client';

const testimonials = [
    {
        quote: "Tech Sparks transformed our vision into reality. The website they delivered exceeded our expectations in every way. Professional, responsive, and truly talented team.",
        name: "Rajesh Kumar",
        role: "CEO, RetailPro",
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        quote: "Outstanding work on our internal management system. The user interface is intuitive, and the backend is rock solid. Our productivity has increased significantly.",
        name: "Priya Sharma",
        role: "CTO, TechVentures",
        gradient: "from-purple-500 to-pink-600"
    },
    {
        quote: "From concept to deployment, Tech Sparks delivered excellence. Their attention to detail and commitment to quality is unmatched. Highly recommended!",
        name: "Ahmed Ali",
        role: "Founder, StartupHub",
        gradient: "from-blue-500 to-indigo-600"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4 tracking-tight">
                        Client Success Stories
                    </h2>
                    <p className="text-[#6B7280] text-lg font-medium opacity-80">
                        Don't just take our word for it
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between group cursor-pointer"
                        >
                            {/* Quote Content */}
                            <div className="mb-8">
                                <div className="text-indigo-500 text-4xl mb-4 opacity-50 font-serif">"</div>
                                <p className="text-[#4B5563] text-lg leading-relaxed italic">
                                    {item.quote}
                                </p>
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center gap-4">
                                {/* Avatar Circle */}
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}></div>

                                <div>
                                    <h4 className="font-bold text-[#111827]">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-[#6B7280] font-medium">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
