export default function HouseRules() {
  const rules = [
    "No smoking or drinking inside premises",
    "No loud music after 10 PM",
    "Only registered guests allowed",
    "Respect the property",
  ];

  return (
    <section id="rules">
      <h2>House Rules</h2>
      <div className="rules-container">
        <ul>
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}