(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
      event.preventDefault();
      var entryText = $('#entry').val();
      var entryObject = new Entry(title, entryText);
      var vowelCount = entryObject.countVowels();
      // var consonantCount = entryObject.countConsonants();
      // var wordCount = entryObject.countWords();
  });
});

$(document).ready(function() {
  $('#title-form').submit(function(event) {
      event.preventDefault();
      var entryText = $('#title').val();
      var entryObject = new Entry(title, entryText);
      var vowelCount = entryObject.countVowels();
      // var consonantCount = entryObject.countConsonants();
      // var wordCount = entryObject.countWords();
  });
});

},{"./../js/journal.js":1}]},{},[2]);
