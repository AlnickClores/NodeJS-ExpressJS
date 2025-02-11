import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateForm = () => {
  const navigate = useNavigate();

  const [hero, setHero] = useState({
    name: "",
    role: "",
    damage_type: "",
    price: 0,
    image: "",
  });

  const handleChange = (e) => {
    setHero((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/heroes/insert", hero);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inner-container">
          <label>
            Hero Name:
            <input
              type="text"
              placeholder="name"
              onChange={handleChange}
              name="name"
              required
            />
          </label>
          <label>
            Hero Role:
            <input
              type="text"
              placeholder="role"
              onChange={handleChange}
              name="role"
              required
            />
          </label>
          <label>
            Damage Type:
            <input
              type="text"
              placeholder="damage type"
              onChange={handleChange}
              name="damage_type"
              required
            />
          </label>
          <label>
            Hero Price:
            <input
              type="Number"
              placeholder="price"
              onChange={handleChange}
              name="price"
              required
            />
          </label>
          <label>
            Hero Image:
            <input
              type="text"
              placeholder="image"
              onChange={handleChange}
              name="image"
              required
            />
          </label>
        </div>
        <div className="btn-container">
          <button className="submit-btn" type="submit">
            Insert Hero
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
