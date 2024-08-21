
function loadLoginForm() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('login-container').innerHTML = xhr.responseText;
            }
        }
    };
    xhr.open('GET', 'components/login-form.html', true);
    xhr.send();
}

loadLoginForm();