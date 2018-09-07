$('#start').on('click', function(){
    game.start();
    
   
})
    $(document).on('click','#end',function(){
        game.done();
    })

var questions = [{
    question: "In which town do the Simpsons reside?",
    answers: ["Springville", "Springfield", "Shelbyville", "Shelbyfield"],
    correctAnswer: "Springfield"
}, {
    question: "Who is Mr. Burns\' assistant?",
    answers: ["Barnard Gumble", "Dr. William MacDougal", "Seymour Skinner", "Waylon Smithers"],
    correctAnswer: "Waylon Smithers"
}, {
    question: "How old is Bart?",
    answers: ["10", "11", "9", "12"],
    correctAnswer: "10"
}, {
    question: "What is the name of the minister at the First Church of Springfield?",
    answers: ["Timothy Lovejoy", "Ned Flanders", "Abraham Simpson", "Carl Carlson"],
    correctAnswer: "Timothy Lovejoy"
}, {
    question: "What gift did Homer give Marge on her 34th birthday?",
    answers: ["A ticket to \"Duff World\"", "A coupon for Free Doughnuts.", "A dress.", "A bowling ball."],
    correctAnswer: "A bowling ball."
}, {
    question: "What is the name of Mr. Burn\'s teddy bear?",
    answers: ["Toto", "Bobo", "Teddy", "Todo"],
    correctAnswer: "Bobo"
}, {
    question: "What is the name of the school bus driver?",
    answers: ["Troy", "Apu", "Ned", "Otto"],
    correctAnswer: "Otto"
}, {
    question: "What is the name of the local convience store?",
    answers: ["Quick-E-Mart", "Kwik-E-Mart", "Kwik-E-Store", "Kwik-N-Go"],
    correctAnswer: "Springfield"
}, {
    question: "Who is the Simpsons\' next door neighbor?",
    answers: ["Lenny Leonard", "Ned Flanders", "Barnard Gumble", "Frank Grimes"],
    correctAnswer: "Ned Flanders"
}, {
    question: "What does Smithers collect?",
    answers: ["Itchy and Scrathy memorabilia", "Duff Man Figurenes", "Malibu Stacey Dolls", "Corvette Toy Models"],
    correctAnswer: "Malibu Stacey Dolls"
}]

var game ={
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            //console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining:  <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2');  
            for(var j=0; j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }

    }
    $('#subwrapper').append('<br><button id="end">DONE</button>')
},
    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val()==questions[04].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"),function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"),function(){
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-10']:checked"),function(){
            if($(this).val()==questions[10].correctAnswer){
                game.correct++;
            }   else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>")
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>")
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }

}


