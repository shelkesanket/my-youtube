import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Head() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 cursor-pointer"
          alt="menu"
          src="https://cdn2.iconfinder.com/data/icons/clean-minimal-set/16/open-menu-01-512.png"
        />
        <a href="/">
          {" "}
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://tse1.mm.bing.net/th?id=OIP.qat5ZTA3Gf_8e_L57b6V2wHaDi&pid=Api&P=0&h=180"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border rounded-l-full border-gray-400 p-2"
        />
        <button className="border border-gray-400 px-5 py-2 bg-gray-100-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
}

export default Head;
