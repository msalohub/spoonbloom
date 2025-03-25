import { useState } from "react";

const shirts = [
  {
    name: "Shirt 1",
    images: ["/shirts/shirt1-front.jpg", "/shirts/shirt1-back.jpg"],
  },
  {
    name: "Shirt 2",
    images: ["/shirts/shirt2-front.jpg", "/shirts/shirt2-back.jpg"],
  },
  {
    name: "Shirt 3",
    images: ["/shirts/shirt3-front.jpg", "/shirts/shirt3-back.jpg"],
  },
];

const ShirtViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(shirts[0].images[0]);

  const nextShirt = () => {
    const newIndex = (currentIndex + 1) % shirts.length;
    setCurrentIndex(newIndex);
    setSelectedImage(shirts[newIndex].images[0]);
  };

  const prevShirt = () => {
    const newIndex = (currentIndex - 1 + shirts.length) % shirts.length;
    setCurrentIndex(newIndex);
    setSelectedImage(shirts[newIndex].images[0]);
  };

  return (
    <div className="shirt-viewer">
      <h2>{shirts[currentIndex].name}</h2>
      <img src={selectedImage} alt="Shirt" className="main-image" />
      <div className="thumbnails">
        {shirts[currentIndex].images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className={`thumbnail ${selectedImage === img ? "active" : ""}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      <button onClick={prevShirt}>← Prev</button>
      <button onClick={nextShirt}>Next →</button>

      <style jsx>{`
        .shirt-viewer {
          text-align: center;
        }
        .main-image {
          width: 300px;
          height: auto;
        }
        .thumbnails {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        .thumbnail {
          width: 50px;
          height: auto;
          cursor: pointer;
          opacity: 0.6;
        }
        .thumbnail.active {
          opacity: 1;
          border: 2px solid black;
        }
        button {
          margin: 10px;
          padding: 8px 12px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ShirtViewer;
