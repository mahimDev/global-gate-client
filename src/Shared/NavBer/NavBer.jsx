import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";

const NavBer = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const nav =
        <>
            <NavLink ><li>Home</li></NavLink>
            <NavLink to={'allVisas'}><li>All visas</li></NavLink>
            <NavLink to={'addVisa'} ><li>Add Visa</li></NavLink>
            <NavLink to={'myAddedVisas'}><li>My added visas</li></NavLink>
            <NavLink to={'myVisaApplication'}><li>My Visa applications</li></NavLink>
        </>

    const handleLogOut = () => {
        signOutUser()
            .then(res => {
                console.log(res)
                toast.success('log out successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (

        <div className="top-0 sticky z-30 bg-[#D4AF37] backdrop-blur-xl ">
            <div className="flex justify-between w-11/12 mx-auto items-center py-5  ">
                <img className=" h-14 bg-black rounded-full" src="https://img.icons8.com/?size=100&id=23734&format=png&color=D4AF37" alt="" />
                <div className="flex items-center gap-4">
                    <ul className="flex gap-4 text-xl  font-semibold">
                        {nav}
                    </ul>
                </div>
                {
                    user ?


                        <button
                            onClick={handleLogOut}
                            className="border-2 border-black  py-1 px-3 font-semibold rounded-md"
                        >LogOut</button>
                        :

                        <div className="flex gap-2">
                            <Link to={'/login'}>
                                <button className="border-2 border-black  py-1 px-3 font-semibold rounded-md"
                                >Login</button></Link>
                            <Link to={'/register'}>
                                <button className="border-2 border-black  py-1 px-3 font-semibold rounded-md"
                                >Register</button></Link>
                        </div>
                }
            </div>
        </div>

    );
};

export default NavBer;