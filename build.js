(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//Set Up some makeshift jQuery
function $(selector) {
  return document.querySelector(selector);
}

$.create = function (elementtitle) {
  return document.createElement(elementtitle);
};

$.createText = function (text) {
  return document.createTextNode(text);
};

$.setAttribute = function (el, attr, value) {
  // this
  return el.setAttribute(attr, value);
};

$.appendChild = function (parentElement, childElement) {
  return parentElement.appendChild(childElement);
};

var playerName = document.getElementById('player_name');
// var startButton = document.getElementById('start')

var computerGuess = Math.floor(Math.random() * 100) + 1;
var playerGuess = document.getElementById('player_guess');
var gameStatus = document.getElementById('game_Status');

var maxAttempts = 10;
var numAttempts = 0;

/////////////////////////////
//  Hide show game attempt on button press
/////////////////////////////
// var gameBegin = function(id){
//     var e = document.getElementById(id);
//     if (e.style.display == 'block' || e.style.display == '') {
//       e.style.display = 'none';
//     }

//     else {
//       e.style.display = 'block';
//     }
// };

/////////////////////////////////
//  Start Button
/////////////////////////////////
//  if (numAttempts === 0) {
//   gameStatus.value = "Well what are you waiting for? Enter an integer from 1 to 100 into the box and hit the button!";
// }
var guessANumber = function guessANumber() {
  var guessNumber = parseInt(playerGuess.value);
  var player = playerName.value;

  if (player === "") {
    player = "Mystery Player";
  }
  var hintStatus = document.querySelector('game');

  if (numAttempts < maxAttempts && guessNumber) {
    numAttempts++;
    if (guessNumber < computerGuess) {
      gameStatus = player + ", your number was too small. Please try again, probably higher...";
    }
    if (guessNumber > computerGuess) {
      gameStatus = "Whoa down there " + player + "! That number is too big. You know what to do: Try again.";
    }
    if (guessNumber === computerGuess) {
      gameStatus = "Hey now! Nice Work " + player + "! The random number was " + computerGuess + ". It took you" + numAttempts + " tries to guess the correct number.";
    }
  } else if (numAttempts === maxAttempts) {
    gameStatus = "Sorry " + player + " you did not guess the correct number which was " + computerGuess + ".    :(";
  }

  var terminal = $.create('terminal');
  var output = $.create('output');
  var results = $.createText(gameStatus);
  $.appendChild(output, results);
  $.appendChild(terminal, output);
  $.appendChild(hintStatus, terminal);
  return false;
}; //this works okay, but I'd like output be an ordered list inside of terminal, so that is something to explore

///////////////////////////////////////////////////////////
//On code rewrite this no longer works
//
//Look at doing this a different way to refresh the page
//
///////////////////////////////////////////////////////////
function newGame() {
  playerGuess.value = "";
  numAttempts = 0;
  gameStatus = "Guess you needed to try this again, huh?";
  computerGuess = Math.floor(Math.random() * 100) + 1;
  return false;
}

function changePlayer() {
  playerName.value = "";
  playerGuess.value = "";
  numAttempts = 0;
  gameStatus = "You must have seen that this looks like a great, fun, simple game! Welcome to show!";
  computerGuess = Math.floor(Math.random() * 100) + 1;
  return false;
}

},{}]},{},[1]);
