import { FiPlusSquare } from 'react-icons/fi';
import { FiMinusSquare } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { useState, useEffect} from 'react';
import AddItem from '../AddItem';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion'


function Card() {
  const [shoplist, setShopList] = useState([]);
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
    if (newListItem.item.length !== 0) {
      setShopList([newListItem, ...shoplist])
    }
  }

  const handlePlus = (index) => {
    const newShopItems = [...shoplist]
    newShopItems[index].amount++
    setShopList(newShopItems)
  }

  const handleMinus = (index) => {
    const newShopItems = [...shoplist]
    if (newShopItems[index].amount === 1 ) {
      handleDelete(index)
    } else {
    newShopItems[index].amount--
    setShopList(newShopItems)
    }
  }

  const handleDelete = (index) => {
    const newShopItems = [...shoplist]
    newShopItems.splice(index, 1)
    setShopList(newShopItems)
  }

  const sty = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  return (
    <div>
      <AddItem handleAdd={addListItem} />
      {!shoplist || shoplist.length === 0 ? (
        <p style={{ textAlign: 'center' }}>You don't have anything to buy.</p>
      ) : (
        shoplist.map((id, index) => (
          <animated.div style={sty} key={id.id}>
            <div className="card">
              <p>{id.item}</p>
              <div className="card2">
                <FiPlusSquare
                  className="pad"
                  onClick={() => handlePlus(index)}
                />
                <div className="pad1">{id.amount}</div>
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
          </animated.div>
        ))
      )}
    </div>
  );
}

export default Card;
