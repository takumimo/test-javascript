const quiz = [
    {
        question: 'この中で一番身長が大きいのは？',
        answers: [
            'ウルトラマン',
            'サザエさん',
            'ゴジラ',
            'ガンダム'
        ],
        correct: 'ゴジラ'
    },{
        question: 'この中で一番身長が小さいのは？',
        answers: [
            'ウルトラマン',
            'サザエさん',
            'ゴジラ',
            'ガンダム'
        ],
        correct: 'サザエさん'
    },{
        question: 'この中で一番体重が重いのは？',
        answers: [
            'ウルトラマン',
            'サザエさん',
            'ゴジラ',
            'ガンダム'
        ],
        correct: 'ゴジラ'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;


const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < $button.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解!');
    }
    quizIndex++;

    if(quizIndex < quiz.length){
        setupQuiz(); 
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です');
    }
};


    let handlerIndex = 0;
    while (handlerIndex < $button.length){
        $button[handlerIndex].addEventListener('click', (e) => {
            clickHandler(e);
        })
        handlerIndex++;
    }
