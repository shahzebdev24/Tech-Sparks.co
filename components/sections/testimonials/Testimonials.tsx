'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Badge, GradientText } from '@/components/ui';

const testimonials = [
  {
    name: 'Nazir Siddiqui',
    role: 'Tazdeeq Markaz',
    content: 'Tech Sparks delivered a robust web app for Tazdeeq Markaz that perfectly meets our needs. Their technical skills and dedication were evident throughout the project.',
    initials: 'NS'
  },
  {
    name: 'Muhammad Usama Hussain',
    role: 'Docs and More by Almeer',
    content: 'Working with Tech Sparks on Docs and More by Almeer was a game-changer. They understood our vision and built a high-quality web app that our users love.',
    initials: 'UH'
  },
  // {
  //   name: 'Verified Client',
  //   role: 'Strategic Partner',
  //   content: 'Testimonial from our strategic partner will be published here following our internal verification process.',
  //   initials: 'VC'
  // }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" bg="none" spacing="none" className="relative overflow-hidden bg-[var(--color-darker-bg)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/testimonial.jpg"
          alt="Testimonials Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Floating Circular Images - Highest z-index */}
      <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
        {/* Top Left - Positioned away from text */}
        <motion.div
          className="absolute top-10 left-[2%] w-20 h-20 lg:w-28 lg:h-28"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 border-2 border-dashed border-indigo-400/40 rounded-full" style={{ animation: 'spin 20s linear infinite' }} />
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-indigo-500/60 shadow-2xl bg-indigo-900/50">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4"
              alt="Team member"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Top Right - Positioned away from text */}
        <motion.div
          className="absolute top-10 right-[2%] w-24 h-24 lg:w-32 lg:h-32"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="absolute inset-0 border-2 border-dashed border-pink-400/40 rounded-full" style={{ animation: 'spin 22s linear infinite' }} />
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-pink-500/60 shadow-2xl bg-pink-900/50">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jasmine&backgroundColor=ffd5dc"
              alt="Team member"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Middle Left - Far from center */}
        <motion.div
          className="absolute top-[45%] left-[1%] w-18 h-18 lg:w-24 lg:h-24"
          animate={{ 
            y: [0, 18, 0],
            rotate: [0, -6, 0]
          }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <div className="absolute inset-0 border-2 border-dashed border-teal-400/40 rounded-full" style={{ animation: 'spin 19s linear infinite' }} />
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-teal-500/60 shadow-2xl bg-teal-900/50">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas&backgroundColor=aaf0d1"
              alt="Team member"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Middle Right - Far from center */}
        <motion.div
          className="absolute top-[50%] right-[1%] w-20 h-20 lg:w-28 lg:h-28"
          animate={{ 
            y: [0, -22, 0],
            rotate: [0, 7, 0]
          }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        >
          <div className="absolute inset-0 border-2 border-dashed border-rose-400/40 rounded-full" style={{ animation: 'spin 26s linear infinite' }} />
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-rose-500/60 shadow-2xl bg-rose-900/50">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mia&backgroundColor=ffb3ba"
              alt="Team member"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Bottom Left - Positioned away from text */}
        <motion.div
          className="absolute bottom-10 left-[3%] w-22 h-22 lg:w-28 lg:h-28"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <div className="absolute inset-0 border-2 border-dashed border-cyan-400/40 rounded-full" style={{ animation: 'spin 18s linear infinite' }} />
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-cyan-500/60 shadow-2xl bg-cyan-900/50">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver&backgroundColor=d1d4f9"
              alt="Team member"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Bottom Right - Positioned away from text */}
        <motion.div
          className="absolute bottom-10 right-[3%] w-24 h-24 lg:w-30 lg:h-30"
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 6, 0]
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="absolute inset-0 border-2 border-dashed border-emerald-400/40 rounded-full" style={{ animation: 'spin 24s linear infinite' }} />
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-emerald-500/60 shadow-2xl bg-emerald-900/50">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maya&backgroundColor=b6f4d4"
              alt="Team member"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Small Decorative Dots - Positioned in safe areas */}
        <motion.div
          className="absolute top-[25%] left-[12%] w-3 h-3 bg-indigo-400 rounded-full shadow-lg"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[70%] right-[15%] w-2 h-2 bg-purple-400 rounded-full shadow-lg"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[10%] w-2.5 h-2.5 bg-pink-400 rounded-full shadow-lg"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[35%] right-[8%] w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }}
        />
      </div>

      {/* Content with proper padding */}
      <div className="relative py-24 lg:py-32 z-20">
        <Container>
        <div className="text-center mb-20 lg:mb-32">
          <Badge variant="glass" dot className="mb-6 px-4 py-1.5 text-indigo-300">
            Social Proof
          </Badge>
          <Heading level={2} className="text-4xl lg:text-7xl font-bold !text-white mb-8 leading-[1.05] tracking-tight">
            Trusted by founders and{' '}
            <GradientText variant="indigo-purple-pink">
              product leaders
            </GradientText>
          </Heading>
          <Text variant="large" className="text-gray-400 max-w-2xl mx-auto">
            We prioritize building long-term partnerships. Here is what our 
            clients say about our commitment to their success.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto mt-24">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {/* Avatar at Top Center - Overlapping with Enhanced Design */}
              <motion.div 
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-20"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 + 0.3, type: "spring" }}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse" />
                  
                  {/* Avatar Container */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0a0a1f] to-[#1a1a3f] border-4 border-[var(--color-darker-bg)] flex items-center justify-center backdrop-blur-xl">
                      <span className="text-white text-3xl font-black bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {t.initials}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card with Enhanced Glassmorphism */}
              <motion.div
                className="relative pt-20 pb-10 px-8 lg:px-10 rounded-[2.5rem] overflow-hidden group"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
                      'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)',
                      'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)',
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                
                <div className="relative z-10">
                  {/* Large Decorative Quote Marks */}
                  <div className="flex items-start justify-between mb-6 -mt-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 + 0.5 }}
                    >
                      <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-indigo-400/20 group-hover:text-indigo-400/40 transition-colors duration-500" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 + 0.5 }}
                    >
                      <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-purple-400/20 group-hover:text-purple-400/40 transition-colors duration-500 rotate-180" />
                    </motion.div>
                  </div>

                  {/* Stars with Stagger Animation */}
                  <div className="flex gap-1.5 justify-center mb-8">
                    {[...Array(5)].map((_, star) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: i * 0.2 + 0.6 + star * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-lg" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Content with Fade-in */}
                  <motion.p 
                    className="text-base lg:text-lg text-white/90 font-medium leading-relaxed text-center mb-10 px-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 + 0.8, duration: 0.8 }}
                  >
                    &ldquo;{t.content}&rdquo;
                  </motion.p>

                  {/* Author Info with Border */}
                  <motion.div 
                    className="text-center pt-6 border-t border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 + 1 }}
                  >
                    <Heading level={4} className="font-black text-white text-xl lg:text-2xl tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500">
                      {t.name}
                    </Heading>
                    <Text className="text-indigo-400/80 text-sm lg:text-base font-semibold tracking-wide">
                      {t.role}
                    </Text>
                  </motion.div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-indigo-500/20 rounded-tl-[2.5rem] group-hover:border-indigo-400/40 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/20 rounded-br-[2.5rem] group-hover:border-purple-400/40 transition-colors duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Card with Better Glassmorphism */}
        <motion.div 
          className="mt-24 relative overflow-hidden rounded-[3rem]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
                'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
            }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-indigo-500/20 rounded-tl-[3rem]" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500/20 rounded-br-[3rem]" />
          
          <div className="relative z-10 p-12 lg:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Badge 
                variant="glass" 
                className="mb-8 px-5 py-2 uppercase tracking-[0.3em] text-[11px] font-black border-indigo-500/30 bg-indigo-500/10"
              >
                Client Feedback
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Heading 
                level={3} 
                className="!text-white text-3xl lg:text-5xl mb-6 tracking-tight font-black leading-tight"
              >
                We value your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  partnership
                </span>
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Text className="text-gray-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed font-medium">
                Contact your designated account manager to share your project experience 
                and be featured in our upcoming boutique-led showcase.
              </Text>
            </motion.div>
          </div>
        </motion.div>
        </Container>
      </div>
    </Section>
  );
}
