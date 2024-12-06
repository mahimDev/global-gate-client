import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";
import DarkModeToggle from "react-dark-mode-toggle";
const NavBer = () => {
    const { user, signOutUser, isDark, setIsDark, } = useContext(AuthContext)

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
    console.log(isDark)

    return (

        <div className={`top-0 sticky z-30 ${isDark ? 'bg-darkBg/40 text-gold border-gold' : 'bg-[#d4af37b7]'}  backdrop-blur-xl`}>
            <div className="flex justify-between w-11/12 mx-auto items-center py-5  ">
                <img className=" h-14 bg-black rounded-full" src="https://img.icons8.com/?size=100&id=23734&format=png&color=D4AF37" alt="" />
                <div className="flex items-center gap-4">
                    <ul className="flex gap-4 text-xl  font-semibold">
                        {nav}
                    </ul>
                    <DarkModeToggle
                        onChange={setIsDark}
                        checked={isDark}
                        size={60} />
                </div>
                {
                    user ?


                        <div className="group relative">
                            <img
                                width={500}
                                height={500}
                                className="size-12 rounded-full bg-slate-500 object-cover"
                                src={user?.photoURL}
                                alt="avatar GlobalGate"
                            />
                            <div className="group-hover:block hidden rounded-xl absolute right-0 top-12 p-5 bg-white/70 backdrop-blur-2xl">
                                <h1 className="mb-2">{user?.displayName}</h1>
                                <h1 className="my-2">{user?.email}</h1>
                                <button

                                    onClick={handleLogOut}
                                    className="
                                 border-2 border-black bg-[#D4AF37]
                                 py-1 px-3 font-semibold rounded-md"
                                >LogOut</button>
                            </div>
                        </div>
                        :

                        <div className="flex gap-2">
                            <Link to={'/login'}>
                                <button className={`border-2 border-black  py-1 px-3 font-semibold rounded-md ${isDark ? 'bg-darkBg text-gold border-gold' : 'bg-[#D4AF37]'}`}
                                >Login</button></Link>
                            <Link to={'/register'}>
                                <button className={`border-2 border-black  py-1 px-3 font-semibold rounded-md ${isDark ? 'bg-darkBg text-gold border-gold' : 'bg-[#D4AF37]'}`}
                                >Register</button></Link>
                        </div>
                }
            </div>
        </div>

    );
};

export default NavBer;