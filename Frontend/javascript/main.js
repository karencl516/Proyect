const $name = document.getElementById('InputName');
const $email = document.getElementById('InputEmail');
const $comment = document.getElementById('InputComment');


const informacion = {
    Name: null,
    Email: null,
    Comment: null,
};

function handleName(e) {
    informacion.Name = e.target.value;
}

function handleEmail(e) {
    informacion.Email = e.target.value;
}

function handleComments(e) {
    informacion.Comment = e.target.value;
}

document.getElementById('btn-info').onclick = function (e) {
    e.preventDefault();
    debugger;
    const url = 'http://localhost:5002/api/v1/todos';

    let data = {
        Name: informacion.Name,
        Email: informacion.Email,
        Message: informacion.Comment

    }

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {console.log('Success:', response);debugger})
        .catch(error => console.error('Error:', error));

}

$name.oninput = function (e) {
    handleName(e);
}

$email.oninput = function (e) {
    handleEmail(e);
}

$comment.oninput = function (e) {
    handleComments(e);
}
