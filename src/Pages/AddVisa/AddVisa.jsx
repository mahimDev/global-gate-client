import { toast } from "react-toastify";

const AddVisa = () => {

    const documentOptions = [
        "Valid passport",
        "Visa application form",
        " Health insurance",
        "Travel itinerary"
    ];

    // age_restriction,
    // application_method,
    // country_image,
    // flag_image,
    // country_name,
    //     description,
    //     fee,
    //     processing_time,
    //     required_documents,
    //     validity,
    //     visa_type,

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const country_image = form.get('countryImage')
        const country_name = form.get('countryName')
        const visa_type = form.get('visaType')
        const processing_time = form.get('processingTime')
        const age_restriction = form.get('ageRestriction')
        const validity = form.get('validity')
        const fee = form.get('fee')
        const application_method = form.get('applicationMethod')
        const required_documents = form.get('checkbox')
        const description = form.get('description')
        const visaInfo = { country_image, country_name, visa_type, processing_time, age_restriction, fee, validity, application_method, required_documents, description };
        fetch('http://localhost:2000/addVisa', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(visaInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("Successfully added Visa")
                }
            })

    };

    return (
        <div className="p-6 w-11/12 mx-auto">
            <h2 className="text-4xl text-center  font-bold my-8">Add Visa</h2>
            <form onSubmit={handleSubmit} >
                <div className="flex gap-10 justify-between">
                    <div className="space-y-6 w-full">
                        {/* Country Image */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Country Image URL</label>
                            <input
                                type="text"
                                name="countryImage"
                                placeholder="Paste image URL here"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Country Name */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Country Name</label>
                            <input
                                type="text"
                                name="countryName"
                                placeholder="Enter country name"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Visa Type */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Visa Type</label>
                            <select
                                name="visaType"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            >
                                <option value="Tourist Visa">Tourist Visa</option>
                                <option value="Student Visa">Student Visa</option>
                                <option value="Official Visa">Official Visa</option>
                            </select>
                        </div>

                        {/* Processing Time */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Processing Time</label>
                            <input
                                type="text"
                                name="processingTime"
                                placeholder="e.g., 15-30 days"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-6 w-full">

                        {/* Age Restriction */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Age Restriction</label>
                            <input
                                type="text"
                                name="ageRestriction"
                                placeholder="Enter age restriction"
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>

                        {/* Fee */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Fee</label>
                            <input
                                type="text"
                                name="fee"
                                placeholder="Enter visa fee"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Validity */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Validity</label>
                            <input
                                type="text"
                                name="validity"
                                placeholder="e.g., 6 months, 1 year"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Application Method */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Application Method</label>
                            <input
                                type="text"
                                name="applicationMethod"
                                placeholder="e.g., Online, Embassy"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>


                    </div>
                </div>
                {/* end */}
                {/* Required Documents */}
                <div className="my-4">
                    <label className="block text-gray-700 text-sm mb-2">Required Documents</label>
                    <div className="space-y-2">
                        {documentOptions.map((doc, index) => (
                            <label key={index} className="flex  items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    value={doc}
                                    className="form-checkbox"
                                />
                                <span>{doc}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-700 text-sm mb-2">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter visa description"
                        className="w-full px-3 py-2 border rounded-lg"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-[#D4AF37] font-semibold py-2 px-4 rounded hover:bg-[#c99b07] hover:shadow-xl w-full"
                    >
                        Add Visa
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddVisa;
