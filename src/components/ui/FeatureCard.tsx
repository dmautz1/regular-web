import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md p-6 border border-neutral-100 dark:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px] group">
      <div className="w-14 h-14 rounded-full bg-primary-50 dark:bg-primary-900 flex items-center justify-center mb-5 group-hover:bg-primary-100 dark:group-hover:bg-primary-800 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
    </div>
  );
};

export default FeatureCard;