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
