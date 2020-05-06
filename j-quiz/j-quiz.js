// Player 1
$(document).ready(function() {
    $("input#a1").keyup(function() {
        if (this.value === 'Lady Gaga' || this.value === 'Lada gaga' || this.value === 'lady gaga' || this.value === 'Gaga' || this.value === 'gaga') {
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
        if (this.value === 'Kanye' || this.value === 'kanye' || this.value === 'Kanye West' || this.value === 'kanye west' || this.value === 'Kanye west' || this.value === 'kanye West') {
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
        if (this.value === 'joachim' || this.value === 'Joachim' || this.value === 'Julian Joachim' || this.value === 'julian joachim' || this.value === 'Julian joachim' || this.value === 'julian Joachim' ) {
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
        if (this.value === 'marques' || this.value === 'Marques' || this.value === 'Rui Marques' || this.value === 'rui marques' || this.value === 'Rui Marques' || this.value === 'rui Marques' || this.value === 'rui marquez' || this.value === 'Rui Marquez' || this.value === 'marquez' || this.value === 'Rui Marquez' ) {
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
        if (this.value === 'lewis' || this.value === 'Lewis' || this.value === 'Eddie Lewis' || this.value === 'Eddie lewis' || this.value === 'eddie Lewis' || this.value === 'eddie lewis' || this.value === 'edward lewis' || this.value === 'Edward Lewis' ) {
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
        if (this.value === 'gylfi einarsson' || this.value === 'Gylfi einarsson' || this.value === 'Gylfi Einarsson' || this.value === 'gylfi Einarsson' || this.value === 'gylfi' || this.value === 'einarsson' || this.value === 'Gylfi' || this.value === 'Einarsson' || this.value === 'gylfi Einarson' || this.value === 'gilfi' || this.value === 'Einerson' || this.value === 'einerson'  ) {
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
        if (this.value === 'hayden fox' || this.value === 'hayden foxe' || this.value === 'foxe' || this.value === 'fox' || this.value === 'Fox' || this.value === 'Foxe' || this.value === 'Hayden Fox' || this.value === 'Hayden Foxe' || this.value === 'Hayden fox' ) {
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
        if (this.value === 'Daniel harding' || this.value === 'Dan Harding' || this.value === 'dan harding' || this.value === 'harding' || this.value === 'Harding' || this.value === 'Daniel Harding' || this.value === 'Dan harding' || this.value === 'daniel harding' || this.value === 'daniel harding ' || this.value === 'harding '  ) {
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
        if (this.value === 'teddy lucic' || this.value === 'Teddy lucic' || this.value === 'teddy lucic' || this.value === 'lucic' || this.value === 'Lucic' || this.value === 'Lukic' || this.value === 'teddy lukic' || this.value === 'Teddy lukic' || this.value === 'teddy lukic' || this.value === 'lukic' || this.value === 'Lukic' ) {
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
        if (this.value === 'Paul Okon' || this.value === 'Paul okon' || this.value === 'paul okon' || this.value === 'okon' || this.value === 'Okon' ) {
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
        if (this.value === 'Martin Hiden' || this.value === 'Martin hiden' || this.value === 'martin hiden' || this.value === 'Hiden' || this.value === 'hiden' ) {
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
        if (this.value === 'Danny Hay' || this.value === 'Danny hay' || this.value === 'Hay' || this.value === 'hay' || this.value === 'Daniel Hay' || this.value === 'Daniel hay' || this.value === 'daniel hay' ) {
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