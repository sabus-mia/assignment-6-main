import React, { Suspense } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import StatsSection from './component/StatesSection';
import ToolsData from './component/ToolsData';
import ToolsGridSection from './component/ToolsGridSection';
import Footer from './component/Footer';



const fetchW = async () => {
  const res = await fetch('/Data.json');
  return res.json();
};





const promiseData = fetchW();

const App = () => {
  
  return (
  <>
  <Navbar />
  <Hero />
  <StatsSection />
  <ToolsGridSection promiseData={promiseData} />
  
  <ToolsData promiseData={promiseData} />
    


  {<Footer /> }
  </>
  );
};

export default App;