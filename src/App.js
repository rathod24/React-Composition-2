import React, { useState } from "react";
import "./App.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '0%',
    transform: 'translate(-50%, -50%)',
    width:"50%",
  },
};
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="parent">
      <button onClick={() => setModalIsOpen(true)}>Modal open</button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <div className="modal-overlay">
          <button onClick={()=>setModalIsOpen(false)} className="modal-close">Close</button>
          <p className="modal-p">Hey,Hi I'm Modal</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;