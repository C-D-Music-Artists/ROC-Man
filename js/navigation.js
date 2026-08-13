/*
====================================================

ROC-Man
Official Artist Website

Website Version 1.0

Datei:
navigation.js

====================================================
*/


document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navigationLinks = document.querySelectorAll(".nav-links a");


    /* ====================================================
       MOBILE MENU OPEN / CLOSE
    ==================================================== */

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

        const isOpen = menuToggle.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    /* ====================================================
       CLOSE MENU AFTER CLICKING A LINK
    ==================================================== */

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

});