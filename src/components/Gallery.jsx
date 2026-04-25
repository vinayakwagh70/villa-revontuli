export default function Gallery() {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="grid grid-3">
        <img src={`${import.meta.env.BASE_URL}interior_1.jpg`} alt="Villa interior" />
        <img src={`${import.meta.env.BASE_URL}interior_2.jpg`} alt="Villa interior" />
        <img src={`${import.meta.env.BASE_URL}interior_3.jpg`} alt="Villa interior" />
        <img src={`${import.meta.env.BASE_URL}interior_4.jpg`} alt="Villa interior" />
        <img src={`${import.meta.env.BASE_URL}interior_5.jpg`} alt="Villa interior" />
        <img src={`${import.meta.env.BASE_URL}bedroom.jpg`} alt="Bedroom" />
        <img src={`${import.meta.env.BASE_URL}bedroom_1.jpg`} alt="Bedroom" />
      </div>
    </section>
  );
}