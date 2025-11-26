import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginForm() {
  return (
    <div>
      <h2>Login Form</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log("Login Data", values);
          alert(`Logged in as ${values.email}`);
          resetForm();
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" placeholder="Enter Email" autoComplete="email" />
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red", fontSize: 12 }}>{msg}</div>}
              </ErrorMessage>
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                autoComplete="current-password"
              />
              <ErrorMessage name="password">
                {(msg) => <div style={{ color: "red", fontSize: 12 }}>{msg}</div>}
              </ErrorMessage>
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
            >
              {formik.isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;