const quizData = [
  { id: 1, question: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
  { id: 2, question: "H2O is?", options: ["Oxygen", "Water", "Hydrogen"], answer: "Water" }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[current];
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = `
    <h3>${q.question}</h3>
    ${q.options.map(opt => `
      <label>
        <input type="radio" name="answer" value="${opt}"> ${opt}
      </label><br>
    `).join("")}
  `;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  const selected = document.querySelector("input[name='answer']:checked");
  if (!selected) return alert("Please select an answer!");

  if (selected.value === quizData[current].answer) {
    score++;
  }

  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("result").textContent = `Your score: ${score}/${quizData.length}`;
  }
});

loadQuestion();
