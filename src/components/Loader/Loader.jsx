import { Dna } from 'react-loader-spinner';
import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.overlay}>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
