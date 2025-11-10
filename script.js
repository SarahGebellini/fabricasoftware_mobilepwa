document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formPeca");
    const modal = document.getElementById("confirmModal");
    const fecharModalBtn = document.getElementById("fecharModal");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    fecharModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target.id === "confirmModal") {
            modal.style.display = "none";
        }
    });

});