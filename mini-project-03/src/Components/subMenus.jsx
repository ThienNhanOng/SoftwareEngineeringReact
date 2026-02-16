import { addPartToList } from './buildHandler.js';
// horizontal menu for parts

// item = the object ryzen 5, 5080 etc
// parts = the type of the object. ram, cpu, gpu, case
const SubMenu = ({ item, subMenuHeading, parts }) => {
  return (
    <div className="sub-menu primary-font">
      <h2>{subMenuHeading}</h2>
      <ul className="sub-menu-list">

        {item.map((part, index) => (
          <li key={index} className="sub-menu-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={part.img} alt={part.name} style={{ width: '50px', height: 'auto' }} />
            <h3>{part.name}</h3>
            <p>${part.price.toFixed(2)}</p>
            <button onClick={() => addPartToList(parts, part.name, part.price, part.img)}>
              Add to Build
            </button>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default SubMenu;