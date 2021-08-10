$('#previousdaybtn').click(subtractDay);
$('#nextdaybtn').click(addDay);


var today = moment();
displayschedules();

function getToday(){
  return getYear() + getMonth() + getDay();
}

function getYear(){
  return today.format("YYYY");
}

function getMonth(){
  return today.format("MM");
}

function getDay(){
  return today.format("DD");
}

function subtractDay(){
  today = today.subtract(1, 'days');
  displayschedules();
}

function addDay(){
  today = today.add(1, 'days');
  displayschedules();
}

function displayDay(){
  var displaydate = today.format("dddd, MMMM Do");
  $('#currentDay').text(displaydate);
}


// display 
function displayschedules(){
  displayDay();
  $('.container').empty();
  for (i=0 ; i < 24; i++){
    var timeDiv = $('<div>');
    var targetHour = moment().hours(i).format("HH");
    timeDiv.text(targetHour);  
    timeDiv.css({'display' : 'flex', 'justify-content': 'center', 'align-items': 'center'});
    
    var textDiv = $('<input>');
    textDiv.css('type', 'input');
    textDiv.css({'min-width': '500px', 'border': '3px solid black', 'margin':'10px', 'min-height':'50px'});
    
    if (retrivetext(getToday()+targetHour)){
      //console.log(localStorage.getItem(getToday()+targetHour));
      textDiv.val(retrivetext(getToday()+targetHour));
    } else {
      console.log(textDiv.val());
      textDiv.val('');
    }
  
    var iconDiv = $('<span class="ui-icon-arrowrefresh-1-e"></span>');
    iconDiv.append('<img src="./icons/white.png" width="20px" height="20px"/>');
    iconDiv.css({'display' : 'flex', 'justify-content': 'center', 'align-items': 'center', 'cursor':'pointer'});
    iconDiv.mouseover(function(){
      $(this).children('img').attr('src', $(this).children('img').attr('src').replace('white', 'black'));
      $(this).parent().css('background-color', 'grey');
    });
    iconDiv.mouseout(function(){
      $(this).children('img').attr('src', $(this).children('img').attr('src').replace('black', 'white'));
      $(this).parent().css('background-color', 'white');
    });
    iconDiv.click(savebtnFunction);


    var containerDiv = $('<div>');
    containerDiv.addClass('onehourblock');
    containerDiv.attr('hour', i);
    containerDiv.append(timeDiv);
    containerDiv.append(textDiv);
    containerDiv.append(iconDiv);
    containerDiv.css({'display': 'flex', 'justify-content': 'center', 'margin' : '10px', 'font-size' : '30px'});
    $('.container').append(containerDiv);
  }
};

function savebtnFunction () {
  var hour = $(this).parent().first().text();
  var text = $(this).parent().children('input').val();
  localStorage.setItem(getToday() + hour, text);
  console.log(getToday()+hour+text+'is saved');
}

function retrivetext(dayandhour){
  return localStorage.getItem(dayandhour);
}
