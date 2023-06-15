function soap() {
    var request = new XMLHttpRequest();
    request.open('POST', 'https://www.w3schools.com/xml/tempconvert.asmx', true);

    var form_celsius = document.getElementById('value').value;
    // Créer la requête SOAP
    var request_body =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' + 
        '<soap12:Body>' +
        '<CelsiusToFahrenheit xmlns="https://www.w3schools.com/xml/">' +
        '<Celsius>'+ form_celsius +'</Celsius>' +
        '</CelsiusToFahrenheit>' +
        '</soap12:Body>' +
        '</soap12:Envelope>';

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
            console.log(request.responseText)
            result = document.getElementById('result')
            result.innerHTML = request.responseText
            }
        }
    }
    // Requête en POST avec XML en type de contenu
    request.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    request.send(request_body);
}
