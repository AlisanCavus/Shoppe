import { useSpring, animated } from 'react-spring';
import { useState } from 'react'
import {  v4 as uuidv4 } from 'uuid'
import ListItemsTemplate  from '../ListItemsTemplate.js'

function AddItem() {
    
    const [listItem, setListItem ] = useState(ListItemsTemplate)


    const handleChange = (e) => {
      const newItem = {
            id: uuidv4(),
            item: e.target.value,
            amount: 1
        }
        setListItem(listItem.push(newItem))
        
    }

    const handleAdd = (e) => {
        if (e.keyCode === 13 ) {
        
    }
 }
  
  

  const sty = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  });
  
  return (
    <animated.div style={sty}>
      <form className="form">
        <input
          className="input"
          onChange={handleChange}
          onKeyPress={handleAdd}
          type="text"
          placeholder="Add an Item"
        />
      </form>
    </animated.div>
  )

}

export default AddItem
