import css from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
          if (values.search === '') {
            toast.error('Text must be entered to search for images');
          }
          onSearch(values.search);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.searchBox}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.searchBtn} type="submit">
            <FiSearch size="20px" />
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}
