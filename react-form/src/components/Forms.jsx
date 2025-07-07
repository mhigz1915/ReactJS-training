const Forms = () => {
    return (
        <>
        <h3> Form Component</h3>
        <form>
            <label>First Name:</label>
            <input type="text" placeholder="Enter Your First Name"/>
            <br/>        
            <label>Last Name:</label>
            <input type="text" placeholder="Enter Your Last Name"/>
            <br/>   
            <label>Email:</label>
            <input type="email" placeholder="Enter your E-Mail"/>    
            <br/>   
            <label>Password:</label>
            <input type="password" placeholder="Input password"/>   
        </form>
        </>
    )
}
export default Forms;