const formulario = document.getElementById("formulario");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const users = [
    { email: "luciohdz0@gmail.com", password: "123" },
    { email: "algo@algo.com", password: "123" },
];

const guardarDatos = () => {
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
    localStorage.setItem("confirmPassword", confirmPasswordInput.value);
};

const manejoFormulario = (event) => {
    event.preventDefault();
    guardarDatos();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const userConfirmed = users.find((usr) => usr.email === email && usr.password === password);

    if (userConfirmed) {
        alert("Usuario Logeado");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "gestor_tareas.html";
    } else {
        alert("Las credenciales son incorrectas");
    }
};

formulario.addEventListener("submit", manejoFormulario);
