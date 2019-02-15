$(function() {
  var latt = 12.9520205;
  var lngg = 77.6895809;
  var venue = "Radisson Blu";

  function setCoords(latt, lngg, venue) {
    this.latt = latt;
    this.lngg = lngg;
    this.venue = venue;
    console.log("clicked");
    initMap();
    $(this).addClass("hello");
  }
  function initMap() {
    var uluru = { lat: latt, lng: lngg };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
      scrollwheel: false
    });
    var markerIcon = {
      url: "https://image.flaticon.com/icons/svg/252/252025.svg",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(32, 65),
      labelOrigin: new google.maps.Point(25, 70)
    };
    var markerLabel = venue;
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: uluru,
      icon: markerIcon,
      disableDefaultUI: true,
      label: {
        text: markerLabel,
        color: "#eb3a44",
        fontSize: "16px",
        fontWeight: "bold"
      }
    });
  }
  $(document).on("click", ".scroll", function() {
    $("html, body").animate(
      {
        scrollTop: $(window).height() - 70
      },
      500
    );
  });
  $(function() {
    $(document).on("click", ".ven", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
      var latt = parseFloat($(this).attr("data-lat"));
      var lngg = parseFloat($(this).attr("data-lng"));
      var labb = $(this).attr("data-label");
      console.log(latt + " - " + lngg);
      setCoords(latt, lngg, labb);
    });
    $(document).on("click", "#toggle", function() {
      $(this).toggleClass("on");
      $("#nav-bar").toggleClass("active");
    });
    $("#link").click(function() {
      var src = "https://www.youtube.com/embed/t08KFuSgUZE?&autoplay=1&mute=1";
      $("#myModal").modal("show");
      $("#myModal iframe").attr("src", src);
    });

    $("#myModal button").click(function() {
      $("#myModal iframe").removeAttr("src");
    });
    $(document).on("click", "#nav-bar ul li", function() {
      $("#nav-bar").removeClass("active");
      $("#toggle").removeClass("on");
    });
    $(".section.hdr").css({
      paddingTop: $(".section.hdr > .content").height()
    });
  });
  $(document).scroll(function() {
    $(".section.hdr > .content").css({
      top: 0 - $(this).scrollTop() / 3,
      filter:
        "blur(" +
        ($(this).scrollTop() / $(".section.hdr > .content").height()) * 5 +
        "px)"
    });
    if ($(this).scrollTop() < $(".section.hdr > .content").height()) {
      $(".section.hdr").css({
        background:
          "rgba(0,0,0," +
          $(this).scrollTop() / $(".section.hdr > .content").height() +
          ")"
      });
    }

    if ($(this).scrollTop() >= $(".section.hdr > .content").height()) {
      $("#nav-bar").addClass("fixi-it");
      $("body").css({
        paddingTop: $("#nav-bar").height()
      });
    } else {
      $("#nav-bar").removeClass("fixi-it");
      $("body").css({
        paddingTop: 0
      });
    }
  });
  $(document).on("click", "a", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70
        },
        700,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
