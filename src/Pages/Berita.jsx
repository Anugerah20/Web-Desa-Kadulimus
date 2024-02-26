import React from "react";
import DataProduct from "../Data/news";
import { RiArrowDropRightFill } from "react-icons/ri";

const Berita = () => {
     const handleClick = (url) => {
          window.open(url, "_blank");
     };

     return (
          <>
               <h1 className="my-5 mx-10 text-2xl flex justify-center">Berita &nbsp;<span className="font-bold">Terkini</span><RiArrowDropRightFill className="h-10 w-10" /></h1>
               <hr className="text-gray-600" />
               <div className="grid lg:grid-cols-3 sm:grid-cols-1 my-5">
                    {DataProduct.map((n) => (
                         <div className="cursor-pointer" onClick={() => handleClick(n.sumber)} key={n.id}>
                              <div className="bg-base-100 shadow-xl mx-5 my-5">
                                   <figure>
                                        <img className="w-full h-40 object-cover rounded-t" src={n.image} alt={n.title} />
                                   </figure>
                                   <div className="text-left px-4 py-4">
                                        <h3 className="text-black mb-3 font-bold">{n.title}</h3>
                                        <p className="text-sm text-gray-600">{n.shortDesc}</p>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </>
     );
};

export default Berita;
