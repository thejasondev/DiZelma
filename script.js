
document.addEventListener("DOMContentLoaded", function() {
  // Lógicas para pestañas
  const tabButtons =
  document.querySelectorAll(".tab-button");
  const tabContents =
  document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
  
    button.addEventListener("click",
  function() {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.style.display="none");
  button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
  
  document.getElementById(tabId).style.display = "block";
    });  
  });
});  

//Mostrar la primera pestaña por defecto
document.querySelector(".tab-button").click();

//Lógica para botones de letras
const letterButton = document.querySelectorAll(".letter-button");
  letterButton.forEach(button => {

button.addEventListener("click", function() {
    const exerciseItem =
  button.closest(".exercise-item");
    const correctLetter =
  exerciseItem.getAttribute("data-correct");
  const selectedLetter =
  button.getAttribute("data-letter");
  const feedback =
  exerciseItem.querySelector(".feedback");

  if (selectedLetter === 
    correctLetter) {
    feedback.textContent = 
    "Felicidades!";
    feedback.style.color = "green";
      } else {
    feedback.textContent = 
    "UY, inténtelo de nuevo";
    feedback.style.color = "red";
    }
  });
});
    


   
  
