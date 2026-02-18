'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight, Facebook, Instagram } from 'lucide-react';
import { Container, Heading, Text, Badge } from '@/components/ui';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
  </svg>
);

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/share/1H2DKLuMNA/',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/tech.sparks.co?igsh=YWV1Nnp5NngwMnp1',
  },
  {
    name: 'TikTok',
    icon: TikTokIcon,
    href: 'https://www.tiktok.com/@tech.sparks.co?_r=1&_t=ZS-940CPHqYGd6',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-darker-bg)] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 relative z-10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2 mb-8 w-fit metallic-shine">
              <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
                <img src="/techsparkslogo.png" alt="S" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">TECH SPARKS</span>
            </Link>
            <Heading level={4} className="!text-white mb-6 max-w-sm">
              Software development, engineered for growth and built for scale.
            </Heading>
            <Text className="text-gray-400 mb-10 max-w-sm font-medium">
              We partner with ambitious founders and enterprises to deliver 
              high-impact digital products. Based in Karachi, delivering globally.
            </Text>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-500 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-indigo-400">Company</h4>
            <ul className="space-y-4">
              {['Services', 'Portfolio', /* 'Pricing', */ 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Services' ? '/#services' : `/${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-white font-bold text-sm transition-all hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-indigo-400">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <a href="mailto:techsparks.co@gmail.com" className="text-gray-400 hover:text-indigo-400 text-sm font-bold transition-colors">
                  techsparks.co@gmail.com
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <a 
                  href="https://wa.me/923408399014?text=Hi%20Tech%20Sparks!%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 text-sm font-bold transition-colors"
                >
                  +92 340 8399014
                </a>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-gray-400 text-sm font-bold leading-relaxed">
                  Karachi, Pakistan
                </span>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="group text-white font-bold text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                  Get in touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-gray-600 text-sm font-bold capitalize">
            &copy; {currentYear} Tech Sparks Karachi. Engineered with precision.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-gray-600 hover:text-indigo-400 text-sm font-bold transition-colors uppercase tracking-widest text-[10px]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-indigo-400 text-sm font-bold transition-colors uppercase tracking-widest text-[10px]">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
