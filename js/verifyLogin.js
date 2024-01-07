const token = localStorage.getItem("jwtToken");

console.log(token);

if(token){
    window.location.href = "/pages/home.html";
    console.log('token found');
}