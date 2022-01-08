const loginFormElement = $("#login-form");
const signupFormElement = $("#signup-form");
const logoutButtonElement = $("#logout-button");

// Handle Login Form
const handleLoginSubmit = async(event) => {
    event.preventDefault();

    const email = $("#email-input").val();
    const password = $("#password-input").val();

    const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
        window.location.replace("/dashboard");
    }

    console.log(data);
};

// Handle SignUp Form
const handleSignupSubmit = async(event) => {
    event.preventDefault();

    const firstName = $("#first-name-input").val();
    const lastName = $("#last-name-input").val();
    const email = $("#email-input").val();
    const password = $("#password-input").val();
    const confirmPassword = $("#confirm-password-input").val();

    if (!firstName || !lastName || !email || !password) {
        return alert("Missing required fields");
    } else {
        if (password !== confirmPassword) {
            return alert("Passwords do not match");
        } else {
            const response = await fetch("/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            const data = await response.json();

            if (data.success) {
                window.location.replace("/login");
            }
            console.log(data);
        }
    }
};

const handleLogoutSubmit = async(event) => {
    const response = await fetch("/auth/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (data.success) {
        window.location.replace("/");
    }
};

loginFormElement.on("submit", handleLoginSubmit);
signupFormElement.on("submit", handleSignupSubmit);
logoutButtonElement.on("click", handleLogoutSubmit);