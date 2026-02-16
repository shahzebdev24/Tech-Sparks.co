'use client';

import { Star, Quote } from 'lucide-react';
import { Section, Container, Heading, Text, Card, Badge, GradientText } from '@/components/ui';

const testimonials = [
  {
    name: 'Nazir Siddiqui',
    role: 'Tazdeeq Markaz',
    content: 'Tech Sparks delivered a robust web app for Tazdeeq Markaz that perfectly meets our needs. Their technical skills and dedication were evident throughout the project.',
    initials: 'NS'
  },
  {
    name: 'Usama',
    role: 'Docs and More by Almeer',
    content: 'Working with Tech Sparks on Docs and More by Almeer was a game-changer. They understood our vision and built a high-quality web app that our users love.',
    initials: 'U'
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
    <Section id="testimonials" bg="dark-dots" spacing="lg">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="h-full">
              <Card 
                padding="none" 
                variant="glass" 
                className="group relative h-full bg-white/[0.04] border-white/10 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                {/* Elite Accents */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                
                <div className="p-10 relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, star) => (
                        <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-white/5 group-hover:text-indigo-400/20 transition-colors duration-500" />
                  </div>

                  <p className="text-xl text-white font-medium leading-relaxed mb-12 italic tracking-tight">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-5 pt-8 mt-auto border-t border-white/5">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center metallic-shine group-hover:scale-110 transition-transform duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-white/40 font-black text-xs">
                        {t.initials}
                      </div>
                    </div>
                    <div>
                      <Heading level={4} className="font-bold text-white text-xl tracking-tight mb-1 group-hover:text-indigo-300 transition-colors">{t.name}</Heading>
                      <Text variant="caption" className="text-indigo-400/60 text-[10px] font-black uppercase tracking-[0.3em]">
                        {t.role}
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div 
          className="mt-24 p-12 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] text-center border border-white/10 metallic-shine group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <Badge variant="glass" className="mb-6 px-4 py-1 uppercase tracking-[0.3em] text-[10px] font-black border-indigo-500/20">Client Feedback</Badge>
            <Heading level={3} className="!text-white text-3xl lg:text-4xl mb-6 tracking-tight font-bold">We value your partnership</Heading>
            <Text className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Contact your designated account manager to share your project experience 
              and be featured in our upcoming boutique-led showcase.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
