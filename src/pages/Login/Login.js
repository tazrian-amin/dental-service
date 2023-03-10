import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='p-7 shadow-xl rounded-2xl w-[385px]'>
                <h2 className='text-xl font-semibold text-center mb-5'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="password" className="input input-bordered w-full" />
                        <label className="label">
                            <a href='#home'><span className="label-text-alt">Forgot Password?</span></a>
                        </label>
                    </div>
                    <input type="submit" value='LOGIN' className='btn btn-accent w-full text-white my-5' />
                </form>
                <p className='text-center text-sm'>New to Dental Care? <Link to='/register'><span className='text-secondary'>Create new account</span></Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;