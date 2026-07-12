function mostrarPDF() {
    const rol = document.getElementById("rol").value;
    const pdf = document.getElementById("pdf");
    const submitButton = document.getElementById("submitButton");
    const contraseña = document.getElementById("contraseña");

    if (rol === "Maestro") {
        pdf.style.display = "block";
        submitButton.style.display = "block";
        contraseña.style.display = "none";
    } 
    else {
        pdf.style.display = "none";
        submitButton.style.display = "none";
        contraseña.style.display = "block";
    }
}
