import Home from './componenets/pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componenets/pages/Layout";
import Contact from './componenets/pages/Contact';
import LoginReg from './componenets/pages/auth/LoginReg';
import SendPassResEmail from './componenets/pages/auth/SendPassResEmail';

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
      </Route>
    </Routes>
    </BrowserRouter>
    {/* <Layout/> */}
    </>
  );
}

export default App;
