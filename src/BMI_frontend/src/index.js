import {
  BMI_backend
} from "../../declarations/BMI_backend";


var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

var modalContent = document.querySelector(".modal-content");
var modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];



document.getElementById("submit").addEventListener("click", async (e) => {
  e.preventDefault();
  const button = e.target;

  // const name = document.getElementById("name").value.toString();

  button.disabled = true;
  calculate()

  button.disabled = false;

  return false;
});

function calculate() {

  if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
  } else {
    countBmi();
  }

}


async function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  const bmi_data = await BMI_backend.calculateBMI(parseFloat(p[2]), parseFloat(p[1]));

  const bmi = bmi_data[0];
  const result = bmi_data[1];

  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}