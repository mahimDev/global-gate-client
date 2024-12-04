import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";

const VisasDetails = () => {
    const { user } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    // const [formData, setFormData] = useState({})
    const { id } = useParams()
    const loaderData = useLoaderData()
    const item = loaderData.find(data => data.id == id)
    const {
        age_restriction,
        application_method,
        country_image,
        flag_image,
        country_name,
        description,
        fee,
        processing_time,
        required_documents,
        validity,
        visa_type,
    } = item
    const appliedDate = new Date().toLocaleDateString()
    // 

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const firstName = form.get('firstName')
        const lastName = form.get('lastName')
        const email = user?.email;
        console.log({ email, firstName, lastName, appliedDate, fee });
        setIsOpen(false); // Close modal after submission
        toast.apply("Application submitted successfully!");
    };

    return (
        <div className="w-10/12 mx-auto mt-20 flex gap-20">
            <div className="p-2 border rounded-md bg-amber-400">
                <img className=" h-[70vh] rounded-md" src={country_image} alt="" />
            </div>
            <div>
                <div className=" flex">
                    <div className=" ">
                        <h1 className="text-4xl font-semibold ">{country_name}</h1>
                        <p className="mt-7 "><strong>Visa Type:</strong> <br /> {visa_type}</p>
                        <p className="mt-3"><strong>Application Method: </strong> <br /> {application_method}</p>
                        <p className="mt-3"><strong>Validity:</strong> <br /> {validity}</p>
                        <p className="mt-3"><strong>Processing Time:</strong> <br /> {processing_time}</p>
                    </div>
                    <p className="text-[#d5a403] text-4xl font-semibold rounded-md"> {fee}</p>
                </div>
                <div className="flex mt-10">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#D4AF37] hover:shadow-xl duration-300">Apply for the visa</button>
                </div>
            </div>

            {/* form 2 */}
            <div className="p-4">
                {/* Modal */}
                {isOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-start">
                        <div
                            className="bg-white rounded-lg shadow-lg p-6 w-96 mt-28 transform transition-all duration-300 ease-out translate-y-[-100px] scale-90 opacity-0 animate-slide-in"
                            style={{
                                animation: "slide-in 0.5s ease-out forwards",
                            }}
                        >
                            <h2 className="text-xl font-semibold mb-4">Visa Application Form</h2>
                            <form onSubmit={handleSubmit}>
                                {/* Email Field */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Email</label>
                                    {/* <input
                                        type="email"
                                        name="email"
                                        value={user?.email}

                                        className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    /> */}
                                    <p name="email" className="w-full px-3 py-2 border rounded-lg">{user?.email} </p>
                                </div>

                                {/* First Name */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        className="w-full px-3 py-2 border rounded-lg"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        className="w-full px-3 py-2 border rounded-lg"
                                    />
                                </div>

                                {/* Applied Date */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Applied Date</label>
                                    {/* <input
                                        type="text"
                                        name="appliedDate"
                                        value={appliedDate}

                                        className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    /> */}
                                    <p name="email" className="w-full px-3 py-2 border rounded-lg">{appliedDate} </p>
                                </div>

                                {/* Fee */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Fee</label>
                                    {/* <input
                                        type="text"
                                        name="fee"
                                        value={fee}

                                        className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    /> */}
                                    <p name="email" className="w-full px-3 py-2 border rounded-lg">{fee} </p>
                                </div>

                                {/* Submit Button */}
                                <div className="">
                                    <button
                                        type="submit"
                                        className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#D4AF37] hover:shadow-xl duration-300"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </form>

                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VisasDetails;