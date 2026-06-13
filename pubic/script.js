if (localStorage.getItem("loggedIn") === "true") {

    window.location.href = "next.html";


}




emailjs.init({
    publicKey: "bsjiiVohsNSRjqB1l"
});

let generatedOTP = "";
let otpSent = false;

function A() {

    const msg = document.getElementById("msg");
    const btn = document.querySelector(".btn-red");


    if (!otpSent) {

        const email = document.getElementById("email").value;

        if (email === "") {
            msg.innerText = "Please enter your email";
            return;
        }

        generatedOTP = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        emailjs.send(
            "service_form",
            "template_l8wvlrx",
            {
                to_email: email,
                otp: generatedOTP
            }
        )

            .then(() => {
                document.getElementById("email").style.display = "none";
                document.getElementById("otp").style.display = "block";
                msg.innerHTML = 'OTP sent to Gmail <i class="fa-solid fa-circle-check"></i> successfully ';
                btn.innerText = "Verify OTP";
                otpSent = true;



            })

            .catch((error) => {

                console.log(error);
                msg.innerHTML = 'Failed to send OTP <i class="fa-solid fa-circle-xmark"></i>';

            });

    }


    else {

        const enteredOTP =
            document.getElementById("otp").value;

        if (enteredOTP === "") {

            msg.innerText = "Please enter OTP";

        }

        else if (enteredOTP === generatedOTP) {
            let email = document.getElementById("email").value;
            localStorage.setItem("email", email);
            localStorage.setItem("loggedIn", "true");

            msg.innerHTML = 'Email Verified <i class="fa-solid fa-circle-check"></i>';

            setTimeout(() => {

                window.location.href = "next.html";

            }, 1500);

        }

        else {

            msg.innerHTML = 'Wrong OTP <i class="fa-solid fa-circle-xmark"></i>';

        }

    }
}

