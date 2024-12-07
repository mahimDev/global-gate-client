import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Professional = () => {
    const { isDark } = useContext(AuthContext)
    return (
        <div className="pt-10">
            <div>
                <h1 className={` ${isDark ? 'text-gold' : 'text-darkBg'} font-semibold text-6xl mb-20 mt-10 ml-5`}>Our Professional team member</h1>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
                {/* card 1 */}
                <div className="relative group w-fit">
                    <div className=" duration-500 w-[400px] h-[280px] group-hover:bg-gold  p-16 rounded-t ">

                    </div>
                    <div className=" duration-500 bg-gold w-[400px] h-[280px] group-hover:bg-transparent p-16 rounded-b">
                    </div>
                    <div className="absolute top-[20%] left-[13%] overflow-hidden rounded">
                        <img className=" w-[300px] h-[400px] object-cover rounded transform hover:scale-110  duration-500" src="https://i.ibb.co.com/0nWCqXg/employees-using-laptop-800x450.jpg" alt="" />
                    </div>
                    <h1 className="absolute top-[5%] left-16  text-xl font-medium text-gray-400 ">Co-Founder</h1>
                    <h1 className="absolute top-[11%] left-16  text-2xl font-medium text-gold group-hover:text-darkBg">Leslie Alexander</h1>
                </div>
                {/* card 2 */}
                <div className="relative group w-fit">
                    <div className=" duration-500 w-[400px] h-[280px] group-hover:bg-gold  p-16 rounded-t ">

                    </div>
                    <div className=" duration-500 bg-gold w-[400px] h-[280px] group-hover:bg-transparent p-16 rounded-b">
                    </div>
                    <div className="absolute top-[20%] left-[13%] overflow-hidden rounded">
                        <img className=" w-[300px] h-[400px] object-cover rounded transform hover:scale-110  duration-500" src="https://i.ibb.co.com/Jc2qpw4/woman-in-wheelchair-working-800x450.jpg" alt="" />
                    </div>
                    <h1 className="absolute top-[5%] left-16  text-xl font-medium text-gray-400 ">Manager</h1>
                    <h1 className="absolute top-[11%] left-16  text-2xl font-medium text-gold group-hover:text-darkBg">Kristin Watson</h1>
                </div>
                {/* card 3 */}
                <div className="relative group w-fit">
                    <div className=" duration-500 w-[400px] h-[280px] group-hover:bg-gold  p-16 rounded-t ">

                    </div>
                    <div className=" duration-500 bg-gold w-[400px] h-[280px] group-hover:bg-transparent p-16 rounded-b">
                    </div>
                    <div className="absolute top-[20%] left-[13%] overflow-hidden rounded">
                        <img className=" w-[300px] h-[400px] object-cover rounded transform hover:scale-110  duration-500" src="https://i.ibb.co.com/pR8Fyy1/group-of-happy-students-and-their-teacher-using-laptop-during-a-class-at-the-university-jpg-s1024x10.jpg" alt="" />
                    </div>
                    <h1 className="absolute top-[5%] left-16  text-xl font-medium text-gray-400 ">President of Sales</h1>
                    <h1 className="absolute top-[11%] left-16  text-2xl font-medium text-gold group-hover:text-darkBg">Ronald Richards</h1>
                </div>
                {/* card 4 */}
                <div className="relative group w-fit">
                    <div className=" duration-500 w-[400px] h-[280px] group-hover:bg-gold  p-16 rounded-t ">

                    </div>
                    <div className=" duration-500 bg-gold w-[400px] h-[280px] group-hover:bg-transparent p-16 rounded-b">
                    </div>
                    <div className="absolute top-[20%] left-[13%] overflow-hidden rounded">
                        <img className=" w-[300px] h-[400px] object-cover rounded transform hover:scale-110  duration-500" src="https://i.ibb.co.com/nz45cVG/recalibrating-career-services-understanding-of-and-approach-to-helping-todays-students-xlarge.png" alt="" />
                    </div>
                    <h1 className="absolute top-[5%] left-16  text-xl font-medium text-gray-400 ">RR Officer</h1>
                    <h1 className="absolute top-[11%] left-16  text-2xl font-medium text-gold group-hover:text-darkBg">Bessie Cooper</h1>
                </div>

            </div>
        </div>
    );
};
// transform group-hover:scale-110 transition duration-700 ease-in-out
export default Professional;