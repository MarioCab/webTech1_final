function validateForm() {
  validateDays();
  validateLifestyle();

  if (validateDays() & validateLifestyle()) {
    calculateSteps();
    getDaysOfWeek();
  } else {
    document.getElementById("stepsNewWeek").textContent = "__";
    document.getElementById("stepsNewDay").textContent = "__";

    return false;
  }
}

const selectedOptions = [];

function getDaysOfWeek() {
  const radioOptions = document.getElementsByName("option");

  for (const option of radioOptions) {
    if (option.checked) {
      selectedOptions.push(option);
    }
  }
}

function calculateSteps() {
  const selectLifestyle = document.getElementById("selectLifestyle");
  const newLifestyleText = document.getElementById("lifestyleNew");
  const stepsToWalk = document.getElementById("stepsToWalk");
  const stepsNewDay = document.getElementById("stepsNewDay");

  let lifestyleSteps;
  let stepsDay;
  let newLifestyle;

  if (selectLifestyle.value === "option1") {
    lifestyleSteps = 2500;
  } else if (selectLifestyle.value === "option2") {
    lifestyleSteps = 5000;
  } else if (selectLifestyle.value === "option3") {
    lifestyleSteps = 7000;
  }

  stepsDay = parseInt(stepsToWalk.value) * 80 + lifestyleSteps;

  stepsNewDay.textContent = `${stepsDay}`;

  if (stepsDay < 5000) {
    newLifestyleText.textContent = "Sedentary";
  } else if ((stepsDay >= 5000) & (stepsDay < 7000)) {
    newLifestyleText.textContent = "Moderate";
  } else {
    newLifestyleText.textContent = "Active";
  }
}

function validateLifestyle() {
  const selectLifestyle = document.getElementById("selectLifestyle");
  const lifestyleError = document.getElementById("lifestyleError");
  if (selectLifestyle.value === "") {
    lifestyleError.textContent = "Please select a lifestyle.";
    return false;
  } else {
    lifestyleError.textContent = "";
    return true;
  }
}

function validateDays() {
  const radioOptions = document.getElementsByName("option");
  const daysError = document.getElementById("daysError");
  let radioSelected = false;
  for (const radio of radioOptions) {
    if (radio.checked) {
      radioSelected = true;
      break;
    }
  }
  if (!radioSelected) {
    daysError.textContent = "Please select at least 1 day.";
    return false;
  } else {
    daysError.textContent = "";
    return true;
  }
}

const stepsToWalk = document.getElementById("stepsToWalk");
const stepsToWalkValue = document.getElementById("stepsToWalkValue");
stepsToWalk.addEventListener("input", function () {
  stepsToWalkValue.textContent = `Value: ${stepsToWalk.value}`;
});
