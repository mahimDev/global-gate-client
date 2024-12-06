import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Layout = () => {
    const { isDark } = useContext(AuthContext)
    return (
        <div className={isDark ? "bg-darkBg" : "bg-white"}>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;