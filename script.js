let reservForm = document.querySelector(".reservation-form");

if(reservForm){
    reservForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const person = document.getElementById("persons").value;

        alert(`Thankyou for your reservations ${name}! You have reserved a table for ${person}`)

        window.location.href = "contact.html";
    });
}
else{
    console.log("From not found!")
}
