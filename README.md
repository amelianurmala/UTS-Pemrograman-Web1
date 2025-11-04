# UTS-Pemrograman-Web1


*Nama : Amelia Nurmala Dewi*

*NIM : 312410199*

*Kelas : TI.24.A2*



### 1. Tampilan Daftar Akun Baru

<img width="1366" height="677" alt="Screenshot (1019)" src="https://github.com/user-attachments/assets/640f218f-7e4b-4178-b603-b989d0d0dbd2" />


Pada halaman ini, pengguna diminta mengisi **nama lengkap**, **email**, dan **password** untuk membuat akun baru. Jika email yang dimasukkan sudah terdaftar di sistem, maka akan muncul notifikasi pop-up bertuliskan *“Email sudah terdaftar!”*.  
- Fungsi ini berguna untuk mencegah duplikasi akun dan menjaga validitas data pengguna.
  

### 2. Notifikasi Email Sudah Terdaftar

<img width="1366" height="684" alt="Screenshot (1020)" src="https://github.com/user-attachments/assets/1e89012f-ba0e-41c4-af4e-bbf55094768a" />


Tampilan pop-up ini muncul setelah pengguna menekan tombol **Daftar Sekarang**, namun sistem menemukan bahwa email tersebut sudah ada di database.  
- Dengan adanya alert ini, pengguna dapat langsung mengetahui bahwa mereka perlu menggunakan email lain atau melakukan *reset password* jika lupa kata sandi.

### 3. Tampilan Reset Password

<img width="1366" height="681" alt="Screenshot (1021)" src="https://github.com/user-attachments/assets/94ee4115-faba-49ff-845e-406d590b3990" />


Pada halaman ini, pengguna dapat melakukan pengaturan ulang kata sandi dengan memasukkan **email terdaftar** dan **password baru**.  
- Fitur ini membantu pengguna yang lupa kata sandi agar dapat kembali mengakses akun tanpa harus membuat akun baru.

### 4. Tampilan Login Toko Buku

<img width="1366" height="684" alt="Screenshot (1022)" src="https://github.com/user-attachments/assets/bac2a6a1-a093-4cc1-afca-e2331a89ace8" />


Setelah akun berhasil dibuat atau password direset, pengguna dapat masuk melalui halaman login dengan memasukkan **email** dan **password**.  
- Jika data yang dimasukkan benar, pengguna akan diarahkan ke halaman utama aplikasi. Jika salah, maka akan muncul notifikasi error sesuai validasi sistem.

### 5. Tampilan Dashboard Toko Buku Online

<img width="1366" height="684" alt="Screenshot (1024)" src="https://github.com/user-attachments/assets/7db6917b-d738-4b54-827b-629dc218ac4e" />

### Penjelasan
Halaman ini merupakan tampilan utama setelah pengguna berhasil login ke sistem. Di sini, pengguna disambut dengan pesan personal seperti *“Selamat sore, [nama pengguna]!”* dan memiliki akses ke berbagai fitur utama pengelolaan toko buku.

Terdapat empat menu utama yang ditampilkan dalam bentuk kartu (card):
- 📚 **Informasi Stok / Katalog** — Menampilkan daftar buku yang tersedia di toko, serta memungkinkan pengguna untuk menambah stok baru.
- 🚚 **Tracking Pengiriman** — Digunakan untuk memantau status pengiriman pesanan pelanggan secara real-time agar proses distribusi lebih transparan.
- 📄 **Laporan Pemesanan** — Menyediakan data pesanan dan informasi pembayaran, memudahkan pengelola dalam memeriksa aktivitas penjualan.
- 💳 **History Transaksi** — Menampilkan catatan transaksi sebelumnya, sehingga pengguna dapat melihat riwayat pembelian dan pemesanan.

Selain itu, terdapat juga tiga ringkasan statistik di bagian bawah:
- **Total Buku** — Menampilkan jumlah seluruh buku yang tersedia.
- **Pengguna Terdaftar** — Menampilkan total akun yang telah terdaftar di sistem.
- **Pengiriman Aktif** — Menunjukkan jumlah pengiriman yang sedang berlangsung.

Tampilan ini memiliki desain yang sederhana namun informatif, dengan dominasi warna ungu yang konsisten dengan tema halaman sebelumnya.  
- Tujuannya adalah agar pengguna dapat mengelola data toko buku secara efisien, mulai dari stok, pemesanan, hingga pelacakan pengiriman, semuanya dalam satu halaman terpusat.


### 6. Halaman Informasi Stok / Katalog Buku

<img width="1366" height="683" alt="Screenshot (1025)" src="https://github.com/user-attachments/assets/3b45de35-00c4-40c8-8c62-d1130d8da307" />
<img width="1366" height="213" alt="Screenshot (1026)" src="https://github.com/user-attachments/assets/70595139-a77c-47ee-94a6-4ebdf8ef0189" />


### Penjelasan:
Halaman **Informasi Stok / Katalog Buku** merupakan salah satu bagian utama dari aplikasi pemesanan buku online ini.  
Halaman ini digunakan untuk **menampilkan daftar seluruh buku yang tersedia** di toko online, lengkap dengan informasi seperti:

- **Cover Buku** – ditampilkan dalam bentuk gambar untuk memudahkan identifikasi visual.  
- **Kode Buku** – kode unik dari setiap buku (misalnya `ASIP4301`, `EKMA4002`, dll).  
- **Nama Buku** – judul buku sesuai data pada file `data.js`.  
- **Jenis Buku** – kategori buku, dalam data ini seluruhnya bertipe “Buku Ajar”.  
- **Edisi** – menampilkan edisi dari masing-masing buku.  
- **Stok** – jumlah ketersediaan buku di gudang.  
- **Harga** – harga per satuan buku dalam format mata uang rupiah.

Seluruh data di tabel ini **diambil secara dinamis menggunakan JavaScript DOM** dari file `data.js` yang telah disediakan oleh dosen, tepatnya dari variabel:
```js
var dataKatalogBuku = [ ... ]
```

### 7. Halaman Tracking / Informasi Pengiriman

<img width="1366" height="675" alt="Screenshot (1028)" src="https://github.com/user-attachments/assets/f08aa789-b310-454e-bfe5-0662fd8f653d" />


### Penjelasan:
Halaman **Tracking Pengiriman** berfungsi untuk menampilkan **status perjalanan pesanan** berdasarkan **Nomor Delivery Order (DO)**.  
Pengguna dapat mengetik nomor DO ke kolom pencarian, lalu sistem akan menampilkan data pengiriman sesuai isi variabel `dataTracking` yang ada di `data.js`.

Contoh data yang digunakan berasal dari file:
```js
var dataTracking = {
  "20230012": {
      nomorDO: "20230012",
      nama: "Rina Wulandari",
      status: "Dalam Perjalanan",
      ekspedisi: "JNE",
      tanggalKirim: "2025-08-25",
      paket: "0JKT01",
      total: "Rp 180.000",
      perjalanan: [...]
  },
  ...
}
```
### 8. Halaman Laporan Pemesanan / History Transaksi

<img width="1366" height="673" alt="Screenshot (1029)" src="https://github.com/user-attachments/assets/fa2be41e-61be-41d3-adfc-f1f78e9247f7" />


Halaman **Laporan Pemesanan** atau **History Transaksi** merupakan fitur yang berfungsi untuk **menampilkan rekap seluruh data pesanan** yang sudah dilakukan oleh pengguna.  
Data yang ditampilkan diambil langsung dari objek `dataTracking` pada file `data.js`, di mana setiap entri pesanan memiliki informasi lengkap seperti:

- Nomor DO (Delivery Order)  
- Nama Pemesan  
- Status Pengiriman  
- Ekspedisi  
- Tanggal Pengiriman  
- Total Pembayaran  

#### Tujuan dan Fungsi:
Fitur laporan ini digunakan untuk:
1. **Memantau riwayat pemesanan** oleh pengguna.  
2. Mengetahui **status akhir pesanan** (misalnya apakah sudah selesai atau masih dalam perjalanan).  
3. Menyediakan **data rekap transaksi** untuk keperluan administrasi toko buku online.

Halaman laporan ini menjadi pendukung dari fitur **checkout** dan **tracking**, karena datanya bersumber dari objek yang sama (`dataTracking`) dan diperbarui setiap kali pengguna menambah atau mengubah data pemesanan.

#### Tampilan dan Interaksi:
- Data laporan ditampilkan dalam bentuk **tabel rapi**, sama seperti format di halaman `checkout.html`.  
- Setiap baris tabel menampilkan satu transaksi lengkap dengan nomor DO dan total pembayarannya.  
- Warna tabel dibuat selaras dengan halaman lain (ungu lembut, putih bersih, dan header berwarna ungu tua).  
- Greeting pengguna dan tombol “← Kembali” tetap muncul di bagian atas halaman untuk konsistensi desain.  

#### Integrasi dengan Halaman Lain:
- Data laporan ini **terhubung langsung dengan halaman Pemesanan (`checkout.html`)** dan **Tracking (`tracking.html`)**.  
- Jika pengguna menambah atau mengubah pesanan di `checkout.html`, maka **laporan transaksi otomatis ikut berubah** tanpa perlu input ulang.  
- Dengan demikian, laporan selalu menampilkan data **real-time** dari JavaScript tanpa database eksternal.  


### 9.Halaman Riwayat Transaksi / Laporan Pemesanan

<img width="1366" height="675" alt="Screenshot (1030)" src="https://github.com/user-attachments/assets/e114fb31-b39c-4893-a242-0cf6b18b778e" />


### Penjelasan:
Halaman **Riwayat Transaksi** berfungsi untuk menampilkan **laporan seluruh pesanan dan pengiriman buku** yang telah dilakukan oleh pengguna.  
Data pada tabel ini bersumber langsung dari variabel `dataTracking` di file `data.js`, sehingga seluruh isi tabel **dibuat secara dinamis menggunakan JavaScript DOM Manipulation**.

Data yang ditampilkan pada tabel meliputi:
- **Nomor DO (Delivery Order)**  
- **Nama Pemesan**  
- **Status Pengiriman** (Dalam Perjalanan, Dikirim, Selesai)  
- **Tanggal Kirim**  
- **Total Pembayaran**  
- **Aksi (Detail)** untuk melihat informasi lebih lengkap

#### Fitur Utama:
1. **Tabel Dinamis dari Data JavaScript**  
   Semua data transaksi diambil dari `dataTracking` dan ditampilkan otomatis pada tabel.  
   Jika ada pesanan baru ditambahkan dari halaman `checkout.html`, maka data ini juga ikut berubah secara real-time.

2. **Tombol Detail**  
   Setiap baris memiliki tombol **“Detail”** yang berfungsi untuk menampilkan informasi tambahan tentang pengiriman dan status paket berdasarkan nomor DO.  
   Tombol ini mempermudah pengguna untuk melihat progres pesanan tanpa membuka halaman tracking secara manual.

3. **Desain Konsisten**  
   - Warna latar belakang: gradasi ungu lembut  
   - Warna tabel: putih dan ungu tua  
   - Tombol detail: biru muda agar kontras dan mudah dilihat  
   - Greeting di pojok kanan atas:  
     > “Halo, Amelia Nurmala Dewi! 👋”  
   - Tombol navigasi **← Kembali** menuju dashboard
     
#### Fungsi dan Tujuan:
Halaman ini dibuat untuk memenuhi kebutuhan **laporan transaksi** sesuai soal UTS bagian:
> “Laporan Pemesanan / History Transaksi – Menampilkan data pengiriman dan pemesanan secara dinamis.”

Fungsinya:
- Sebagai **rekap seluruh pemesanan dan status pengiriman buku**.  
- Menjadi **laporan akhir dari proses checkout dan tracking**.  
- Menunjukkan kemampuan penggunaan **DOM dan pengolahan data JSON di sisi front-end**.

#### Tampilan dan Desain:
Tampilan menggunakan pendekatan **modern clean UI**, dengan kombinasi warna netral:
- Ungu dan putih untuk kesan lembut dan profesional,  
- Tombol biru untuk interaksi aktif,  
- Font yang mudah dibaca, dan  
- Layout dengan card ber-radius besar untuk kesan elegan.  

Footer tetap mencantumkan identitas mahasiswa sebagai tanda kepemilikan:
> © Amelia Nurmala Dewi – Universitas Pelita Bangsa 2025


#### 10.Tampilan Dashboard dan Fungsi Logout

<img width="1366" height="681" alt="Screenshot (1031)" src="https://github.com/user-attachments/assets/32efea43-affb-4e5c-be08-d15216c0fba4" />

### Penjelasan 

Gambar di atas menunjukkan tampilan halaman dashboard dari aplikasi **Toko Buku Online** yang dijalankan di alamat lokal `127.0.0.1:5500`. Pada bagian header terlihat tulisan **“Selamat pagi, Amelia Nurmala Dewi! 👋”** yang menandakan bahwa sistem sudah mengenali pengguna yang login. Di sampingnya terdapat tombol **Logout** berwarna oranye yang berfungsi untuk keluar dari akun pengguna. Setelah tombol logout ditekan, muncul notifikasi pop-up bertuliskan **“Anda telah logout!”** yang memberikan konfirmasi bahwa proses keluar telah berhasil, dengan tombol **Oke** untuk menutup pesan tersebut. Tampilan dashboard ini memiliki desain modern dengan latar ungu dan beberapa menu utama seperti **Informasi Stok/Katalog**, **Tracking Pesanan**, dan **History Transaksi** yang membantu pengguna mengelola data buku, memantau pengiriman, dan melihat catatan transaksi. Secara keseluruhan, tampilan ini menunjukkan bahwa fitur autentikasi dan sistem logout berjalan dengan baik, serta antarmuka dirancang responsif dan mudah dipahami pengguna.




