import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3';

const SearchForm = () => {
  const [status, setStatus] = useState('');
  const [originalLaunch, setOriginalLaunch] = useState('');
  const [type, setType] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${BASE_URL}/capsules`);
      const filteredResults = response.data.filter((capsule) => {
        return (
          (status === '' || capsule.status === status) &&
          (originalLaunch === '' || capsule.original_launch === originalLaunch) &&
          (type === '' || capsule.type === type)
        );
      });
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error searching capsules:', error);
    }
  };

  return (
    <>
      <form className="mt-8" onSubmit={handleSearch}>
        <div className="flex items-center">
          <div className="mr-4">
            <label className="block mb-1" htmlFor="status">
              Status:
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-48 bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="unknown">unknown</option>
              <option value="retired">retired</option>
              <option value="active">active</option>
            </select>
          </div>
          <div className="mr-4">
            <label className="block mb-1" htmlFor="original-launch">
              Original Launch:
            </label>
            <input
              id="original-launch"
              type="text"
              value={originalLaunch}
              onChange={(e) => setOriginalLaunch(e.target.value)}
              className="w-48 bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mr-4">
            <label className="block mb-1" htmlFor="type">
              Type:
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-48 bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Dragon 1.0</option>
              <option value="dragon">Dragon 1.1</option>
              <option value="crew-dragon">Dragon 2.0</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            Search
          </button>
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Capsules</h2>
          <ul>
            {searchResults.map((capsule) => (
              <li key={capsule.capsule_id}>
                <div>Name: {capsule.capsule_serial}</div>
                <div>Status: {capsule.status}</div>
                <div>Original Launch: {capsule.original_launch}</div>
                <div>Type: {capsule.type}</div>
                <div>Detail: {capsule.details}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchForm;
