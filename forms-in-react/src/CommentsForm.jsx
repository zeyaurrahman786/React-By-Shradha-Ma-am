import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    rating: 5,
  });

  function handleChange(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      userName: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h1>Give a Comment!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :- </label>
        <input
          type="text"
          placeholder="userName"
          value={formData.userName}
          onChange={handleChange}
          id="username"
          name="userName"
        />
        <br /> <br />
        <label htmlFor="remarks">Remarks :- </label>
        <textarea
          value={formData.remarks}
          placeholder="add few remarks"
          onChange={handleChange}
          id="remark"
          name="remarks"
        ></textarea>
        <br /> <br />
        <label htmlFor="rating">Rating :- </label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleChange}
          id="rating"
          name="rating"
        />
        <br /> <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
