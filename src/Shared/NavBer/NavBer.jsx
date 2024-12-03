import { NavLink } from "react-router-dom";

const NavBer = () => {
    return (

        <div className="top-0 sticky z-30 bg-[#D4AF37] backdrop-blur-xl w-11/12 mx-auto ">
            <div className="flex justify-between w-11/12 mx-auto items-center py-5  ">
                <img className=" h-14 bg-black rounded-full" src="https://img.icons8.com/?size=100&id=23734&format=png&color=D4AF37" alt="" />
                <div className="flex items-center gap-4">
                    <ul className="flex gap-4 text-xl  font-semibold">
                        <NavLink ><li>Home</li></NavLink>
                        <NavLink ><li>All visas</li></NavLink>
                        <NavLink ><li>Add Visa</li></NavLink>
                        <NavLink ><li>My added visas</li></NavLink>
                        <NavLink ><li>My Visa applications</li></NavLink>
                    </ul>
                </div>
                <button className="border-2 border-black  py-1 px-3 font-semibold rounded-md">Login</button>
            </div>
        </div>

    );
};

export default NavBer;