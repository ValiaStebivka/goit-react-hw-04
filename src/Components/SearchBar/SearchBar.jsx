import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SearchBar = ({ onSearch }) => {
  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, "")
      .required(),
      });

  return (
    <header className={css.head}>
      <Formik
        validationSchema={searchSchema}
        initialValues={{
          search: "",
        }}

        onSubmit={(values, actions) => {
          
          onSearch(values.search.trim());
          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchInput}
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search..."
          />
          <button type="submit">Search</button>
          <ErrorMessage
            className={css.errorMes}
            component="span"
            name="search"
          />
        </Form>
      </Formik>
      <Toaster id="123" position="top-right" />
    </header>
  );
};
