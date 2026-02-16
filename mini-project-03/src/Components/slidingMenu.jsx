import SubMenu from './subMenus.jsx';

const SlidingMenu = ({ menuOpen, subMenuType, setSubMenuType, getParts }) => {
  return (
    <>
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

export default SlidingMenu;
