document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit')
        .addEventListener('click', () => console.log('clicked'));
});

document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('email')
    if (email) {
        document.getElementById('email').setAttribute('value', email);
    }
    document.getElementById('submit')
        .addEventListener('click', () => {
            const email = document.getElementById('email').value
            localStorage.setItem('email', email)
        });
});