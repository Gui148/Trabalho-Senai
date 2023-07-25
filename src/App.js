import React from 'react';
import InfoGrafico from './img/infografico.png';
import Video from './img/videoplayback.mp4';

function App() {
  return (
    <div className="bg-[#253140] text-white p-6">
      <div id="infografico" className="flex justify-center flex-col items-center">
        <h1 className="font-bold text-center text-3xl mb-5">INFOGRAFICO</h1>
        <img src={InfoGrafico} className="w-[900px] h-full" alt="InfoGrafico" title="InfoGrafico"/>
        <hr className=""/>
      </div>
      <div id="minivideo" className="">
        <h2 className="font-bold text-center text-3xl mb-5 mt-5">VIDEO</h2>
        <video src={Video} width={1280} height={720} controls>
        </video>
      </div>
    </div>
  );
}

export default App;
