$(document).ready(function() {
 
  // 4 diffrent ways of Ajax by Teo.
  //1. load
  $('#load').click(function() {
    $('#dictionary').load("test.html");
    return false;
  });

  //2.ajax
    $('#ajax').click(function() {
        $.ajax({
            url:'sample.xml',
            type:'GET',
            dataType: 'xml',
            success: function(data){
                $('#dictionary').empty();
                var count = 0;
                $.each($(data).find('entry'), function(){
                    var $entry = $(this);
                    
                    count++;
                    var html ='<div class="entry">';
                    html +='<h3 class="term">'+ $entry.attr('term'); +'</h3>';
                    html +='<div class="part">'+ $entry.attr('part'); +'</div>';
                    html +='<div class="definition">'+  $entry.find('definition').text()+'</div>';
                    html +='</div>';
                    $('#dictionary').append(html);
                });// end each
                $('#dictionary').append('<p>total ' + count + ' data added.<p>');
            }// end
        });// end ajax
        return false;
    });


    //3.get
    $('#get').click(function() {
        $.get('sample.xml', function(data) { 
            $('#dictionary').empty();
            $(data).find('entry').each(function() {
                var $entry = $(this);
                var html = '<div class="entry">';
                html += '<h3 class="term">' + $entry.attr('term');+'</h3>';
                html += '<div class="part">' + $entry.attr('part');    +'</div>';
                html += '<div class="definition">' + $entry.text() + '</div>';
                html += '</div>';
                $('#dictionary').append(html);
            });
        });
        return false;
    });

    //4.getJSON
    $('#json').click(function() {
        $.getJSON('sample.json',function(data){ 
            $('#dictionary').empty();
            $.each(data,function(index,entry){
                var html ='<div class="entry">';
                html +='<h3 class="term">'+entry.term +'</h3>';
                html +='<div class="part">'+entry.part +'</div>';
                html +='<div class="definition">'+ entry.definition+'</div>';
                html +='</div>';
                $('#dictionary').append(html);
            });// end each
        });// end json
        return false;
    });// end click



});