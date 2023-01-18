import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const handleRegister = data => {
        console.log(data);
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='p-7 shadow-xl rounded-2xl w-[385px]'>
                <h2 className='text-xl font-semibold text-center mb-5'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type="text" className="input input-bordered w-full" />
                    </div>
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
                    </div>
                    <input type="submit" value='Register' className='btn btn-accent w-full text-white my-5' />
                </form>
                <p className='text-center text-sm'>Already have an account? <Link to='/login'><span className='text-secondary'>Login</span></Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;