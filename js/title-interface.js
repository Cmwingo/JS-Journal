$(document).ready(function() {
  $('#title-form').submit(function(event) {
      event.preventDefault();
      var entryText = $('#title').val();
      var entryObject = new Entry(title, entryText);
      var vowelCount = entryObject.countVowels();
      var wordCount = entryObject.countWords();
      var consonantCount = entryObject.countConsonants();
  });
});
