function Entry(titleName, text) {
  this.titleName = titleName;
  this.entry = text;
}

Entry.prototype.countVowels = function() {
  var vowelCount = 0;
  var entryText = this.entry;
  var vowels = 'aeiou';
  var words = entryText.split(" ");

  words.forEach(function(word) {
    var letters = word.split("");
    letters.forEach(function(letter){
      if(vowels.includes(letter.toLowerCase())) {
        vowelCount++;
      }
      console.log(vowelCount);
    });
  });
};
exports.entryModule = Entry;
