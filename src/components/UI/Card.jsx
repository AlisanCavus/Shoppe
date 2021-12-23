import { FiPlusSquare } from 'react-icons/fi';
import { FiMinusSquare } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
function Card() {
  return (
    <div className="card">
        <p>Banana</p>
        <div>
          <FiPlusSquare />
          <FiMinusSquare />
          <FiTrash2 />
        </div>
    </div>
  );
}

export default Card;
