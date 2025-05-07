// Quiz questions data
const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
      correct: 0,
    },
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyper>"],
      correct: 0,
    },
    {
      question: "Which tag is used to insert an image in HTML?",
      options: ["<image>", "<img>", "<src>", "<pic>"],
      correct: 1,
    },
    {
      question: "What tag is used to define an unordered list?",
      options: ["<ol>", "<li>", "<ul>", "<list>"],
      correct: 2,
    },
    {
      question: "Which tag defines the largest heading?",
      options: ["<h6>", "<heading>", "<head>", "<h1>"],
      correct: 3,
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
      correct: 1,
    },
    {
      question: "Which property is used to change text color in CSS?",
      options: ["font-color", "color", "text-color", "background-color"],
      correct: 1,
    },
    {
      question: "How do you add a background color in CSS?",
      options: ["color-background: red;", "background: red;", "bgcolor: red;", "background-color: red;"],
      correct: 3,
    },
    {
      question: "Which symbol is used for id selector in CSS?",
      options: [".", "#", "*", "&"],
      correct: 1,
    },
    {
      question: "How do you insert a comment in CSS?",
      options: ["// this is a comment", "<!-- comment -->", "/* comment */", "# comment"],
      correct: 2,
    },
    {
      question: "Which attribute is used in HTML to provide inline CSS?",
      options: ["css", "style", "link", "class"],
      correct: 1,
    },
    {
      question: "What does JavaScript primarily run on?",
      options: ["Server", "Browser", "Database", "Cloud"],
      correct: 1,
    },
    {
      question: "How do you write a comment in JavaScript?",
      options: ["<!-- comment -->", "// comment", "# comment", "' comment"],
      correct: 1,
    },
    {
      question: "Which keyword declares a variable in JavaScript?",
      options: ["var", "int", "dim", "string"],
      correct: 0,
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunc()", "def myFunc()", "func myFunc()", "create function myFunc()"],
      correct: 0,
    },
    {
      question: "Which operator is used to assign a value in JavaScript?",
      options: ["*", "=", "==", ":="],
      correct: 1,
    },
    {
      question: "Which method is used to print to the console?",
      options: ["echo()", "log()", "console.log()", "print()"],
      correct: 2,
    },
    {
      question: "What is the result of 3 + '3' in JavaScript?",
      options: ["6", "'6'", "'33'", "NaN"],
      correct: 2,
    },
    {
      question: "Which of these is a JavaScript data type?",
      options: ["float", "number", "decimal", "double"],
      correct: 1,
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Display Object Management", "Digital Object Management", "Document Order Model"],
      correct: 0,
    },
    {
      question: "Which HTML tag is used for a line break?",
      options: ["<lb>", "<br>", "<break>", "<line>"],
      correct: 1,
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "size"],
      correct: 2,
    },
    {
      question: "Which tag is used to make text bold in HTML?",
      options: ["<strong>", "<b>", "<bold>", "<em>"],
      correct: 1,
    },
    {
      question: "What does the <title> tag do?",
      options: ["Sets page title", "Creates heading", "Displays tooltip", "Adds metadata"],
      correct: 0,
    },
    {
      question: "How do you include an external CSS file?",
      options: ["<link href='style.css'>", "<css src='style.css'>", "<style src='style.css'>", "<stylesheet='style.css'>"],
      correct: 0,
    },
    {
      question: "Which HTML attribute is used to specify an input field is required?",
      options: ["mandatory", "validate", "required", "must"],
      correct: 2,
    },
    {
      question: "Which input type is used for passwords?",
      options: ["text", "password", "secure", "pass"],
      correct: 1,
    },
    {
      question: "How do you round a number in JavaScript?",
      options: ["Math.round()", "Math.floor()", "round()", "ceil()"],
      correct: 0,
    },
    {
      question: "Which method is used to join arrays in JavaScript?",
      options: ["merge()", "concat()", "combine()", "join()"],
      correct: 1,
    },
    {
      question: "Which CSS property adds shadow to text?",
      options: ["text-shadow", "shadow-text", "font-shadow", "text-style"],
      correct: 0,
    },
    {
      question: "What is the default position in CSS?",
      options: ["static", "relative", "fixed", "absolute"],
      correct: 0,
    },
    {
      question: "Which tag defines a table row in HTML?",
      options: ["<td>", "<th>", "<tr>", "<table>"],
      correct: 2,
    },
    {
      question: "Which property is used to center elements in CSS?",
      options: ["text-align", "align", "center", "position"],
      correct: 0,
    },
    {
      question: "How do you make a list numbering ordered in HTML?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correct: 1,
    },
    {
      question: "Which JavaScript event occurs when a user clicks an HTML element?",
      options: ["onhover", "onchange", "onmouseclick", "onclick"],
      correct: 3,
    },
    {
      question: "Which operator compares both value and type in JavaScript?",
      options: ["==", "=", "===", "!="],
      correct: 2,
    },
    {
      question: "How do you declare a constant in JavaScript?",
      options: ["var", "let", "const", "define"],
      correct: 2,
    },
    {
      question: "Which CSS unit is relative to the parent element?",
      options: ["px", "%", "em", "rem"],
      correct: 2,
    },
    {
      question: "What is the default display value of a <div>?",
      options: ["inline", "block", "inline-block", "flex"],
      correct: 1,
    },
    {
      question: "Which HTML element is used to embed JavaScript?",
      options: ["<js>", "<javascript>", "<script>", "<code>"],
      correct: 2,
    },
    {
      question: "What does innerHTML do?",
      options: ["Sets text", "Sets inner content", "Changes input value", "Updates CSS"],
      correct: 1,
    },
    {
      question: "Which method converts JSON to JavaScript object?",
      options: ["JSON.convert()", "JSON.parse()", "parseJSON()", "JSON.stringify()"],
      correct: 1,
    },
    {
      question: "What does the 'defer' attribute do in script tags?",
      options: ["Delays script forever", "Defers script execution", "Downloads script asynchronously", "Pauses the page"],
      correct: 1,
    },
    {
      question: "How can you get an element by ID in JavaScript?",
      options: ["getElement(id)", "getById()", "getElementById()", "querySelector('#id')"],
      correct: 2,
    },
    {
      question: "Which pseudo-class targets the first child?",
      options: [":first", ":child-first", ":first-child", ":firstElement"],
      correct: 2,
    },
    {
      question: "How to add spacing outside an element in CSS?",
      options: ["padding", "border", "margin", "spacing"],
      correct: 2,
    },
    {
      question: "How to make an element draggable in HTML5?",
      options: ["draggable='true'", "drag='yes'", "draggable", "enable-drag='true'"],
      correct: 0,
    },
    {
      question: "Which method removes the last element from an array?",
      options: ["pop()", "remove()", "shift()", "splice()"],
      correct: 0,
    },
    {
      question: "How do you check type in JavaScript?",
      options: ["typeof", "type()", "checktype()", "isType()"],
      correct: 0,
    },
  ];
  

// quiz state
let currentQuestion = 0;
let score = 0;

// javascript Initialization
const container = document.getElementById("quiz-container");
const answerE1 = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const [ option_1, option_2, option_3, option_4] = 
document.querySelectorAll(" .option_1, .option_2, .option_3, .option_4");
const progressBar = document.getElementById("progress-box");
const counter = document.getElementById("counter");
const optionsE1 = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultIcon = document.getElementById("result-icon");
const scoreText = document.getElementById("score-text");
const feedbackEl = document.getElementById("feedback");
const restartBtn = document.getElementById("restart-btn");

//Load quiz function
const loadQuestion = () => {
    const {question, options} = quizData[currentQuestion];
    questionE1.innerText = `${currentQuestion+1}: ${question}`

    options.forEach(
      (curOption, index) => { window[`option_${index + 1}`].innerText = curOption }
    );
    

    // Update progress
    const progress = (currentQuestion / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    counter.textContent = `${currentQuestion + 1}/${quizData.length}`;

};
  
loadQuestion();

// Get selected answer function on button click
const selectedOption = () => {
  let ans_index;
  answerE1.forEach((curOption, index) => {
    if(curOption.checked) {
      ans_index = index;
    }
  });
  return ans_index;
};

const deselectOption = () => {
 answerE1.forEach((curOption) => curOption.checked = false);
};

const showResults= () => {
  document.querySelector("#solution").style.display = "none";
  questionE1.style.display = "none";
  resultContainer.style.display = "block";

  // Calculate percentage
  const percentage = Math.round((score / quizData.length) * 100);

  if (percentage >= 70) {
    resultIcon.innerHTML = "A";
    resultIcon.classList.add("success");
    resultIcon.textContent = "Great Job";
    resultIcon.style.color = "black";
    resultIcon.style.fontWeight = "700";
  } else if (percentage >= 40) {
    resultIcon.innerHTML = "B";
    resultIcon.classList.add("success");
    resultIcon.textContent = "Good Effort";
    resultIcon.style.color = "black";
    resultIcon.style.fontWeight = "700";
  } else {
    resultIcon.innerHTML = "C";
    resultIcon.classList.add("failure");
    resultIcon.textContent = "Keep Learning";
    resultIcon.style.color = "black";
    resultIcon.style.fontWeight = "700";
  }

  scoreText.textContent = `You scored ${score} out of ${quizData.length} (${percentage}%)`;
  scoreText.style.color = "black";
  // Completed progress bar
  progressBar.style.width = "100%";
};


nextBtn.addEventListener("click", () => {
  const selectedOptionIndex = selectedOption();

  if (selectedOptionIndex === undefined) {
    feedbackEl.textContent = "*Please select an answer before continuing...";
    feedbackEl.style.color = "red";
    feedbackEl.style.fontWeight = "700";
    return;
  }

  const correctIndex = quizData[currentQuestion].correct;
  const labels = [
    document.getElementById("option_1"),
    document.getElementById("option_2"),
    document.getElementById("option_3"),
    document.getElementById("option_4"),
  ];

  //Highlight correct or Incorrect
  labels.forEach((label, index) => {
    if (index === correctIndex) {
      label.classList.add("correct");
    } else if (index === selectedOptionIndex) {
      label.classList.add("incorrect");
    }
  })

  if(selectedOptionIndex === correctIndex){
    score++;
    feedbackEl.textContent = "";
   };


  setTimeout(() => {
    currentQuestion++;
    deselectOption();
    if (currentQuestion < quizData.length) loadQuestion();
    else if (currentQuestion >= quizData.length){
      showResults();
      nextBtn.style.display = "none";
    } 
  }, 1000);
});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  document.querySelector("#solution").style.display = "block";
  questionE1.style.display = "block"
  resultContainer.style.display = "none";
  nextBtn.style.display = "block";

  // Reset all options
  deselectOption();
  loadQuestion();
}

restartBtn.addEventListener("click", restartQuiz);
