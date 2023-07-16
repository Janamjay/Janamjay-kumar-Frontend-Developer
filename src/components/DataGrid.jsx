import React from "react";

const DataGrid = ({ data, onItemClick }) => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 pb-4">
      {data.map((item) => (
        <div
          key={item.flight_number}
          className="bg-white border border-gray-300 rounded-md shadow-md p-4 cursor-pointer flex flex-col justify-between"
          onClick={() => onItemClick(item)}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">{item.mission_name}</h3>
            <p className="text-gray-600">{item.details}</p>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4 mt-4">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataGrid;
