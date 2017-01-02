function Entry(titleName, text) {
  this.titleName = titleName;
  this.entry = text;
}

Entry.prototype.countWords = function() {

  var entryText = this.entry;
  var words = entryText.split(" ");
  var wordCount = words.length;
  console.log(wordCount);
  return wordCount;
};

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
    });
  });
  return vowelCount;
};

Entry.prototype.countConsonants = function() {
  var consonantCount = 0;
  var entryText = this.entry;
  var vowels = 'aeiou';
  var words = entryText.split(" ");

  words.forEach(function(word) {
    var letters = word.split("");
    letters.forEach(function(letter){
      if(!vowels.includes(letter.toLowerCase())) {
        consonantCount++;
      }
    });
  });
  console.log(consonantCount);
    return consonantCount;

};

Entry.prototype.getTeaser = function() {
  var entryText = this.entry;
  var words = entryText.split (" ");
  var wordCount = this.countWords();
  var firstSentenceWords = [];

  for(i = 0; i < wordCount; i++){
    console.log("Words:" + words[i]);
    var word = words[i];
    var wordLength = word.length;
    firstSentenceWords.push(word);
    if(word[wordLength] == "." || word[wordLength] == "?" || word[wordLength] == "!" || i > 6) {
      break;
    }
  }
  return firstSentenceWords.join(" ");
};
exports.entryModule = Entry;
