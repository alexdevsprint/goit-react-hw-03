import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <div className={css.formContainer}>
          <label htmlFor="username">Name</label>
          <Field className={css.formField} type="text" id="username" name="username" />
          <label htmlFor="number">Number</label>
          <Field className={css.formField} type="test" id="number" name="number" />
        </div>
        <button className={css.formBtn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
