import { AiFillCamera } from "react-icons/ai";
import { motion } from "framer-motion";
function Screen() {
  return (
    <div>
      <motion.button 
      className="camera"
       onClick={() => null}
       whileHover={{scale: 1.1,
        transition: {duration: 1},
        }}
        whileTap={{scale: 0.9}}
      
       >
        <AiFillCamera
          style={{ width: "30px", height: "30px", alignItems: "center" }}
        />
      </motion.button>
    </div>
  );
}

export default Screen;
