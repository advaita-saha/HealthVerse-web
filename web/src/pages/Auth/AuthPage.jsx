import { useState } from 'react'
import { ethers } from 'ethers'
import './AuthPage.css'

const Login = ({ accountChangedHandler, setIsLoading }) => {
    const [error, setError] = useState(null);

    const connectMetaMask = (role) => {
      if(window.ethereum)
      {
        setIsLoading(true)
        window.ethereum.request({ method: "eth_requestAccounts" })
        .then(result => {
          accountChangedHandler(result[0], role)
        })
      }
      else setError("Metamask not installed")
    }

    const roles = [
        {
            name: 'Doctor',
            icon: 'fa-solid fa-user-doctor'
        },
        {
            name: 'Patient',
            icon: 'fa-solid fa-hospital-user'
        },
        {
            name: 'Hospital',
            icon: 'fa-regular fa-hospital'
        }
    ]

    return (
      <div className="container">
        <h1 style={{ textAlign: "center", fontSize: "3.2rem", margin: "1rem 0" }}>Login Page</h1>
        <div className="login-roles">
            {
                roles.map(role => {
                    return(
                        <div className='login-role-card'>
                            <div className='auth-role-icon'><i className={role.icon} style={{ color: "var(--secondary)" }}></i></div>
                            <div className='auth-role-name'>{role.name}</div>
                            <button className="loginBtn" onClick={() => connectMetaMask(role.name)}>Connect Wallet</button>
                        </div>
                    )
                })
            }
        </div>
        {
            (error !== null) && <h1 style={{ color: "red", fontSize: "1.6rem" }}>{error}</h1>
        }
      </div>
    )
}

const Profile = ({ currUser, currBalance, isLoading }) => {
    return(
        <div className="container">
            <h1 style={{ textAlign: "center", fontSize: "3.2rem", margin: "1rem 0" }}>Profile Page</h1>
            <h1 style={{ textAlign: "center", fontSize: "3.2rem" }}>Address: {currUser}</h1>
            <h1 style={{ textAlign: "center", fontSize: "3.2rem", margin: "1rem 0" }}>
                Balance: { isLoading ? "Loading ..." : currBalance}
            </h1> 
        </div>
    )
}

const AuthPage = ({ isLoggedIn, currUser, currBalance, setIsLoggedIn, setCurrUser, setCurrBalance, role, setRole }) => {
    const [isLoading, setIsLoading] = useState(false);

    const accountChangedHandler = (newAccount, role) => {
        // update user
        setCurrUser(newAccount)
        setIsLoggedIn(true)
        setRole(role)

        // update balance
        window.ethereum.request({ method: "eth_getBalance", params: [ newAccount.toString(), 'latest' ] })
        .then(balance => {
          setCurrBalance(ethers.utils.formatEther(balance))
          setIsLoading(false)
        })
    }

    window.ethereum.on('accountsChanged', (newAccount) => accountChangedHandler(newAccount, role))

    return (
        <div className='authpage'>
        {
            isLoggedIn ?
            <Profile currUser={currUser} currBalance={currBalance} isLoading={isLoading} />
            :
            <Login  
                setIsLoading={setIsLoading} 
                accountChangedHandler={accountChangedHandler}
            />
        }
        </div>
    )
}

export default AuthPage