const quizdb = [
    {
        question: "Who was the first member to join BTS?",
        a: "RM",
        b: "SUGA",
        c: "JIN",
        d: "J-HOPE",
        answer: "ans1"
    },
    {
        question: "Who was the last member to join BTS?",
        a: "V",
        b: "JUNGKOOK",
        c: "JIMIN",
        d: "JIN",
        answer: "ans3"
    },
    {
        question: "Spring day is the title track off which album?",
        a: "YOUTH",
        b: "Young Forever",
        c: "Love Yourself: Answer",
        d: "You Never Walk Alone",
        answer: "ans4"
    },
    {
        question: "Which choreography involves Jimin flipping over J-Hope?",
        a: "No More Dream",
        b: "We Are Bulletproof Pt. 2",
        c: "N.O",
        d: "Danger",
        answer: "ans2"
    },
    {
        question: "Which of these is not an original Japanese song?",
        a: "Lights",
        b: "Let go",
        c: "For you",
        d: "2nd grade",
        answer: "ans4"
    },
    {
        question: "Which was the first album in the Love Yourself series?",
        a: "Answer",
        b: "Tear",
        c: "Face Yourself",
        d: "Her",
        answer: "ans4"
    },
    {
        question: "Which of these is not a BTS docu-series?",
        a: "Burn the stage",
        b: "Beyond the scene",
        c: "Bring the soul",
        d: "Break the silence",
        answer: "ans2"
    },
    {
        question: "In what year did Run BTS premiere?",
        a: "2013",
        b: "2014",
        c: "2015",
        d: "2016",
        answer: "ans3"
    },
    {
        question: "When did V create the meaning of" + "purple" + "for BTS and ARMY?",
        a: "Fist Muster",
        b: "Wings tour",
        c: "Third Muster",
        d: "Love Yourself Tour",
        answer: "ans3"
    },
    {
        question: "How many mixtapes have BTS members collectively released?",
        a: "3",
        b: "4",
        c: "5",
        d: "7",
        answer: "ans3"
    },
    {
        question: "How many mixtapes have BTS members collectively released?",
        a: "3",
        b: "4",
        c: "5",
        d: "7",
        answer: "ans3"
    }
]


let anslist = document.querySelectorAll(".answers");
let btn = document.getElementById("subtn");
let score = 0;
let questnum = 1;
let userAns;

let Question = document.getElementById("quest");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
const loadquiz = () => {

    let questions = quizdb[questnum - 1].question;
    let a = quizdb[questnum - 1].a;
    let b = quizdb[questnum - 1].b;
    let c = quizdb[questnum - 1].c;
    let d = quizdb[questnum - 1].d;
    Question.innerText = `Q.${questnum} ${questions}`;
    option1.innerHTML = a;
    option2.innerText = b;
    option3.innerText = c;
    option4.innerText = d;


}
loadquiz();

const checkAns = () => {
    anslist.forEach((currelem) => {
        if (currelem.checked) {
            userAns = currelem.id;
        }
    });
    return (userAns);

}

const deselectall = () => {
    anslist.forEach((currelem) => {
        currelem.checked = false;
    })
}
btn.addEventListener('click', () => {
    let checedkAns;
    checkedAns = checkAns();
    console.log(checkedAns);
    let Answer = quizdb[questnum - 1].answer;
    if (checkedAns === Answer) {
        score++;
        console.log(score);
    }
    questnum++;
    deselectall();
    if (questnum < quizdb.length) {
        loadquiz()
    }
    else {
        let opt = document.getElementById("opt");
        opt.innerHTML = `
        <div id="scorer">
            <h2>You Scored ${score} out of 10</h2>
            <h1>&#128156;</h1>
            <button id="reload" onclick=location.reload()>play again</button>
        </div>
        `;
        let divs = document.getElementById("scorer");
        divs.style.display = "block";
    };
});
