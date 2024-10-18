import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/");
        const helloMessage = await response.json();
        setMessage(helloMessage["message"]);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };
    fetchData();
  }, [])

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="btn" onClick={handleButtonClick}>
        Click To View Hello Message!
      </button>
      {isModalOpen && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">{message}</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <button className="btn" onClick={handleClose}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default App;