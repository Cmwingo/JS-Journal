function Entry(entryText) {
  this.entry = entryText;
}

Entry.prototype.countVowels = function() {
  var vowelCount = 0;
  var entryText = this.entry;
  var vowels = 'aeiou';

  entryText.forEach(function(letter) {
    if(vowels.includes(letter.toLower())) {
      vowelCount++;
    }
    console.log(vowelCount);
  });
}
exports.entryModule = Entry;
