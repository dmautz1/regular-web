import React from 'react';
import { Calendar, CheckCircle, Bell, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Calendar size={30} className="text-white" />,
      title: "Set up your routines",
      description: "Define the tasks you want to complete regularly, whether daily, weekly, or on specific days.",
      color: "bg-primary-500 dark:bg-primary-400"
    },
    {
      icon: <Bell size={30} className="text-white" />,
      title: "Get daily reminders",
      description: "Regular automatically adds your recurring tasks to each day's list and sends gentle reminders.",
      color: "bg-primary-600 dark:bg-primary-500"
    },
    {
      icon: <CheckCircle size={30} className="text-white" />,
      title: "Track completions",
      description: "Check off tasks as you complete them and watch your consistency build over time.",
      color: "bg-accent-500 dark:bg-accent-400"
    },
    {
      icon: <TrendingUp size={30} className="text-white" />,
      title: "Celebrate progress",
      description: "Enjoy streak celebrations and insights as you turn inconsistent actions into regular habits.",
      color: "bg-accent-600 dark:bg-accent-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            How <span className="text-primary-500 dark:text-primary-400">Regular</span> Works
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-2xl mx-auto">
            Building habits shouldn't be complicated. With Regular, consistency becomes second nature.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-2/5 mb-12 lg:mb-0 lg:mr-16">
            <div className="relative">
              <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl overflow-hidden">
                <img 
                  src="/images/how-it-works/program.png" 
                  alt="Person using Regular app" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary-100 dark:bg-primary-900 z-[-1]"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-accent-100 dark:bg-accent-900 z-[-1]"></div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;