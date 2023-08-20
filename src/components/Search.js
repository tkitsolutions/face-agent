import React from "react";
import photoframe from "../assets/frame2.svg";
import { AiFillCamera } from "react-icons/ai";
import { useState } from "react";

const Search = () => {
  const [imgUrl, setImgUrl] = useState("");
  const handleSelectFile = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="search">
      <div className="uploadImage">
        <img src={photoframe} />
        <div className="file">
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleSelectFile}
          />
          <label htmlFor="file">
            <AiFillCamera />
          </label>
          {imgUrl && <img src={imgUrl} alt="noImg" />}
        </div>
      </div>
      <div className="submitButton">
        <button>Search in Database</button>
      </div>

      <div className="progress">
        <h3>Searching...</h3>

        <div className="progressbarContainer">
          <div className="bar"></div>
        </div>
        <h3>25%</h3>
      </div>
    </div>
  );
};

export default Search;
