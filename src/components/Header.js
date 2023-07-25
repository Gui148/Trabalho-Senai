import React from 'react';

function Header() {
  return (
    <div className="flex justify-between bg-gray-800 text-white w-full h-14 items-center p-6">
      <a className="text-2xl max-md:text-lg">TRABALHO</a>
      <div className="space-x-4 max-md:space-x-2 max-md:text-sm ">
        <a href="#infografico" className=" hover:text-gray-400">InfoGrafico</a>
        <a href="#podcast" className=" hover:text-gray-400">PodCast</a>
        <a href="#minivideo" className=" hover:text-gray-400">MiniVideo</a>
      </div>
    </div>
  );
}

export default Header;
