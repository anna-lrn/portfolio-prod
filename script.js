function toggleMode() {
  document.body.classList.toggle('dark-mode');
  var logos = document.querySelectorAll('.logo');
  logos.forEach(function (logo) {
    logo.classList.toggle('invert');
  });
}

function openAPropos() {
  var apropos = document.getElementById("apropos");
  var aproposOverlay = document.getElementById("aproposOverlay");
  apropos.style.left = "0vw";
  aproposOverlay.style.display = "block";
}

function closeAPropos() {
  var apropos = document.getElementById("apropos");
  var aproposOverlay = document.getElementById("aproposOverlay");
  apropos.style.left = "calc(var(--aproposSize)*-1)";
  aproposOverlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "experiences.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var xps = JSON.parse(xhr.responseText);
      var xpList = document.getElementById("experiences");

      xps.forEach(function (xp) {
        var xpItem = document.createElement("div");
        xpItem.classList.add("timeline");
        xpItem.innerHTML = "<img src=\"" + xp.img + "\" alt=\"\"><div class=\"timelineText\"><p class=\"bold\">" + xp.poste + "</p><p>" + xp.date + "</p><p>" + xp.desc + "</p></div>";
        xpList.appendChild(xpItem);
      });
    }
  };
  xhr.send();
});

document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "formations.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var forms = JSON.parse(xhr.responseText);
      var formList = document.getElementById("formations");

      forms.forEach(function (form) {
        var formItem = document.createElement("div");
        formItem.classList.add("timeline");
        formItem.innerHTML = "<img src=\"" + form.img + "\" alt=\"\"><div class=\"timelineText\"><p class=\"bold\">" + form.nom + "</p><p>" + form.lieu + "</p><p>" + form.date + "</p><p>" + form.desc + "</p></div>";
        formList.appendChild(formItem);
      });
    }
  };
  xhr.send();
});

document.addEventListener("DOMContentLoaded", function () {
  var maxRotation = 3; // Définir la valeur maximale de rotation

  // Sélectionner tous les éléments <li> dans la liste
  var listItems = document.querySelectorAll('#badges *');

  // Appliquer une rotation initiale à chaque élément <li>
  // listItems.forEach(function (item) {
  //   applyRotation(item);
  // });

  // Ajouter un gestionnaire d'événements à chaque survol
  listItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      applyRotation(item); // Appliquer une nouvelle rotation au survol
    });
  });

  // Fonction pour appliquer une rotation à un élément
  function applyRotation(element) {
    // Calculer une rotation aléatoire entre -5 et 5 degrés
    var rotation = Math.random() * (2 * maxRotation) - maxRotation;

    // Appliquer la rotation à l'élément
    element.style.transform = "rotate(" + rotation + "deg)";
  }
});



