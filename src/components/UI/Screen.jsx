import { useRef, useState } from 'react';
import { AiFillCamera , AiFillCloseCircle } from 'react-icons/ai';
import html2canvas from 'html2canvas';
import { motion } from 'framer-motion'

function Screen() {
  const modalRef = useRef();
  const [image, setImage] = useState();
  const openModal = () => {
    const elem = document.getElementById('apx');
    html2canvas(elem, {backgroundColor: null, scale: '20', scrollY: 1000}).then((canvas) => {
      setImage(canvas.toDataURL())
      
      modalRef.current.style.display = 'grid'
    });
  };

  const closeModal = () => {
    modalRef.current.style.display = 'none';
  };

  return (
    <div>
      <motion.button className="camera" onClick={openModal}>
        <AiFillCamera
          style={{ width: '30px', height: '30px', alignItems: 'center' }}
        />
      </motion.button>

      <div className="modal" ref={modalRef}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            <AiFillCloseCircle />
          </span>
          <div className="imageWrapper">
            <img src={image} alt="imaj" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
