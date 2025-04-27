import React from 'react';
import { CheckCircle, ArrowRight, Apple, Smartphone } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Lasting Habits?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Join thousands of users who have transformed their daily routines with Regular. 
              Sign up today and start your journey to consistency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://app.stayregular.io/signup" 
                className="bg-white text-primary-600 dark:text-primary-700 px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors flex items-center justify-center"
              >
                Sign Up Now
                <ArrowRight size={20} className="ml-2" />
              </a>
              <button 
                disabled 
                className="bg-white text-primary-600 dark:text-primary-700 px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors flex items-center justify-center"
              >
                <Apple size={20} /><Smartphone size={20} /> Coming Soon
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:flex md:justify-end">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl text-neutral-800 dark:text-neutral-200 p-6 shadow-lg max-w-md">
              <h3 className="font-bold text-xl mb-4">Join Regular and get:</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Automatic daily task scheduling",
                  "Access to premium creator programs",
                  "Progress tracking and insights",
                  "Personalized routine recommendations",
                  "Community challenges and support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4 text-center">
                <p className="text-neutral-500 dark:text-neutral-400 mb-2">Already using Regular?</p>
                <a 
                  href="https://app.stayregular.io/login" 
                  className="text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  Sign in to your account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;