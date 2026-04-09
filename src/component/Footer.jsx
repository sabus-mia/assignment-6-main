import React from 'react';

const Footer = () => {

  const footerSections = [
    { title: 'Product', links: ['Features', 'Pricing', 'Templates', 'Integrations'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
    { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Contact'] },
  ];
  [
    { title: 'Product', links: ['Features', 'Pricing', 'Templates', 'Integrations'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
    { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Contact'] },
  ];
  [
    { title: 'Product', links: ['Features', 'Pricing', 'Templates', 'Integrations'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
    { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Contact'] },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-gray-800 pb-12 mb-8">
        {/* Brand & Description */}
        <div className="col-span-2 space-y-4 pr-8">
          <div className="text-2xl font-bold text-white">DigiTools</div>
          <p className="text-sm text-gray-400">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Links Sections */}
        {footerSections.map(section => (
          <div key={section.title} className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{section.title}</h4>
            <ul className="space-y-3 text-sm">
              {section.links.map(link => <li key={link}><a href="#" className="hover:text-purple-400">{link}</a></li>)}
            </ul>
          </div>
        ))}

        {/* Social Links */}
        <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Social Links</h4>
            <div className="flex space-x-4">
                {/* Placeholder Icons */}
                {['fb', 'twt', 'inst'].map(s => <div key={s} className="h-9 w-9 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white text-xs hover:bg-purple-600 cursor-pointer">{s}</div>)}
            </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>&copy; 2026 DigiTools. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;