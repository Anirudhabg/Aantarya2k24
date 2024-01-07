const token = localStorage.getItem("jwtToken");

if(token){
    window.location.href = "/pages/home.html";
    console.log('token found');
}