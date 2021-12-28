import { useRef, useState } from 'react';
import { AiFillCamera , AiFillCloseCircle } from 'react-icons/ai';
import html2canvas from 'html2canvas';
import { motion } from 'framer-motion'

function Screen() {
  const modalRef = useRef();
  const [image, setImage] = useState();
  const openModal = () => {
    const elem = document.getElementById('apx');
    html2canvas(elem, {backgroundColor: null, scale: '20', scrollY: 500, width: 500, scrollX: 500, height: 500}).then((canvas) => {
      const urldata = canvas.toDataURL()
      setImage(urldata)
      
      modalRef.current.style.display = 'grid'
    });
  };

  
  const closeModal = () => {
    modalRef.current.style.display = 'none';
  };

  return (
    <div>
      <motion.button className="camera" onClick={openModal}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
        <AiFillCamera
          style={{ width: '30px', height: '30px', alignItems: 'center' }}
          whileTap={{scale: 0.9}}
        />
      </motion.button>

      <div className="modal" ref={modalRef}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            <AiFillCloseCircle />
          </span>
          <div className="imageWrapper">
            <h1 className="pad">Your Shopping list.</h1>
            <img src={image} alt="imaj" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
