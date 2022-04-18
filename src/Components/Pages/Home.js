import React , {useState} from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import './Home.css'
import Header from '../Header'
import Hero from '../Hero';
import Footer from '../Footer';
import NGOSignIn from '../NGOSignIn';
import NGOSignUp from '../NGOSignUp';

function Home() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='home-container'>
      <BrowserRouter>
        <Header setModalShow={setModalShow}/>
        <NGOSignIn 
        show={modalShow}
        onHide={() => setModalShow(false)}/>
        
        <Routes>
          <Route path='/ngoRegistration' element={<NGOSignUp />}/>
        </Routes>
      </BrowserRouter>
      <br/>
      <Hero />
      <Footer></Footer>
    </div>
  );
}

export default Home;