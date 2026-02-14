'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { Section, Container, Heading, Text, Badge, Button, Input, Textarea, Card } from '@/components/ui';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Section id="contact" bg="dark-ripple">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
          {/* Left Side: Info */}
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="dark" className="mb-6">Start a Conversation</Badge>
              <Heading level={2} className="!text-white mb-8">
                Let&apos;s build something{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">extraordinary</span> together
              </Heading>
              <Text className="text-gray-300 text-lg mb-12">
                Have a project in mind? We&apos;re ready to help you scale your 
                business with premium software engineered for growth.
              </Text>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shadow-lg group-hover:bg-indigo-600 transition-all duration-500 metallic-shine">
                    <Mail className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <Text variant="caption" className="mb-1 text-gray-400 uppercase tracking-widest font-black text-[10px]">Email us at</Text>
                    <a href="mailto:techsparks.co@gmail.com" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
                      techsparks.co@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shadow-lg group-hover:bg-indigo-600 transition-all duration-500 metallic-shine">
                    <MapPin className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <Text variant="caption" className="mb-1 text-gray-400 uppercase tracking-widest font-black text-[10px]">Based in</Text>
                    <p className="text-xl font-bold text-white">
                      Karachi, Pakistan
                    </p>
                    <p className="text-gray-300 text-sm font-medium">Delivering Products Globally</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card padding="lg" variant="glass" className="glossy-card">
                {status === 'success' ? (
                  <motion.div 
                    className="py-12 text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                      <Send className="w-10 h-10 text-emerald-500 rotate-12" />
                    </div>
                    <Heading level={3} className="text-white mb-4">Message Received!</Heading>
                    <Text className="text-gray-300">Thanks for reaching out. Our strategy team will get back to you within 24 hours.</Text>
                    <Button 
                      variant="ghost" 
                      className="mt-8 !text-indigo-400 hover:!bg-white/5"
                      onClick={() => setStatus('idle')}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input label="Full Name" placeholder="Strategic Sarah" required className="!bg-white/5 !border-white/10 !text-white" />
                      <Input label="Email Address" type="email" placeholder="sarah@example.com" required className="!bg-white/5 !border-white/10 !text-white" />
                    </div>
                    <Input label="Company Name" placeholder="Your Business Ltd." className="!bg-white/5 !border-white/10 !text-white" />
                    <Textarea label="Tell us about your project" placeholder="What are you building?" rows={4} required className="!bg-white/5 !border-white/10 !text-white" />
                    
                    <Button 
                      loading={status === 'loading'} 
                      fullWidth 
                      size="lg" 
                      type="submit"
                      icon={<ArrowRight className="w-5 h-5 ml-1" />}
                      iconPosition="right"
                      className="glossy-button"
                    >
                      Send Message
                    </Button>
                    <Text variant="small" className="text-center !text-gray-400 font-medium">
                      We usually respond in less than 24 business hours.
                    </Text>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
