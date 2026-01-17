/* INSCRIPTION */
function inscription() {
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (localStorage.getItem("user")) {
    message.innerText = "Compte déjà existant. Veuillez vous connecter.";
    message.style.color = "red";
    return;
  }

  if (!nom || !email || !password) {
    message.innerText = "Tous les champs sont obligatoires.";
    message.style.color = "red";
    return;
  }

  const user = {
    nom,
    email,
    password: btoa(password),
    statut: "en attente"
  };

  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "confirmation.html";
}

/* CONNEXION */
function connexion() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    message.innerText = "Aucun compte trouvé.";
    return;
  }

  if (email !== user.email || btoa(password) !== user.password) {
    message.innerText = "Identifiants incorrects.";
    return;
  }

  localStorage.setItem("connecte", "true");
  window.location.href = "contenu.html";
}

/* PROTECTION CONTENU */
function verifierAcces() {
  const connecte = localStorage.getItem("connecte");
  const zone = document.getElementById("contenu");

  if (!connecte) {
    window.location.href = "index.html";
    return;
  }

  zone.innerHTML = `
    <h2>⏳ Contenus indisponibles</h2>
    <p>
      Les contenus ne sont pas encore publiés.<br>
      Veuillez attendre le créateur.
    </p>
  `;
}
