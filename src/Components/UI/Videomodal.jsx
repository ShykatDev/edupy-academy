import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Videomodal = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video-popup">
      <ModalVideo
        className="modal"
        channel="facebook"
        autoplay
        isOpen={isOpen}
        // videoId={props.vid ? props.vid : "tRF4SGFNb3c"}
        videoId="lh6NoJ2wbU"
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button>
    </div>
  );
};

export default Videomodal;
