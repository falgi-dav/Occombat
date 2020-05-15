let plateau = {
  nombreLigne: 12,
  nombreColonne: 12,
  nombreObstacles : 20,
  creation: function () {
    let numberInc = 1;
    for (i = 0; i < this.nombreLigne; i++) {
      $('<tr>').prependTo('.plateau').attr('id', 'tr' + i);
      for (i2 = 0; i2 < this.nombreColonne; i2++) {
        $('<td>').prependTo('#' + 'tr' + i).attr('id', numberInc).text(numberInc).addClass("vide");
        numberInc = ++numberInc;
      }
    }
  },
  obstacles: function () {
    for (let i = 0; i < this.nombreObstacles; i++) {
      // creation du nombre aleatoir pour la case obstacle
      let numbRepeat = Math.round(Math.random() * (144 - 1) + 1);
      $(".plateau").find("#" + numbRepeat).css("background-image", "url(./img/boule.png)").css('background-size', 'cover').attr('class', 'obstacle');
    }
  },
  placementArmes: function (placement, image) {
    //creation du tableau contenant les armes    
    let randomArme = Math.floor(Math.random()*arrayArme.length);
    let numbRepeat = Math.round(Math.random() * (144 - 1) + 1);
    //controle si la case est dsiponible pour placement du joueur.
    let getElement = $(".plateau").find("#" + numbRepeat).hasClass("vide").toString();     
    //indication du pacement sur la grille du joueur
    placement = numbRepeat;     
    //placement de l'image du joueur et sur la grille
    $(".plateau").find("#" + placement).css("background-image", "url(" + image + ")").css('background-size', 'cover').addClass(arrayArme[randomArme]).addClass('arme').removeClass('vide');    
  }
}