import { Hearts } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <Hearts
        height="80"
        width="80"
        color="rgb(88, 125, 228)"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass={css.loading}
        visible={true}
      />
    </div>
  );
}
