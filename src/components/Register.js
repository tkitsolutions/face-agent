import React from "react";
import photoframe from "../assets/photoframe.svg";
import { AiFillCamera } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { useState } from "react";

const Register = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [submit, setsubmit] = useState(false);
  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [location, setlocation] = useState('');
  const [crime, setcrime] = useState('');
  const handleSelectFile = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="register">
      <div className="picture">
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
 {        imgUrl&& <img
            src={imgUrl}
            alt="noImg"
          />}
        </div>
        <div className="divider"></div>
      </div>

      <div className="details">
        <form className="form">
          <div className="field">
            <label>First Name</label>
            <input type="text" value={first} onChange={(e)=>setfirst(e.target.value)} />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" value={last} onChange={(e)=>setlast(e.target.value)}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
          </div>
          <div className="field">
            <label>Phone</label>
            <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)}/>
          </div>
          <div className="field">
            <label>Location</label>
            <input type="text" value={location} onChange={(e)=>setlocation(e.target.value)}/>
          </div>
          <div className="field">
            <label>Crime</label>
            <input type="text" value={crime} onChange={(e)=>setcrime(e.target.value)}/>
          </div>
        </form>

        <div className="buttons">
          <button>Cancel</button>
          <button onClick={()=>{setsubmit(true); setfirst('');setlast('');}}>Verify</button>
        </div>
      </div>

     { submit&&<div className="submitPopup">
        <BsCheckCircle className="icon"/>
        <h1>Registration Successfull</h1>
        <button onClick={()=>setsubmit(false)}>Ok</button>
      </div>}
    </div>
  );
};

export default Register;
