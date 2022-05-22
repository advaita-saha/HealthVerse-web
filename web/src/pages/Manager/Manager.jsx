const Manager = ({ isLoggedIn, role }) => {
    return (
      <div className="container">
        {
          !isLoggedIn ?
          <h1 style={{ textAlign: "center", fontSize: "3.2rem", margin: "1rem 0" }}>Please connect your metamask to view this page</h1>
          :
          (role === 'Hospital') ?
          <h1 style={{ textAlign: "center", fontSize: "3.2rem", margin: "1rem 0" }}>Hospital Page</h1>
          :
          <h1>You don't have access to this page</h1>
        }
      </div>
    )
  }
  
  export default Manager