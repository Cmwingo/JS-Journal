(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
      event.preventDefault();
      var entryText = $('#entry').val();
      var entryObject = new Entry("title", entryText);
      var vowelCount = entryObject.countVowels();
      var wordCount = entryObject.countWords();
      var consonantCount = entryObject.countConsonants();
      var teaser = entryObject.getTeaser();

      $("#teaser").text(teaser);
      $("#consonants").text(consonantCount);
      $("#vowels").text(vowelCount);
  });
});

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

},{"./../js/journal.js":1}]},{},[2]);
