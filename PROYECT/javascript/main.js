const $username = document.getElementById('InputUsername');
const $password = document.getElementById('InputPassword');
const $error = document.getElementById('error');

const validCredentials = {
    username: 'kings@kings.com',
    password: 'kings123',
};

const miscredenciales = {
    username: null,
    password: null,
};

function handleUsername(e) {
    miscredenciales.username = e.target.value;
}

function handlePassword(e) {
    miscredenciales.password = e.target.value;
}

document.getElementById('btn-form').onclick = function (e) {
    e.preventDefault();
    if (miscredenciales.username === validCredentials.username && miscredenciales.password===validCredentials.password) {
        window.location.href = "inside.html";
    } else {
        $error.classList.remove("d-none");
    }
}

$username.oninput = function (e) {
    handleUsername(e);
}

$password.oninput = function (e) {
    handlePassword(e);
}


