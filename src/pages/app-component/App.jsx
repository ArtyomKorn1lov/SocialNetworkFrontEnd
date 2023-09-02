import './App.css';
import HeaderComponent from '../../components/header-component/header-component';
import FooterComponent from '../../components/footer-component/footer-component';

const App = () => {
  return (
    <div className='page'>
      <HeaderComponent />
      <div className='page__element'>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
