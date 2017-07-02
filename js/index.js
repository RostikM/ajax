loaded.innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('btn-get').addEventListener('click', getData);

function getData(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){
            var data = JSON.parse(xhr.responseText);
            document.getElemetById('clien-name').innerHTML = data.name;
            document.getElemetById('clien-adress').innerHTML = data.adress;
        }
    }
    xhr.open('GET','client-data.json', true);
    xhr.send();
}