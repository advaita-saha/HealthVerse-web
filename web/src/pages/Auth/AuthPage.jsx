import { useState } from 'react'
import { ethers } from 'ethers'
import './AuthPage.css'

const Login = ({ setIsLoggedIn, setCurrUser, setCurrBalance, setIsLoading }) => {
    const [error, setError] = useState(null);

    const connectMetaMask = () => {
      if(window.ethereum)
      {
        setIsLoading(true)
        window.ethereum.request({ method: "eth_requestAccounts" })
        .then(result => {
          accountChangedHandler(result[0])
        })
      }
      else setError("Metamask not installed")
    }

    const accountChangedHandler = (newAccount) => {
        // update user
        setCurrUser(newAccount)
        setIsLoggedIn(true)

        // update balance
        window.ethereum.request({ method: "eth_getBalance", params: [ newAccount.toString(), 'latest' ] })
        .then(balance => {
          setCurrBalance(ethers.utils.formatEther(balance))
          setIsLoading(false)
        })
    }

    window.ethereum.on('accountsChanged', accountChangedHandler)

    return (
      <div className="container">
        <h1 style={{ textAlign: "center", fontSize: "3.2rem" }}>Login Page</h1>
        <br />
        <br />
        <button className="loginBtn" onClick={connectMetaMask}>
          Connect Wallet
        </button>
        {
            (error !== null) && <h1 style={{ color: "red", fontSize: "1.6rem" }}>{error}</h1>
        }
      </div>
    )
}

const Profile = ({ currUser, currBalance, isLoading }) => {
    return(
        <div className="container">
            {
                isLoading ?
                <h1 style={{ textAlign: "center", fontSize: "3.2rem" }}>Loading ... </h1>
                :
                <>
                    <h1>Profile Page</h1>
                    <h1>Address: {currUser}</h1>
                    <h1>Balance: {currBalance}</h1>
                </>
            }
        </div>
    )
}

const AuthPage = ({ isLoggedIn, currUser, currBalance, setIsLoggedIn, setCurrUser, setCurrBalance }) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className='authpage'>
        {
            isLoggedIn ?
            <Profile currUser={currUser} currBalance={currBalance} isLoading={isLoading} />
            :
            <Login 
                setIsLoggedIn={setIsLoggedIn} 
                setCurrUser={setCurrUser} 
                setCurrBalance={setCurrBalance} 
                setIsLoading={setIsLoading} 
            />
        }
        </div>
    )
}

export default AuthPage