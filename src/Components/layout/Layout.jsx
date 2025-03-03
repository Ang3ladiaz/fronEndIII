
import {Navbar} from "./Navbar"
import { Outlet } from 'react-router-dom';
import {Footer} from "./Footer"

export const layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  );
};

export default layout