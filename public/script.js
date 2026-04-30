function showSection(sectionID) {
    document.getElementById('home').style.display = 'none';
    document.querySelectorAll('.content').forEach(s => s.style.display = 'none');
    const active = document.getElementById(sectionID);
    if(active) active.style.display = 'block';
}

function hideAllContent() {
    document.querySelectorAll('.content').forEach(s => s.style.display = 'none');
    document.getElementById('home').style.display = 'block';
}

function clearFields() {
    document.querySelectorAll('.field').forEach(input => input.value = '');
}

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    const section = params.get('section'); 

    if (status === 'success') {
        alert("Successful");
        showSection('create');
    } else if (status === 'updated') {
        alert("Successful");
        showSection('update');
    } else if (status === 'deleted') {
        alert("Successful");
        showSection('delete');
    } 
    
    else if (section) {
        showSection(section);
    } 
   
    else if (params.has('search_u')) {
        showSection('update');
    } else if (params.has('search_d')) {
        showSection('delete');
    } else {
        hideAllContent();
    }
}
