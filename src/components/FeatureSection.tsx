import React from 'react';
import { CheckCircle, Calendar, Users, TrendingUp } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="text-primary-500 dark:text-primary-400" size={28} />,
      title: "Auto-Populated Daily Tasks",
      description: "Never start with a blank slate. Regular automatically populates your daily to-dos based on your routines."
    },
    {
      icon: <Users className="text-primary-500 dark:text-primary-400" size={28} />,
      title: "Creator Programs",
      description: "Subscribe to pre-defined task programs from your favorite creators. Follow guided plans for fitness, productivity, or personal growth."
    },
    {
      icon: <CheckCircle className="text-primary-500 dark:text-primary-400" size={28} />,
      title: "Simple Task Management",
      description: "Effortlessly track daily habits with a clean, intuitive interface designed for quick updates on the go."
    },
    {
      icon: <TrendingUp className="text-primary-500 dark:text-primary-400" size={28} />,
      title: "Progress Visualization",
      description: "Watch your consistency grow with beautiful progress tracking and streak celebrations that keep you motivated."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Features That Make Regularity <span className="text-primary-500 dark:text-primary-400">Effortless</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-2xl mx-auto">
            Regular combines simplicity, motivation, and community to make consistency achievable and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-20 bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Track Your Progress With Beautiful Visualizations
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                See your consistency grow over time with intuitive charts and celebratory animations that make habit-tracking rewarding.
              </p>
              <ul className="space-y-3">
                {[
                  "Daily, weekly, and monthly views of your progress",
                  "Streak counters with milestone celebrations",
                  "Habit correlation insights",
                  "Community comparisons for motivation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-semibold text-lg text-neutral-900 dark:text-white">Your Progress</h4>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Last 30 days</div>
                </div>
                
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const opacity = Math.random() > 0.3 ? 
                      `bg-primary-${Math.floor(Math.random() * 3 + 3)}00 dark:bg-primary-${Math.floor(Math.random() * 3 + 6)}00` : 
                      'bg-neutral-100 dark:bg-neutral-700';
                    
                    return (
                      <div
                        key={i}
                        className={`h-10 rounded-md ${opacity} hover:opacity-80 transition-opacity`}
                        title={`Day ${i + 1}`}
                      ></div>
                    );
                  })}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-neutral-100 dark:border-neutral-700">
                  <div>
                    <span className="text-2xl font-bold text-primary-500 dark:text-primary-400">87%</span>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Completion Rate</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-accent-500 dark:text-accent-400">12</span>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Current Streak</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-neutral-700 dark:text-neutral-200">21</span>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Best Streak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;