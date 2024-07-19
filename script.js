
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.title');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const panel = this.nextElementSibling;

            // console.log(panel)

            // Toggle between adding and removing the "active" class
            this.classList.toggle('active');

            // Toggle between hiding and showing the panel
            if (panel.style.display === 'block') {
                panel.style.display = 'none'; 
            } else {
                panel.style.display = 'block';
            }
        });
    });
});
