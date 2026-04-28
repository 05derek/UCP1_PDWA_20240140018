// ==========================================
// 1. Inisialisasi Data Array (Simulasi Database)
// ==========================================
// Memasukkan data draf awal ke dalam array
const dataAwal = [
    { nama: "Rizky Pratama", email: "rizkiPratama@gmail.com", minat: "VideoGrafis" },
    { nama: "Afifatul Khuluq", email: "afifatulkhuluq@gmail.com", minat: "VideoGrafis" },
    { nama: "Dhina Rachma", email: "dhinarachma@gmail.com", minat: "FotoGrafis" },
    { nama: "Hawada Salwa", email: "hawadasalwa@gmail.com", minat: "FotoGrafis" }
];

// Menyimpan array ke localStorage agar data tidak hilang saat pindah halaman HTML
if (!localStorage.getItem('anggotaData')) {
    localStorage.setItem('anggotaData', JSON.stringify(dataAwal));
}

// Fungsi untuk mengambil data array saat ini
function getAnggota() {
    return JSON.parse(localStorage.getItem('anggotaData'));
}


// ==========================================
// 2. Logika untuk index.html (Menampilkan Tabel)
// ==========================================
if (document.getElementById('memberTableBody')) {
    const tbody = document.getElementById('memberTableBody');
    const totalDisplay = document.getElementById('totalMembers');
    const anggota = getAnggota();

    anggota.forEach(member => {
        let row = `<tr>
            <td>${member.nama}</td>
            <td>${member.email}</td>
            <td>${member.minat}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
    totalDisplay.innerText = `Total Buruh: ${anggota.length}`;
}


// ==========================================
// 3. Logika untuk form.html (Submit Data)
// ==========================================
if (document.getElementById('memberForm')) {
    const form = document.getElementById('memberForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah page reload

        // Menangkap nilai input
        const nama = document.getElementById('inputNama').value;
        const email = document.getElementById('inputEmail').value;
        const minat = document.getElementById('inputMinat').value;

        // Menyimpan data ke dalam array di localStorage
        const anggotaBaru = { nama, email, minat };
        const anggota = getAnggota();
        anggota.push(anggotaBaru);
        localStorage.setItem('anggotaData', JSON.stringify(anggota));

        // Menampilkan alert pop-up
        alert(`Berhasil!\n\nNama: ${nama}\nEmail: ${email}\nMinat: ${minat}`);

        // Menampilkan data di bagian bawah form
        const resultDiv = document.getElementById('formResult');
        resultDiv.innerHTML = `
            <div class="alert alert-success">
                <strong>Data berhasil ditampung di Array!</strong><br>
                Nama: ${nama} <br> Minat: ${minat}
            </div>`;

        form.reset(); // Mengosongkan form
    });
}


// ==========================================
// 4. Logika untuk gallery.html (Multimedia)
// ==========================================
function ubahGambar() {
    const img = document.getElementById('galeriGambar');
    // Mengganti source gambar ke gambar lain
    img.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80";
    alert("Gambar berhasil diubah menggunakan JavaScript!");
}

function toggleAudio() {
    const audio = document.getElementById('audioPlayer');
    // Play jika sedang pause, dan pause jika sedang play
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}