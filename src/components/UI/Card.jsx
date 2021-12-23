import { FiPlusSquare } from 'react-icons/fi';
import { FiMinusSquare } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { useState, useEffect} from 'react';
import ListItemsTemplate from '../../ListItemsTemplate';

function Card() {
  const [shoplist, setShopList] = useState(ListItemsTemplate);

  if (!ListItemsTemplate || ListItemsTemplate.length === 0) {
    return <p style={{textAlign: 'center'}}>You don't have any shopping list.</p>;
  }

  

  const handlePlus = (index) => {
      const newShopItems = [...shoplist]
      newShopItems[index].amount ++
      setShopList(newShopItems)
  }

  const handleMinus = (index) => {
    const newShopItems = [...shoplist]
    newShopItems[index].amount --
    setShopList(newShopItems)
    }

    const handleDelete = (index) => {
        const newShopItems = [...shoplist]
        newShopItems.splice(index, 1)
        setShopList(newShopItems)
    }

  return (
    <div>
      {shoplist.map((id,index) => (
        <div key={id.id}>
          <div   className="card">
            <p>{id.item}</p>
            <div className="card2">
              <FiPlusSquare className="pad" onClick={() => handlePlus(index)} />
              <div className="pad">{id.amount}</div>
              <FiMinusSquare className="pad" onClick={() => handleMinus(index)} />
              <FiTrash2 className="pad" onClick={() => handleDelete(index)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
