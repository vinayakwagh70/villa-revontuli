import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    `${import.meta.env.BASE_URL}interior_1.jpg`,
    `${import.meta.env.BASE_URL}interior_2.jpg`,
    `${import.meta.env.BASE_URL}interior_3.jpg`,
    `${import.meta.env.BASE_URL}interior_4.jpg`,
    `${import.meta.env.BASE_URL}interior_5.jpg`,
    `${import.meta.env.BASE_URL}bedroom.jpg`,
    `${import.meta.env.BASE_URL}bedroom_1.jpg`,
  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>

      <div className="grid grid-3">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Villa"
            onClick={() => setSelectedImage(img)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

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