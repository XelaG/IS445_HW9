function displayKey() {
    const formData = new FormData(document.querySelector('form'));
    var obj = {}
    for (var pair of formData) {
        obj[pair[0]] = pair[1];
    }

    fetch("http://localhost:3000/ex1/form",
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
    .then(text => {
        console.log(text);
        document.body.appendChild(document.createTextNode(text))
    })
}