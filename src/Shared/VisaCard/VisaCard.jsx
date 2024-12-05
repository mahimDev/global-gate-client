
const VisaCard = () => {
    return (
        <div className="max-w-md mx-auto overflow-hidden bg-white rounded-sm shadow-md">
            <div className="relative group">
                {/* Image Section */}
                <img
                    src="https://i.ibb.co.com/znPKq81/us.jpg" // Replace with your image URL
                    alt="Student Visa"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />

            </div>

            {/* Content Section */}
            <div className="p-5 ">
                <h3 className="text-lg font-semibold text-gray-800">Student Visa</h3>
                <p className="mt-2 text-sm text-gray-600">
                    Processing times vary by visa type and country, ranging from a few weeks to several months.
                </p>

                {/* Button */}
                <div className="mt-4">
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                        Read More
                        <span className="ml-2 transform transition-transform group-hover:translate-x-1 duration-300">
                            ➜
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;
