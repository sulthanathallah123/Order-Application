import {Route,Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Menu from './components/Menu/MainMenu/Menu';
import FoodDetails from './components/Menu/Foods/FoodDetails/FoodDetails';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/foods/:id' element={<FoodDetails/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/payment' element={<Payment />} />
    </Routes>
  );
}

export default App;
