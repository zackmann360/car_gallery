function validateForm() {
   var name = document.forms["orderForm"]["name"].value.trim();
   var email = document.forms["orderForm"]["email"].value.trim();
   var quantity = document.forms["orderForm"]["quantity"].value.trim();
   
   var nameError = document.getElementById("nameError");
   var emailError = document.getElementById("emailError");
   var quantityError = document.getElementById("quantityError");
   
   var isValid = true;
   
   if (name == "") {
     nameError.innerHTML = "Please enter your name.";
     isValid = false;
   } else if (!/^[a-zA-Z\s]*$/.test(name)) {
     nameError.innerHTML = "Name can only contain letters and spaces.";
     isValid = false;
   } else {
     nameError.innerHTML = "";
   }
   
   if (email == "") {
     emailError.innerHTML = "Please enter your email address.";
     isValid = false;
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
     emailError.innerHTML = "Please enter a valid email address.";
     isValid = false;
   } else {
     emailError.innerHTML = "";
   }
   
   if (quantity == "") {
     quantityError.innerHTML = "Please enter a quantity.";
     isValid = false;
   } else if (isNaN(quantity) || quantity <= 0 || quantity % 1 !== 0) {
     quantityError.innerHTML = "Please enter a valid quantity.";
     isValid = false;
   } else {
     quantityError.innerHTML = "";
   }
   
   if (isValid) {
     var orderDetails = "Name: " + name + "\nEmail: " + email + "\nQuantity: " + quantity;
     alert("Your order details:\n" + orderDetails);
   }
   
   return isValid;
 }
 