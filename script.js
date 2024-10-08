function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email-id").value,
        message : document.getElementById("message").value
    };

    emailjs.send("service_hpfv0sh", "template_tfi1bby", params).then(function (res) {
        alert("Besked Sendt!" + res.status);

        document.getElementById("fullName").value = "";
        document.getElementById("email-id").value = "";
        document.getElementById("message").value = "";
    }).catch(function (error) {
        console.error("Failed to send email:", error);
        alert("Der opstod en fejl ved afsendelse. Prøv igen senere.");
    });
    
};

document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".gallery-grid img");
    let viewImage = document.querySelector(".view-img");
    let closeButton = document.querySelector(".view-img span");

    for(let image of images){
        image.addEventListener("click", function(e){
            viewImage.style.display = "flex";
            viewImage.querySelector("img").src = e.target.src;
            console.log("Display set to flex");
        })
    };

    closeButton.addEventListener("click", function(){
        viewImage.style.display = "none";
    })
});

document.addEventListener("DOMContentLoaded", function() {
    let burgerMenu = document.querySelector(".burger-menu img");
    let burgerMenuList = document.querySelector(".burger-menu-list");

    burgerMenu.addEventListener("click", function(e){
        if (burgerMenuList.style.right == "-300px"){
            burgerMenuList.style.right = "0px";
        }
        else{
            burgerMenuList.style.right = "-300px"
        }

    })
});