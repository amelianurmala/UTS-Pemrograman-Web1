// === LOGIN PAGE ===
function handleLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return; // Biar halaman lain gak error

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("⚠️ Mohon isi semua kolom sebelum login!");
      return;
    }

    const pengguna = dataPengguna.find(
      (user) => user.email === email && user.password === password
    );

    if (!pengguna) {
      alert("❌ Email atau password salah!");
      return;
    }

    sessionStorage.setItem("userName", pengguna.nama);
    alert(`✅ Selamat datang, ${pengguna.nama}!`);
    window.location.href = "dashboard.html";
  });
}

// === DASHBOARD PAGE ===
function loadDashboard() {
  const userName = sessionStorage.getItem("userName");
  const nameDisplay = document.getElementById("userNameDisplay");
  if (nameDisplay && userName) {
    nameDisplay.textContent = userName;
  }
}

// === STOK PAGE ===
function loadStokBuku() {
  const tableBody = document.getElementById("stokTableBody");
  if (!tableBody) return;

  dataKatalogBuku.forEach((buku) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${buku.cover}" alt="${buku.namaBarang}" class="cover-img"></td>
      <td>${buku.kodeBarang}</td>
      <td>${buku.namaBarang}</td>
      <td>${buku.jenisBarang}</td>
      <td>${buku.edisi}</td>
      <td>${buku.stok}</td>
      <td>${buku.harga}</td>
    `;
    tableBody.appendChild(row);
  });

  alert("📚 Daftar stok buku berhasil dimuat!");
}

// === TRACKING PAGE ===
function handleTracking() {
  const btn = document.getElementById("btnCari");
  const input = document.getElementById("nomorDO");
  const result = document.getElementById("trackingResult");

  if (!btn) return;

  btn.addEventListener("click", function () {
    const nomor = input.value.trim();
    if (nomor === "") {
      alert("⚠️ Nomor DO tidak boleh kosong!");
      return;
    }

    const data = dataTracking[nomor];
    if (!data) {
      alert("❌ Nomor DO tidak ditemukan!");
      result.classList.add("hidden");
      return;
    }

    alert(`✅ Data pengiriman untuk ${data.nama} ditemukan!`);
    result.classList.remove("hidden");
    document.getElementById("namaPemesan").textContent = data.nama;
    document.getElementById("status").textContent = data.status;
    document.getElementById("ekspedisi").textContent = data.ekspedisi;
    document.getElementById("tanggalKirim").textContent = data.tanggalKirim;
    document.getElementById("paket").textContent = data.paket;
    document.getElementById("total").textContent = data.total;
  });
}

// === RIWAYAT PAGE ===
function loadRiwayat() {
  const container = document.getElementById("riwayatContainer");
  if (!container) return;

  for (let nomor in dataTracking) {
    const item = dataTracking[nomor];
    const card = document.createElement("div");
    card.className = "riwayat-card";
    card.innerHTML = `
      <h3>${item.nama}</h3>
      <p><strong>No. DO:</strong> ${item.nomorDO}</p>
      <p><strong>Status:</strong> ${item.status}</p>
      <p><strong>Total:</strong> ${item.total}</p>
    `;
    container.appendChild(card);
  }
}

// === AUTO DETEKSI HALAMAN ===
window.addEventListener("DOMContentLoaded", function () {
  handleLogin();
  loadDashboard();
  loadStokBuku();
  handleTracking();
  loadRiwayat();
});
