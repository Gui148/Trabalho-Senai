import React from 'react';

function Header() {
  return (
    <div className="flex justify-between bg-gray-800 text-white w-full h-14 items-center p-6 fixed z-50">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="text-2xl max-md:text-lg font-bold">TRABALHO</a>
      <div className="space-x-4 max-md:space-x-2 max-md:text-sm ">
        <a href="#infografico" className="hover:text-gray-400">InfoGrafico</a>
        <a href="#minivideo" className="hover:text-gray-400">Video</a>
        <a href="#podcast" className="hover:text-gray-400">PodCast</a>
      </div>
    </div>
  );
}

export default Header;

