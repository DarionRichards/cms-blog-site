const loginFormElement = $("#login-form");

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

    console.log(data);
};

loginFormElement.on("submit", handleLoginSubmit);