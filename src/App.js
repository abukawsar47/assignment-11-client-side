import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Blogs from './pages/Blogs/Blogs';
import CarInventory from './pages/CarInventory/CarInventory';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Update from './pages/Update/Update';
import AddItem from './pages/AddItem/AddItem';
import ManageItems from './pages/ManageItems/ManageItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/car/:carId' element={<CarInventory></CarInventory>}></Route>
        <Route path='/update' element={
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        }></Route>
        <Route path='/add-item' element={
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        }></Route>
        <Route path='/manage-items' element={
          <PrivateRoute>
            <ManageItems></ManageItems>
          </PrivateRoute>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
