import React from 'react';

const Banner = () => {
  return (
    <div className="bg-black text-white">
      <nav className="py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
           <a href="/"> <h1 className="text-4xl font-bold cursor-pointer">SpaceX </h1></a>
            <p className="mt-2 text-lg ml-4 cursor-pointer">Explore rockets and capsules data</p>
          </div>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-gray-300 cursor-pointer">Rockets</a></li>
            <li><a href="/" className="text-white hover:text-gray-300 cursor-pointer">Capsules</a></li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto px-4 flex items-center justify-between h-screen">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-center">SpaceX </h1>
          <p className="mt-2 pl-14  text-lg text-center">Explore rockets and capsules data</p>
        </div>
        <div className="w-1/2 ml-8">
          <img
            src="https://history-computer.com/wp-content/uploads/2022/08/most-powerful-rockets-ever-built-header-scaled.jpg"
            alt="Rocket"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
