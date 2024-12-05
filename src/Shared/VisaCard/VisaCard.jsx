
const VisaCard = () => {
    return (
        <div className=" my-40 ">
            <div>
                <h1 className="text-center text-[#1A1A1A] font-bold text-7xl mb-20">Outstanding Immigration <br />
                    Visa Services.</h1>
            </div>
            <div className="flex">
                {/* student */}
                <div className="relative max-w-md mx-auto  bg-white rounded shadow-2xl ">
                    <div className="overflow-hidden group">
                        {/* Image Section */}
                        <img
                            src="https://i.ibb.co.com/8m7tgZY/australia.jpg" // Replace with your image URL
                            alt="Student Visa"
                            className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-5  absolute bg-white/25 top-[75%] right-[20%] backdrop-blur-lg rounded-md shadow-2xl">
                        <h3 className="text-2xl font-semibold text-gray-800">Student Visa</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Processing times vary by visa type and country, ranging from a few weeks to several months.
                        </p>

                        {/* Button */}
                        <div className="mt-4">
                            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                                Read More
                                <span className="ml-2  transform transition-transform group-hover:translate-x-1 duration-300">
                                    ➜
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* business*/}
                <div className="relative max-w-md mx-auto  bg-white rounded shadow-2xl ">
                    <div className="overflow-hidden group">
                        {/* Image Section */}
                        <img
                            src="https://i.ibb.co.com/znPKq81/us.jpg" // Replace with your image URL
                            alt="Business Image"
                            className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-5  absolute bg-white/25 top-[75%] left-[10%] right-[10%] backdrop-blur-lg rounded-md shadow-2xl">
                        <h3 className="text-2xl font-semibold text-gray-800">Business Visa</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Processing times vary by visa type and country, ranging from a few weeks to several months.
                        </p>

                        {/* Button */}
                        <div className="mt-4">
                            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                                Read More
                                <span className="ml-2  transform transition-transform group-hover:translate-x-1 duration-300">
                                    ➜
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* family*/}
                <div className="relative max-w-md mx-auto  bg-white rounded shadow-2xl ">
                    <div className="overflow-hidden group">
                        {/* Image Section */}
                        <img
                            src="https://i.ibb.co.com/M5wFtYT/United-Arab-Emirates.jpg" // Replace with your image URL
                            alt="Student Visa"
                            className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-5  absolute bg-white/25 top-[75%] left-[20%] backdrop-blur-lg rounded-md shadow-2xl">
                        <h3 className="text-2xl font-semibold text-gray-800">Family Visa</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Processing times vary by visa type and country, ranging from a few weeks to several months.
                        </p>

                        {/* Button */}
                        <div className="mt-4">
                            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                                Read More
                                <span className="ml-2  transform transition-transform group-hover:translate-x-1 duration-300">
                                    ➜
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;
