document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = new bootstrap.Modal(document.getElementById("mobileMenu"));

  menuToggle.addEventListener("click", function () {
    mobileMenu.toggle();
  });
});

// ########################################################################################

// Mengambil elemen tombol
const scrollButton = document.getElementById("scrollButton");

// Fungsi untuk menangani scroll
function handleScroll() {
  // Cek posisi scroll
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Jika scroll sudah mencapai lebih dari setengah tinggi layar, tampilkan tombol
  if (scrollPosition > windowHeight / 2) {
    scrollButton.style.display = "block"; // Menampilkan tombol
  } else {
    scrollButton.style.display = "none"; // Menyembunyikan tombol
  }
}

// Event listener untuk scroll
window.addEventListener("scroll", handleScroll);

// Pastikan tombol tidak muncul saat halaman pertama kali dimuat
window.addEventListener("load", () => {
  scrollButton.style.display = "none"; // Pastikan tombol tersembunyi saat halaman pertama dimuat
});

// Menambahkan event click untuk kembali ke atas
scrollButton.addEventListener("click", () => {
  // Scroll ke atas dengan efek smooth
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Menambahkan efek smooth scroll
  });
});

// ########################################################################################

// ########################################################################################

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 100,
    duration: 800,
    once: true,
  });

  document.addEventListener("scroll", () => {
    AOS.refresh();
  });

  AOS.init({
    once: false,
  });
});

// ########################################################################################
