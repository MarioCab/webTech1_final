let selectedOptions = [];
const stepsToWalkValue = document.getElementById("stepsToWalkValue");
const stepsToWalk = document.getElementById("stepsToWalk");

let lifestyleSteps = 0;
let stepsDay = 0;
let stepsWeek = 0;
let newLifestyle = "";

function validateForm() {
  validateDays();
  validateLifestyle();

  if (validateDays() & validateLifestyle()) {
    getSelectedDays();
    calculateDailySteps();
    calculateWeeklySteps();
    calculateNewLifestyle();
    selectedOptions = [];
  } else {
    document.getElementById("stepsNewWeek").textContent = "__";
    document.getElementById("stepsNewDay").textContent = "__";

    return false;
  }
}

function getSelectedDays() {
  const radioOptions = document.getElementsByName("option");

  for (const option of radioOptions) {
    if (option.checked) {
      selectedOptions.push(option);
    }
  }
}

function getLifestyleStepsValue() {
  const selectLifestyle = document.getElementById("selectLifestyle");

  if (selectLifestyle.value === "option1") {
    lifestyleSteps = 2500;
  } else if (selectLifestyle.value === "option2") {
    lifestyleSteps = 5000;
  } else if (selectLifestyle.value === "option3") {
    lifestyleSteps = 7000;
  }

  return lifestyleSteps;
}

function calculateDailySteps() {
  const stepsNewDay = document.getElementById("stepsNewDay");
  let lifeStyleSteps = getLifestyleStepsValue();

  stepsDay = parseInt(stepsToWalk.value) * 80 + lifeStyleSteps;

  stepsNewDay.textContent = `${stepsDay}`;

  return stepsDay;
}

function calculateWeeklySteps() {
  let daysToWalk = 0;
  const stepsNewWeek = document.getElementById("stepsNewWeek");
  let lifeStyleSteps = getLifestyleStepsValue();
  daysToWalk = selectedOptions.length;

  stepsWeek =
    daysToWalk * (parseInt(stepsToWalk.value) * 80) + lifeStyleSteps * 7;

  stepsNewWeek.textContent = `${stepsWeek}`;

  return stepsWeek;
}

function calculateNewLifestyle() {
  const newLifestyleText = document.getElementById("lifestyleNew");
  let steps = calculateWeeklySteps();
  let newLifestyle = "";

  if (steps < 35000) {
    newLifestyle = "Sedentary";
  } else if (steps > 35000 && steps < 49000) {
    newLifestyle = "Moderate";
  } else {
    newLifestyle = "Active";
  }
  newLifestyleText.textContent = `${newLifestyle}`;
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

stepsToWalk.addEventListener("input", function () {
  stepsToWalkValue.textContent = `Value: ${stepsToWalk.value}`;
});
