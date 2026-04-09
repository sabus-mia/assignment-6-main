import React from 'react';
import { use } from 'react';

const ToolCard = ({ title, description, price, label, features = [] }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg relative flex flex-col hover:shadow-xl transition-shadow">
    {label && (
      <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
        {label}
      </span>
    )}
    <div className="flex-grow space-y-4 pt-4">
      <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">💡</div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 flex-grow">{description}</p>
      <p className="text-2xl font-extrabold text-purple-600">{price}</p>
      <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
        {features.map((f, idx) => (
          <li key={`${f}-${idx}`}>{f}</li>
        ))}
      </ul>
    </div>
    <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
      Buy Now
    </button>
  </div>
);

const ToolsGridSection = ({ promiseData }) => {
  const toolsData = use(promiseData) || [];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl font-extrabold text-gray-900">Premium Digital Tools</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolsData.map(tool => (
          <ToolCard key={tool.id ?? tool.title} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolsGridSection;