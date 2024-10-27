document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert("Tous les champs doivent être remplis.");
        event.preventDefault();
    } else {
        alert("Merci pour votre message !");
    }
});
