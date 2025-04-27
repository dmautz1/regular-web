import React from 'react';
import { CheckCircle, ArrowRight, Apple, Smartphone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-800 dark:to-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-normal mb-4">
              <span className="text-4xl md:text-5xl lg:text-6xl text-primary-500 dark:text-primary-400 lg:leading-tight">Stay Regular</span> so you can<br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-accent-500 dark:text-accent-400 lg:leading-tight">become Exceptional</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl">
              The daily task tracking app that builds consistent habits, 
              automatically schedules recurring tasks, and lets you follow
              creator-defined programs for personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://app.stayregular.io/signup" 
                className="bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors flex items-center justify-center"
              >
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </a>
              <button 
                disabled 
                className="border-2 border-primary-500 text-primary-500 dark:border-primary-400 dark:text-primary-400 px-6 py-3 rounded-full font-medium hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                <Apple size={20} /><Smartphone size={20} /> Coming Soon
              </button>
            </div>
            <div className="mt-6 flex gap-4">
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-4 max-w-md mx-auto">
              <div className="bg-neutral-50 dark:bg-neutral-700 rounded-xl p-3 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">Today's Tasks</h3>
                  <span className="text-primary-500 dark:text-primary-400 font-medium">4/7 completed</span>
                </div>
                <div className="space-y-3">
                  {[
                    { text: "Morning meditation", completed: true },
                    { text: "Workout routine", completed: true },
                    { text: "Read 20 pages", completed: true },
                    { text: "Team meeting", completed: true },
                    { text: "Project planning", completed: false },
                    { text: "Evening walk", completed: false },
                    { text: "Journal entry", completed: false }
                  ].map((task, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-3 rounded-lg ${
                        task.completed 
                          ? 'bg-primary-100 dark:bg-primary-900' 
                          : 'bg-white dark:bg-neutral-800'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        task.completed 
                          ? 'bg-primary-500 dark:bg-primary-400' 
                          : 'border-2 border-neutral-300 dark:border-neutral-600'
                      }`}>
                        {task.completed && <CheckCircle size={16} className="text-white" />}
                      </div>
                      <span className={`${
                        task.completed 
                          ? 'line-through text-neutral-500 dark:text-neutral-400' 
                          : 'text-neutral-700 dark:text-neutral-200'
                      }`}>
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
                  <ArrowRight size={16} className="text-neutral-500 dark:text-neutral-400" />
                </div>
                <div className="text-accent-500 dark:text-accent-400 font-medium flex items-center">
                  7-day streak
                  <div className="w-5 h-5 ml-2 rounded-full bg-accent-500 dark:bg-accent-400 flex items-center justify-center">
                    <span className="text-white text-xs">🔥</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-4 w-20 h-20 bg-accent-100 dark:bg-accent-900 rounded-full animate-pulse-slow opacity-70"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full animate-bounce-slow opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;