function showTab(tabId) {
    // Mengambil semua tab-content dan menyembunyikannya
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Mengambil semua tab-button dan menghapus kelas 'active'
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Menampilkan tab yang dipilih
    document.getElementById(tabId).classList.add('active');
    
    // Menandai button yang aktif
    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === tabId.split('-')[0]);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


// Mendapatkan elemen tombol, teks, dan div syarat & ketentuan
const toggleSyaratBtn = document.getElementById('toggleSyaratBtn');
const toggleSyaratText = document.querySelector('#syarat-section .toggle-text');
const toggleKetentuanBtn = document.getElementById('toggleKetentuanBtn');
const toggleKetentuanText = document.querySelector('#ketentuan-section .toggle-text');

const syarat = document.getElementById('syarat');
const ketentuan = document.getElementById('ketentuan');

// Fungsi untuk menampilkan atau menyembunyikan syarat
function toggleSyarat() {
    if (syarat.style.display === "none" || syarat.style.display === "") {
        syarat.style.display = "block";
        toggleSyaratBtn.textContent = "🔼"; // Ubah panah menjadi atas
    } else {
        syarat.style.display = "none";
        toggleSyaratBtn.textContent = "🔽"; // Ubah panah menjadi bawah
    }
}

// Fungsi untuk menampilkan atau menyembunyikan ketentuan
function toggleKetentuan() {
    if (ketentuan.style.display === "none" || ketentuan.style.display === "") {
        ketentuan.style.display = "block";
        toggleKetentuanBtn.textContent = "🔼"; // Ubah panah menjadi atas
    } else {
        ketentuan.style.display = "none";
        toggleKetentuanBtn.textContent = "🔽"; // Ubah panah menjadi bawah
    }
}

// Menambahkan event listener untuk tombol dan teks Syarat
toggleSyaratBtn.addEventListener('click', toggleSyarat);
toggleSyaratText.addEventListener('click', toggleSyarat);

// Menambahkan event listener untuk tombol dan teks Ketentuan
toggleKetentuanBtn.addEventListener('click', toggleKetentuan);
toggleKetentuanText.addEventListener('click', toggleKetentuan);
