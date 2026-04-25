export default function Gallery() {
  return (
    <section>
      <h2>Gallery</h2>
      <div className="grid grid-3">
        <img src="/gallery1.jpg" alt="Villa interior" />
        <img src="/gallery2.jpg" alt="Bedroom" />
        <img src="/villa-hero.jpg" alt="Exterior" />
      </div>
    </section>
  );
}