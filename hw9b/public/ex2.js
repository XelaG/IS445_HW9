function sendData() {
    var obj = {
        name: 'Alex Gaignard',
        countries: [
            {
                name: 'France',
                year: 2000,
            },
            {
                name: 'USA',
                year: 2016,
            },
            {
                name: 'Spain',
                year: 2014,
            }
        ]
    }

    fetch("http://localhost:3000/api/countries",
    {   
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
    })
    .then(res => res.text())
    .catch(e => console.error(e))
    .then(text => document.body.appendChild(document.createTextNode(text)))
}