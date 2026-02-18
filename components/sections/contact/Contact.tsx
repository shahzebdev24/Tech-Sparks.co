'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, MapPin, Send, ArrowRight, Phone } from 'lucide-react';
import { Section, Container, Heading, Text, Badge, Button, Input, Textarea, Card, Select, GradientText } from '@/components/ui';
import { contactInfo, contactSubjects } from '@/content/contact';
import { SectionProps } from '@/components/ui/Section';

interface ContactProps {
  variant?: 'section' | 'page';
  showLocationBlock?: boolean;
  title?: React.ReactNode;
  description?: string;
  bg?: SectionProps['bg'];
  id?: string;
  className?: string;
}

export default function Contact({
  variant = 'section',
  showLocationBlock = false,
  title,
  description,
  bg = 'dark-ripple',
  id = 'contact',
  className = '',
}: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isPage = variant === 'page';

  const defaultTitle = isPage ? (
    <>
      Let&apos;s Build Your{' '}
      <GradientText variant="indigo-purple" className="relative z-10">Next Big Idea</GradientText>
    </>
  ) : (
    <>
      Let&apos;s build for the{' '}
      <GradientText variant="indigo-via-purple-indigo">future</GradientText>
    </>
  );

  const defaultDescription = isPage
    ? "Whether you're a startup or an enterprise, we're here to help you scale. Drop us a message and we'll get back to you within 24 hours."
    : "Have a project in mind? We're ready to help you scale your business with software development engineered for growth.";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Section id={id} bg="none" spacing="none" className={`relative overflow-hidden bg-[var(--color-darker-bg)] ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/contact.jpeg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-darker-bg)] via-transparent to-[var(--color-darker-bg)] opacity-95" />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Content with proper padding */}
      <div className="relative py-24 lg:py-32 z-10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative z-10 items-start">
          {/* Left Side: Info */}
          <div className="lg:w-5/12 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <Badge variant="glass" dot animated className="mb-8 px-4 py-1.5 text-indigo-300">
                  Contact Us
                </Badge>
                <Heading level={isPage ? 1 : 2} className={`font-bold !text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] tracking-tight ${isPage ? 'text-4xl sm:text-5xl md:text-7xl' : 'text-3xl sm:text-4xl lg:text-7xl'}`}>
                  {title || defaultTitle}
                </Heading>
                <Text variant="large" className="text-gray-400 max-w-xl leading-relaxed text-base sm:text-lg">
                  {description || defaultDescription}
                </Text>
              </div>

              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl group-hover:bg-indigo-600 transition-all duration-700 metallic-shine shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="min-w-0">
                    <Text variant="caption" className="mb-2 text-indigo-400/60 uppercase tracking-[0.3em] font-black text-[10px]">Email us at</Text>
                    <a href={`mailto:${contactInfo.email}`} className="text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 tracking-tight break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl group-hover:bg-indigo-600 transition-all duration-700 metallic-shine shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="min-w-0">
                    <Text variant="caption" className="mb-2 text-indigo-400/60 uppercase tracking-[0.3em] font-black text-[10px]">WhatsApp or Call</Text>
                    <a 
                      href={`https://wa.me/923408399014?text=Hi%20Tech%20Sparks!%20I'd%20like%20to%20discuss%20a%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 tracking-tight"
                    >
                      {contactInfo.phone}
                    </a>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Available 5pm - 2am (PKT)</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl group-hover:bg-indigo-600 transition-all duration-700 metallic-shine shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="min-w-0">
                    <Text variant="caption" className="mb-2 text-indigo-400/60 uppercase tracking-[0.3em] font-black text-[10px]">Based in</Text>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                      {contactInfo.location}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Delivering Products Globally</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 w-full max-lg:mt-26">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card padding="none" variant="glass" className="relative bg-white/[0.04] border-white/10 backdrop-blur-3xl rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="p-10 lg:p-14 relative z-10">
                  {status === 'success' ? (
                    <motion.div 
                      className="py-16 text-center"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/20 shadow-xl">
                        <Send className="w-10 h-10 text-emerald-500 rotate-12" />
                      </div>
                      <Heading level={4} className="text-white text-3xl mb-4 font-bold">Message Received!</Heading>
                      <Text className="text-gray-400 text-lg">Thanks for reaching out. Our team will get back to you within 24 hours.</Text>
                      <Button 
                        variant="ghost" 
                        className="mt-10 !text-indigo-400 hover:!bg-white/5 px-8"
                        onClick={() => setStatus('idle')}
                      >
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setErrors({});
                      
                      const formData = new FormData(e.currentTarget);
                      const data = {
                        name: formData.get('name') as string,
                        email: formData.get('email') as string,
                        company: formData.get('company') as string,
                        message: formData.get('message') as string,
                      };

                      // Client-side validation
                      const { contactFormSchema } = await import('@/lib/schemas');
                      const validation = contactFormSchema.safeParse(data);
                      
                      if (!validation.success) {
                        const newErrors: Record<string, string> = {};
                        validation.error.issues.forEach((issue) => {
                          if (issue.path[0]) {
                            newErrors[issue.path[0].toString()] = issue.message;
                          }
                        });
                        setErrors(newErrors);
                        return;
                      }

                      setStatus('loading');

                      try {
                        const response = await fetch('/api/contact', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(data),
                        });

                        const result = await response.json();

                        if (result.success) {
                          setStatus('success');
                        } else {
                          console.error(result.message);
                          if (result.errors) {
                            const apiErrors: Record<string, string> = {};
                            result.errors.forEach((err: any) => {
                              if (err.path[0]) apiErrors[err.path[0]] = err.message;
                            });
                            setErrors(apiErrors);
                          } else {
                            alert('Failed to send message: ' + result.message);
                          }
                          setStatus('idle');
                        }
                      } catch (error) {
                        console.error('Submission error:', error);
                        alert('Something went wrong. Please try again.');
                        setStatus('idle');
                      }
                    }} className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <Input 
                          name="name"
                          label="Full Name" 
                          placeholder="John Doe" 
                          required 
                          labelClassName="text-indigo-400/80 text-[10px] font-black uppercase tracking-[0.25em]"
                          className="!bg-white/[0.08] !border-white/30 !text-white placeholder:text-gray-400 focus:!border-indigo-500/50" 
                          error={errors.name}
                          onChange={handleChange}
                        />
                        <Input 
                          name="email"
                          label="Email Address" 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          labelClassName="text-indigo-400/80 text-[10px] font-black uppercase tracking-[0.25em]"
                          className="!bg-white/[0.08] !border-white/30 !text-white placeholder:text-gray-400 focus:!border-indigo-500/50" 
                          error={errors.email}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <Input 
                        name="company"
                        label="Company Name" 
                        placeholder="Your Business Ltd." 
                        labelClassName="text-indigo-400/80 text-[10px] font-black uppercase tracking-[0.25em]"
                        className="!bg-white/[0.08] !border-white/30 !text-white placeholder:text-gray-400 focus:!border-indigo-500/50" 
                        error={errors.company}
                        onChange={handleChange}
                      />

                      <Textarea 
                        name="message"
                        label={isPage ? "Your Message" : "Project Details"} 
                        placeholder={isPage ? "Tell us about your project..." : "Tell us what you're building..."}
                        rows={5} 
                        required 
                        maxLength={2000}
                        showCharacterCount
                        labelClassName="text-indigo-400/80 text-[10px] font-black uppercase tracking-[0.25em]"
                        className="!bg-white/[0.08] !border-white/30 !text-white placeholder:text-gray-400 focus:!border-indigo-500/50" 
                        error={errors.message}
                        onChange={handleChange}
                      />
                      
                      <div className="pt-4">
                        <Button 
                          loading={status === 'loading'} 
                          fullWidth 
                          size="lg" 
                          type="submit"
                          icon={<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                          iconPosition="right"
                          className="h-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg font-bold shadow-2xl shadow-indigo-600/20 border-0"
                        >
                          Send Message
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {showLocationBlock && (
            <div className="mt-32 pt-20 border-t border-white/10">
                <div className="text-center mb-16">
                <Heading level={2} className="text-4xl font-extrabold text-white tracking-tight">Our Base</Heading>
                </div>
                <div className="max-w-md mx-auto">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-lg hover:shadow-indigo-500/5 transition-all text-center glossy-card">
                        <MapPin className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                        <Heading level={4} className="text-xl font-bold text-white mb-2">{contactInfo.location.split(',')[0]}</Heading>
                         <p className="text-gray-400 text-sm font-medium">{contactInfo.location.split(',')[1]}</p>
                    </div>
                </div>
            </div>
        )}

        </Container>
      </div>
    </Section>
  );
}

