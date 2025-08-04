// import React from "react";
// import "./Top.scss";

// export default function Top() {
//   // Fungsi untuk mengatur scrollbar ke atas
//   function TopEvent() {
//     document.body.scrollTop = 0; // Untuk Safari
//     document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE dan Opera
//   }  

//   // Fungsi untuk menampilkan tombol jika pengguna menggeser layar lebih dari 20px dari atas
//   function scrollFunction() {
//     if (
//       document.body.scrollTop > 20 ||
//       document.documentElement.scrollTop > 20
//     ) {
//       document.getElementById("topButton").style.visibility = "visible";
//     } else {
//       document.getElementById("topButton").style.visibility = "hidden";
//     }
//   }

//   // Fungsi untuk mengatur event scroll dan load
//   window.onscroll = function () {
//     scrollFunction();
//   };
//   window.onload = function () {
//     scrollFunction();
//   }; // Agar tombol tidak terlihat saat pertama kali di-load

//   // Membuat tombol untuk mengatur scrollbar ke atas
//   return (
//     <button onClick={TopEvent} id="topButton" title="Kembali ke atas">
//       <i className="fas fa-hand-point-up" aria-hidden="true"></i>
//     </button>
//   );
// }

