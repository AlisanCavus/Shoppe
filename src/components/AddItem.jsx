import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function AddItem({handleAdd}) {
  const [listText, setListText] = useState([]);
  const [message, setMessage ] = useState('Add an Item')

  

  const handleTextChange = (e) => {
    setListText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (listText === '') {
      setMessage('We know you need something to buy.')
    } else {
      const newListItem = {
        id: uuidv4(),
        item: listText,
        amount: 1
      }
        handleAdd(newListItem)
        setListText('')
        setMessage('Add an Item')
    }
      
  }

  const sty = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  });

  return (
    <animated.div style={sty}>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleTextChange}
          className="input"
          type="text"
          placeholder={message && `${message}`}
          value={listText}
        />
        <button type='submit' style={{display: 'none'}}></button>
      </form>
    </animated.div>
  );
}

export default AddItem;
