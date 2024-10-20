document.addEventListener("DOMContentLoaded", ()=>{
    const businessForm= document.querySelector("#businessInfo");
    const personalForm = document.querySelector("#personalInfo");
})

document.querySelector("#linkPersonalInfo").addEventListener("click", e => {
    e.preventDefault();
    businessForm.classList.add("form--hidden");
    personalForm.classList.remove("form--hidden");
});



