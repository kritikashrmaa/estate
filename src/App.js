import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import SignIn from "./pages/signIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
