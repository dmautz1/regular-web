import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calendar, Info } from 'lucide-react';
import programsData from '../data/programs.json';

interface Task {
  title: string;
  time: string;
}

interface Program {
  id: number;
  title: string;
  creator: string;
  image: string;
  category: string;
  tasks: string;
  duration: string;
  subscribers: string;
  about: string;
  schedule: {
    day: number;
    tasks: Task[];
  }[];
}

const CreatorPrograms: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<Program>(programsData.programs[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule'>('overview');
  const [activeDay, setActiveDay] = useState(new Date().getDay());

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const shortWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section id="programs" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Follow <span className="text-primary-500 dark:text-primary-400">Creator Programs</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-2xl mx-auto">
            Subscribe to guided task programs from your favorite creators and experts.
            Follow structured plans for fitness, productivity, mindfulness, and more.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/5">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Popular Programs</h3>
              <div className="space-y-4">
                {programsData.programs.map((program) => (
                  <div 
                    key={program.id}
                    className={`rounded-xl p-4 cursor-pointer transition-all ${
                      activeProgram.id === program.id 
                        ? 'bg-primary-50 dark:bg-primary-900 border-l-4 border-primary-500 dark:border-primary-400' 
                        : 'bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                    onClick={() => setActiveProgram(program)}
                  >
                    <div className="flex items-center">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white">{program.title}</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">By {program.creator}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full mr-2">
                            {program.category}
                          </span>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">{program.subscribers} subscribers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://app.stayregular.io/programs"
                className="w-full mt-6 text-primary-500 dark:text-primary-400 font-medium flex items-center justify-center py-3 border border-primary-200 dark:border-primary-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
              >
                Browse All Programs
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src={activeProgram.image} 
                  alt={activeProgram.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-sm font-medium text-white bg-accent-500 dark:bg-accent-400 px-3 py-1 rounded-full">
                      {activeProgram.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">{activeProgram.title}</h3>
                    <p className="text-neutral-200">By {activeProgram.creator}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-6">
                  <div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Duration</span>
                    <p className="font-semibold text-neutral-900 dark:text-white">{activeProgram.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Daily Tasks</span>
                    <p className="font-semibold text-neutral-900 dark:text-white">{activeProgram.tasks} tasks</p>
                  </div>
                  <div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Subscribers</span>
                    <p className="font-semibold text-neutral-900 dark:text-white">{activeProgram.subscribers}</p>
                  </div>
                </div>

                <div className="border-b border-neutral-200 dark:border-neutral-700 mb-6">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`pb-4 px-1 border-b-2 font-medium transition-colors ${
                        activeTab === 'overview'
                          ? 'border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400'
                          : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab('schedule')}
                      className={`pb-4 px-1 border-b-2 font-medium transition-colors ${
                        activeTab === 'schedule'
                          ? 'border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400'
                          : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                      }`}
                    >
                      Schedule
                    </button>
                  </div>
                </div>

                {activeTab === 'overview' && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 text-neutral-900 dark:text-white">About the Program</h4>
                    <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6">
                      {activeProgram.about}
                    </p>
                  </div>
                )}

                {activeTab === 'schedule' && (
                  <div className="mb-8">
                    <div className="grid grid-cols-7 gap-0 border-b border-neutral-200 dark:border-neutral-700 mb-4">
                      {shortWeekdays.map((day, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveDay(index)}
                          className={`p-2 text-center transition-colors ${
                            activeDay === index
                              ? 'text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border-b-2 border-primary-500 dark:border-primary-400'
                              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                          }`}
                        >
                          <span className="block text-sm font-medium">{day}</span>
                          {new Date().getDay() === index && (
                            <span className="block text-xs text-primary-500 dark:text-primary-400 mt-1">Today</span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <Calendar size={18} className="text-primary-500 dark:text-primary-400 mr-2" />
                        <h5 className="font-medium text-neutral-900 dark:text-white">
                          {weekdays[activeDay]}'s Schedule
                        </h5>
                      </div>

                      {activeProgram.schedule[activeDay] ? (
                        <div className="space-y-3">
                          {activeProgram.schedule[activeDay].tasks.slice(0, 3).map((task: Task, index: number) => (
                            <div key={index} className="flex items-center bg-white dark:bg-neutral-800 rounded-lg p-3">
                              <div className="w-20 text-center mr-4">
                                <span className="text-xs text-neutral-500 dark:text-neutral-400 block">TIME</span>
                                <span className="text-sm font-medium text-neutral-900 dark:text-white">{task.time}</span>
                              </div>
                              <div className="flex-1">
                                <h6 className="font-medium text-neutral-900 dark:text-white">{task.title}</h6>
                              </div>
                            </div>
                          ))}
                          {activeProgram.schedule[activeDay].tasks.length > 3 && (
                            <div className="text-center mt-4">
                              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                +{activeProgram.schedule[activeDay].tasks.length - 3} more tasks
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-neutral-500 dark:text-neutral-400">No activities scheduled for {weekdays[activeDay]}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <button 
                    className="bg-primary-500 dark:bg-primary-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                  >
                    Subscribe to Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorPrograms;