let santeInit = 100;

var player = {
    // creation du joueur
    setplayer: function (sante, image, placement, degat, arme, defend) {
        this.sante = sante;
        this.image = image,
            this.placement = placement
        this.degat = degat,
            this.arme = arme,
            // 1 = oui ; 0 = non
            this.defend = defend
    },
    placePlayer1: function () {
        let numbRepeat = Math.round(Math.random() * (144 - 1) + 1);
        //controle si la case est dsiponible pour placement du joueur.
        let getElement = $(".plateau").find("#" + numbRepeat).hasClass("vide").toString();
        //indication du pacement sur la grille du joueur
        playerGame1.placement = numbRepeat;
        //placement de l'image du joueur et sur la grille
        $(".plateau").find("#" + playerGame1.placement).css("background-image", "url(" + playerGame1.image + ")").css('background-size', 'cover').addClass('gamer1').removeClass('vide');
        //initialisation de la barre de vie
        $(".lifeplayer1").text("Points de vie: " + playerGame1.sante);
    },
    placePlayer2: function () {
        let numbRepeat = Math.round(Math.random() * (144 - 1) + 1);
        //controle si la case est dsiponible pour placement du joueur.
        let getElement = $(".plateau").find("#" + numbRepeat).hasClass("vide").toString();
        playerGame2.placement = numbRepeat
        $(".plateau").find("#" + playerGame2.placement).css("background-image", "url(" + playerGame2.image + ")").css('background-size', 'cover').addClass('gamer2').removeClass('vide');
        $(".lifeplayer2").text("Points de vie: " + playerGame2.sante);
    },
    attack: function (id, playerSante, animImg) {
        //test si fin de partie en cas de vie a 0
        if (playerSante <= 0) {
            alert('Fin de partie');
        } else {
            $('.' + id).text("Points de vie: " + playerSante);
            $(animImg).effect('bounce', 700);
        }
    },
    defendre: function () {



    },
    deplacer: function (id, name, placement, image) {
        //on cherche l'id de personnage
        $(".plateau").find("#" + placement).removeAttr('style').removeClass(name).addClass('vide');
        //placement nouvelle position
        $(".plateau").find("#" + id).css("background-image", "url(" + image + ")").css('background-size', 'cover').removeClass('vide').addClass(name);
    },
    tourPlayer: function () {
        if (playerTurn == 1) {
            playerTurn = 2;
        } else {
            playerTurn = 1;
        }
    },
    combat: function (gamepos1, gamepos2) {

        if ((gamepos1 == gamepos2 + 1) || (gamepos2 == gamepos1 + 1) || (gamepos1 == gamepos2 + 12) || (gamepos2 == gamepos1 + 12)) {
            alert('combattt');           
            if (playerTurn == 2) {
                $('.btnPlay1, .btnDefend1').attr("disabled", true);
                $('.btnPlay2, .btnDefend2').attr("disabled", false);
            } else {
                $('.btnPlay2, .btnDefend2').attr("disabled", true);
                $('.btnPlay1, .btnDefend1').attr("disabled", false);
            }
        }
    }
}
