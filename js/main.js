//initialisationd u plateau
plateau.creation();
plateau.obstacles();
//creation des joueurs
let playerGame1 = new player.setplayer(100, "./img/gotenk.png", "", 10);
let playerGame2 = new player.setplayer(100, "./img/goku1.png", "", 10);
//creation des armes
let arme1 = new arme.setArmes("carte1", "./img/carteupharricot.png", "", 10);
let arme2 = new arme.setArmes("carte2", "./img/vegetaattack.png", "", 10);
let arme3 = new arme.setArmes("carte3", "./img/gokuattack.png", "", 10);
let arme4 = new arme.setArmes("carte4", "./img/transform.jpg", "", 10);
let arrayArme = [arme1.nom, arme2.nom, arme3.nom, arme4.nom];
//placement des armes et joueurs sur la grille
plateau.placementArmes(arme1.placement, "./img/radar.png");
plateau.placementArmes(arme2.placement, "./img/radar.png");
plateau.placementArmes(arme3.placement, "./img/radar.png");
plateau.placementArmes(arme4.placement, "./img/radar.png");
player.placePlayer1();
player.placePlayer2();