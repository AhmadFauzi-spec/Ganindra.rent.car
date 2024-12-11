// Fungsi untuk membuka modal dengan gambar besar
function openModal(imageSrc) {
    // Set gambar modal
    document.getElementById("modal-image").src = imageSrc;
    // Tampilkan modal
    document.getElementById("modal").style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
    // Sembunyikan modal
    document.getElementById("modal").style.display = "none";
}
