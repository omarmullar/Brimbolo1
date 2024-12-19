document.getElementById("paymentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
  
    if (fullName && address && phone) {
      alert("Your order has been successfully submitted! Thank you for shopping with us.");
    } else {
      alert("Please fill out all required fields.");
    }
  });
  