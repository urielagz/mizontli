function mostrarPDF() {
    const rol = document.getElementById("rol").value;
    const pdf = document.getElementById("pdf");

    if (rol === "Maestro") {
        pdf.style.display = "block";
    } else {
        pdf.style.display = "none";
    }
}
