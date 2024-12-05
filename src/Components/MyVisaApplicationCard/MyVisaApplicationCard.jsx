import Swal from "sweetalert2";

const MyVisaApplicationCard = (props = {}) => {
    const { item, setVisa, visa } = props || {}
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
        appliedDate,
        email,
        firstName,
        lastName,
        _id
    } = item
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You be cancelled application !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "no",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2000/applicationDelete/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(dltData => {
                        console.log(dltData)
                        if (dltData.deletedCount > 0) {
                            Swal.fire({
                                title: "canceled!",
                                text: "Your Visa Application  has been canceled.",
                                icon: "success"
                            });
                            const remaining = visa.filter(item => item._id !== _id)

                            setVisa(remaining)
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

                        <div className="flex justify-around items-center ">
                            <h1 className="text-4xl  font-semibold ">{country_name}</h1>

                        </div>
                        <div className="flex justify-around  gap-5">
                            <div className="space-y-2 flex-1">
                                <p><strong>Visa Type:</strong> <br /> {visa_type}</p>
                                <p><strong>Validity:</strong> <br /> {validity}</p>
                                <p><strong>Age Restriction:</strong> <br /> {age_restriction}</p>
                                <p><strong>Processing Time:</strong> <br /> {processing_time}</p>
                            </div>
                            <div className="space-y-2 flex-1 ">
                                <p className="  "><strong>Fee: </strong> <br /> {fee}</p>
                                <p><strong>Required Documents:</strong> <br /> {required_documents}</p>
                                <p><strong>Application Method: </strong> <br /> {application_method}</p>
                                <p><strong>Description: </strong> <br /> {description}</p>
                            </div>
                            <div className="space-y-2 flex-1 ">
                                <p className="text-[#108b08]   "><strong>Email: </strong> <br /> {email}</p>
                                <p><strong>First Name:</strong> <br /> {firstName}</p>
                                <p><strong>Last Name: </strong> <br /> {lastName}</p>
                                <p><strong>Applied Date: </strong> <br /> {appliedDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-4 ">

                        <button
                            onClick={() => handleDelete(_id)}
                            className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#d4a537] hover:shadow-xl duration-300"
                        >Cancel</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyVisaApplicationCard;