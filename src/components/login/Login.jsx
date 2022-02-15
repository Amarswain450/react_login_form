import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form';
import {
    TextField, 
    Button, 
    InputAdornment,
} from "@mui/material";
import logoImg from '../../imgs/webileapps.svg'
import {Link} from 'react-router-dom';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="login__component">
                <div className="login__logo">
                    <img src={logoImg} alt="logoImg" />
                </div>
                <div className="login__form">
                    <div className="login__heading">
                        <h3>Admin Login</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <TextField
                                label="Email Address"
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        @webileapps.com
                                    </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                fullWidth
                                name="email"
                                {...register('email', { required: "Email is required" })}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                            />
                        </div>
                        <div className='mb-4'>
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                name="password"
                                {...register('password', { required: "Password is required" })}
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                            />
                        </div>
                        <Button variant="contained" fullWidth color="primary" type="submit">
                            Login
                        </Button>
                        <div className="login__info">
                            <p>This login is only for ADMIN!</p>
                        </div>
                        <hr className='login__hr' />
                        <div className="login__account__info">
                            <Link to="#" className='new__account__class'>Create a new password</Link>
                            <Link to="#" className='forgot__password__class'>Forgot password?</Link>
                        </div>
                    </form>  
                </div>
            </div>
        </>
    )
}

export default Login;
