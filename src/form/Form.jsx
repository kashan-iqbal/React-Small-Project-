import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import BasicSelect from "./Slect";

export const Form = () => {
  const [data, setData] = useState("");
  console.log("🚀 ~ Form ~ data:", data);

  return (
    <>
      <Formik
        initialValues={{
          first: "",
          second: "",
          third: "",
          fourth: "",
          slectes: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.first) {
            errors.first = "required";
          }
          if (!values.second) {
            errors.second = "email is required";
          }
          return errors;
        }}
        onSubmit={(val) => setData(val)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {console.log(formik.errors)}
            <TextField
              label="first naem"
              name="first"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first}
            />
            {formik.touched.first && formik.errors.first && (
              <p>{formik.errors.first}</p>
            )}
            <TextField
              label="first naem"
              name="second"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.second}
            />
            <p>{formik.errors.second}</p>
            <TextField
              label="first naem"
              name="third"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.third}
            />
            <TextField
              label="first naem"
              type="password"
              name="fourth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fourth}
            />
            <BasicSelect
              label={`slect`}
              onChange={formik.handleChange}
              value={formik.values.slectes}
            />
            <Button variant="contained" type="submit">
              sumbmit
            </Button>
          </form>
        )}
      </Formik>
      Form
    </>
  );
};
