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
        xpItem.innerHTML = "<div class=\"xp-header\"><img src=\""+xp.img+"\"><div><p class=\"xp-date\">" + xp.date + "</p><p class=\"xp-poste\">" + xp.poste +" </p><p class=\"xp-entreprise\"> "+ xp.entreprise +" </p></div></div><p> " + xp.desc + " </p><div class=\"xp-note\"> " + xp.note + " </div>";
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
        formItem.innerHTML = "<div class=\"xp-header\"><img src=\""+form.img+"\"><div><p class=\"xp-date\">" + form.type + "</p><p class=\"xp-poste\">" + form.nom +" </p><p class=\"xp-entreprise\"> "+ form.lieu +" </p></div></div><p> " + form.desc + " </p><div class=\"xp-note\"> " + form.date + " </div>";
        formList.appendChild(formItem);
      });
    }
  };
  xhr.send();
});

//afficher les projets

document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "projects.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var projects = JSON.parse(xhr.responseText);
      var projectList = document.getElementById("liste-projets");

      projects.forEach(function (project) {
        var projectElement = document.createElement("div");
        projectElement.classList.add("projet");
        projectElement.classList.add("projet");
        var tagsList = "<ul>";
        project.tags.forEach(function (tag) {
          tagsList += "<li>" + tag + "</li>";
        });
        tagsList += "</ul>";
        projectElement.innerHTML = "<div class=\"imgContainer\"><img src=\"covers/" + project.cover + "\" alt=\"\"></div><h3>" + project.title + "</h3>" + tagsList;
        projectElement.addEventListener("click", function () {
          displayProjectDetails(project);
        });
        projectList.appendChild(projectElement);
      });
    }
  };
  xhr.send();
});

//ouvrir un projet

function displayProjectDetails(project) {
  var pdetails = document.getElementById("p-details");
  var poverlay = document.getElementById("p-overlay");
  var ptitle = document.getElementById("p-title");
  var pcategory = document.getElementById("p-category");
  var pdate = document.getElementById("p-date");
  var pcontext = document.getElementById("p-context");
  var pchallenge = document.getElementById("p-challenge");
  var pactions = document.getElementById("p-actions");
  var closeButton = document.getElementById("close-button");
  var pfi = document.getElementById("p-fi");
  var pimages = document.getElementById("p-images");


  ptitle.textContent = project.title;
  pcategory.textContent = project.category;
  pdate.textContent = project.date;
  pfi.setAttribute("src", "imgProjet/fi-" + project.cover);
  pcontext.innerHTML = project.context;
  pchallenge.innerHTML = project.challenge;
  pactions.innerHTML = project.actions;

  pimages.innerHTML = "";
  project.images.forEach(function(image) {
      var imgContainer = document.createElement("div");
      imgContainer.classList.add("p-image-container");

      var img = document.createElement("img");
      img.setAttribute("src", "imgProjet/" + image);
      img.setAttribute("alt", "Project Image");

      imgContainer.appendChild(img);

      // Ajouter une description sous l'image si elle est disponible dans le projet
      if (project.imageDescriptions && project.imageDescriptions[image]) {
          var imgDescription = document.createElement("p");
          imgDescription.textContent = project.imageDescriptions[image];
          imgContainer.appendChild(imgDescription);
      }

      pimages.appendChild(imgContainer);
  });

  pdetails.style.display = "block";
  poverlay.style.display = "block";

  closeButton.addEventListener("click", closeProject);
  poverlay.addEventListener("click", closeProject);
}

function closeProject() {
  var pdetails = document.getElementById("p-details");
  var poverlay = document.getElementById("p-overlay");
  pdetails.style.display = "none";
  poverlay.style.display = "none";
}


//faire bouger les badges

document.addEventListener("DOMContentLoaded", function () {
  var maxRotation = 3;
  var listItems = document.querySelectorAll('#badges *');

  listItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      applyRotation(item);
    });
  });

  function applyRotation(element) {
    var rotation = Math.random() * (2 * maxRotation) - maxRotation;
    element.style.transform = "rotate(" + rotation + "deg)";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
});




