import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const MyVisaApplication = () => {
    const [data, setData] = useState([])
    const { user } = useContext(AuthContext)
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:2000/applyVisa/${email}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [email])
    console.log(data)
    return (
        <div>
            {data.length}
        </div>
    );
};

export default MyVisaApplication;