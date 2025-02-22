window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 25) { // trigger when near the bottom of the page
        footer.style.bottom = '0';
        footer.style.opacity = '1'; // fade in footer
    } else {
        footer.style.bottom = '-100px'; // hide the footer
        footer.style.opacity = '0'; // make footer invisible
    }
});
