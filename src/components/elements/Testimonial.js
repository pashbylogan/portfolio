import React from "react";

function Testimonial({ slider }) {
  const { userName, subtitle, review } = slider;
  return (
    <div className="testimonial-item text-center mx-auto">
      <h4 className="mt-3 mb-0">{userName}</h4>
      <span className="subtitle">{subtitle}</span>
      <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4">
        <p className="mb-0">{review}</p>
      </div>
    </div>
  );
}

export default Testimonial;
