const loadBackground = function() {
    setTimeout(function() {
      var fade_div = $("<div/>")
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%"
        })
        .prependTo("body")
        .height("200px");

      fade_div
        .hide()
        .append(
          $("<img/>")
            .css({ width: "100%", height: "100%" })
            .attr("src", "/concrete/images/login_fade.png")
        )
        .fadeIn();
    }, 0);

    $(function() {
      var shown = false,
        info;
      $.getJSON(
        "https://vivaelfutbol.lemonbrain.ch/index.php/tools/required/dashboard/get_image_data",
        { image: "20190806.jpg" },
        function(data) {
          if (shown) {
            $("div.ccm-page-background-credit")
              .fadeIn()
              .children()
              .attr("href", data.link)
              .text(data.author.join());
          } else {
            info = data;
          }
        }
      );
      $(window).on("backstretch.show", function() {
        shown = true;

        if (info) {
          $("div.ccm-page-background-credit")
            .fadeIn()
            .find("div.ccm-page-background-photo-credit")
            .children()
            .attr("href", info.link)
            .text(info.author.join());
        }
      });
      $.backstretch("//backgroundimages.concrete5.org/wallpaper/20190806.jpg", {
        fade: 500
      });
    });
};

export default loadBackground;