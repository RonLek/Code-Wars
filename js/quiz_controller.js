function Quiz(questions)
{
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
}

Quiz.prototype.getQuestionIndex = function()
{
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
    if(this.getQuestionIndex().correctAnswer(answer))
    {
        this.score++;
    }
    this.questionIndex++;
}