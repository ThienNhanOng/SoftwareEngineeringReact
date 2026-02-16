const PartMenu = () => {
  const parts = [
    'CPU',
    'GPU',
    'RAM',
    'Case',
  ];

  return (
    <section className="part-menu primary-font">
      <h2 className="part-menu-title">Available Parts</h2>
      <div className="part-menu-slider">

      {/* Map individual button to their array for part type */}
        {parts.map((part) => (
          <button key={part} className="part-chip" type="button">
            {part}
          </button>
        ))}
      </div>
    </section>
  );
};



export default PartMenu;
