import "./gallery.css";
import { useState } from "react";
import ReactModal from "react-modal";
import Pagination from "react-js-pagination";
import img1 from "./gallery1.jpg";
import img2 from "./6.jpg";
import img3 from "./family.jpg";
import img4 from "./Gallery4.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react"
// import { Footer} from "../../components/footers/footer"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const imagesPerPage = 4;

  const images = [
    { src: `${img1}`, category: "Portraits" },
    { src: `${img4}`, category: "Concert" },
    { src: `${img2}`, category: "Weddings" },
    { src: `${img3}`, category: "Family" },
    { src: `${img1}`, category: "Portraits" },
    { src: `${img2}`, category: "Weddings" },
    { src: `${img3}`, category: "Family" },
    { src: `${img4}`, category: "Concert" },
  ];

  const filteredImages = selectedCategory
    ? images.filter((image) => image.category === selectedCategory)
    : images;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
            {isMobile ? (
            // Render dropdown for mobile
            <select
              value={selectedCategory || "All cases"}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-white font-bold opacity-80 cursor-pointer bg-[#111] border-none outline-none"
            >
              <option value="All cases">All cases</option>
              <option value="Portraits">Portraits</option>
              <option value="Weddings">Weddings</option>
              <option value="Family">Family</option>
              <option value="Concert">Concert</option>
            </select>
          ) : (
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
          )}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 p-4 gap-y-4">
            {currentImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Category: ${image.category}`}
                onClick={() => openModal(image)}
                className=" w-[25rem] rounded-xl object-cover cursor-pointer"
              />
            ))}
          </div>
          <div className="flex justify-between text-white">
            <button className="px-12 py-4 bg-white opacity-80 rounded-2xl text-black">
              <Link to={"/contact"}>Contact us</Link>
            </button>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={imagesPerPage}
              totalItemsCount={filteredImages.length}
              pageRangeDisplayed={4}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              innerClass="pagination"
            />
          </div>

          {/* Lightbox/Modal */}
          <ReactModal
            isOpen={!!selectedImage}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            ariaHideApp={false}
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <div className="modal-close" onClick={closeModal}>
              &times;
            </div>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={`Category: ${selectedImage.category}`}
                className="modal-image"
              />
            )}
          </ReactModal>
        </div>
      </div>
      {/* <div className="lg:mt-12 absolute">
        <Footer/>
      </div> */}
    </section>
  );
};

export default Gallery;
