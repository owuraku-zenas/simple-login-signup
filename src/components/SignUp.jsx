import React, { useState } from 'react'
import axios from '../api/axios';

const SignUp = ({ setPageToggle, pageToggle, setLoggedIn, setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [field, setField] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const login = async () => {
        setIsLoading(true)
        setError("")
        try {
            const response = await axios.post('/login', {
                email: email,
                password: password
            }, {
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })

            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response?.data?.user))
                setUser(JSON.stringify(response.data.user));
                setLoggedIn(true);
            }
            console.log(response);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setError("Login Failed")
            setIsLoading(false)
        }
    }

    const signUp = async () => {
        setIsLoading(true)
        setError("")
        try {
            const response = await axios.post('/signup', {
                email: email,
                password: password,
                field: field,
                name: name
            }, {
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })

            if (response.status === 200) {
                login()
            }

        } catch (error) {
            console.log(error);
            setError("SignUp Failed")
            setIsLoading(false)
        }
    }
    return (
        <div className='login'>
            <h1>
                Sign Up Page
            </h1>
            <div>
                {
                    error ? <p style={{ color: "red" }}>{error}</p> : null
                }
                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        console.log('submit');
                        signUp()
                    }
                }>
                    <input
                        type="text"
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Enter Flied'
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                    />
                    <input type="text"
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>
                        {
                            isLoading ? "Loading..." : "Sign Up"
                        }
                    </button>
                </form>
                <p onClick={() => setPageToggle(!pageToggle)} >Already have an account? Login</p>
            </div>
        </div>
    )
}

export default SignUp