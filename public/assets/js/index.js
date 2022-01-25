const loginFormElement = $("#login-form");
const signupFormElement = $("#signup-form");
const logoutButtonElement = $("#logout-button");
const createButtonElement = $("#create-blog");
const updateButtonElement = $("#update-button");
const deleteButtoonElement = $(".delete-button");
const createCommentButton = $("#create-comment");

// Handle Login Form
const handleLoginSubmit = async(event) => {
    event.preventDefault();

    const email = $("#email-input").val();
    const password = $("#password-input").val();

    if (!email) {
        alert("Please provide an email");
    } else if (!password) {
        alert("Please provide password");
    } else {
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
        } else if (data.status === 404) {
            alert("Incorrect email");
        } else if (data.status === 401) {
            alert("Incorrect password");
        }
    }
};

// Handle SignUp Form
const handleSignupSubmit = async(event) => {
    event.preventDefault();

    const firstName = $("#first-name-input").val();
    const lastName = $("#last-name-input").val();
    const email = $("#email-input").val();
    const password = $("#password-input").val();
    const confirmPassword = $("#confirm-password-input").val();

    if (!firstName) {
        return alert("Enter first name");
    } else if (!lastName) {
        return alert("Enter last name");
    } else if (!email) {
        return alert("Enter email");
    } else if (!password) {
        return alert("Please enter a password");
    } else if (password !== confirmPassword) {
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
            alert("Succesfully created account");
            window.location.replace("/login");
        } else if (data.status === 409) {
            alert("Email already exists. Please enter a different email");
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

const handleCreateBlog = async(event) => {
    event.preventDefault();

    const blogTitle = $("#blog-title").val();
    const blogContent = $("#blog-content").val();

    const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogTitle, blogContent }),
    });

    const data = await response.json();

    if (data.success) {
        window.location.replace("/dashboard");
    } else if (data.status === 422) {
        alert("Blog title or content cannot be empty");
    }
};

const handleEditBlog = async(event) => {
    event.preventDefault();

    const blogTitle = $("#blog-title").val();
    const blogContent = $("#blog-content").val();

    if (!blogTitle) {
        alert("Title cannot be empty");
    }
    if (!blogContent) {
        alert("Content cannot be empty");
    }

    const id = event.target.getAttribute("data");

    const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogTitle, blogContent }),
    });
    const data = await response.json();

    console.log(data);

    if (data.success) {
        window.location.replace("/dashboard");
    }
};

const handleDeleteBlog = async(event) => {
    const blogId = event.target.getAttribute("data");

    const response = await fetch(`/api/blog/${blogId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (data.success) {
        window.location.replace("/dashboard");
    }

    console.log(data);
};

const handleCreateComment = async(event) => {
    event.preventDefault();

    const comment = $("#comment-text").val();
    const blogId = event.target.getAttribute("data");

    const response = await fetch(`/api/blog/${blogId}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            comment,
        }),
    });

    const data = await response.json();

    if (data.status === 422) {
        alert("Cannot post an empty comment");
    } else if (data.success) {
        window.location.replace(`/blogs/${blogId}`);
    }
};

loginFormElement.on("submit", handleLoginSubmit);
signupFormElement.on("submit", handleSignupSubmit);
logoutButtonElement.on("click", handleLogoutSubmit);
createButtonElement.on("click", handleCreateBlog);
updateButtonElement.on("click", handleEditBlog);
deleteButtoonElement.on("click", handleDeleteBlog);
createCommentButton.on("click", handleCreateComment);