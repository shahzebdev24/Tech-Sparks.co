'use client';

const plans = [
    {
        name: 'Starter',
        price: '₹49,999',
        subtext: 'One-time payment',
        features: [
            'Custom Website Design',
            'Up to 5 Pages',
            'Responsive Layout',
            'SEO Optimization',
            '3 Months Support'
        ],
        buttonText: 'Choose Plan',
        highlighted: false
    },
    {
        name: 'Professional',
        price: '₹1,49,999',
        subtext: 'One-time payment',
        features: [
            'Custom Web Application',
            'User Management System',
            'Database Integration',
            'Admin Dashboard',
            'API Development',
            '6 Months Support'
        ],
        buttonText: 'Choose Plan',
        highlighted: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        subtext: "Let's discuss",
        features: [
            'Full-Scale Solutions',
            'Unlimited Pages/Features',
            'Advanced Integrations',
            'Dedicated Team',
            'Priority Support',
            '12 Months Support'
        ],
        buttonText: 'Contact Us',
        highlighted: false
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-[#ECEEFF] relative overflow-hidden font-sans">
            {/* Background Gradient Blurs */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-200 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-indigo-200 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2D2E3E] mb-4">
                        Transparent Pricing
                    </h2>
                    <p className="text-[#6B7280] text-lg font-medium opacity-80">
                        Choose the perfect plan for your needs
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-[32px] p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.2)] h-full border-2 group ${plan.highlighted ? 'border-[#4F46E5] shadow-[0_20px_50px_rgba(79,70,229,0.15)] relative scale-105 z-10' : 'border-transparent shadow-sm hover:border-indigo-100'}`}
                        >
                            <h3 className="text-xl font-bold text-[#111827] mb-6 group-hover:text-indigo-600 transition-colors">{plan.name}</h3>

                            <div className="mb-2 transform group-hover:scale-110 transition-transform duration-500">
                                <span className={`text-4xl md:text-5xl font-extrabold ${plan.highlighted ? 'text-[#4F46E5]' : 'text-[#111827]'}`}>
                                    {plan.price}
                                </span>
                            </div>
                            <p className="text-[#6B7280] text-sm font-medium mb-10 opacity-70">
                                {plan.subtext}
                            </p>

                            <ul className="space-y-4 mb-12 w-full text-left">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <span className="text-indigo-500 font-bold mt-1">✓</span>
                                        <span className="text-[#4B5563] text-sm font-medium leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto w-full">
                                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform active:scale-95 ${plan.highlighted ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/30' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
