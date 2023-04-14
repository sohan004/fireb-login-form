import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from './email.pass';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';

const Register = () => {

    const [err, setErr] = useState('')
    const auth = getAuth(app)

    const handel = e => {

        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value
        const inName = e.target.name.value

        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setErr('')
                updt(result.user, inName)
                varification(result.user)
                e.target.reset()
            })
            .catch(error => {
                setErr(error.message)
                console.log(error)
            })
    }



    const [typ, setTyp] = useState('password')

    const typChk = () => {
        { typ === 'password' ? setTyp('text') : setTyp('password') }
    }



    const updt = (u, name) => {
        updateProfile(u, {
            displayName: name
        })
            .then(() => console.log('succesfully'))
            .catch(() => console.log('noooooooooo'))

    }


    const varification = (u) => {
        sendEmailVerification(u)
            .then(() => {
                alert('go to your email inbox and verifyd your account')
            })
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Please register first !!!</h1>
            <form onSubmit={handel} className=''>
                <div>
                    <label >name</label>
                    <input className='p-1 w-100' type="text" name="name" />
                </div>
                <div>
                    <label >email</label>
                    <input className='p-1 w-100' type="email" name="email" />
                </div>
                <div>
                    <label >password</label>
                    <input type={typ} name="pass" className='p-1 w-100' />
                </div>
                <input className='btn btn-primary my-3' type="submit" value="log in" />
                <div>
                    <label htmlFor="">show password</label>
                    <input onClick={typChk} type="checkbox" name="" id="" />
                </div>
                <p className='text-danger'>{err}</p>

                <p>Already you have account !! please <Link to='/log_in'>sign in</Link></p>

            </form>
        </div>
    );
};

export default Register;