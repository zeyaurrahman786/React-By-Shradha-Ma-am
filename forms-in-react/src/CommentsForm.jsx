import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'Username cannot be empty!';
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   userName: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
    userName: "",
    remarks: "",
    rating: 5,
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // function handleChange(event) {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // }

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   addNewComment(formData);
  //   setFormData({
  //     userName: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h1>Give a Comment!</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username :- </label>
        <input
          type="text"
          placeholder="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          id="username"
          name="userName"
        />
        {formik.errors.userName ? <p style={{ color: "red"}}>{formik.errors.userName}</p> : null}
        <br /> <br />
        <label htmlFor="remarks">Remarks :- </label>
        <textarea
          value={formik.values.remarks}
          placeholder="add few remarks"
          onChange={formik.handleChange}
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
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br /> <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
