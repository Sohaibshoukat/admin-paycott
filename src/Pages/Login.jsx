import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../Context/Alert/AlertContext";
import { BaseURL } from "../assets/Data/BaseURL";

const Login = () => {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const [isSubmitting, setisSubmitting] = useState(false)


    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!isSubmitting) {
            setisSubmitting(true)
            try {

                const response = await fetch(`${BaseURL}/adminauth/loginAdmin`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ Email, Password }),
                });


                const data = await response.json();
                if (response.ok) {
                    setisSubmitting(false)
                    sessionStorage.setItem("token", data.AdminODSToken);
                    setEmail('')
                    setPassword('')
                    showAlert('Login Success', 'success');
                    navigate("/admin-dashboard/");
                } else {
                    setisSubmitting(false)
                    showAlert(data.error, 'danger')
                }
            } catch (error) {
                console.log(error)
                setisSubmitting(false)
                showAlert(error.error, 'danger');
            }
        }
    };

    return (
        <>
            <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white ">
                <div className=" max-h-8">
                    <Link to="/">
                        <h1 className="ml-2 oxygen-bold text-3xl animate__animated animate__backInLeft animate__slow">paycott.</h1>
                    </Link>
                </div>
            </div>
            <div className="bg-light">
                <section className="h-[90vh] md:h-[95vh] flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 my-2 mx-5 md:mx-0 md:my-0">
                    <div className="mx-6 font-pop bg-white p-8 h-fit my-10 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Welcome to Paycott.</h2>
                        <p className="text-gray-600 mb-6 max-w-sm">To login to your Paycott account we need the Email registered on your account</p>
                        <form onSubmit={handleLogin} className="flex flex-col gap-2">
                            {/* Email input */}
                            <input
                                className="w-full px-6 border-2 border-transparent font-pop text-lg rounded-full  bg-[#E8E8E8] py-2 focus:border-primarygreen focus:outline-none"
                                type="Email"
                                name="Email"
                                value={Email}
                                // required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                            />
                            {/* Password input */}
                            <input
                                className="w-full px-6 border-2 border-transparent font-pop text-lg rounded-full  bg-[#E8E8E8] py-2 focus:border-primarygreen focus:outline-none"
                                type="Password"
                                name="Password"
                                value={Password}
                                // required
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <button className={`my-4 w-full bg-green-500 hover:bg-transparent  hover:bg-white-500 font-semibold hover:text-black font-pop text-xl py-3 px-4 border border-black-500 hover:border-green-500 rounded-full  text-white animate__animated animate__backInUp ${isSubmitting && "opacity-30"} `}>
                                Login
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;
