
// import img from "../assets/bg.png";
// import PhotoGallery from "./category";
import IG from "../components/IG_design";

const Gallery = () => {

  // const photos = [
  //   { id: 1, category: "wedding", url: "https://t.ly/E3uvR" },
  //   { id: 2, category: "wedding", url: "https://t.ly/YGDNO" },
  //   { id: 3, category: "street", url: "https://t.ly/E3uvR" },
  //   { id: 4, category: "street", url: "https://t.ly/E3uvR" },
  // ];
  return (
    // parent div
    <>
      <section>
        <IG />

        <main className="p-2 flex justify-center ">
          {/* first child div */}

          {/* <div className="text-white  bg-black h-[100vh]  text-center">
            <PhotoGallery photos={photos} />
          </div> */}
        </main>
      </section>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};

export default Gallery;
