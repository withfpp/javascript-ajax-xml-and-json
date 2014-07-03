//1. load JSON
var button = document.getElementById('load');
button.onclick = function(){
    var request;
    if (window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else{
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open('GET', 'sample.json');
    request.onreadystatechange = function(){
        if ((request.readyState === 4) && (request.status === 200)) {
            var items = JSON.parse(request.responseText);
            var output = '<ul>';
            for (var key in items){
                output += '<li>' + items[key].name + '</li>';
            }
            output += '<ul>'
            document.getElementById('update').innerHTML = output;
        };
    }
    request.send();
};//load AJAX!!!!

//2. load XML
var button2 = document.getElementById('loadXML');
button2.onclick = function(){
    var request;
    if (window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else{
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open('GET', 'sample.xml');
    request.onreadystatechange = function(){
        if ((request.readyState === 4) && (request.status === 200)) {
            var items = request.responseXML.getElementsByTagName('definition');
            var output = '<ul>';
            for (var i = 0; i < items.length; i++) {
                output += '<li>' + items[i].firstChild.nodeValue + '</li>';
            };
            output += '</ul>';

            document.getElementById('update').innerHTML = output;
        }
    }
    request.send();
};