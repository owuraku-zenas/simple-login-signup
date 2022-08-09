import axios from '../api/axios'
import React, { useEffect, useState } from 'react'

const Login = ({ setPageToggle, pageToggle, setIsLoggedIn, setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // Check if token in localStorage
        const user = localStorage.getItem('user')
        if (user) {
            setUser(user)
            setIsLoggedIn(true)
        }
    }, [setUser, setIsLoggedIn])

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
                setIsLoggedIn(true);
            }
            console.log(response);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setError("Login Failed")
            setIsLoading(false)
        }
    }

    return (
        <div className='login'>

            <h1>
                Login Page
            </h1>
            <div>
                {
                    error ? <p style={{ color: "red" }}>{error}</p> : null
                }
                <form onSubmit={
                    (event) => {
                        event.preventDefault()
                        login()
                    }
                }>
                    <input type="text"
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input type="password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type='submit'>
                        {
                            isLoading ? "Loading..." : "Login"
                        }
                    </button>
                </form>
                <p onClick={() => setPageToggle(!pageToggle)} >Don't have an accout? Sign Up</p>
            </div>
        </div>
    )
}

export default Login