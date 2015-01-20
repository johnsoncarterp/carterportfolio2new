/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {
    $(".practice").css("background-color", "cyan");
    $('p:last').css({"background-color": "green", "color": "white"});
    $('a').css({"background-color": "black", "color": "white"});
    $("#carter").bind('click', alertButtonClick);
    $("h1").bind('click', mouseClick);
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $("#cj").bind('click', replaceWText);
    $("#apple").bind('click', removeAPara);
    $("#cool").bind('click', addAPara);
    $("#hideLogo").bind('click', hideTheLogo);
    $("#showLogo").bind('click', showTheLogo);
    //my IDs and 
    $("#superHumans").accordion({header: "h4"});
    //my accordian
});


function alertButtonClick() {
    alert("there was a button clicked");
}
//my alert button function

function mouseOverMe() {
    $('h1').html('carter');
}
//my mouse over function
function mouseOutMe() {
    $('h1').html('hello');
}
//my mouse out me function
function mouseClick() {
    $('p').html('clicked');
}
//my mouse click function
function replaceWText() {
    $('h3').html('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}
//my replace with text fuction
function removeAPara() {
    $('#app p:last').remove();
}
//my remove a paragraph function
function addAPara() {
    $('#app').append('<p>another paragraph</p>');
}
//my add a paragraph function
function hideTheLogo() {
    $("#image").hide('explode', {}, 2500);
}
//my hide logo function
function showTheLogo() {
    $("#image").show('slide', {}, 2500);
}
//my show logo function
