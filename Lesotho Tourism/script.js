   function myFunction() {
    // 1. Declaration of input values 
    let studentName = document.getElementById("studentName").value.trim();
    let studentEmail = document.getElementById("studentEmail").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Gender radio selection handling
    let maleRadio = document.getElementById("male");
    let femaleRadio = document.getElementById("female");
    let otherRadio = document.getElementById("other");

    // 2. Validation Regex Patterns
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^\d{8}$/; // Validates exactly 8 digits (Lesotho format)

    // 3. Name Validation
    if (studentName === "") {
        alert("Your name is required");
        return;
    }

    // 4. Email Validation
    if (studentEmail === "") {
        alert("Your Email is required");
        return;
    } else if (!emailPattern.test(studentEmail)) {
        alert("You entered an invalid email address");
        return;
    }

    // 5. Phone Validation
    if (phone === "") {
        alert("Your phone number is required");
        return;
    } else if (!phonePattern.test(phone)) {
        alert("You entered an invalid phone number. It must be exactly 8 digits.");
        return;
    }

    // 6. Gender Option Validation
    if (maleRadio && femaleRadio && otherRadio) {
        if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
            alert("Please select your gender");
            return;
        }
    }

    // 7. Password Validation
    if (password === "") {
        alert("Your password is required");
        return;
    } else if (password.length < 8) {
        alert("Your password must be at least 8 characters long");
        return;
    }

    // 8. Confirm Password Validation
    if (confirmPassword === "") {
        alert("Confirm password is required");
        return;
    } else if (confirmPassword !== password) {
        alert("Your confirmed password does not match your original password");
        return;
    }

    // 9. Success Action (Runs if all checks above pass)
    alert("Form submitted successfully, " + studentName + "!");
    // You can uncomment the line below to let the HTML form submit to a database/server:
    // document.getElementById("yourFormId").submit();
}

/* ==========================================================================
   Image Gallery Slideshow System
   ========================================================================== */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  
  if (!slides.length) return; // Safeguard if running on a page without a slider

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  if (dots[slideIndex-1]) {
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }}