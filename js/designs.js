var submit = $("#button1");
var input = $("#input1");
var form = $("#form");
var day = $("#select[name=selector]");
var list = $("#list");
var monday = [];
var tuesday = [];
var wednesday = [];
var thursday = [];
var friday = [];
var saturday = [];
var sunday = [];
var week;
var mondayList = $("#mondayList");
var tuesdayList =$("#tuesdayList");
var wednesdayList =$("#wednesdayList");
var thursdayList =$("#thursdayList");
var fridayList =$("#fridayList");
var saturdayList =$("#saturdayList");
var sundayList =$("#sundayList");
var mondayDone =[];
var tuesdayDone =[];
var wednesdayDone =[];
var thursdayDone =[];
var fridayDone =[];
var saturdayDone =[];
var sundayDone =[];


// var data;


// getting data from local storage and displaying them on the page
  if (localStorage.getItem('storeMonday')) {
    monday = JSON.parse(localStorage.getItem('storeMonday'));
    var mondayData = JSON.parse(localStorage.getItem('storeMonday'));
    mondayData.forEach(function(item){
      mondayList.prepend("<li>");
      $("#mondayList li:first").text(item);
      $("#mondayList li:first").addClass("item");
    });
  // getting "done" tasks
    if(localStorage.getItem('doneMonday')){
      mondayDone = JSON.parse(localStorage.getItem('doneMonday'));
      var doneM = JSON.parse(localStorage.getItem('doneMonday'));
      for (var i = 0; i < doneM.length; i++) {
        var selected = doneM[i] + 1;
        $('#mondayList li:eq(-'+selected+')').addClass("done");
      }
    }
  }
  if (localStorage.getItem('storeTuesday')) {
    tuesday = JSON.parse(localStorage.getItem('storeTuesday'));
    var tuesdayData = JSON.parse(localStorage.getItem('storeTuesday'));
    tuesdayData.forEach(function(item){
      tuesdayList.prepend("<li>");
      $("#tuesdayList li:first").text(item);
      $("#tuesdayList li:first").addClass("item");
    });
    if(localStorage.getItem('doneTuesday')){
      tuesdayDone = JSON.parse(localStorage.getItem('doneTuesday'));
      var done = JSON.parse(localStorage.getItem('doneTuesday'));
      for (var i = 0; i < done.length; i++) {
        var selected = done[i] + 1;
        $('#tuesdayList li:eq(-'+selected+')').addClass("done");
      }
    }
  }
  if (localStorage.getItem('storeWednesday')) {
    wednesday = JSON.parse(localStorage.getItem('storeWednesday'));
    var wednesdayData = JSON.parse(localStorage.getItem('storeWednesday'));
    wednesdayData.forEach(function(item){
      wednesdayList.prepend("<li>");
      $("#wednesdayList li:first").text(item);
      $("#wednesdayList li:first").addClass("item");
    });
    if(localStorage.getItem('doneWednesday')){
      wednesdayDone = JSON.parse(localStorage.getItem('doneWednesday'));
      var done = JSON.parse(localStorage.getItem('doneWednesday'));
      for (var i = 0; i < done.length; i++) {
        var selected = done[i] + 1;
        $('#wednesdayList li:eq(-'+selected+')').addClass("done");
      }
    }
  }
  if (localStorage.getItem('storeThursday')) {
    thursday = JSON.parse(localStorage.getItem('storeThursday'));
    var thursdayData = JSON.parse(localStorage.getItem('storeThursday'));
    thursdayData.forEach(function(item){
      thursdayList.prepend("<li>");
      $("#thursdayList li:first").text(item);
      $("#thursdayList li:first").addClass("item");
    });
    if(localStorage.getItem('doneThursday')){
      thursdayDone = JSON.parse(localStorage.getItem('doneThursday'));
      var done = JSON.parse(localStorage.getItem('doneThursday'));
      for (var i = 0; i < done.length; i++) {
        var selected = done[i] + 1;
        $('#thursdayList li:eq(-'+selected+')').addClass("done");
      }
    }
  }
  if (localStorage.getItem('storeFriday')) {
    friday = JSON.parse(localStorage.getItem('storeFriday'));
    var fridayData = JSON.parse(localStorage.getItem('storeFriday'));
    fridayData.forEach(function(item){
      fridayList.prepend("<li>");
      $("#fridayList li:first").text(item);
      $("#fridayList li:first").addClass("item");
    });
    if(localStorage.getItem('doneFriday')){
      fridayDone = JSON.parse(localStorage.getItem('doneFriday'));
      var done = JSON.parse(localStorage.getItem('doneFriday'));
      for (var i = 0; i < done.length; i++) {
        var selected = done[i] + 1;
        $('#fridayList li:eq(-'+selected+')').addClass("done");
      }
    }
  }
  if (localStorage.getItem('storeSaturday')) {
    saturday = JSON.parse(localStorage.getItem('storeSaturday'));
    var saturdayData = JSON.parse(localStorage.getItem('storeSaturday'));
    saturdayData.forEach(function(item){
      saturdayList.prepend("<li>");
      $("#saturdayList li:first").text(item);
      $("#saturdayList li:first").addClass("item");
    });
    if(localStorage.getItem('doneSaturday')){
      saturdayDone = JSON.parse(localStorage.getItem('doneSaturday'));
      var done = JSON.parse(localStorage.getItem('doneSaturday'));
      for (var i = 0; i < done.length; i++) {
        var selected = done[i] + 1;
        $('#saturdayList li:eq(-'+selected+')').addClass("done");
      }
    }
  }
  if (localStorage.getItem('storeSunday')) {
    sunday = JSON.parse(localStorage.getItem('storeSunday'));
    var sundayData = JSON.parse(localStorage.getItem('storeSunday'));
    sundayData.forEach(function(item){
      sundayList.prepend("<li>");
      $("#sundayList li:first").text(item);
      $("#sundayList li:first").addClass("item");
    });
    if(localStorage.getItem('doneSunday')){
      sundayDone = JSON.parse(localStorage.getItem('doneSunday'));
      var done = JSON.parse(localStorage.getItem('doneSunday'));
      for (var i = 0; i < done.length; i++) {
        var selected = done[i] + 1;
        $('#sundayList li:eq(-'+selected+')').addClass("done");
      }
    }
  }




$("li").click(function() {
    $(this).toggleClass("done");
    var day = $(this).parent().attr('id');
    var content = $(this).text();
    switch(day) {
        case "mondayList":
          var index = monday.indexOf(content);
          if ($(this).hasClass("done")) {
            mondayDone.push(index);
          } else {
            var remove = mondayDone.indexOf(index);
            mondayDone.splice(remove, 1);
          }
          localStorage.setItem('doneMonday',  JSON.stringify(mondayDone));

          localStorage.setItem('storeMonday', JSON.stringify(monday));
          break;

        case "tuesdayList":
          var index = tuesday.indexOf(content);
          if ($(this).hasClass("done")) {
            tuesdayDone.push(index);
          } else {
            var remove = tuesdayDone.indexOf(index);
            tuesdayDone.splice(remove, 1);
          }
          localStorage.setItem('doneTuesday',  JSON.stringify(tuesdayDone));
          localStorage.setItem('storeTuesday', JSON.stringify(tuesday));
          break;

        case "wednesdayList":
          var index = wednesday.indexOf(content);
          if ($(this).hasClass("done")) {
            wednesdayDone.push(index);
          } else {
            var remove = wednesdayDone.indexOf(index);
            wednesdayDone.splice(remove, 1);
          }
          localStorage.setItem('doneWednesday',  JSON.stringify(wednesdayDone));

          localStorage.setItem('storeWednesday', JSON.stringify(wednesday));
          break;

        case "thursdayList":
          var index = thursday.indexOf(content);
          if ($(this).hasClass("done")) {
            thursdayDone.push(index);
          } else {
            var remove = thursdayDone.indexOf(index);
            thursdayDone.splice(remove, 1);
          }
          localStorage.setItem('doneThursday',  JSON.stringify(thursdayDone));

          localStorage.setItem('storeThursday', JSON.stringify(thursday));
          break;

        case "fridayList":
          var index = friday.indexOf(content);
          if ($(this).hasClass("done")) {
            fridayDone.push(index);
          } else {
            var remove = fridayDone.indexOf(index);
            fridayDone.splice(remove, 1);
          }
          localStorage.setItem('doneFriday',  JSON.stringify(fridayDone));
          localStorage.setItem('storeFriday', JSON.stringify(friday));
          break;
        case "saturdayList":
          var index = saturday.indexOf(content);
          if ($(this).hasClass("done")) {
            saturdayDone.push(index);
          } else {
            var remove = saturdayDone.indexOf(index);
            saturdayDone.splice(remove, 1);
          }
          localStorage.setItem('doneSaturday',  JSON.stringify(saturdayDone));
          localStorage.setItem('storeSaturday', JSON.stringify(saturday));
          break;
        case "sundayList":
          var index = sunday.indexOf(content);
          if ($(this).hasClass("done")) {
            sundayDone.push(index);
          } else {
            var remove = sundayDone.indexOf(index);
            sundayDone.splice(remove, 1);
          }
          localStorage.setItem('doneSunday',  JSON.stringify(sundayDone));
          localStorage.setItem('storeSunday', JSON.stringify(sunday));
          break;
      }
});


// Adding new tasks to the list
form.submit(function (event) {
  var element;
  if (day.val() === "mo") {
    element = input.val()
    monday.push(element);
    localStorage.setItem('storeMonday', JSON.stringify(monday));
    mondayData.forEach(function(item){
      mondayList.prepend("<li>");
      $("#mondayList li:first").text(item);
      $("#mondayList li:first").addClass("item");
    });
    input.val('');

  } else if (day.val() === "tu") {
      element = input.val()
      tuesday.push(element);
      localStorage.setItem('storeTuesday', JSON.stringify(tuesday));
      tuesdayData.forEach(function(item) {
        tuesdayList.prepend("<li>");
        $("#tuesdayList li:first").text(input.val());
        $("#tuesdayList li:first").addClass("item");
      });
      input.val('');
  } else if (day.val() === "we") {
      element = input.val()
      wednesday.push(element);
      localStorage.setItem('storeWednesday', JSON.stringify(wednesday));
      wednesdayData.forEach(function(item) {
        wednesdayList.prepend("<li>");
        $("#wednesdayList li:first").text(input.val());
        $("#wednesdayList li:first").addClass("item");
      });
      input.val('');
  } else if (day.val() === "th") {
      element = input.val()
      thursday.push(element);
      localStorage.setItem('storeThursday', JSON.stringify(thursday));
      thursdayData.forEach(function(item) {
        thursdayList.prepend("<li>");
        $("#thursdayList li:first").text(input.val());
        $("#thursdayList li:first").addClass("item");
      });
      input.val('');
  } else if (day.val() === "fr") {
      element = input.val()
      friday.push(element);
      localStorage.setItem('storeFriday', JSON.stringify(friday));
      fridayData.forEach(function(item) {
        fridayList.prepend("<li>");
        $("#fridayList li:first").text(input.val());
        $("#fridayList li:first").addClass("item");
      });
      input.val('');
  } else if (day.val() === "sa") {
      element = input.val()
      saturday.push(element);
      localStorage.setItem('storeSaturday', JSON.stringify(saturday));
      saturdayData.forEach(function(item) {
        saturdayList.prepend("<li>");
        $("#saturdayList li:first").text(input.val());
        $("#saturdayList li:first").addClass("item");
      });
      input.val('');
  } else if (day.val() === "su") {
      element = input.val()
      sunday.push(element);
      localStorage.setItem('storeSunday', JSON.stringify(sunday));
      sundayData.forEach(function(item) {
        sundayList.prepend("<li>");
        $("#sundayList li:first").text(input.val());
        $("#sundayList li:first").addClass("item");
      });
      input.val('');
  }

});
