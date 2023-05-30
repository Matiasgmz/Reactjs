import './App.css';
import Banniere from './components/Banniere';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card_film from './components/Card_film';
import { Route, Routes } from 'react-router-dom';
import Question from './components/Question';


function App() {
  return (
    <>

      <Banniere />
      <Routes>
        <Route path="/" element={<Card_film></Card_film>}></Route>
        <Route path="/question" element={<Question></Question>}></Route>

      </Routes>
      
    </>
    
  );
}

export default App;
