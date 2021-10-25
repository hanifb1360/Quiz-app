
//start 
//const dark_mode = document.getElementById("dark_mode")
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const content = document.getElementsByTagName('body')[0];
const darkMode = document.querySelector('.dark_change');

//dark mide 

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})


start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}




//data

const quizData = [
    {
        numb: 1,
        question:"The quintessential college rock band of the 1980s, named after a dream-state condition is:", 
          a:  "R.E.M",
          b:  "The Cure",
          c:  "Radiohead",
          d: "Portishead",
          correct:"a",
    },
    
    {
        
        numb: 2,
        question:"Which rock band was formed in 1985 by Rose and Stradlin?", 
          a:  "The Eagles",
          b:  "Aerosmith",
          c:  "Guns N'Roses",
          d: "Linkin Park",
          correct:"c",
    },
    
    {
        numb: 3,
        question:"Which rock band was designated by Guinness Book of Records as the world’s loudest band in 1972?", 
          a:  "Deep Purple",
          b:  "Black Sabbath",
          c:  "Fleetwood Mac",
          d: "Creedence Clearwater Revival",
          correct:"a",
    },

    {
        numb: 4,
        question:"Which rock group was Ozzy Osbourne a member of before starting his solo career?", 
          a:  "Def Leppard",
          b:  "Steely Dan",
          c:  "Deep Purple",
          d: "Black Sabath",
          correct:"d",
    },
    
    {
        numb: 5,
        question:"Which of these singers was inducted three times in Rock and Roll Hall of Fame?", 
          a:  "Eric Clapton",
          b:  "Elvis presley",
          c:  "John lennon",
          d: "Bob Dylan",
          correct:"a",
    },
    
    {
        numb: 6,
        question:"Who is the former drummer of Nirvana who fronts the Foo Fighters?", 
          a:  "Dave Abbruzzese",
          b:  "Dave Grohl",
          c:  "Brian Blade",
          d: "Terry Bozzio",
          correct:"b",
    },
    
    {
        numb: 7,
        question:"What rock band pioneered the use of the light show?", 
          a:  "Led Zeppelin",
          b:  "Pink Floyd",
          c:  "The Who",
          d: "The Beatles",
          correct:"b",
    },

    {
        numb: 8,
        question:"The famous rock group Led Zeppelin was initially known as:", 
          a:  "Hollywood Rose",
          b:  "The Black Album",
          c:  "Acca Dacca",
          d: "The New Yardbirds",
          correct:"d",
    },
    
    {
        numb: 9,
        question:"Which musician won the Nobel Prize for Literature in 2016?", 
          a:  "Jimmy Page",
          b:  "David Gilmour",
          c:  "Bob Dylan",
          d: "Roger Waters",
          correct:"c",
    },
    
    {
        numb: 10,
        question:"In which year did Psychedelic rock emerge?", 
          a:  "1971",
          b:  "1966",
          c:  "1953",
          d: "1960",
          correct:"b",
    }
    

    ];

    //actual quiz

    const quiz= document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const submitBtn = document.querySelector('.submit')
    
    
    let currentQuiz = 0
    let score = 0
    
    loadQuiz()
    
    function loadQuiz() {
    
        deselectAnswers()
    
        const currentQuizData = quizData[currentQuiz]
    
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
    }
    
    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    
    function getSelected() {
        let answer
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
                console.log(answerEl.value)
            }
        })
        return answer
    }
    
    
    submitBtn.addEventListener('click', () => {
        const answer = getSelected()
        if(answer) {
           if(answer === quizData[currentQuiz].correct) {
               score++
           }
    
           currentQuiz++
    
           if(currentQuiz < quizData.length) {
               loadQuiz()
           } else { if(score>7){
            quiz.innerHTML = `
            <div class= "result-box">
            <h2 class="green-text">You answered ${score}/${quizData.length} questions correctly</h2>
    
            <button id="reload" onclick="location.reload()">Reload</button> </div>
            `
    
           }
           else if(score>4){
            quiz.innerHTML = `<div class= "result-box">
            <h2 class="orange-text">You answered ${score}/${quizData.length} questions correctly</h2>
    
            <button id="reload" onclick="location.reload()">Reload</button></div>
            `
           }
           else{
            quiz.innerHTML = `<div class= "result-box">
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
            <button id="reload" onclick="location.reload()">Reload</button></div>
            `
           }
               
           }
        }
    })