//Count the number of click

var click   = 0;

function clickHandler(){
  click++;
  var numClicksSpan = $('#numClicks');
  if(click == 1){
    numClicksSpan.html('once');

  }else {
    numClicksSpan.html(click + ' times');
  }
}
var button = $('#clickMe');
button.click(clickHandler);

//Make a growing list

function keyPressHanlder(e){
  if(e.keyCode == 13){
    $('#list').append('<li>' + $('#itemField').val() + '</li>');
    $('#itemField').val('');
  }
}

$('#itemField').keyup(keyPressHanlder);



//List of item

$('li').click(function(){
  $(this).css('font-weight','bold');
});


//Changing the css of the list

$('li').mouseenter(function(){
  $(this).css('color','red');
  $(this).css('font-size','120%');
});

$('li').mouseleave(function(){
  $(this).css('color','black');
  $(this).css('font-size','100%');
})


//Using the function 'on'

$('li').on({mouseenter:function(){
  $(this).css('color','red');
  $(this).css('font-size','120%');
},
mouseleave: function(){
  $(this).css('color','black');
  $(this).css('font-size','100%');
},
click: function(){
  $(this).css('background-color','yellow');
}
});


//code of jquery-3 events

//handling select box

$("select[name='choose']").change(function(){
  $('#genderSpan').html($(this).val());
});

//handling radio buttons

$("input:radio[name='species']").change(function(){
  if ($(this).prop('checked')) {
    $('#speciesSpan').html($(this).val());
  }
});

var allChecked = [];

$('input:checkbox').change(function(){
  var value = $(this).val();
  if($(this).prop('checked')){
    allChecked.push(value);
  }
  else {
    var index = allChecked.indexOf(value);
    if(index != -1){
      allChecked.splice(index, 1);
    }
  $('#featureSpan').html('');
  for (var i = 0; i < allChecked.length; i++) {
    $('featureSpan').append(allChecked[i]);
    if (i < allChecked.length -1) {
      $('#featureSpan').append(', ');
    }
    else {
      $('#featureSpan').append(' ');
    }
  }
  }
});
