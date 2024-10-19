import React from 'react';
import DropDown from "./DropDown";
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const BarWithTags = ({}) => {
  const {category,handleClick}=useAppContext();
  return (
    <>
      <div className="lg:hidden flex flex-row items-center justify-between bg-white p-4">
        <Link to="/add" className="h-12 border-2 w-28 border-green-900 bg-green-900 text-white rounded flex items-center justify-center">
          Add a Post
        </Link>
        <DropDown a={"All Posts"} b={"Motivation"} c={"Success"} d={"Self Improvement"} handleClick={handleClick}/>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-between bg-white mx-28 w-5/6 px-10 py-4">
        <ul className="flex flex-row justify-between gap-5 h-12 items-center p-4">
          <li>
            <button
              className="h-12 text-3xl font-thin w-auto"
              onClick={() => handleClick("All Posts")}
            >
              All Posts
            </button>
          </li>
          <li>
            <button
              className="h-12 text-3xl font-thin w-auto"
              onClick={() => handleClick("Motivation")}
            >
              Motivation
            </button>
          </li>
          <li>
            <button
              className="h-12 text-3xl font-thin w-auto"
              onClick={() => handleClick("Success")}
            >
              Success
            </button>
          </li>
          <li>
            <button
              className="h-12 text-3xl font-thin w-auto"
              onClick={() => handleClick("Self Improvement")}
            >
              Self Improvement
            </button>
          </li>
        </ul>
        <Link to="/add" className="h-12 border-2 w-28 border-green-900 bg-green-900 text-white rounded flex items-center justify-center">
          Add a Post
        </Link>
      </div>
    </>
  );
};

export default BarWithTags;
