import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.016304367868!2d106.78950697384302!3d-6.391897393598583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e939c894a57f%3A0x3241754b3808a16f!2sPerumahan%20Griya%20Sakinah%202%20Depok!5e0!3m2!1sen!2sid!4v1689646014018!5m2!1sen!2sid"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
