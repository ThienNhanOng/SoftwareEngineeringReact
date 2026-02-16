import { clearBuild, removePart } from './partHandler.js';

const BodyPiece = () => {
  return (
    <main className="bodyPiece">
      {/* body sections */}
      <div className="bodySections">
        <div id="cards-container"></div>
      </div>
      <TotalSection />
    </main>
  );
};

const TotalSection = () => {
  return (
    <section className="total-section primary-font">
      <section className="CartDisplay">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontSize: '2.25rem' }} className="primary-font"><b>Your Build</b></p>
        </div>

        {/* build placeholder */}
        <div className="PartsInBuild" id="build">
          <ul>
            <li>CPU: None</li>
            <li>GPU: None</li>
            <li>RAM: None</li>
            <li>Case: None</li>
          </ul>

        </div>
        {/* total placeholder */}
        <div className="buildTotal" id="total">
          <p style={{ fontSize: '2rem' }} className="primary-font"><b>Total: $0.00</b></p>
        </div>

        {/* clear build button */}
        <div id="clear-build" style={{ display: 'flex', gap: '5px', alignItems: 'right' }}>
          <button onClick={clearBuild}>Clear All</button>
        </div>


      </section>
    </section>
  );
};

export default BodyPiece;