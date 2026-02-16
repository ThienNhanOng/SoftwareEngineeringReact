import { useState } from "react";
import { buildList, total } from './partHandler.js';
import SubMenu from './subMenus.jsx';
import { cpus, gpus, rams, cases } from './computerParts.js';

const Header = () => {
  // menu state
  const [menuOpen, setMenuOpen] = useState(false); 
  // sub menu for part type (cpu, gpu, ram, case)
  const [subMenuType, setSubMenuType] = useState(null); 

  // start build close/open menus
  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setSubMenuType(null);
    } else {
      setMenuOpen(true);
    }
  }; 

  const getParts = (type) => {
    switch (type) {
      case 'cpu': return cpus;
      case 'gpu': return gpus;
      case 'ram': return rams;
      case 'case': return cases;
      default: return [];
    }
  };

  return (
    <>
      <header className="PCPartheader">
        <h1>(BAD) PC Part Picker</h1>

        {/* navbar buttons */}
        <div className="navBarButtons">
          <button onClick={toggleMenu}>Start Build</button>
        </div>

        <div style={{ paddingRight: '80px' }}>
          Total: ${total.toFixed(2)}
        </div>
      </header>

      {/* Sliding Menu */}
      {menuOpen && (
        <div className={`part-menu primary-font ${menuOpen ? "open" : ""}`}>
          <h2>Select Parts</h2>
          <div className="menu-buttons">
            <button onClick={() => setSubMenuType(subMenuType === 'cpu' ? null : 'cpu')}>CPU</button>
            <button onClick={() => setSubMenuType(subMenuType === 'gpu' ? null : 'gpu')}>GPU</button>
            <button onClick={() => setSubMenuType(subMenuType === 'ram' ? null : 'ram')}>RAM</button>
            <button onClick={() => setSubMenuType(subMenuType === 'case' ? null : 'case')}>Case</button>
          </div>
        </div>
      )}
      {subMenuType && <SubMenu item={getParts(subMenuType)} subMenuHeading={`${subMenuType.toUpperCase()} Parts`} parts={subMenuType} onClose={() => setSubMenuType(null)} />}
    </>
  );
};

export default Header;
