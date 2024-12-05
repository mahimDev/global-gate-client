
const MyAddedVisasCard = (props = {}) => {
    const { visa } = props || {}
    const {
        age_restriction,
        application_method,
        country_image,
        flag_image,
        country_name,
        description,
        fee,
        id,
        processing_time,
        required_documents,
        validity,
        visa_type,
        _id
    } = visa
    console.log(visa)
    return (
        <div>
            <div className="w-11/12 mx-auto mt-20 flex gap-20">
                <div className="p-2 h-[40vh] border rounded-md bg-amber-400">
                    <img className=" h-full rounded-md" src={country_image} alt="" />
                </div>
                <div className="border">
                    <div className=" flex">
                        <div className="">
                            <h1 className="text-4xl font-semibold ">{country_name}</h1>
                            <p className="mt-7 "><strong>Visa Type:</strong> <br /> {visa_type}</p>
                            <p className="mt-3"><strong>Validity:</strong> <br /> {validity}</p>
                            <p className="mt-3"><strong>Age Restriction:</strong> <br /> {age_restriction}</p>
                            <p className="mt-3"><strong>Processing Time:</strong> <br /> {processing_time}</p>
                            <p className="mt-3"><strong>Required Documents:</strong> <br /> {required_documents}</p>
                            <p className="mt-3"><strong>Application Method: </strong> <br /> {application_method}</p>
                            <p className="mt-3 "><strong>Description: </strong> <br /> {description}</p>
                        </div>
                    </div>
                    <p className="text-[#d5a403] text-2xl font-semibold rounded-md  w-32"><strong>Fee: <br /></strong> {fee}</p>
                    <div className="flex mt-10">
                        <button

                            className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#D4AF37] hover:shadow-xl duration-300"
                        >Apply for the visa</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyAddedVisasCard;