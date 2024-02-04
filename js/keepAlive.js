const API_KEY = "https://mca-fest-v1.onrender.com";

const makeServerActive = async () => {
    const res = await fetch(`${API_KEY}`);
    const data = await res.json();
    if (res.status == 404) {
      console.log(data.message);
      return;
    }
  
    if (res.status == 500) {
      console.error(data.message);
      console.log("internal server error");
      return;
    }
  
    console.log(data);
  
    if (res.status == 400) {
      console.log(data.error);
      return;
    }
  };
  
  // makeServerActive();