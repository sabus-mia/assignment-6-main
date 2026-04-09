import React from 'react';
import { use } from 'react';

const ToolsData = ({ promiseData }) => {
  const Data = use(promiseData);
  const tool = Array.isArray(Data) ? Data[0] : Data;
  const { title, description, price, label, features = [] } = tool || {};
  


  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg relative flex flex-col hover:shadow-xl transition-shadow max-w-sm mx-auto">
      {label && (
        <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
          {label}
        </span>
      )}
      <div className="flex-grow space-y-4 pt-4">
        <div className="h-12 w-8 bg-gray-100 rounded-lg flex items-center justify-center text-xl">💡</div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
        <p className="text-2xl font-extrabold text-purple-600">{price}</p>
        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
          {features.map((f, idx) => (
            <li key={`${f}-${idx}`}>{f}</li>
          ))}
        </ul>
      </div>
      <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-3xl font-semibold hover:bg-purple-700 transition">
        Buy Now
      </button>
    </div>

  );
};

export default ToolsData;