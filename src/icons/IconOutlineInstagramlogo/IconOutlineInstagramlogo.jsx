/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconOutlineInstagramlogo = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-outline-instagramlogo ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-3"
        d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path-3"
        d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path-3"
        d="M16.875 8.0625C17.3928 8.0625 17.8125 7.64277 17.8125 7.125C17.8125 6.60723 17.3928 6.1875 16.875 6.1875C16.3572 6.1875 15.9375 6.60723 15.9375 7.125C15.9375 7.64277 16.3572 8.0625 16.875 8.0625Z"
        fill={color}
      />
    </svg>
  );
};

IconOutlineInstagramlogo.propTypes = {
  color: PropTypes.string,
};
