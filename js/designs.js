var submit = $("#button1");
var input = $("#input1");
var form = $("#form");
var day = $("#select[name=selector]");
var list = $("#list");
var mondayList = $("#mondayList");
var tuesdayList =$("#tuesdayList");
var wednesdayList =$("#wednesdayList");
var thursdayList =$("#thursdayList");
var fridayList =$("#fridayList");
var saturdayList =$("#saturdayList");
var sundayList =$("#sundayList");


form.submit(function (event) {
// submit.on('click', function(event) {


  // list.prepend("<li>");
  // event.preventDefault();
  // $("li:first").text(input.val());
  // $("li:first").addClass("item");
  // input.val('');

if (day.val() === "mo") {
  mondayList.prepend("<li>");
  event.preventDefault();
  $("#mondayList li:first").text(input.val());
  $("#mondayList li:first").addClass("item");
  input.val('');

} else if (day.val() === "tu") {
    tuesdayList.prepend("<li>");
    event.preventDefault();
    $("#tuesdayList li:first").text(input.val());
    $("#tuesdayList li:first").addClass("item");
    input.val('');
} else if (day.val() === "we") {
    wednesdayList.prepend("<li>");
    event.preventDefault();
    $("#wednesdayList li:first").text(input.val());
    $("#wednesdayList li:first").addClass("item");
    input.val('');
} else if (day.val() === "th") {
    thursdayList.prepend("<li>");
    event.preventDefault();
    $("#thursdayList li:first").text(input.val());
    $("#thursdayList li:first").addClass("item");
    input.val('');
} else if (day.val() === "fr") {
    fridayList.prepend("<li>");
    event.preventDefault();
    $("#fridayList li:first").text(input.val());
    $("#fridayList li:first").addClass("item");
    input.val('');
} else if (day.val() === "sa") {
    saturdayList.prepend("<li>");
    event.preventDefault();
    $("#saturdayList li:first").text(input.val());
    $("#saturdayList li:first").addClass("item");
    input.val('');
} else {
    sundayList.prepend("<li>");
    event.preventDefault();
    $("#sundayList li:first").text(input.val());
    $("#sundayList li:first").addClass("item");
    input.val('');
}


  $("li").dblclick(function() {
  // $("li").on('click', function(event) {
    $(this).addClass("done");
    // $(this).remove()
    $(this).parent().append(this);

  });

$("li").contextmenu(function() {
  $(this).removeClass("done");
  $(this).parent().prepend(this);
});

});
