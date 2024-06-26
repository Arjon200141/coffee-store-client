import { useContext } from "react";
import { authContext } from "./Providers/AuthProvider";

const LogIn = () => {

    const { signInUser } = useContext(authContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                const user ={
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:5000/user',{
                    method: 'PATCH',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                })
                
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="font-playfair">
            <div className="hero min-h-screen bg-base-200">
                <div>
                    <h2 className="text-4xl font-semibold text-center my-12">Log In Now</h2>
                    <div className="card w-[650px] shrink-0 shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;