// Player 1
$(document).ready(function() {
    $("#a1").keyup(function() {
        if (this.value === 'Carole' || this.value === 'Carol' || this.value === 'carol' || this.value === 'Seb Carol' || this.value === 'seb carol' || this.value === 'Seb Carole' || this.value === 'seb carol' || this.value === 'Sebastien Carole' || this.value === 'sebastien carole' || this.value === 'sebastian carole' || this.value === 'sebastien carol' ) {
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
    $("#a2").keyup(function() {
        if (this.value === 'Flo' || this.value === 'flo' || this.value === 'tore flo' || this.value === 'Tore Flo' || this.value === 'tore andre flo' || this.value === 'Tore Andre Flo' ) {
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
    $("#a3").keyup(function() {
        if (this.value === 'joachim' || this.value === 'Joachim' || this.value === 'Julian Joachim' || this.value === 'julian joachim' ) {
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
    $("#a4").keyup(function() {
        if (this.value === 'marques' || this.value === 'Marques' || this.value === 'Rui Marques' || this.value === 'rui marques' ) {
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