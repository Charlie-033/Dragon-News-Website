import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold my-5">Find Us On</h2>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 hover:bg-base-300 join-item"><FaFacebookF/> Facebook</button>
          <button className="btn bg-base-100 hover:bg-base-300 join-item"><FaTwitter/> Twitter</button>
          <button className="btn bg-base-100 hover:bg-base-300 join-item"><FaLinkedin/> LinkedIn</button>
        </div>
    </div>
  );
};

export default FindUs;
