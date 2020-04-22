// Player 1
$(document).ready(function() {
    $("input#a1").keyup(function() {
        if (this.value === 'Illan Meslier' || this.value === 'illan meslier' || this.value === 'Illan meslier' || this.value === 'illan Meslier' || this.value === 'Meslier' || this.value === 'meslier' || this.value === 'Meslier ' || this.value === ' Meslier' || this.value === ' meslier' || this.value === 'meslier ' ) {
            $("div#play-one").addClass("correct");
            $("div#play-one").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-one").removeClass("correct");
            $("div#play-one").removeClass("incorrect");
        } else {
            $("div#play-one").addClass("incorrect");
        }
    });
});

// Player 2
$(document).ready(function() {
    $("input#a2").keyup(function() {
        if (this.value === 'Jamie Shackleton' || this.value === 'Jamie shackleton' || this.value === 'jamie shackleton' || this.value === 'Jamie Shackleton ' || this.value === 'Jamie shackleton ' || this.value === 'jamie shackleton' || this.value === 'shackleton' || this.value === 'Shackleton' || this.value === ' Jamie Shackleton' || this.value === ' Jamie shackleton' || this.value === 'jamie shack' || this.value === 'Jamie Shack' || this.value === 'Jamie shack' || this.value === 'baby shack' ) {
            $("div#play-two").addClass("correct");
            $("div#play-two").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-two").removeClass("correct");
            $("div#play-two").removeClass("incorrect");
        } else {
            $("div#play-two").addClass("incorrect");
        }
    });
});

// Player 3
$(document).ready(function() {
    $("input#a3").keyup(function() {
        if (this.value === 'Caleb Ekuban' || this.value === 'Caleb ekuban' || this.value === 'caleb ekuban' || this.value === 'Ekuban' || this.value === 'ekuban' || this.value === 'Caleb Ekuban ' | this.value === 'caleb ekuban ' | this.value === 'Caleb ekuban ' ) {
            $("div#play-three").addClass("correct");
            $("div#play-three").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-three").removeClass("correct");
            $("div#play-three").removeClass("incorrect");
        } else {
            $("div#play-three").addClass("incorrect");
        }
    });
});

// Player 4
$(document).ready(function() {
    $("input#a4").keyup(function() {
        if (this.value === 'Aapo Halme' || this.value === 'Aapo halme' || this.value === 'aapo halme' || this.value === 'aapo Halme' || this.value === 'Halme' || this.value === 'halme' || this.value === 'Aapo Halme ' || this.value === 'Aapo halme ' || this.value === 'aapo halme ' || this.value === 'Halme ' || this.value === 'halme ' ) {
            $("div#play-four").addClass("correct");
            $("div#play-four").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-four").removeClass("correct");
            $("div#play-four").removeClass("incorrect");
        } else {
            $("div#play-four").addClass("incorrect");
        }
    });
});

// Player 5
$(document).ready(function() {
    $("input#a5").keyup(function() {
        if (this.value === 'Pierre-Michel Lasogga' || this.value === 'Pierre-michel Lasogga' || this.value === 'Pierre-michel lasogga' || this.value === 'pierre-michel lasogga' || this.value === 'Pierre Michel Lasogga' || this.value === 'Pierre michel lasogga' || this.value === 'Pierre Michel lasogga' || this.value === 'Pierre michel Lasogga' || this.value === 'Pierre Lasogga' || this.value === 'Pierre Lasogga' || this.value === 'pierre lasogga' || this.value === 'Pierre michel Lasogga ' || this.value === 'Lasogga' || this.value === 'lasogga ' || this.value === 'lasogga' || this.value === ' lasogga' ) {
            $("div#play-five").addClass("correct");
            $("div#play-five").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-five").removeClass("correct");
            $("div#play-five").removeClass("incorrect");
        } else {
            $("div#play-five").addClass("incorrect");
        }
    });
});

// Player 6
$(document).ready(function() {
    $("input#a6").keyup(function() {
        if (this.value === 'Jordan Botaka' || this.value === 'Jordan botaka' || this.value === 'jordan Botaka' || this.value === 'jordan botaka' || this.value === 'Botaka' || this.value === 'botaka' || this.value === 'Jordan Botaka ' || this.value === 'jordan botaka ' || this.value === 'Jordan botaka ' ) {
            $("div#play-six").addClass("correct");
            $("div#play-six").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-six").removeClass("correct");
            $("div#play-six").removeClass("incorrect");
        } else {
            $("div#play-six").addClass("incorrect");
        }
    });
});

// Player 7
$(document).ready(function() {
    $("input#a7").keyup(function() {
        if (this.value === 'Hadi Sacko' || this.value === 'Hadi sacko' || this.value === 'hadi sacko' || this.value === 'Sacko' || this.value === 'sacko' || this.value === 'Hadi Sacko ' || this.value === 'Hadi sacko ' || this.value === 'hadi sacko ' || this.value === 'Sacko ' || this.value === 'sacko ' ) {
            $("div#play-seven").addClass("correct");
            $("div#play-seven").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-seven").removeClass("correct");
            $("div#play-seven").removeClass("incorrect");
        } else {
            $("div#play-seven").addClass("incorrect");
        }
    });
});

// Player 8
$(document).ready(function() {
    $("input#a8").keyup(function() {
        if (this.value === 'Casper Sloth' || this.value === 'casper sloth' || this.value === 'Casper sloth' || this.value === 'casper Sloth' || this.value === 'Sloth' || this.value === 'sloth' || this.value === 'Casper Sloth ' || this.value === 'casper sloth ' || this.value === 'Sloth ' || this.value === 'sloth ' ) {
            $("div#play-eight").addClass("correct");
            $("div#play-eight").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-eight").removeClass("correct");
            $("div#play-eight").removeClass("incorrect");
        } else {
            $("div#play-eight").addClass("incorrect");
        }
    });
});

// Player 9
$(document).ready(function() {
    $("input#a9").keyup(function() {
        if (this.value === 'Tommaso Bianchi' || this.value === 'Tommaso bianchi' || this.value === 'tommaso bianchi' || this.value === 'Bianchi' || this.value === 'bianchi' || this.value === 'Tommaso Bianchi ' || this.value === 'Tommaso bianchi ' || this.value === 'Bianchi ' || this.value === 'bianchi ' || this.value === 'Tom Bianchi' || this.value === 'tom bianchi' ) {
            $("div#play-nine").addClass("correct");
            $("div#play-nine").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-nine").removeClass("correct");
            $("div#play-nine").removeClass("incorrect");
        } else {
            $("div#play-nine").addClass("incorrect");
        }
    });
});

// Player 10
$(document).ready(function() {
    $("input#a10").keyup(function() {
        if (this.value === 'Jack Butland' || this.value === 'Jack butland' || this.value === 'jack butland' || this.value === 'Butland' || this.value === 'butland' || this.value === 'jack butland ' || this.value === 'Butland ' || this.value === 'butland ' ) {
            $("div#play-ten").addClass("correct");
            $("div#play-ten").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-ten").removeClass("correct");
            $("div#play-ten").removeClass("incorrect");
        } else {
            $("div#play-ten").addClass("incorrect");
        }
    });
});

// Player 11
$(document).ready(function() {
    $("input#a11").keyup(function() {
        if (this.value === 'Aiden White' || this.value === 'aiden white' || this.value === 'aiden White' || this.value === 'Aiden white' || this.value === 'Aidy White' || this.value === 'aidy white' || this.value === 'aidy White' || this.value === 'Aidy white' || this.value === 'White' || this.value === 'white' || this.value === 'White ' || this.value === 'white ' ) {
            $("div#play-eleven").addClass("correct");
            $("div#play-eleven").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-eleven").removeClass("correct");
            $("div#play-eleven").removeClass("incorrect");
        } else {
            $("div#play-eleven").addClass("incorrect");
        }
    });
});

// Player 12
$(document).ready(function() {
    $("input#a12").keyup(function() {
        if (this.value === 'Adryan' || this.value === 'adryan' || this.value === 'Adryan ' || this.value === 'Adryan Tavares' || this.value === 'Adryan tavares' || this.value === 'adryan Tavares' || this.value === 'adryan tavares' || this.value === 'adryan ' || this.value === 'Adryan Tavares ' || this.value === 'Adryan tavares ' || this.value === 'adryan tavares' || this.value === 'Tavares' || this.value === 'tavares' || this.value === 'Tavares ') {
            $("div#play-twelve").addClass("correct");
            $("div#play-twelve").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-twelve").removeClass("correct");
            $("div#play-twelve").removeClass("incorrect");
        } else {
            $("div#play-twelve").addClass("incorrect");
        }
    });
});

// Player 13
$(document).ready(function() {
    $("input#a13").keyup(function() {
        if (this.value === 'Rodolph Austin' || this.value === 'rodolph Austin' || this.value === 'Rodolph austin' || this.value === 'rodolph austin' || this.value === 'Rudy Austin' || this.value === 'rudy Austin' || this.value === 'Rudy austin' || this.value === 'rudy austin' || this.value === 'Austin' || this.value === 'austin' || this.value === 'austin ' || this.value === 'Austin ' || this.value === 'rudy austin' || this.value === 'Austen' || this.value === 'austen' || this.value === 'austen ' || this.value === 'Austen ' ) {
            $("div#play-thirteen").addClass("correct");
            $("div#play-thirteen").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-thirteen").removeClass("correct");
            $("div#play-thirteen").removeClass("incorrect");
        } else {
            $("div#play-thirteen").addClass("incorrect");
        }
    });
});

// Player 14
$(document).ready(function() {
    $("input#a14").keyup(function() {
        if (this.value === 'Noel Hunt' || this.value === 'Noel hunt' || this.value === 'noel Hunt' || this.value === 'noel hunt' || this.value === 'Hunt' || this.value === 'hunt' || this.value === 'Noel Hunt ' || this.value === 'Noel hunt ' || this.value === 'noel Hunt ' || this.value === 'noel hunt ' || this.value === 'Hunt ' || this.value === 'hunt ' ) {
            $("div#play-fourteen").addClass("correct");
            $("div#play-fourteen").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-fourteen").removeClass("correct");
            $("div#play-fourteen").removeClass("incorrect");
        } else {
            $("div#play-fourteen").addClass("incorrect");
        }
    });
});

// Player 15
$(document).ready(function() {
    $("input#a15").keyup(function() {
        if (this.value === 'Paul Green' || this.value === 'Paul green' || this.value === 'paul Green' || this.value === 'paul green' || this.value === 'Green' || this.value === 'green' || this.value === 'Paul Green ' || this.value === 'Paul green ' || this.value === 'paul Green ' || this.value === 'paul green ' || this.value === 'Green ' || this.value === 'green ' ) {
            $("div#play-fifteen").addClass("correct");
            $("div#play-fifteen").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-fifteen").removeClass("correct");
            $("div#play-fifteen").removeClass("incorrect");
        } else {
            $("div#play-fifteen").addClass("incorrect");
        }
    });
});

// Player 16
$(document).ready(function() {
    $("input#a16").keyup(function() {
        if (this.value === 'Marcus Antonsson' || this.value === 'marcus Antonsson' || this.value === 'Marcus antonsson' || this.value === 'marcus antonsson' || this.value === 'Antonsson' || this.value === 'antonsson' || this.value === 'Marcus Antonsson ' || this.value === 'marcus Antonsson ' || this.value === 'Marcus antonsson ' || this.value === 'marcus antonsson ' || this.value === 'Antonsson ' || this.value === 'antonsson ' ) {
            $("div#play-sixteen").addClass("correct");
            $("div#play-sixteen").removeClass("incorrect");
        } else if (this.value === '') {
            $("div#play-sixteen").removeClass("correct");
            $("div#play-sixteen").removeClass("incorrect");
        } else {
            $("div#play-sixteen").addClass("incorrect");
        }
    });
});

// update
$(document).ready(function() {
    $("input.lufc-input").keyup(function() {
        $("span#score").text($("div.correct").length );
        $("span#score-bad").text($("div.correct").length );
        $("span#score-good").text($("div.correct").length );
        $("span#score-ok").text($("div.correct").length );
    });
});

// show score
$(document).ready(function() {
    $("input.lufc-input").keyup(function() {
        $("div#score-wrapper").fadeIn(1000);
    });
});

//show modal
$(document).ready(function() {
    $("input.lufc-input").keyup(function() {
        if ($("div.correct").length === 16) {
            $('div#modal-wrapper').modal();
            $('button#submit-quiz-btn').attr('data-target','#modal-wrapper');
        };
    });
});

//show different modals
$(document).ready(function() {
    $("input.lufc-input").keyup(function() {
        if ($("div.correct").length <= 7) {
            $('button#submit-quiz-btn').attr('data-target','#not-good-wrapper');
        } else if ($("div.correct").length >= 8 &&  $("div.correct").length <= 13) {
            $('button#submit-quiz-btn').attr('data-target','#ok-wrapper');
        } else if ($("div.correct").length >=14 ) {
            $('button#submit-quiz-btn').attr('data-target','#modal-wrapper');
        }
    });
});