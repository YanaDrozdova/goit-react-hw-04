import css from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { Field, Form, Formik } from 'formik';

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
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
        </Form>
      </Formik>
    </header>
  );
}
