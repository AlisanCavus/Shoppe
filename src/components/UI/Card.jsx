import { FiPlusSquare } from 'react-icons/fi';
import { FiMinusSquare } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { useState, useEffect} from 'react';
import AddItem from '../AddItem';


function Card() {
  const [shoplist, setShopList] = useState(null);
  console.log(shoplist);

  useEffect(() => {
    const data = localStorage.getItem('shopping-list-lists')
    if (data) {
      setShopList(JSON.parse(data))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('shopping-list-lists', JSON.stringify(shoplist))
  })

  const addListItem = (newListItem) => {
    if (newListItem) {
      setShopList([newListItem, ...shoplist])}
  }

  const handlePlus = (index) => {
    const newShopItems = [...shoplist]
    newShopItems[index].amount++
    setShopList(newShopItems)
  }

  const handleMinus = (index) => {
    const newShopItems = [...shoplist]
    newShopItems[index].amount--
    setShopList(newShopItems)
    
  }

  const handleDelete = (index) => {
    const newShopItems = [...shoplist]
    newShopItems.splice(index, 1)
    setShopList(newShopItems)
  }

  return (
    <div>
      <AddItem handleAdd={addListItem} />
      {!shoplist || shoplist.length === 0 ? (
        <p style={{ textAlign: 'center' }}>You don't have any item in your list.</p>
      ) : (
        shoplist.map((id, index) => (
          <div key={id.id}>
            <div className="card">
              <p>{id.item}</p>
              <div className="card2">
                <FiPlusSquare
                  className="pad"
                  onClick={() => handlePlus(index)}
                />
                <div className="pad">{id.amount}</div>
                <FiMinusSquare
                  className="pad"
                  onClick={() => handleMinus(index)}
                />
                <FiTrash2
                  className="pad2"
                  onClick={() => handleDelete(index)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
