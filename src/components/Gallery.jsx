export default function Gallery() {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="grid grid-3">
        <img src={`${import.meta.env.BASE_URL}exterior_1.jpg`} alt="Villa exterior" />
        <img src={`${import.meta.env.BASE_URL}bedroom.jpg`} alt="Bedroom" />
        <img src={`${import.meta.env.BASE_URL}exterior.jpg`} alt="Exterior" />
      </div>
    </section>
  );
}