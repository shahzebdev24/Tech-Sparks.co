'use client';

export default function Footer() {
    return (
        <footer className="bg-[#1A1B2E] text-white py-16 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[#667eea] transition-colors hover:text-indigo-400 cursor-pointer">
                            Tech Sparks
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Crafting premium software solutions that transform businesses and delight users. Your vision, our expertise.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><a href="#services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Web Development</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Web Applications</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">User Management</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">E-Commerce</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">About Us</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Portfolio</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Blog</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Tech Sparks. All rights reserved. | Designed with <span className="text-purple-500">💜</span> in Karachi
                    </p>
                </div>
            </div>
        </footer>
    );
}
