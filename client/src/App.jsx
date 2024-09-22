import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Click To View Hello Message!
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello World!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default App;