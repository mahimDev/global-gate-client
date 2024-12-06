import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import MyVisaApplicationCard from "../../Components/MyVisaApplicationCard/MyVisaApplicationCard";

const MyVisaApplication = () => {
    const [visa, setVisa] = useState([])
    const [value, setValue] = useState('')
    const { user, isDark } = useContext(AuthContext)
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:2000/applyVisa/${email}?search=${value}`)
            .then(res => res.json())
            .then(data => {
                setVisa(data)
                console.log(data)
            })
    }, [email, value])
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     fetch(`http://localhost:2000/visa?search=${value}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })

    // }
    console.log(value)
    return (
        <div className="min-h-[90vh]">
            {visa.length ?

                <div>
                    <h1 className={`text-center ${isDark ? 'text-gold' : 'text-[#1A1A1A]'} font-bold text-6xl my-20`}>My Visa Application</h1>
                    <div className="flex justify-center my-9">
                        <form
                        // onSubmit={handleSubmit}

                        >
                            <input
                                onChange={(e) => setValue(e.target.value)}
                                className={`border py-3 pl-4 pr-10  rounded-l-xl text-lg`}
                                placeholder="Search country name"
                                type="text" name="search" id="" />
                            <input

                                className={`border py-3 pl-4 pr-10  rounded-r-xl font-bold text-lg`}
                                value="Submit" id="" />

                        </form>
                    </div>
                    {
                        visa.map(item => <MyVisaApplicationCard key={item._id} item={item} setVisa={setVisa} visa={visa}></MyVisaApplicationCard>)
                    }
                </div>
                :

                <h1 className="text-5xl text-center mt-20 font-bold text-[#D4AF37] ">Not Fount</h1>
            }
        </div>
    );
};

export default MyVisaApplication;