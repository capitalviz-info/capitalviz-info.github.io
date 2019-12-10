firsttime = true
$(document).on("click", ".nav-pills .nav-item .nav-link", function (event) // Go to story (anchor handler)
  {
    $(".left-sidebar").addClass("none")
    switch (this.getAttribute("href")) {
      case "#pills-overview":
        $("#lsidebar-overview").removeClass("none")
        $("#pills-tab > li:nth-child(1)").attr("style", "opacity: 1")
        tour.cancel()

        break;
      case "#pills-funding":
        $("#lsidebar-funding").removeClass("none")
        $("#pills-tab > li:nth-child(1)").attr("style", "opacity: 0")
        if (firsttime) setTimeout(() => {
          firsttime = false
          tour.start()
        }, 500);
        break;
      case "#pills-acquisition":
        $("#lsidebar-acquisition").removeClass("none")
        $("#pills-tab > li:nth-child(1)").attr("style", "opacity: 1")
        tour.cancel()
        break;
      default:
        $("#lsidebar-overview").removeClass("none")
        $("#pills-tab > li:nth-child(1)").attr("style", "opacity: 1")
        tour.cancel()


    }
  });