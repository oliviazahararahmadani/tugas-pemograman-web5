
function hitungDiskon() {
    // Mengambil data dari input
    let nama = document.getElementById("nama").value;
    let harga = Number(document.getElementById("harga").value);
    let jumlah = Number(document.getElementById("jumlah").value);
    let hasil = document.getElementById("hasil");

    // Percabangan 1: Memeriksa nama barang
    if (nama.trim() === "") {
        hasil.innerHTML = "Nama barang harus diisi!";
        return;
    }

    // Percabangan 2: Memeriksa harga
    if (harga <= 0) {
        hasil.innerHTML = "Harga harus lebih dari 0!";
        return;
    }

    // Percabangan 3: Memeriksa jumlah barang
    if (jumlah <= 0 || !Number.isInteger(jumlah)) {
        hasil.innerHTML = "Jumlah harus berupa bilangan bulat positif!";
        return;
    }

    let total = harga * jumlah;
    let diskon = 0;
    let kategori = "";

    // Percabangan 4 sampai 9: Menentukan diskon
    if (total >= 1000000) {
        diskon = 20;
        kategori = "Diskon 20% - Belanja sangat besar";
    } else if (total >= 750000) {
        diskon = 15;
        kategori = "Diskon 15% - Belanja besar";
    } else if (total >= 500000) {
        diskon = 10;
        kategori = "Diskon 10% - Belanja menengah";
    } else if (total >= 250000) {
        diskon = 5;
        kategori = "Diskon 5% - Belanja hemat";
    } else if (total >= 100000) {
        diskon = 2;
        kategori = "Diskon 2% - Belanja ringan";
    } else {
        diskon = 0;
        kategori = "Tidak mendapat diskon";
    }

    let potongan = total * diskon / 100;
    let totalBayar = total - potongan;

    // Perulangan FOR: Menampilkan daftar barang
    let daftar = "";

    for (let i = 1; i <= jumlah; i++) {
        daftar += "Barang ke-" + i + "<br>";
    }

    // Perulangan WHILE: Menghitung jumlah barang
    let hitung = 0;
    let nomor = 1;

    while (nomor <= jumlah) {
        hitung++;
        nomor++;
    }

    // Menampilkan hasil
    hasil.innerHTML = `
        <h3>Hasil Belanja</h3>
        Nama barang: ${nama}<br>
        Harga satuan: Rp${harga.toLocaleString("id-ID")}<br>
        Jumlah barang: ${hitung}<br>
        <hr>
        <b>Daftar Barang:</b><br>
        ${daftar}
        <hr>
        Total harga: Rp${total.toLocaleString("id-ID")}<br>
        Kategori: ${kategori}<br>
        Potongan: Rp${potongan.toLocaleString("id-ID")}<br>
        <b>Total bayar: Rp${totalBayar.toLocaleString("id-ID")}</b>
    `;
}
