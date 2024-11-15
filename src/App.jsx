import React, { useState } from "react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";

const App = () => {
  const [storeImage, setStoreImage] = useState(0);
  const SlideImage = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];

  const handleClick = (index) => {
    console.log("index", index);
    setStoreImage(index);
  };

  console.log("storageimage", storeImage);
  return (
    <div className="w-screen h-screen">
      <div
        className="w-full h-full flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${SlideImage[storeImage].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 backdrop-blur bg-[rgba(0,0,0,0.6)] z-0"></div>
        <div className="flex max-w-6xl w-full h-[50vh] gap-3 items-center justify-center z-10">
          {SlideImage.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={` h-full rounded-2xl cursor-pointer overflow-hidden ${
                storeImage === index ? "w-[60%] opacity-100" : "w-[10%] opacity-50"
              }`}
            >
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
