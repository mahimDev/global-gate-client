
const Login = () => {
    return (
        <div className="flex justify-center">
            <div className=" mt-20 shadow-2xl shadow-[#53492a8e] w-fit p-10 rounded-md">
                <form >

                    <h1 className="text-5xl text-center font-semibold">Sign In</h1>
                    <div className="flex border-b-4 border-[#D4AF37] gap-2 my-10" >
                        <img className="w-10 mb-1" src="https://img.icons8.com/?size=100&id=12623&format=png&color=D4AF37" alt="" />
                        <input

                            className=" pl-3 pr-16 py-2 border-none"
                            placeholder="Email Address"
                            type="text"
                            name="email"
                            id="" />
                    </div>
                    <div className="flex border-b-4 border-[#D4AF37] gap-2 my-10" >
                        <img className="w-10 mb-2" src="https://img.icons8.com/?size=100&id=2862&format=png&color=D4AF37" alt="" />
                        <input

                            className=" pl-3 pr-16 py-2 border-none"
                            placeholder="Password"
                            type="text"
                            name="email"
                            id="" />
                    </div>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-1">
                            <input
                                className=""
                                type="checkbox"
                                name=""
                                id="" /> Remember me</p>
                        <p className="border-b cursor-pointer">Forget Password</p>
                    </div>
                    <div className="flex mt-10">
                        <button className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-[#D4AF37] hover:shadow-xl duration-300">Sign In</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;