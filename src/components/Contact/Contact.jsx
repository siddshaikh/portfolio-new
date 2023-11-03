import React, { useContext, useState } from "react";
import "./Contact.css";
import { PortContext } from "../../context/PortContextProvider";
import { MdEmail } from "react-icons/md";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Contact = () => {
  const { dynamicColor } = useContext(PortContext);
  const [email, setEmail] = useState("");
  const [skillRate, setSkillRate] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "feedback"), {
        email: email,
        skillRate: Number(skillRate),
        comment: comment,
      });
      console.log("document Written with id", docRef.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contact-container">
      {/* title */}
      <h1 className="contact-title" style={{ color: dynamicColor }}>
        Get in touch
      </h1>
      {/* form */}
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        style={{ border: `4px solid ${dynamicColor}`, color: dynamicColor }}
      >
        <div>
          <input
            className="email-box"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="skills__rating-container">
          <label htmlFor="skill">Rate my skills</label>
          <div className="skill__rating-numbers">
            <p>1</p>
            <p>{skillRate}</p>
            <p>10</p>
          </div>
          <input
            className="skill__rating-box"
            type="range"
            min={0}
            max={10}
            placeholder="Rate My Skill..."
            value={skillRate}
            onChange={(e) => setSkillRate(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="comment-box"
            placeholder="Some Thoughts..."
            cols="30"
            rows="10"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <div className="footer-box" style={{ backgroundColor: dynamicColor }}>
        <span>
          <MdEmail />
        </span>
        <span>siddeekshaikh97@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;
