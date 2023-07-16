import React from 'react';

const ItemDetail = ({ item, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-80 h-100 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">{item.mission_name}</h2>
          <p className="overflow-auto">{item.details}</p>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
