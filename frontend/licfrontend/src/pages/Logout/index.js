const Logout = () => {
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('address')
    sessionStorage.removeItem('contact')
    sessionStorage.removeItem('email') 
    sessionStorage.removeItem("age");
    sessionStorage.removeItem("birthDate");
    sessionStorage.removeItem("gender");
    sessionStorage.removeItem('loginStatus') 
  



    return (
        <div>
        
        <div style={{ backgroundImage: `url("https://www.irishtimes.com/polopoly_fs/1.4784014.1642986555!/image/image.JPG_gen/derivatives/box_620_330/image.JPG")` , padding:"20%", textAlign:'center', width : "100%", height : "95%",backgroundRepeat:"no-repeat"
                                        , backgroundSize: "100%"}}>
            <table  >
                <tr></tr>
                <tr></tr>
                <tr><img src={require("../../images/Logout.png")} style={{marginLeft:"20%",width:"55%"}} >
                
                </img> <br></br>
                <h1 style={{marginLeft:"20%",fontSize:35}}>You have successfully logout. <br></br>Back to <a href='/'>Home</a></h1>
                 
                </tr>
                
            </table>
            
        <div>
            
        </div>
            
        </div>
        </div>
    );
}

export default Logout;