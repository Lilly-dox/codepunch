let element = document.getElementsByClassName("overlay")[0];
var button = document.getElementById('choose-file-button');
function close_modal() {
    element.style.display = 'none';
}
function open_modal() {
    element.style.display = 'flex';
}

function confirmDelete() {
    return confirm("Are you sure to delete?");
}

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}