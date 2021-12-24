import { AiFillCamera } from 'react-icons/ai'
import { motion } from 'framer-motion'
function Screen() {
    return (
        <div>
            <motion.button className='camera' onClick={() => null}>
               <AiFillCamera style={{width: '30px', height: '30px', alignItems: 'center'}} /> 
            </motion.button>
        </div>
    )
}

export default Screen
