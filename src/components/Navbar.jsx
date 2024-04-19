import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white">
      <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">
        <div className="logo font-bold text-white text-2xl">
            
            <span className="text-green-700">&lt;</span>
            <span>Pass</span>
            <span className="text-green-700">OP/&gt;</span>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="">
              Home
            </a>
            <a className="hover:font-bold" href="">
              About
            </a>
            <a className="hover:font-bold" href="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
