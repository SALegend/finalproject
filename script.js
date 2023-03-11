let questionCount = 1;
let choiceCount = 1;

function addQuestion() {
  choiceCount = 1;
  questionCount++;
  let newQuestionDiv = document.createElement("div");
  newQuestionDiv.classList.add("question");
  newQuestionDiv.style.margin = "30px";
  newQuestionDiv.style.padding = "30px";
  let newQuestionLabel = document.createElement("label");
  newQuestionLabel.htmlFor = "question" + questionCount + "Input";
  newQuestionLabel.innerText = "Question " + questionCount + ":";
  let newQuestionInput = document.createElement("input");
  newQuestionInput.type = "text";
  newQuestionInput.id = "question" + questionCount + "Input";
  newQuestionInput.name = "question" + questionCount;
  let newChoicesDiv = document.createElement("div");
  newChoicesDiv.classList.add("choices");
  let newChoiceLabel = document.createElement("label");
  newChoiceLabel.htmlFor = "choice1Input";
  newChoiceLabel.innerText = "Choice 1:";
  let newChoiceInput = document.createElement("input");
  newChoiceInput.type = "text";
  newChoiceInput.id = "choice1Input";
  newChoiceInput.name = "choice1";
  let newAddChoiceButton = document.createElement("button");
  newAddChoiceButton.type = "button";
  newAddChoiceButton.classList.add("add-choice");
  newAddChoiceButton.innerText = "Add Choice";
  newAddChoiceButton.onclick = function () {
    addChoice(newAddChoiceButton);
  };
  let newRemoveChoiceButton = document.createElement("button");
  newRemoveChoiceButton.type = "button";
  newRemoveChoiceButton.classList.add("remove-choice");
  newRemoveChoiceButton.innerText = "Remove Choice";
  newRemoveChoiceButton.onclick = function () {
    removeChoice(newRemoveChoiceButton);
  };
  newChoicesDiv.classList.add("trans");
  newChoicesDiv.appendChild(newChoiceLabel);
  newChoicesDiv.appendChild(newChoiceInput);
  newChoicesDiv.appendChild(newAddChoiceButton);
  newChoicesDiv.appendChild(newRemoveChoiceButton);
  newQuestionDiv.appendChild(newQuestionLabel);
  newQuestionDiv.appendChild(newQuestionInput);
  newQuestionDiv.appendChild(newChoicesDiv);
  // newQuestionDiv.style.border="2px solid black";
  //adding stytle of design

  document.getElementById("questions").appendChild(newQuestionDiv);
}

function removeQuestion() {
  if (questionCount > 1) {
    let questionToRemove = document.getElementById("questions").lastChild;
    document.getElementById("questions").removeChild(questionToRemove);
    questionCount--;
  }
}

function addChoice(button) {
  let choicesDiv = button.parentElement;
  choiceCount++;
  console.log(choicesDiv.children);
  console.log(choicesDiv.children.length - 1);
  console.log(choiceCount);
  let newChoiceLabel = document.createElement("label");
  newChoiceLabel.htmlFor = "choice" + choiceCount + "Input";
  newChoiceLabel.innerText = "Choice " + choiceCount + ":";
  let newChoiceInput = document.createElement("input");
  newChoiceInput.type = "text";
  newChoiceInput.id = "choice" + choiceCount + "Input";
  newChoiceInput.name = "choice" + choiceCount;
  let newRemoveChoiceButton = document.createElement("button");
  newRemoveChoiceButton.type = "button";
  newRemoveChoiceButton.classList.add("remove-choice");
  newRemoveChoiceButton.innerText = "Remove Choice";
  newRemoveChoiceButton.onclick = function () {
    removeChoice(newRemoveChoiceButton);
  };
  choicesDiv.insertBefore(newChoiceInput, button);
  choicesDiv.insertBefore(newChoiceLabel, newChoiceInput);
  choicesDiv.insertBefore(newRemoveChoiceButton, button);
}

function removeChoice(button) {
  let choicesDiv = button.parentElement;
  choiceCount--;
  if (choicesDiv.children.length > 4) {
    // keep at least 2 choices
    let choiceToRemove = button.previousElementSibling;
    choicesDiv.removeChild(choiceToRemove);
    choicesDiv.removeChild(button.previousSibling); // remove the label of the choice too
    choicesDiv.removeChild(button);
    let choiceCount = choicesDiv.children.length / 2; // count only input and label elements
    let lastChoiceInput = choicesDiv.lastChild.previousSibling;
    lastChoiceInput.id = "choice" + choiceCount + "Input";
    lastChoiceInput.name = "choice" + choiceCount;
    let lastChoiceLabel = lastChoiceInput.previousSibling;
    lastChoiceLabel.htmlFor = "choice" + choiceCount + "Input";
    lastChoiceLabel.innerText = "Choice " + choiceCount + ":";
  }
}
let c = document.getElementById("submitbut");
console.log(c);
document
  .getElementById("submitbut")
  .addEventListener("click", function reload() {
    document.location.reload();
    console.log("clicked");
  });

document.getElementById("add-question").addEventListener("click", addQuestion);
document
  .getElementById("remove-question")
  .addEventListener("click", removeQuestion);
document.querySelectorAll(".add-choice").forEach(function (button) {
  button.addEventListener("click", function () {
    addChoice(button);
  });
});
document.querySelectorAll(".remove-choice").forEach(function (button) {
  button.addEventListener("click", function () {
    removeChoice(button);
  });
});
