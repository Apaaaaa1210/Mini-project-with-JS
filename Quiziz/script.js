const quiz = [
  {
    quiz: "indonesia merdeka pada tahun",
    jawab: [
      { text: "1945", correct: true },
      { text: "2000", correct: false },
      { text: "1570", correct: false },
      { text: "1944", correct: false },
    ],
  },
  {
    quiz: "siapa itu jokowi",
    jawab: [
      { text: "presiden", correct: false },
      { text: "mantan presiden", correct: true },
      { text: "bapak asep", correct: false },
      { text: "sultan agung solo", correct: false },
    ],
  },
  {
    quiz: "apa ibu kota indonesia",
    jawab: [
      { text: "jakarta", correct: true },
      { text: "jawa", correct: false },
      { text: "palembang", correct: false },
      { text: "bali", correct: false },
    ],
  },
];
let soalKe = 0;
let score = 0;

function jawaban() {
  let a = quiz[soalKe];
  document.getElementById("soal").innerText = a.quiz;

  let answerBut = document.getElementById("jawab");
  answerBut.innerHTML = "";

  a.jawab.forEach((ans) => {
    let button = document.createElement("button");
    button.innerText = ans.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(ans));
    answerBut.appendChild(button);
  });

  function selectAnswer(jawab) {
    if (jawab.correct) {
      score++;
      alert("benar");
    } else {
      alert("Salah!");
    }
  }
}
document.getElementById("next").addEventListener("click", () => {
  soalKe++;
  if (soalKe < quiz.length) {
    jawaban();
  } else {
    document.getElementById(
      "quiz"
    ).innerHTML = `<h2>Quiz selesai!</h2><p>Skor kamu: ${score}/${quiz.length}</p>`;
  }
});

jawaban();
