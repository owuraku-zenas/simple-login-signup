import React from 'react'

const Home = ({ user, setIsLoggedIn, setUser }) => {

    const signOut = () => {
        setUser({})
        localStorage.clear()
        setIsLoggedIn(false)     
    }

    return (

        <div className='home'>

            <h1>
                User Details
            </h1>
            <div>
                <h2>
                    Name: <span> {JSON.parse(user).name} </span>
                </h2>
            </div>
            <div>
                <h2>
                    Email: <span> {JSON.parse(user).email} </span>
                </h2>
            </div>
            <div>
                <h2>
                    Field: <span> {JSON.parse(user).field} </span>
                </h2>
            </div>
            <button onClick={() => signOut() }>Sign Out</button>
        </div>
    )
}

export default Home