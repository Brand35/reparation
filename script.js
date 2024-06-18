let selectedOptions = {
    menu1: '',
    menu2: '',
    menu3: ''
};

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const isVisible = menu.style.display === 'block';
    const allMenus = document.querySelectorAll('.dropdown-menu');
    
    allMenus.forEach(m => m.style.display = 'none');
    
    if (!isVisible) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function selectOption(menuId, option) {
    selectedOptions[menuId] = option;
    // Masquer le menu après la sélection
    document.getElementById(menuId).style.display = 'none';
}

function validateSelection() {
    const resultContainer = document.getElementById('resultContainer');
    const combination = `${selectedOptions.menu1}-${selectedOptions.menu2}-${selectedOptions.menu3}`;
    let imageSrc ="C:\Users\brand\OneDrive\Documents\GitHub\reparation\assets\dreoulant.png";
    

    // Associer chaque combinaison d'options à une image spécifique
    if (combination === 'Option 1-Option 2-Option 3') {
        imageSrc = "";
    } else {
        imageSrc = '';
    }

    // Afficher les options sélectionnées et l'image
    resultContainer.innerHTML = `
        <h3>Options sélectionnées :</h3>
        <ul>
            <li>${selectedOptions.menu1}</li>
            <li>${selectedOptions.menu2}</li>
            <li>${selectedOptions.menu3}</li>
        </ul>`;
    if (imageSrc) {
        resultContainer.innerHTML += `<img src="${imageSrc}" alt="${imageSrc}">`;
    } else {
        resultContainer.innerHTML += `<p>Aucune image disponible pour cette combinaison.</p>`;
    }
    resultContainer.style.display = 'block'; // Affiche le conteneur de résultats
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const allMenus = document.querySelectorAll('.dropdown-menu');
        allMenus.forEach(menu => {
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            }
        });
    }
}


