import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ];


  return (
    <section className="bg-purple-600 py-16 px-6 text-white text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-purple-400">


        {stats.map((stat, index) => (

          
          <div key={index} className={`space-y-1 ${index !== 0 ? 'md:pl-8' : ''}`}>
            <p className="text-5xl font-extrabold">{stat.value}</p>
            <p className="text-lg font-medium text-purple-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;