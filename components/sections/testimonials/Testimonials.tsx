'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section, Container, Heading, Text, Badge, Card } from '@/components/ui';

export default function Testimonials() {
  return (
    <Section id="testimonials" bg="dark-dots">
      <Container>
        <div className="text-center mb-16 lg:mb-20">
          <Badge variant="dark" className="mb-4">Social Proof</Badge>
          <Heading level={2} className="!text-white mb-6">
            Trusted by founders and{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">product leaders</span>
          </Heading>
          <Text className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
            We prioritize building long-term partnerships. Here is what our 
            clients say about our commitment to their success.
          </Text>
        </div>

        {/* Note: The content audit identified fabricated testimonials. 
            We are replacing them with a 'Coming Soon' state to maintain integrity. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-60">
          {[1, 2, 3].map((i) => (
            <Card key={i} padding="lg" variant="glass" className="glossy-card relative overflow-hidden h-full">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-indigo-400/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => (
                  <svg key={star} className="w-5 h-5 text-indigo-400/60 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3-.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-8 text-gray-200 font-medium">
                &ldquo;Testimonial from our strategic partner will be published here 
                following our internal verification process.&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white/10" />
                <div>
                  <div className="font-bold text-white text-sm">Verified Client</div>
                  <div className="text-gray-300 text-xs font-medium uppercase tracking-wider">Strategic Partner</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 bg-white/12 backdrop-blur-md rounded-[2rem] text-center border border-white/15 metallic-shine"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Text className="!text-indigo-400 font-bold mb-2">Are you a current client?</Text>
          <Text className="text-gray-200">
            We value your feedback. Contact your account manager to share your experience.
          </Text>
        </motion.div>
      </Container>
    </Section>
  );
}
