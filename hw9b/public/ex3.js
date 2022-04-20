function addArticle() {

    const formData = new FormData(document.querySelector('form'));
    var obj = {}
    for (var pair of formData) {
        obj[pair[0]] = pair[1];
    }

    fetch("http://localhost:3000/articles",
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
        var toFill = document.getElementById('response');
        while(toFill.firstChild) toFill.removeChild(toFill.firstChild)
        toFill.appendChild(document.createTextNode(text))
    })
}