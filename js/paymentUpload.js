const AUTH_URL = "http://localhost:3000/team/65a3493d83b5adcb87eca8e5/verify";


const imagekit = new ImageKit({
  publicKey: "public_KYo+rOuJkO2Bf74Wbbr5RrBz8lE=",
  urlEndpoint: "https://ik.imagekit.io/afnan011/",
  authenticationEndpoint: AUTH_URL,
});

// Function to handle image upload
function uploadImage() {
  loader.style.display = "block";
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
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
              src: result.url,
              transformation: [{ height: 300, width: 400 }],
            });
            updateScreenshot(imgUrl);
            console.log(imgUrl);
            loader.style.display = "none";
            if (err) {
              console.error("Error uploading image:", err);
              alert("Error uploading image. Please try again.")
            } else {
                console.log("Image uploaded successfully:", result);
                alert("Payment screenshot uploaded successfully")
            }
        }
        );
    })
    .catch((error) =>
    console.error("Error fetching authentication parameters:", error)
    );
} else {
    console.error("No file selected.");
    alert("no files selected.")
    loader.style.display = "none";
  }

}

const updateScreenshot = async (imageUrl) => {
  if (!teamId) {
    console.error("Team ID is missing.");
    return;
  }

  const paymentData = {
    paymentStatus: {
      screenshot: imageUrl,
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
    const data  = await res.json();
    console.log(data);

  } catch (err) {
    console.error(err);
  }
};


function handleFileSelect() {
    const fileInput = document.getElementById('fileInput');
    const fileNameDisplay = document.getElementById('fileName');
  
    // Get the file name
    const fileName = fileInput.value.split('\\').pop();
  
    // Display the file name
    fileNameDisplay.textContent = `Selected file: ${fileName}`;
}