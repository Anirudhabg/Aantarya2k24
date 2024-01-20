const AUTH_URL = `${API_URL}/team/${teamId}/verify`;
console.log(teamId);

const imagekit = new ImageKit({
  publicKey: "public_KYo+rOuJkO2Bf74Wbbr5RrBz8lE=",
  urlEndpoint: "https://ik.imagekit.io/afnan011/",
  authenticationEndpoint: AUTH_URL,
});

// Function to handle image upload

function uploadImage() {
  const transactionId = document.querySelector(".acc-nums1").value;
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
    if (verifyTransactionId(transactionId)) {
      openAlert("Enter Transaction id!");
      return;
    }

    loader.style.display = "block";
    // Fetch authentication parameters from the backend
    fetch(AUTH_URL)
      .then((response) => response.json())
      .then((authParams) => {
        // Extract correct values
        const { token, expire, signature } = authParams;

        // Use the ImageKit SDK to upload the image
        imagekit.upload(
          {
            file: file,
            fileName: file.name,
            tags: ["screenshots"],
            token: token,
            expire: expire,
            signature: signature,
          },
          (err, result) => {
            const imgUrl = imagekit.url({
              src: result.url
            });
            updateScreenshot(imgUrl, transactionId);
            console.log(imgUrl);
            if (err) {
              alert("Error uploading image. Please try again.");
              console.error("Error uploading image:", err);
            } else {
              alert("Payment screenshot uploaded successfully");
              console.log("Image uploaded successfully:", result);
            }
            loader.style.display = "none";
          }
        );
      })
      .catch((error) => {
        console.error("Error fetching authentication parameters:", error);
        setTimeout(() => {
          loader.style.display = "none";
          alert("Error uploading image. Please try again");
        }, 2000);
      });
  } else {
    console.error("No file selected.");
    loader.style.display = "none";
    openAlert("No file selected!");
  }
}

const updateScreenshot = async (imageUrl, transactionId) => {
  if (!teamId) {
    console.error("Team ID is missing.");
    return;
  }

  const paymentData = {
    paymentStatus: {
      screenshot: imageUrl,
      transactionId: transactionId,
    },
  };
  try {
    const res = await fetch(`${API_URL}/team/${teamId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const verifyTransactionId = (transactionId) => {
  return transactionId.length == 0 || transactionId == "" || transactionId == null;
};

function handleFileSelect() {
  const fileInput = document.getElementById("fileInput");
  const fileNameDisplay = document.getElementById("fileName");

  // Get the file name
  const fileName = fileInput.value.split("\\").pop();

  // Display the file name
  fileNameDisplay.textContent = `Selected file: ${fileName}`;
}


const updateTransactionID = async () => {

  const transactionId = document.querySelector(".acc-nums1");
  const data = await fetchData();
  console.log(data.paymentStatus.transactionId);
  transactionId.value = data.paymentStatus.transactionId || "";

}

updateTransactionID()



//ACCOMMODATION
function uploadAccommo() {
  const checkbox = document.getElementById('cbx');
  const num_boys = document.getElementById('no-b');
  const num_girls = document.getElementById('no-g');
  if (checkbox.checked) {
    openAlert("Contact officials for details about Accommodation!");
    if (num_boys.value === "") {
      openAlert("Specify number of Men! (0-if none)");
    }
    else if (num_girls.value === "") {
      openAlert("Specify number of Women! (0-if none)");
    }
    else if (num_boys.value === 0 && num_girls.value === 0) {
      openAlert("Please specify proper counts!");
    }
    else{
      //DATA IS VALIDATED
      
    }


  } else {
    // The checkbox is not checked
    openAlert('Accommodation is not needed!');
  }
}