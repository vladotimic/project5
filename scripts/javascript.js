$(document).ready(function() {
  function getDataByTwitch() {
    var url = "https://api.twitch.tv/kraken/streams/freecodecamp?client_id=vbql4wlp1kpixjek8v3zc7hr8rlx1i";

    var streams = ["freecodecamp", "riotgames", "froggen", "godazed", "harbleu", "eternalenvyy", "summit1g", "trick2g", "nl_kripp", "realkraftyy", "voyboy", "imaqtpie", "sp4zie", "hiko", "mastertay"];

    for (var i = 0; i < streams.length; i++) {
      $.ajax({
        type: "GET",
        url: "https://api.twitch.tv/kraken/channels/" + streams[i],
        headers: {
          "client-ID": "vbql4wlp1kpixjek8v3zc7hr8rlx1i"
        },
        success: function(data1) {
          $.getJSON("https://api.twitch.tv/kraken/streams/" + data1.name + "?client_id=vbql4wlp1kpixjek8v3zc7hr8rlx1i").done(function(data2) {
            var name = data2._links.self.slice(37);
            if (data2.stream === null) {
              $("#logo-off").append("<img class=\"img-fluid img-thumbnail\" src=\"" + data1.logo + "\"></br>");
              $("#name-off").append("<a href=\"https://www.twitch.tv/" + name + "\" target=\"_blank\"><h5><i class=\"fa fa-twitch\" aria-hidden=\"true\"></i> " + name + "</h5></a><br>");
              $("#game-off").append("<h5>" + data1.game + "</h5><br>");
              $("#status-off").append("<span class=\"offline\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i> offline!</span><br><br>");
            } else {
              $("#logo-on").append("<img class=\"img-fluid img-thumbnail\" src=\"" + data1.logo + "\"></br>");
              $("#name-on").append("<a href=\"https://www.twitch.tv/" + name + "\" target=\"_blank\"><h5><i class=\"fa fa-twitch\" aria-hidden=\"true\"></i> " + name + "</h5></a><br>");
              $("#game-on").append("<h5>" + data1.game + "</h5><br>");
              $("#status-on").append("<span class=\"online\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> online!</span><br><br>");
            }
          });
        },
        error: function(warn) {
          $("#name").append("Invalid User<br><br>");
          $("#status").append("Not Found<br><br>");
          $("#game").append("N/A<br><br>");
        }
      });
    }
  }
  getDataByTwitch();
  $("#all").click(function(){
    $(".selector").removeClass("active");
    $(this).addClass("active");
    $("#logo-on").show();
    $("#name-on").show();
    $("#game-on").show();
    $("#status-on").show();
    $("#logo-off").show();
    $("#name-off").show();
    $("#game-off").show();
    $("#status-off").show();
  });

  $("#online").click(function(){
    $(".selector").removeClass("active");
    $(this).addClass("active");
    $("#logo-on").show();
    $("#name-on").show();
    $("#game-on").show();
    $("#status-on").show();
    $("#logo-off").hide();
    $("#name-off").hide();
    $("#game-off").hide();
    $("#status-off").hide();
  });

    $("#offline").click(function(){
      $(".selector").removeClass("active");
      $(this).addClass("active");
      $("#logo-off").show();
      $("#name-off").show();
      $("#game-off").show();
      $("#status-off").show();
      $("#logo-on").hide();
      $("#name-on").hide();
      $("#game-on").hide();
      $("#status-on").hide();
    });
});
