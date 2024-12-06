function validateForm() {
  validateDays();
  validateLifestyle();

  if (validateDays() & validateLifestyle()) {
    calculateSteps();
  } else {
    document.getElementById("stepsNew").textContent = "__";
    return false;
  }
}

function calculateSteps() {
  const selectLifestyle = document.getElementById("selectLifestyle");
  const stepsToWalk = document.getElementById("stepsToWalk");
  const stepsNew = document.getElementById("stepsNew");
  let lifestyleSteps = 0;

  if ((selectLifestyle.value = "Sedentary")) {
    lifestyleSteps = 2500;
  } else if ((selectLifestyle.value = "Moderate")) {
    lifestyleSteps = 5000;
  } else if ((selectLifestyle.value = "Active")) {
    lifestyleSteps = 7000;
  }

  let steps = parseInt(stepsToWalk.value) + lifestyleSteps;

  stepsNew.textContent = steps;
}

function validateLifestyle() {
  const selectLifestyle = document.getElementById("selectLifestyle");
  const lifestyleError = document.getElementById("lifestyleError");
  if (selectLifestyle.value == "") {
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
