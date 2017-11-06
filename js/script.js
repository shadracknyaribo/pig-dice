// business logic
function Roll() {
  this.total = 0;
}

Roll.prototype.roll = function() {
  var dieRoll = Math.floor(Math.random() * 6) + 1;
  $('#roll').text(dieRoll);
  return dieRoll;
}

Roll.prototype.turn = function() {
  var roll = this.roll();
  if (roll === 1) {
    this.total = 0;
  } else {
    this.total += roll;
  }
  return this.total;
};

// user interface logic
$(document).ready(function() {
  var newroll = new Roll();
  $("#roll1").click(function() {
    event.preventDefault();


    var roll2 = newroll.turn();
    $("#point1").html(roll2);
  });
  $("#turn1button").click(function() {
    var hold = $("#TotalPoint1").text() * 1;
    var displaytotalPoints = hold + newroll.total;
    $("#TotalPoint2").text(displaytotalPoints);
    $("#point1").text(0);
    newroll.total = 0;
    $("#player1").hide();
    $("#player2").show();
    if (displaytotal > 100) {
      alert("You win")
    }
  });
  $("#roll2").click(function() {
    event.preventDefault();
    var Rollbalance = newroll.turn();
    $("#point2").html(Rollbalance);
  });
  $("#turn2button").click(function() {
    var hold = $("#TotalPoint2").text() * 1;
    var displaytotalPoints = hold + newroll.total;
    $("#TotalPoint2").text(displaytotalPoints);
    $("#point2").text(0);
    newroll.total = 0;
    $("#player2").hide();
    $("#player1").show();
    if (displaytotal > 100) {
      alert("You win")
    }
  });

});
