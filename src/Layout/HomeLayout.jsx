import { Outlet } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomeLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <ToastContainer />
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;