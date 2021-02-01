import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={s.overlay}>
      <Loader type="ThreeDots" color="#ffe602e0" height="30" />
    </div>
  );
}

export default LoaderComponent;