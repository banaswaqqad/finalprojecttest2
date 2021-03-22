'use strict'

let form = document.getElementById('form');
let questionArray=['q1','q2','q3'];
let answers=[];


for(let x=0;i<questionArray;i++)
{
    document.write();
}


form.addEventListener('submit',clickhandler)

    function clickhandler(event) {
    event.preventDefault();


    for(let i=0;i<questionArray.length;i++)
    {
        console.log(questionArray[i]);
    }
let question=event.target.question.value;

answers.push(question);
console.log(answers);


}


