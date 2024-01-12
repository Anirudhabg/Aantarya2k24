const API_URL = "https://mca-fest.onrender.com";


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      let targetId = link.getAttribute("href");
      console.log(targetId);
      if (isURL(targetId)) {
        console.log("valid url");
        return;
      }
      targetId = targetId.substring(1);
      event.preventDefault();
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

function isURL(url) {
  const urlPattern =
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)(:\d{1,5})?(\/\S*)?$/;

  return urlPattern.test(url);
}

const makeServerActive = async () => {
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  if (res.status == 404) {
    console.log(data.message);
    return;
  }

  if (res.status == 500) {
    console.log(data.message);
    console.log("internal server error");
    return;
  }

  console.log(data);

  if (res.status == 400) {
    console.log(data.error);
    return;
  }
};

makeServerActive();
