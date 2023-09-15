// edit toggle button
const editButton = document.getElementById("editButton");
const editForm = document.getElementById("myForm");

// form
const formName = document.getElementById("form-name");
const formRole = document.getElementById("form-role");
const formAv = document.getElementById("form-av");
const formAge = document.getElementById("form-age");
const formLoc = document.getElementById("form-loc");
const formExp = document.getElementById("form-exp");
const formEmail = document.getElementById("form-email");
const formImg = document.getElementById("form-img");

const submitButton = document.getElementById("submit-button");

// target
const targetName = document.getElementById("target-name");
const targetRole = document.getElementById("target-role");
const targetAv = document.getElementById("target-av");
const targetAge = document.getElementById("target-age");
const targetLoc = document.getElementById("target-loc");
const targetExp = document.getElementById("target-exp");
const targetEmail = document.getElementById("target-email");
const targetImg = document.getElementById("target-img");

// assign edit toggle button
editButton.addEventListener("click", toggleEditForm);
// submitButton.addEventListener("click", submitForm);

function toggleEditForm() {
  editForm.classList.toggle("hide");
  editForm.classList.toggle("slide");
  editForm.reset();
  console.log("hide");
}

// submit button
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentName = formName.value;
  const currentRole = formRole.value;
  const currentAv = formAv.value;
  const currentAge = formAge.value;
  const currentLoc = formLoc.value;
  const currentExp = formExp.value;
  const currentEmail = formEmail.value;
  const currentImg = formImg.files[0];

  targetName.innerHTML = currentName;
  targetRole.innerHTML = currentRole;
  targetAv.innerHTML = currentAv;
  targetAge.innerHTML = currentAge;
  targetLoc.innerHTML = currentLoc;
  targetExp.innerHTML = currentExp;
  targetEmail.innerHTML = currentEmail;
  targetImg.innerHTML = currentImg;

  if (currentImg) {
    const reader = new FileReader();
    reader.onload = function (e) {
      targetImg.src = e.target.result;
    };
    reader.readAsDataURL(currentImg);

    console.log(currentImg);
    console.log("file ada");
  }

  console.log(currentName, currentRole, currentAv, currentAge, currentLoc, currentExp, currentEmail, currentImg);

  toggleEditForm();
});
