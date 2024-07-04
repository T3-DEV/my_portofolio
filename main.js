// main.js

// Contoh animasi sederhana
const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
    project.style.transitionDelay = `${index * 0.1}s`;
    project.style.opacity = 1;
});

// main.js

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validasi form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Harap lengkapi semua kolom yang diperlukan!');
        return;
    }

    // Kirim formulir (Anda perlu menambahkan logika pengiriman formulir di sini)
    // Contoh menggunakan fetch API untuk mengirimkan data ke backend

    fetch('send-email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Pesan Anda telah terkirim!');
        form.reset(); // Mengosongkan formulir setelah pengiriman berhasil
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    });
});

// main.js

const projects = document.querySelectorAll('.project');

function checkScroll() {
    projects.forEach(project => {
        const position = project.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight * 0.75) {
            project.classList.add('animate');
        } else {
            project.classList.remove('animate');
        }
    });
}

window.addEventListener('scroll', checkScroll);

// main.js

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

function highlightNavLink() {
    let index = 0;

    sections.forEach((section, idx) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            index = idx;
        }
    });

    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

window.addEventListener('scroll', highlightNavLink);

