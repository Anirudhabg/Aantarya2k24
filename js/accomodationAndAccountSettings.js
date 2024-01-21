
//ACCOMMODATION
const checkbox = document.getElementById('cbx');
const num_boys = document.getElementById('no-b');
const num_girls = document.getElementById('no-g');
// const accBtn = document.getElementById('accomodation-btn');


/* Accomodation toggle */
function toggleAccNumsDiv() {
  var accNumsDiv = document.querySelector(".acc-nums-div");
  if (checkbox.checked) {
    accNumsDiv.classList.add("show");
  } else {
    accNumsDiv.classList.remove("show");
  }
}

function uploadAccommo() {
  if (checkbox.checked) {
      openAlert("Details Updated! Contact officials for details about Accommodation!");
      const totalCount = parseInt(num_boys.value) + parseInt(num_girls.value);

    if (num_boys.value === "") {
      openAlert("Specify number of Men! (0-if none)");
    }
    else if (num_girls.value === "") {
      openAlert("Specify number of Women! (0-if none)");
    }
    else if(num_boys.value == 0 && num_girls.value == 0){
      openAlert("Please specify proper counts!");
    }
    else if(totalCount > 15){
        openAlert("Please specify proper counts!");
    }
    else if ((num_boys.value < 0  || num_boys.value > 15 ) ||  (num_girls.value < 0 || num_girls.value > 15)) {
      openAlert("Please specify proper counts!");
    }
    else {
      updateAccomodation(num_boys.value, num_girls.value)
    }

  } else {
    // The checkbox is not checked
    openAlert('Accommodation is not needed!');
  }
}


const getAccommodationData = async () => {
  try {
    const res = await fetch(`${API_URL}/team/${teamId}`);
    const data = await res.json();
    if(data.accommodation){
      checkbox.checked = true;
      toggleAccNumsDiv()
      num_boys.value = data.accommodation.countOfBoys;
      num_girls.value = data.accommodation.countOfGirls;
    }
  } catch (err) {
    console.error(err);
  }
  
}
getAccommodationData()



const updateAccomodation = async (countOfBoys, countOfGirls) => {

  if (!teamId) {
    console.error("Team ID is missing.");
    return;
  }
  
  const accommodationData = {
    accommodation: {
      countOfBoys: countOfBoys,
      countOfGirls: countOfGirls
    }
  };
  try {
    const res = await fetch(`${API_URL}/team/${teamId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accommodationData),
    });
    const data = await res.json();
    console.log(data.accommodation);
  } catch (err) {
    console.error(err);
  }
};