import Home from './componenets/pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componenets/pages/Layout";
import Contact from './componenets/pages/Contact';
import LoginReg from './componenets/pages/auth/LoginReg';
import SendPassResEmail from './componenets/pages/auth/SendPassResEmail';
import ResetPass from './componenets/pages/auth/ResetPass';
import Dashboard from './componenets/pages/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='login' element={<LoginReg/>} />
        <Route path='sendpassresemail' element={<SendPassResEmail/>} />
        <Route path='reset' element={<ResetPass/>} />
        <Route path='dashboard' element={<Dashboard/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    {/* <Layout/> */}
    </>
  );
}

export default App;
