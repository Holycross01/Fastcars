import React, { useState } from "react";

const Navbarpage = () => {
  const links = [
    { name: "home", href: "#", id: 1 },
    { name: "About", href: "#", id: 2 },
    { name: "contact", href: "#", id: 3 },
    { name: "services", href: "#", id: 4 },
    { name: "checkings", href: "#", id: 5 },
  ];
  const [toggleMobileButton, setToggleMobileButton]= useState(false)
  return (
    <div className="bg-red-500 p-1">
      <div className="max-w-5xl mx-auto flex justify-between">
        <cite>
          <a href="#">Fast tech</a>
        </cite>
        <button className=" text-xl sm:hidden" onClick={()=>setToggleMobileButton(!toggleMobileButton)}>{toggleMobileButton ? "✕" : "☰"}</button>
        <nav className="space-x-3 hidden sm:block">
          {links.map((link) => (
            <a key={link.id} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className={`transition-all duration-900 overflow-hidden ${toggleMobileButton ? "max-h-96 opacity-100" : "max-h-0 opacity-0" }`}>
     {toggleMobileButton && (<nav className="space-y-3 flex flex-col items-end">
        {links.map(link=>(
            <a key={link.id}
            href={link.href}>
           {link.name}
            </a>
        ))}
        </nav>)}
        </div>  
    </div>
  );
};

export default Navbarpage;
