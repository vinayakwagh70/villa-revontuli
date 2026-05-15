import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayLimit, setDisplayLimit] = useState(4); // Initially display 4 images

  const images = [
    `${import.meta.env.BASE_URL}Home.jpg`,
    `${import.meta.env.BASE_URL}exterior_1.jpg`,
    `${import.meta.env.BASE_URL}exterior_2.jpg`,
    `${import.meta.env.BASE_URL}exterior_3.jpg`,
    `${import.meta.env.BASE_URL}exterior_4.jpg`,
    `${import.meta.env.BASE_URL}exterior_5.jpg`,
    `${import.meta.env.BASE_URL}exterior_6.jpg`,
    `${import.meta.env.BASE_URL}exterior_7.jpg`,
    `${import.meta.env.BASE_URL}exterior_8.jpg`,
    `${import.meta.env.BASE_URL}exterior_9.jpg`,
    `${import.meta.env.BASE_URL}exterior_10.jpg`,
    `${import.meta.env.BASE_URL}interior_1.jpg`,
    `${import.meta.env.BASE_URL}interior_2.jpg`,
    `${import.meta.env.BASE_URL}interior_3.jpg`,
    `${import.meta.env.BASE_URL}interior_4.jpg`,
    `${import.meta.env.BASE_URL}interior_5.jpg`,
    `${import.meta.env.BASE_URL}bedroom.jpg`,
    `${import.meta.env.BASE_URL}bedroom_1.jpg`,
  ];

  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + 4); // Load 4 more images
  };

  return (
    <section id="gallery">
      <h2>Gallery</h2>

      <div className="grid grid-3">
        {images.slice(0, displayLimit).map((img) => (
          <img
            key={img} // Use img as key, assuming image paths are unique
            src={img}
            alt="Villa"
            onClick={() => setSelectedImage(img)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {displayLimit < images.length && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button className="button" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}


      {/* 🔍 Lightbox */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </section>
  );
}