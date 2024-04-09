const dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownToggle.addEventListener("click", () => {
    const dropdownMenu = document.querySelector("#dropdown > .menu");
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
    // JavaScript for handling payment options selection

document.addEventListener('DOMContentLoaded', function() {
    const paymentButtons = document.querySelectorAll('.payment-option');
    const hiddenPaymentInput = document.getElementById('payment');

    // Add click event listener to each payment button
    paymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Set the value of hidden input to the clicked button's value
            hiddenPaymentInput.value = this.value;

            // Remove active class from all buttons
            paymentButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to the clicked button
            this.classList.add('active');
        });
    });
});
});