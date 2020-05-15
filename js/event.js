$(".vide").mouseover(function test() {
    let posGamer = parseInt($(".plateau").find("." + 'gamer1').attr('id'));
    //console.log('position gamer : ' + posGamer);
    var id = parseInt($(this).attr('id'));
    //console.log(id + 2);
    if ((posGamer + 3 >= id) && (posGamer - 3 <= id)) {
        $("#" + id).css('background-color', 'green');
        return true
    } else {
        //console.log('pas bon');
        return false
    }
});
$(".vide").mouseout(function () {
    var id = $(this).attr('id');
    //console.log(id);
    $("#" + id).css('background-color', 'white');
});
$(".lifeplayer1").change(function () {
    if (playerGame2.sante == 0) {
        alert('game over');
    }
});
//evement de deplacement du joueur
let playerTurn = 1;
$('.vide, .arme').click(function () {
    if (playerTurn == 1) {
        //fonction split, fonction contains
        let clickClass = $(this).attr('class').replace(' arme', '').replace('obstacle ', '').replace('gamer1 ', '');
        turnPlayer(clickClass, playerGame1, arme1.degat, '#arme1');

        let clicId = $(this).attr('id');
        player.deplacer(clicId, 'gamer1', playerGame1.placement, playerGame1.image);
        //attribution nouveau positionnement player
        playerGame1.placement = parseInt(clicId);
        player.tourPlayer();
        player.combat(playerGame1.placement, playerGame2.placement);

    } else {
        let clickClass = $(this).attr('class').replace(' arme', '').replace('obstacle ', '').replace('gamer2 ', '');
        turnPlayer(clickClass, playerGame2.degat, arme1.degat, '#arme2');
        let clicId = $(this).attr('id');
        player.deplacer(clicId, 'gamer2', playerGame2.placement, playerGame2.image);
        //attricution nouveau positionnement player        
        playerGame2.placement = parseInt(clicId);
        player.tourPlayer();
        player.combat(playerGame2.placement, playerGame1.placement);
    }
});
//evenement de ramassage des armes
function turnPlayer(id, gamerDega, armeDega, nameArme) {
    switch (id) {
        case 'carte1':
            gamerDega.degat += armeDega;
            $(nameArme).attr('src', arme1.image);
            break;
        case 'carte2':
            //alert('test');
            gamerDega = gamerDega + armeDega;
            $(nameArme).attr('src', arme2.image);
            break;
        case 'carte3':
            //alert('test');
            gamerDega = gamerDega + armeDega;
            $(nameArme).attr('src', arme3.image);
            break;
        case 'carte4':
            //alert('test');
            gamerDega = gamerDega + armeDega;
            $(nameArme).attr('src', arme4.image);
            break;
        default:
    }
}
//choix aleatoire du player
$(document).ready(function () {
    //radom du tour du player
    let randomTurn = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    playerTurn = randomTurn;
    player.tourPlayer();
});
// evenement d'attaque
$('.btnPlay1, .btnPlay2').click(function () {
    let clickMyId = $(this).attr('class').split(" ")[3];
    if (clickMyId == 'btnPlay2') {
        playerGame1.sante = playerGame1.sante - playerGame2.degat;
        player.attack('lifeplayer1', playerGame1.sante, ".impGamer1");
        $('.btnPlay2, .btnDefend2').attr("disabled", true);
        $('.btnPlay1, .btnDefend1').attr("disabled", false);
        player.tourPlayer();
    } else {
        playerGame2.sante = playerGame2.sante - playerGame1.degat;
        player.attack('lifeplayer2', playerGame2.sante, ".impGamer2");
        $('.btnPlay1, .btnDefend1').attr("disabled", true);
        $('.btnPlay2, .btnDefend2').attr("disabled", false);
        player.tourPlayer();
    }
});
