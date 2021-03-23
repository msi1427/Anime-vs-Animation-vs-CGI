if ($(window).width() <= 768) {
    $(".page-sidebar").addClass("collapseit");
    $(".page-sidebar").removeClass("expandit");
    $(".profile-info").addClass("short-profile");
    $(".logo-area").addClass("logo-icon");
    $("#main-content").addClass("sidebar_shift");
    $(".menu-title").css("display", "none");
    $(".footer").addClass("show");
  }
  $(document).ready(function () {
    $("#menu_icon").click(function () {
      if ($(".page-sidebar").hasClass("expandit")) {
        $(".page-sidebar").addClass("collapseit");
        $(".page-sidebar").removeClass("expandit");
        $(".profile-info").addClass("short-profile");
        $(".logo-area").addClass("logo-icon");
        $("#main-content").addClass("sidebar_shift");
        $(".menu-title").css("display", "none");
        $(".footer").addClass("show");
      } else {
        $(".page-sidebar").addClass("expandit");
        $(".page-sidebar").removeClass("collapseit");
        $(".profile-info").removeClass("short-profile");
        $(".logo-area").removeClass("logo-icon");
        $("#main-content").removeClass("sidebar_shift");
        $(".menu-title").css("display", "inline-block");
        $(".footer").removeClass("show");
      }
    });
  });
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $(".image-upload-wrap").hide();
  
        $(".file-upload-image").attr("src", e.target.result);
        $(".file-upload-content").show();
  
        $(".image-title").html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $(".file-upload-input").replaceWith($(".file-upload-input").clone());
    $(".file-upload-content").hide();
    $(".image-upload-wrap").show();
  }
  $(".image-upload-wrap").bind("dragover", function () {
    $(".image-upload-wrap").addClass("image-dropping");
  });
  $(".image-upload-wrap").bind("dragleave", function () {
    $(".image-upload-wrap").removeClass("image-dropping");
  });
  