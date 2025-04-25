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







// slider for the projects section
document.querySelector('.carousel').addEventListener('wheel', function(e) {
    if (e.deltaY !== 0) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
    }
});

//click function on smaller screens for the Learning outcome section
document.addEventListener('DOMContentLoaded', function () {
    const outcomes = document.querySelectorAll('.outcome');

    outcomes.forEach(outcome => {
      outcome.addEventListener('click', function () {
        // Als al actief, zet hem uit. Anders alleen deze actief maken
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          // Eerst alle anderen deactiveren
          outcomes.forEach(o => o.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  });