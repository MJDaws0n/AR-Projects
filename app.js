const urlParams = new URLSearchParams(window.location.search);
const quizName = urlParams.get('q');

if(quizName === null){
    window.location.href = '/error.html';
}

const ansA = document.querySelector('#ans-a')
const ansB = document.querySelector('#ans-b')
const ansC = document.querySelector('#ans-c')
const ansD = document.querySelector('#ans-d')

let score = 0;

fetch('/quiz.json').then((res)=>{
    return res.json();
}).then((data)=>{
    var quiz = data[quizName];
    if(!quiz || quiz === null){
        window.location.href = '/error.html';
        return;
    }

    const shuffledQuestions = Object.keys(quiz).sort(() => Math.random() - 0.5);

    // Reconstruct the quiz with the shuffled questions
    const randomizedQuiz = {};
    shuffledQuestions.forEach(question => {
        randomizedQuiz[question] = quiz[question];
    });

    quiz = randomizedQuiz;

    document.querySelector('#quiz-title').textContent = quizName;
    document.querySelector('.title').textContent = `Question 1 / ${Object.keys(quiz).length}`;

    function nextQuestion(q){
        const question = Object.keys(quiz)[q-1];
        document.querySelector('.question').textContent = question;
        let ret = null;

        const questAns = Object.keys(quiz[question]).sort(() => Math.random() - 0.5);

        setAnsBox(
            questAns[0],
            questAns[1],
            questAns[2],
            questAns[3]
        );

        let ansIndex = 0;

        questAns.forEach((questionAns) => {
            ansIndex++;
            if(quiz[question][questionAns]){
                ret = ansIndex;
            }
        });

        return ret;
    }
    var currentQuestion = 1;
    var questionAns = nextQuestion(currentQuestion);
    var doneQuest = false;
    
    ansA.addEventListener('click', (e)=>{
        if(doneQuest){
            return;
        }
        if(questionAns === 1){
            e.target.style['background-color'] = '#6ABC5C';
            e.target.style['border-color'] = '#6ABC5C';
            e.target.style['color'] = 'white';

            score++;
        } else{
            e.target.style['background-color'] = '#E36161';
            e.target.style['border-color'] = '#E36161';
            e.target.style['color'] = 'white';
            document.querySelector('.container div:nth-child('+(questionAns+3)+')').style['border-color'] = '#6ABC5C';
        }

        continueOn();
    });
    ansB.addEventListener('click', (e)=>{
        if(doneQuest){
            return;
        }
        if(questionAns === 2){
            e.target.style['background-color'] = '#6ABC5C';
            e.target.style['border-color'] = '#6ABC5C';
            e.target.style['color'] = 'white';

            score++;
        } else{
            e.target.style['background-color'] = '#E36161';
            e.target.style['border-color'] = '#E36161';
            e.target.style['color'] = 'white';
            document.querySelector('.container div:nth-child('+(questionAns+3)+')').style['border-color'] = '#6ABC5C';
        }

        continueOn();
    });
    ansC.addEventListener('click', (e)=>{
        if(doneQuest){
            return;
        }
        if(questionAns === 3){
            e.target.style['background-color'] = '#6ABC5C';
            e.target.style['border-color'] = '#6ABC5C';
            e.target.style['color'] = 'white';

            score++;
        } else{
            e.target.style['background-color'] = '#E36161';
            e.target.style['border-color'] = '#E36161';
            e.target.style['color'] = 'white';
            document.querySelector('.container div:nth-child('+(questionAns+3)+')').style['border-color'] = '#6ABC5C';
        }

        continueOn();
    });
    ansD.addEventListener('click', (e)=>{
        if(doneQuest){
            return;
        }
        if(questionAns === 4){
            e.target.style['background-color'] = '#6ABC5C';
            e.target.style['border-color'] = '#6ABC5C';
            e.target.style['color'] = 'white';

            score++;
        } else{
            e.target.style['background-color'] = '#E36161';
            e.target.style['border-color'] = '#E36161';
            e.target.style['color'] = 'white';
            document.querySelector('.container div:nth-child('+(questionAns+3)+')').style['border-color'] = '#6ABC5C';
        }

        continueOn();
    });

    function continueOn(){
        doneQuest = true;
        if(Object.keys(quiz).length === currentQuestion){
            setTimeout(() => {
                document.querySelector('#quiz-title').textContent = 'Continuing in 3...';
                setTimeout(() => {
                    document.querySelector('#quiz-title').textContent = 'Continuing in 2...';
                    setTimeout(() => {
                        document.querySelector('#quiz-title').textContent = 'Continuing in 1...';
                        setTimeout(() => {
                            window.location.href = `/done.html?s=${score}&q=${quizName}&o=${Object.keys(quiz).length}`;
                        });
                    });
                });
            });
            return;
        }
        setTimeout(() => {
            document.querySelector('#quiz-title').textContent = 'Continuing in 3...';
            setTimeout(() => {
                document.querySelector('#quiz-title').textContent = 'Continuing in 2...';
                setTimeout(() => {
                    document.querySelector('#quiz-title').textContent = 'Continuing in 1...';
                    setTimeout(() => {
                        document.querySelector('#quiz-title').textContent = quizName;
                        document.querySelector('.title').textContent = `Question ${currentQuestion+1} / ${Object.keys(quiz).length}`;                                                                                                                                                                                                                                                                                                                                                                                                                             

                        doneQuest = false;
                        currentQuestion++;
                        questionAns = nextQuestion(currentQuestion);

                        ansA.style['background-color'] = '';
                        ansA.style['border-color'] = 'white';

                        ansB.style['background-color'] = '';
                        ansB.style['border-color'] = 'white';

                        ansC.style['background-color'] = '';
                        ansC.style['border-color'] = 'white';

                        ansD.style['background-color'] = '';
                        ansD.style['border-color'] = 'white';
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 200);
    }
})

function setAnsBox(a, b, c, d){
    ansA.style.display = 'block';
    ansB.style.display = 'block';
    ansC.style.display = 'block';
    ansD.style.display = 'block ';
    if(a === null || a === undefined){
        ansA.style.display = 'none';
        ansB.style.display = 'none';
        ansC.style.display = 'none';
        ansD.style.display = 'none';
        return;
    }
    ansA.textContent = a;
    if(b === null || a === undefined){
        ansB.style.display = 'none';
        ansC.style.display = 'none';
        ansD.style.display = 'none';
        return;
    }
    ansB.textContent = b;
    if(c === null || a === undefined){
        ansC.style.display = 'none';
        ansD.style.display = 'none';
        return;
    }
    ansC.textContent = c;
    if(d === null || a === undefined){
        ansD.style.display = 'none';
        return;
    }
    ansD.textContent = d;
}