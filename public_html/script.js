/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {
    $(".practice").css("background-color", "cyan");
    $('p:last').css({"background-color": "green", "color": "white"});
    $('a').css({"background-color": "black", "color": "white"});
    $("#carter").bind('click',alertButtonClick);
    $("h1").bind('click', mouseClick);
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $("#cj").bind('click', replaceWText);
    $("#apple").bind('click', removeAPara);
    $("#cool").bind('click', addAPara);
    $("#hideLogo").bind('click', hideTheLogo);
    $("#showLogo").bind('click', showTheLogo); 
    $("#superHumans").accordion({ header: "h4"});
});


function alertButtonClick() {
    alert("there was a button clicked");                             
}

function mouseOverMe() {
    $('h1').html('carter');
}

function mouseOutMe() {
    $('h1').html('hello');
}

function mouseClick() {
    $('p').html('clicked');
}

function replaceWText() {
    $('h3').html('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}

function removeAPara() {
    $('#app p:last').remove();
}

function addAPara() {
    $('#app').append('<p>another paragraph</p>');
}

function hideTheLogo() {
    $("#image").hide('explode', {}, 2500);
}

function showTheLogo() {
    $("#image").show('slide', {}, 2500);
}

