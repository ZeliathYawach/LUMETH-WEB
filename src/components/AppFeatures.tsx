import React from 'react';
import { Calendar, Shield, Users, Clock, Star, Smartphone } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';

export function AppFeatures() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Booking",
      description: "Book appointments with your favorite beauty professionals in seconds"
    },
    {
      icon: Shield,
      title: "Verified Providers",
      description: "All service providers are thoroughly vetted for quality assurance"
    },
    {
      icon: Users,
      title: "Professional Network",
      description: "Connect with top-rated beauty professionals in your area"
    },
    {
      icon: Clock,
      title: "Real-time Availability",
      description: "See live scheduling and instantly book available slots"
    },
    {
      icon: Star,
      title: "AI Recommendations",
      description: "Get personalized service suggestions based on your beauty profile"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Manage your appointments and beauty journey on the go"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Revolutionary Features
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}