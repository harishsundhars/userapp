import logo from './logo.svg';
import Header from './components/header/header';
import Userlist from './components/userlist/userlist';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userdetails from './components/userdetails/userdetails';


const App = () => {
  return (
    <>
      <div className='App'>
        <Header/>
       <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Userlist/>} />
          <Route path="/userdetail" element={<Userdetails />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
