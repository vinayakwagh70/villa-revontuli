export default function Testimonials() {
  const reviews = [
    {
      text: "This property offers a spacious and comfortable living space for families or groups. Just short drive from Strawberry pick point ,Mapro Garden and other popular attractions like Elphinstone Point and Venna Lake.Villa with spacious rooms and a big lawn.We truly enjoyed the stay.",
      author: "Mukesh Prabhakar",
    },
    {
      text: "It was very nice villa , rooms are cleaned well maintained. Location of villa is very perfect to enjoy view n natural scenery .",
      author: "Santosh Gaikwad",
    },
  ];

  return (
    <section id="testimonials">
      <h2>What Our Guests Say</h2>

      <div className="grid grid-3">
        {reviews.map((review, index) => (
          <div key={index} className="card testimonial">
            <p>"{review.text}"</p>

            <div className="stars">★★★★★</div>

            <h4>- {review.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}