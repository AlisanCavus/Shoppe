import { FiPlusSquare } from 'react-icons/fi';
import { FiMinusSquare } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';
import ListItemsTemplate from '../../ListItemsTemplate';

function Card() {
  const [shoplist, setShopList] = useState(ListItemsTemplate);

  if (!ListItemsTemplate || ListItemsTemplate.length === 0) {
    return <p>You don't have any shopping list.</p>;
  }

  return (
    <div>
      {shoplist.map((id) => (
        <div key={id.id}>
          <div   className="card">
            <p>{id.item}</p>
            <div className="card2">
              <FiPlusSquare className="pad" />
              <div className="pad">{id.amount}</div>
              <FiMinusSquare className="pad" />
              <FiTrash2 className="pad" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
