/* remove this comment and place your JavaScript here */
let animal = null;
let color = null;
let item = null;
let pageTitle = document.getElementById("page-title"),
pageTitleText = pageTitle.innerhtml,
tryAgain = document.getElementById("try-again"),
quizWrapper= document.getElementById("quiz-wrapper"),
result = document.getElementById("result"),
formSubmit = document.getElementById("form-submit");

document.getElementById("try-again").addEventListener("click", resetQuiz);
document.getElementById("formSubmit").addEventListener("click", processResults);

function processResults() {
  animal = document.querySelector('input[name="animal"]:checked');
  color  = document.querySelector('input[name="color"]:checked');
  item = document.querySelector('input[name="item"]:checked');
}

function getPersonality() {
  let score =0;

  switch (animal.id) {
    case "horse":
    score+=1;
    break;
    case "cat":
    score+=2;
    break;
    default:
  }
  switch (color.id) {
    case "purple":
    score+=2;
    break;
    case "orange":
    score+=3;
    break;
    case "rainbow":
    score +=1;
    break;
    default:

  }

  switch (item.id) {
    case "ballons":
    score+=1;
    break;
    case "water":
    score+=3;
    break;
    default:

  }
  return score;

  if (score=== 0 || score ===1){
    return 0;
  }
  if (score === 2 || score ===3 ){
    return 1;
  }
  if score ===4 || score ===5) {
    return 2;
  }
  if score ===5 || score ===6){
    return 3;
  }

}

function resetQuiz() {

}
