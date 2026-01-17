function inscription() {
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!nom || !email || !password) {
    message.innerText = "Veuillez remplir tous les champs";
    message.style.color = "red";
    return;
  }

  localStorage.setItem("inscription", JSON.stringify({
    nom,
    email,
    statut: "en attente"
  }));

  window.location.href = "confirmation.html";
}
