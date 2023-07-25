import React from 'react';
import InfoGrafico from './img/infografico.png';

function App() {
  return (
    <div className="bg-[#253140] text-white p-6">
      <div id="infografico" className="flex justify-center flex-col items-center">
        <h1 className="font-bold text-center text-3xl mb-5 max-md:text-xl">INFOGRAFICO</h1>
        <img src={InfoGrafico} className="w-[900px] h-full" alt="InfoGrafico" title="InfoGrafico"/>
        <hr className=""/>
      </div>
      <div id="minivideo" className="flex justify-center flex-col items-center">
        <h2 className="font-bold text-center text-3xl mb-5 mt-5 max-md:text-xl">VIDEO</h2>
        <video src={{}} width={720} height={1280} controls >
        </video>
      </div>
      <div id="podcast" className="">
      </div>
    </div>
  );
}

export default App;
