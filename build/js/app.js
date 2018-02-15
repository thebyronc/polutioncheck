(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
exports.apiKey = "7LRyPFW5Ei3JYTJin";

},{}],2:[function(require,module,exports){
'use strict';

var _env = require('./../.env');

var getState = function getState(country) {
  $.ajax({
    url: 'http://api.airvisual.com/v2/states?country=' + country + '&key=' + _env.apiKey,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function success(response) {
      var states = response.data;
      for (var i = 0; i < states.length; i++) {
        $('#states').append('\n          <option value="' + states[i].state + '">' + states[i].state + '</option>\n          ');
      }
      return states;
    },
    error: function error() {
      $('#errors').text("There was an error processing your request. Please try again.");
    }
  });
};

var getCities = function getCities(state, country) {
  $.ajax({
    url: 'http://api.airvisual.com/v2/cities?state=' + state + '&country=' + country + '&key=' + _env.apiKey,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function success(response) {
      var cities = response.data;
      for (var i = 0; i < cities.length; i++) {
        $('#cities').append('\n          <option value="' + cities[i].city + '">' + cities[i].city + '</option>\n          ');
      }
      return cities;
    },
    error: function error() {
      $('#errors').text("There was an error processing your request. Please try again.");
    }
  });
};

var getPolution = function getPolution(city, state, country) {

  $.ajax({
    url: 'http://api.airvisual.com/v2/city?city=' + city + '&state=' + state + '&country=' + country + '&key=' + _env.apiKey,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function success(response) {
      var polutionLvl = response.data;
      $('#pollutionLvl').html('\n        <ul>\n        <li>CITY: ' + polutionLvl.city + '</li>\n        <li>AQIUS: ' + polutionLvl.current.pollution.aqius + '</li>\n        </ul>\n        ');
    },
    error: function error() {
      $('#errors').text("There was an error processing your request. Please try again.");
    }
  });
};

$(document).ready(function () {
  console.log(_env.apiKey);
  // let url = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=7LRyPFW5Ei3JYTJin`;

  var countries = [];
  var states = void 0;
  var cities = [];
  var country = void 0;
  var state = void 0;
  var city = void 0;

  $.ajax({
    url: 'http://api.airvisual.com/v2/countries?key=' + _env.apiKey,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function success(response) {
      countries = response.data;
      for (var i = 0; i < countries.length; i++) {
        $('#countries').append('\n          <option value="' + countries[i].country + '">' + countries[i].country + '</option>\n          ');
      }
    },
    error: function error() {
      $('#errors').text("There was an error processing your request. Please try again.");
    }
  });

  $('#queryAirData').submit(function (event) {
    // alert("submit event!");
    event.preventDefault();

    country = $("#countries").val();
    state = $('#states').val();
    city = $('#cities').val();
    if (city != null) {
      getPolution(city, state, country);
    } else if (state != null) {
      getCities(state, country);
    } else if (country != null) {
      getState(country);
    } else {
      console.log("Reached Else");
    }
  });
});

},{"./../.env":1}]},{},[2]);
