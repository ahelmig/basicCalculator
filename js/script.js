$(document).ready(function() {
  var input = '';
  var output = '';
  $('h2').addClass('animated rubberBand');

  $("#zero").click(function() {
    input = input.concat('0');
    $('input').val(input);
  });
  $("#one").click(function() {
    input = input.concat('1');
    $('input').val(input);
  });
  $("#two").click(function() {
    input = input.concat('2');
    $('input').val(input);
  });
  $("#three").click(function() {
    input = input.concat('3');
    $('input').val(input);
  });
  $("#four").click(function() {
    input = input.concat('4');
    $('input').val(input);
  });
  $("#five").click(function() {
    input = input.concat('5');
    $('input').val(input);
  });
  $("#six").click(function() {
    input = input.concat('6');
    $('input').val(input);
  });
  $("#seven").click(function() {
    input = input.concat('7');
    $('input').val(input);
  });
  $("#eight").click(function() {
    input = input.concat('8');
    $('input').val(input);
  });
  $("#nine").click(function() {
    input = input.concat('9');
    $('input').val(input);
  });
  $("#allClear").click(function(){
   input = '';
   $('input').val(input);
  });
  $("#clearEntry").click(function(){
   input = input.slice(0, input.length-1);
   $('input').val(input);
  });
  $("#divide").click(function(){
   input = input.concat('/');
   $('input').val(input);
  });
  $("#multiply").click(function(){
   input = input.concat('*');
   $('input').val(input);
  });
  $("#subtract").click(function(){
   input = input.concat('-');
   $('input').val(input);
  });
 $("#add").click(function(){
   input = input.concat('+');
   $('input').val(input);
  });
  $("#equals").click(function(){
   input = eval(input);
   $('input').val(input);
   input = input.toString();
  });
  $("#answer").click(function(){
    input = input;
   $('input').val(input);
  });
  $("#decimal").click(function(){
    input = input.concat('.');
   $('input').val(input);
  });
  $("#percentage").click(function(){
    input = input.concat('%');
   $('input').val(input);
  });
});