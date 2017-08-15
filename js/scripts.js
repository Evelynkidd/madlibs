$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    // blanks.forEach(function(blank){
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });

    for (var i = 0; i <= blanks.length; i += 1) {
      var userInput = $("input#" + blanks[i]).val();
      $("." + blanks[i]).text(userInput);
    }

    $("#story").show();

    event.preventDefault();
  });
});
