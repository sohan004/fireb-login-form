import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from './email.pass';




const Signin = () => {

    const emailValu = useRef()
    const [err, setErr] = useState('')
    const auth = getAuth(app)

    const handel = e => {

        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value

        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                console.log(result)
                setErr('')
                e.target.reset()
            })
            .catch(error => {
                setErr(error.message)
                console.log(error)
            })
    }


    const reset = () => {
        const eml = emailValu.current.value
        if (eml) {
            sendPasswordResetEmail(auth, eml)
                .then(() => {
                    alert('chake your email and reset your password')
                })
                .catch(
                    error => {
                        setErr(error.message)
                    }
                )

        } else {
            alert('please type your email')

        }
    }



    


    return (
        <div className='container'>
            <h1 className='text-center'>Please sign in your account !!!</h1>
            <form onSubmit={handel} className=''>
                <div>
                    <label >email</label>
                    <input ref={emailValu} required className='p-1 w-100' type="email" name="email" />
                </div>
                <div>
                    <label >password</label>
                    <input required type="password" name="pass" className='p-1 w-100' />
                    <p>forget your password <button className='btn btn-link' onClick={reset}>reset</button></p>
                </div>
                <input className='btn btn-primary my-3' type="submit" value="log in" />
                <p className='text-danger'>{err}</p>

                <p>you have no account !! please <Link to='/register'>register</Link></p>

            </form>
        </div>
    );
};

export default Signin;