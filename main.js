$(document).ready(function () {
  $("#img1").click(function () {
    $("#ttt").show();
    $("#img1").hide();
  });
  $("#ttt").mouseleave(function () {
    $("#ttt").hide();
    $("#img1").show();
  });
  $("#img2").click(function () {
    $("#ttt2").show();
    $("#img2").hide();
  });
  $("#ttt2").mouseleave(function () {
    $("#ttt2").hide();
    $("#img2").show();
  });
  $("#img3").click(function () {
    $("#ttt3").show();
    $("#img3").hide();
  });
  $("#ttt3").mouseleave(function () {
    $("#ttt3").hide();
    $("#img3").show();
  });
});
