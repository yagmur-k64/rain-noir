function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Fix voor openen én sluiten van dropdowns op mobiel
document.querySelectorAll('.dropdown .dropbtn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const dropdown = this.parentElement;
            const isAlreadyOpen = dropdown.classList.contains('active');

            // Eerst sluit je alle dropdowns
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));

            // Als de geklikte al open was → laat gesloten
            if (!isAlreadyOpen) {
                dropdown.classList.add('active');
            }
        }
    });
});








document.querySelector('.carousel').addEventListener('wheel', function(e) {
    if (e.deltaY !== 0) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
    }
});