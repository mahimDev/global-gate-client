import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyAddedVisasCard = (props = {}) => {
    const { visa, data, setData } = props || {}
    const [isOpen, setIsOpen] = useState(false);
    const {
        age_restriction,
        application_method,
        country_image,
        country_name,
        description,
        fee,
        processing_time,
        required_documents,
        validity,
        visa_type,
        _id
    } = visa
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const country_name = form.get('countryName')
        const country_image = form.get('countryImage')
        const visa_type = form.get('visaType')
        const processing_time = form.get('processingTime')
        const fee = form.get('fee')
        const validity = form.get('validity')
        const updateInfo = { country_name, country_image, visa_type, processing_time, fee, validity }
        console.log(updateInfo)
        fetch(`http://localhost:2000/updateVisa/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Updated successfully")
                }
                setIsOpen(false)
            })
    }

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2000/delete/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(dltData => {

                        if (dltData.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Visa has been deleted.",
                                icon: "success"
                            });
                            const remaining = data.filter(item => item._id !== _id)
                            console.log(remaining)
                            setData(remaining)
                        }

                    })


            }
        });

    }
    return (
        <div>
            <div className="w-11/12 mx-auto mt-5 flex gap-20 border p-2 rounded-md">
                <div className="p-2 min-w-fit h-[40vh] border rounded-md bg-amber-400">
                    <img className=" h-full rounded-md" src={country_image} alt="" />
                </div>
                <div className="w-full">
                    <div className=" ">
                        <h1 className="text-4xl text-center font-semibold mb-10">{country_name}</h1>

                        <div className="flex justify-around  gap-5">
                            <div className="space-y-2 ">
                                <p><strong>Visa Type:</strong> <br /> {visa_type}</p>
                                <p><strong>Validity:</strong> <br /> {validity}</p>
                                <p><strong>Age Restriction:</strong> <br /> {age_restriction}</p>
                                <p><strong>Processing Time:</strong> <br /> {processing_time}</p>
                            </div>
                            <div className="space-y-2 ">
                                <p className="text-[#d5a403] text-lg  rounded-md  w-32"><strong>Fee: </strong> {fee}</p>
                                <p><strong>Required Documents:</strong> <br /> {required_documents}</p>
                                <p><strong>Application Method: </strong> <br /> {application_method}</p>
                                <p><strong>Description: </strong> <br /> {description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-4 ">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#3fd437] hover:shadow-xl duration-300"
                        >Update</button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#d43737] hover:shadow-xl duration-300"
                        >Delete</button>

                    </div>
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
                            <h2 className="text-xl font-semibold mb-4">Update information</h2>
                            <form
                                onSubmit={handleSubmit}
                            >
                                {/* country name */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Country name</label>
                                    <input
                                        type="text"
                                        name="countryName"
                                        defaultValue={country_name}
                                        className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    />

                                </div>

                                {/* country photo */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Country photoURL</label>
                                    <input
                                        type="text"
                                        name="countryImage"
                                        defaultValue={country_image}
                                        className="w-full px-3 py-2 border rounded-lg"
                                    />
                                </div>

                                {/* visa type */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Visa Type</label>
                                    <select
                                        name="visaType"
                                        className="w-full px-3 py-2 border rounded-lg"

                                    >
                                        <option value="Business Visa">Business Visa</option>
                                        <option value="Tourist Visa">Tourist Visa</option>
                                        <option value="Student Visa">Student Visa</option>
                                        <option value="Official Visa">Official Visa</option>
                                    </select>
                                </div>

                                {/* ProProcessing_time.*/}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Processing time</label>
                                    <input
                                        type="text"
                                        name="processingTime"
                                        defaultValue={processing_time}
                                        className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    />

                                </div>

                                {/*Fee*/}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Fee</label>
                                    <input
                                        type="text"
                                        name="fee"
                                        defaultValue={fee}
                                        className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    />
                                </div>
                                {/*Validity*/}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Validity</label>
                                    <input
                                        type="text"
                                        name="validity"
                                        defaultValue={validity}
                                        className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    />

                                </div>
                                {/* Application_method. */}
                                {/* <div className="mb-4">
                                    <label className="block text-gray-700 text-sm mb-2">Application Method</label>
                                    <input
                                        type="text"
                                        name="fee"
                                        value={application_method}
                                        className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    />
                                </div> */}

                                {/* Submit Button */}
                                <div className="">
                                    <button

                                        type="submit"
                                        className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#D4AF37] hover:shadow-xl duration-300"
                                    >
                                        Update
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

export default MyAddedVisasCard;