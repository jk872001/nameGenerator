import React from "react";

const SearchBox = () => {
  return (
    <div className="flex items-center text-center w-52 m-auto pt-2">
      <div className="flex border border-purple-200 rounded">
        <input
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
