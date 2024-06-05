import { Button, Checkbox, colors, TextField } from "@mui/material";
import { Formik, useFormik, Field, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Error from "./Error";
import "./../index.css";

const SignUpForm = Yup.object().shape({
  name: Yup.string().required(`this field is required`),
  email: Yup.string().email(`invalid emial format`).required(`required`),
  fullName: Yup.string().required(`required`),
  phone: Yup.number(`must be a Number`).required(`required`),
  password: Yup.string()
    .min(8, "min 8 Character")
    .max(16, `max 16 char`)
    .required(`required`),
  confirmPassword: Yup.string()
    .min(8, "min 8 Character")
    .max(16, `max 16 char`)
    .required(`required`)
    .oneOf([Yup.ref("password")], `password Must be match`),
  gender: Yup.string().required(`required`),
  birthAge: Yup.date().required(`required`),
  tAndc: Yup.boolean().oneOf([true], `please accepts the term && conditions`),
  moreText: Yup.string().when("tAndc", {
    is: true,
    then: Yup.string().required("requied"),
  }),
});

const FormComponent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    interes: [],
    birthAge: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      fullName: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
      interes: [],
      birthAge: "",
      tAndc: "",
      moreText: "",
    },
    validationSchema: SignUpForm,
    onSubmit: (val) => console.log(val),
  });

  const syl = {
    color: "red",
    fontSize: "12px",
  };

  return (
    <div className="cont">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">name</label>
          <Field type="text" name="name"/>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <Error error={formik.errors.name} />
          )}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter Your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <Error error={formik.errors.email} />
          )}
        </div>
        <div>
          <label htmlFor="">nafullNameme</label>
          <input
            type="text"
            placeholder="Enter Your fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <Error error={formik.errors.fullName} />
          )}
        </div>
        <div>
          <label htmlFor="">phone</label>
          <input
            type="number"
            placeholder="Enter Your phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <Error error={formik.errors.phone} />
          )}
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="password"
            placeholder="Enter Your password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <Error error={formik.errors.password} />
          )}
        </div>
        <div>
          <label htmlFor="">confirmPassword</label>
          <input
            type="password"
            placeholder="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <Error error={formik.errors.confirmPassword} />
          )}
        </div>
        <div>
          <label htmlFor="">birthAge</label>
          <input
            type="date"
            placeholder="birthAge"
            name="birthAge"
            value={formik.values.birthAge}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.birthAge && formik.errors.birthAge && (
            <Error error={formik.errors.birthAge} />
          )}
        </div>
        <div>
          <select
            value={formik.values.gender}
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="male">male</option>
            <option value="femail">femail</option>
            <option value="other">other</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <Error error={formik.errors.gender} />
          )}
        </div>
        <div>
          <label htmlFor="">interest</label>
          <br />
          <label htmlFor="sports">sports</label>
          <input
            type="checkbox"
            name="sports"
            value={formik.values.interes}
            id="sports"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="walking">walking</label>
          <input
            type="checkbox"
            name="walking"
            value={formik.values.interes}
            id="walking"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="eating healthy">eating healthy</label>
          <input
            type="checkbox"
            name="eating healthy"
            value={formik.values.interes}
            id="eating healthy"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <Error error={formik.errors.name} />
          )}
        </div>
        <label htmlFor="accepts">more</label>
        <input
          type="checkbox"
          id="accepts"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tAndc}
          name="tAndc"
        />
        {formik.values.tAndc && (
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.moreText}
            name="moreText"
            id=""
          ></textarea>
        )}

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
