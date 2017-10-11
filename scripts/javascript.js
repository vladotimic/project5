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
              $("#logo").append("<img class=\"img-fluid img-thumbnail\" src=\"" + data1.logo + "\"></br>");
              $("#name").append("<a href=\"https://www.twitch.tv/" + name + "\" target=\"_blank\"><h5><i class=\"fa fa-twitch\" aria-hidden=\"true\"></i> " + name + "</h5></a><br>");
              $("#game").append("<h5>" + data1.game + "</h5><br>");
              $("#status").append("<span class=\"offline\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i> offline!</span><br><br>");
            } else {
              $("#logo").append("<img class=\"img-fluid img-thumbnail\" src=\"" + data1.logo + "\"></br>");
              $("#name").append("<a href=\"https://www.twitch.tv/" + name + "\" target=\"_blank\"><h5><i class=\"fa fa-twitch\" aria-hidden=\"true\"></i> " + name + "</h5></a><br>");
              $("#game").append("<h5>" + data1.game + "</h5><br>");
              $("#status").append("<span class=\"online\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i> online!</span><br><br>");
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
});
