function ubahGreeting() {
    var greeting = document.getElementById('greeting');
    greeting.textContent = 'Halo! Pesan telah diubah.';
}

function submitForm(event) {
    event.preventDefault(); // Menghentikan pengiriman form

    var inputNama = document.getElementById('nama').value;
    var hasilInput = document.getElementById('hasilInput');
    hasilInput.textContent = 'Nama yang dimasukkan: ' + inputNama;
}

function ubahBahasa() {
    var selectBahasa = document.getElementById('bahasa');
    var pesanSelamatDatang = document.getElementById('pesanSelamatDatang');
    var selectedValue = selectBahasa.value;

    if (selectedValue === 'id') {
        pesanSelamatDatang.textContent = 'Selamat datang di Website Sederhana!';
    } else if (selectedValue === 'en') {
        pesanSelamatDatang.textContent = 'Welcome to Simple Website!';
    }
}

// Inisialisasi pesan selamat datang default
ubahBahasa();
