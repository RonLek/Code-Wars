function populate() {
    if (quiz.isEnded()) {
        showScore();
    }
    else {
        //Show Question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //Show Choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex;
    var element = document.getElementById('progress');
    element.innerHTML = "Question " + (currentQuestionNumber+1) + " of " + quiz.questions.length;
}

function showScore() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<br><br><br><br><br><h2 style= 'text-align: center;background: #424242;color:white;font-size:50px'>Your Score: " + quiz.score + "</h2>";
    gameOverHTML += "<br><br><h3>Please call the Supervisor to note your Score!</h3>";
    gameOverHTML += '<br><br><br><p style="text-align: center; font-size: 15px">Made with <img src="images/love.png"> by Rohan Lekhwani</p>'
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

var questions = [
    new Question("What does the term 'immutable' mean, as related to a String object's value in Java?", ["It cannot be changed.", "It can be replaced.", "It can't be searched upon.", "It can be published."], "It cannot be changed."),
    new Question("Which of these computer languages came first?", ["C++", "FORTRAN", "PASCAL", "Java"], "FORTRAN"),
    new Question("Which of these is another way of saying a decimal numbering system?",["Base4","Base7","Base10","Base99"],"Base10"),
    new Question("'RISC' is an acronym for _____ Instruction Set Computing.",["Remote","Reduced","Readable","Reporter"],"Reduced"),
    new Question("Which company collaborated with Microsoft to build OS/2?",["HP","IBM","Apple","Xerox"],"IBM"),
    new Question('#include "stdio.h"<br>int main()<br>{<br>int i;<br>for(i=1; i<=10; i++) printf("%d ", ++i);<br>return 0;<br>}',["1 2 3 4 5 6 7 8 9","1 3 5 7 9","2 4 6 8 10","Run Time Error"],"2 4 6 8 10"),
    new Question("In C++ which choice is the 5th element of the array named: score?",["score[4];","score[5];","#score[4];","*score[5]"],"score[4];"),
    new Question("What was the first character set coding technique using 5 bits/character, and predates both EBCDIC and ASCII?",["Baudot Code","Murray Code","ITA 2","ITA 3"],"Baudot Code"),
    new Question("Which of the following are VPN tunneling protocols?",["PPTP","L2TP","All of these","IPsec"],"All of these"),
    new Question("Which intermediate form are Java programs compiled to?",["Bytecode","Macros","C","Machine Language"],"Bytecode"),
    new Question("What notation is used in the discission of the running time complexity of algorithm?",["Big O Notation","Small P Notation","Big C Notation","Big A Notation"],"Big O Notation"),
    new Question("What is the practice of logically dividing a visible network into 2 or more networks called?",["Subnetting","Lorezing","Masking","Bifurcating"],"Subnetting"),
    new Question('#include "stdio.h"<br>int main()<br>{<br>int i;<br>if (printf("0")) i = 3;<br>else i = 5;<br>printf("%d", i);<br>return 0;<br>}',["3","5","03","05"],"03"),
    new Question("What does the datatype 'int' indicate in C?",["Intention","Floating Point Numbers","Integer","Intricate"],"Integer"),
    new Question("'Talk is cheap show me the code!' Who said this?",["Rohan Lekhwani","Abhishek Jugdar","Aditya Raut","Linus Trovalds"],"Linus Trovalds"),
    new Question("AMD's first x86 processor was called the K5. What did the K stand for?",["Kode","Kite","Kool","Kryptonite"],"Kryptonite"),
    new Question("If the IPv6(Normal) address is '::' what, if anything does this signify?",["Private Adress Space","Inverted Address","Illegal IP Adress","8 segments are 0"],"8 segments are 0"),
    new Question("Which of these terms indicates using an operator for more than one function depending on context without changing its name?",["Static Casting","Operator Typing","Functional Programming","Operator Overloading"],"Operator Overloading"),
    new Question("What HTML tag is used for the largest heading?",["h1","head","h0","h2"],"h1"),
    new Question("Which computer language is most closely linked with Flash?",["Ruby","Python","ActionScript3","LOGO"],"ActionScript3"),
    new Question("In Windows searching with which three letters will bring up a command prompt?",["BBT","CMD","PMT","LOL"],"CMD"),
    new Question("In which field is the Dijkstra Prize given?",["Distributed Computing","Theory of Computers","Information Retrieval","Artificial Intelligence"],"Distributed Computing"),
    new Question("File extensions .rar and .zip indicate which type of file?",["Gaming","Compressed","Audio","Picture"],"Compressed"),
    new Question("In the abbreviation 'ACM', A is Association and C is Computing,what does M stand for?",["Machinery","Manpower","Movement","Managers"],"Machinery"),
    new Question("What is a malicious program that is disguised as a legitimate software?",["Golden Fleece","Nemean Lion","Trojan Horse","Thor's Hammer"],"Trojan Horse"),
    new Question('#include "stdio.h"<br>#include "stdlib.h"<br>int main()<br>{<br>const int var = 10;<br>int *ptr = &var;<br>*ptr = 12;<br>printf("%d", var);<br>return 0;<br>}',["12","Compile Time Error","10","Run Time Error"],"12"),
    new Question("What is the R programming language well suited for?",["Graphical statistical methods","DNA/RNA sequencing","Relational Databases","Real Time Analytics"],"Graphical statistical methods"),
    new Question("Where is IIIT Pune?(Hint: It's not in Pune)",["Sadumbare","Sudumbare","In my heart","Pune"],"Sudumbare"),
    new Question("Which of these is special purpose programming language designed for managing data held in a RDBMS",["Clipper","Data/SV","ISO/M","SQL"],"SQL"),
    new Question("What is the Nobel Prize equivalent of Computer Science",["Padmabhushan","Arjun Award","Turing Award","Pulitzer Prize"],"Turing Award"),
];

var quiz = new Quiz(questions);

populate();

var deadline = new Date().getTime() + 30 * 60000;

var x = setInterval(function () {

    var now = new Date().getTime();
    var t = deadline - now;
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
        quiz.questionIndex = questions.length;
        populate();
    }
}, 1000);