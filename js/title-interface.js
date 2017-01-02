$(document).ready(function() {
  $('#title-form').submit(function(event) {
      event.preventDefault();
      var entryText = $('#title').val();
      var entryObject = new Entry(entryText);
      var vowelCount = entryObject.countVowels();
      // var consonantCount = entryObject.countConsonants();
      // var wordCount = entryObject.countWords();
  });
});
