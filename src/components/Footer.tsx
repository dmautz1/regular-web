import React from 'react';
import { CheckCircle, Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center mr-2">
                <CheckCircle className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">Regular</span>
            </div>
            <p className="text-neutral-400 dark:text-neutral-500 mb-6">
              Building consistent habits, one day at a time. Regular helps you stay on track with your daily routines.
            </p>
            {/*<div className="flex space-x-4">
              <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>*/}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#programs" className="text-neutral-400 hover:text-white transition-colors">
                  Programs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">App</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://app.stayregular.io/signup" className="text-neutral-400 hover:text-white transition-colors">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="https://app.stayregular.io/login" className="text-neutral-400 hover:text-white transition-colors">
                  Sign In
                </a>
              </li>
              <li>
                <a href="https://app.stayregular.io/programs" className="text-neutral-400 hover:text-white transition-colors">
                  Browse Programs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral-400 dark:text-neutral-500 mb-4">
              Get the latest news and updates about Regular features, programs, and events.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-neutral-800 dark:bg-neutral-900 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 w-full"
              />
              <button className="bg-primary-500 dark:bg-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 px-4 py-2 rounded-r-lg transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 dark:border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 dark:text-neutral-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Regular. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;