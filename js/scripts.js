function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes
}


$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTimeOfYear = $("input#new-time-of-year").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);
    alert(inputtedTimeOfYear)
    console.log(newPlace)
    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".time-of-year").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });

  //  $("input#new-first-name").val("");
  //  $("input#new-last-name").val("");
  });
});
