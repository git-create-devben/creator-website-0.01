import "./gallery.css";
// am gonna import local images am using local image
import img1 from "./gallery1.jpg";
import img2 from "./6.jpg";
import img3 from "./family.jpg";
import img4 from "./Gallery4.jpg";

import { useState } from "react";
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const images = [
    { src: `${img1}`, category: "Portraits" },
    { src: `${img4}`, category: "Concert" },
    { src: `${img2}`, category: "Weddings" },
    { src: `${img3}`, category: "Family" },
   
    // { src: `${img5}`, category: "Portraits" },
    // { src: `${img6}`, category: "Weddings" },
    // { src: `${img7}`, category: "Family" },
    // { src: `${img8}`, category: "Concert" },
  ];

  const filteredImages = selectedCategory
    ? images.filter((image) => image.category === selectedCategory)
    : images;

  return (
    <section className="bg-black h-[100vh] max-h-[100%] lg:py-16 py-32">
      {/* wrapper start */}
      <div className="wrapper flex flex-col mx-11 lg:flex-row gap-12 lg:p-20">
        {/* one single column start */}
        <div className="Gallery flex-initial lg:w-[48rem] opacity-70 relative">
          <div className="absolute bottom-28 left-12">
            <hr className="w-24 font-extrabold hr" />
            <h1 className="text-white lg:text-6xl text-2xl font-extrabold">
              Portfolio Case
            </h1>
            <p className="text-1xl text-white ">
              Explore my visual journey and discover the stories <br /> I have
              captured through my lens.
            </p>
          </div>
        </div>
        <div className="flex-initial lg:w-[60rem] rounded-[30px] bg-black ">
          {/* this is the filter button */}
          <div className="w-full h-20 bg-[#111] rounded-3xl">
            <div className="p-6">
              <ul className="lg:flex gap-8 lg:items-center hidden">
                <h4
                  onClick={() => setSelectedCategory(null)}
                  className={`text-white font-bold opacity-40 cursor-pointer ${
                    !selectedCategory ? "underline" : ""
                  }`}
                >
                  All cases
                </h4>
                <li
                  onClick={() => setSelectedCategory("Portraits")}
                  className={`text-white font-bold opacity-80 cursor-pointer ${
                    selectedCategory === "Portraits" ? "underline" : ""
                  }`}
                >
                  Portraits
                </li>
                <li
                  onClick={() => setSelectedCategory("Weddings")}
                  className={`text-white font-bold opacity-80 cursor-pointer ${
                    selectedCategory === "Weddings" ? "underline" : ""
                  }`}
                >
                  Weddings
                </li>
                <li
                  onClick={() => setSelectedCategory("Family")}
                  className={`text-white font-bold opacity-80 cursor-pointer ${
                    selectedCategory === "Family" ? "underline" : ""
                  }`}
                >
                  Family
                </li>
                <li
                  onClick={() => setSelectedCategory("Concert")}
                  className={`text-white font-bold opacity-80 cursor-pointer ${
                    selectedCategory === "Concert" ? "underline" : ""
                  }`}
                >
                  Concert
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 p-4 gap-y-4">
            {filteredImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Category: ${image.category}`}
                className=" w-[25rem] rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
