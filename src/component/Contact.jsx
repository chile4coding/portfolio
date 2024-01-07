import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

// import { useFormik } from "formik";
// import { sendEmail as send } from "./sendMail";

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import emailjs from "@emailjs/browser";

import * as Yup from "yup";
import TextError from "./TextError";
import { MdEmail } from "react-icons/md";
import { Element } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
const initialValues = {
  name: "",
  email: "",
  message: "",
};

const onSubmit = (values, onSubmitProps) => {
  const form = {
    user_name: values.name,
    user_email: values.email,
    message: values.message,
  };
  emailjs
    .send("service_qnslgwc", "template_not2v7e", form, "VxuFW8VUYmnlkMMFX")
    .then(
      (result) => {
        toast.success(" Your message is sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      },
      (error) => {
        toast.error("Message not sent, try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        onSubmitProps.setSubmitting(false);
      }
    );

  //   console.log(JSON.stringify(values));
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

const validateComment = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};
export default function Contact() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        enableReinitialize>
        {(formik) => {
          return (
            <Form className="my-10 py-10">
              <Element name="contact" className="section">
                <div className="  card shadow-md max-w-[70rem] about-bg p-10 mx-auto">
                  <h2 className="  text-6xl font-semibold uppercase py-10  sm:py-3 break-all sm:text-3xl md:text-4pxl">
                    {" "}
                    Contact Me
                  </h2>
                  <div className=" form-control my-5 ">
                    <label
                      htmlFor="name"
                      className=" text-2xl font-semibold sm:text-lg">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered  w-full  text-xl input-lg"
                    />
                    <ErrorMessage name="name" component={TextError} />
                  </div>

                  <div className=" form-control my-5 ">
                    <label
                      htmlFor="email"
                      className=" text-2xl font-semibold sm:text-lg">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered  w-full  text-xl  input-lg"
                    />
                    <ErrorMessage name="email">
                      {(errorMsg) => <div className="error">{errorMsg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className=" form-control my-5 ">
                    <label
                      htmlFor="message"
                      className=" text-2xl font-semibold  sm:text-lg">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      validate={validateComment}
                      rows="6"
                      className="textarea textarea-bordered   w-full  text-xl"
                    />
                    <ErrorMessage name="message" component={TextError} />
                  </div>

                  <div className="">
                    <button
                      className=" btn  btn-primary  max-w-sm  text-lg "
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}>
                      {formik.isSubmitting ? "Sending..." : "Send"}{" "}
                      <MdEmail className="text-xl" />
                    </button>
                  </div>
                </div>
              </Element>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
