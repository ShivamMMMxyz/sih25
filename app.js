const quizData = [
  { id: 1, question: "father of chemsitry?", options: ["newton", "einstein", "Antoine Lavoisier"], answer: "Antoine Lavoisier" },
  { id: 2, question: "H2O is?", options: ["Oxygen", "Water", "Hydrogen"], answer: "Water" },
  { id: 3, question: "Atomic number of Oxygen?", options: ["6", "8", "10"], answer: "8" },
  { id: 4, question: "Chemical formula of common salt?", options: ["NaCl", "KCl", "CaCl2"], answer: "NaCl" },
  { id: 5, question: "Which is a noble gas?", options: ["Oxygen", "Nitrogen", "Neon"], answer: "Neon" },
  { id: 6, question: "SI unit of mass?", options: ["Gram", "Kilogram", "Pound"], answer: "Kilogram" },
  { id: 7, question: "Which acid is found in lemon?", options: ["Acetic acid", "Citric acid", "Sulfuric acid"], answer: "Citric acid" },
  { id: 8, question: "Formula of Methane?", options: ["CH4", "C2H6", "CO2"], answer: "CH4" }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map(opt => `<div class="option">${opt}</div>`).join("")}
  `;

  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
      if (option.innerText === q.answer) {
        option.classList.add("correct");
        score++;
      } else {
        option.classList.add("wrong");
      }
      document.querySelectorAll(".option").forEach(opt => opt.style.pointerEvents = "none");
    });
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = "<h2>Quiz Completed!</h2>";
    result.innerText = `Your Score: ${score} / ${quizData.length}`;
    nextBtn.style.display = "none";
  }
});

loadQuestion();
