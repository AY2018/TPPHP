function updateSupprimerButton() {
  var checkboxes = document.getElementsByName('supprimer[]');
  var deleteButton = document.getElementById('BtnSupprimer');
  var checked = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      break;
    }
  }
  if (checked) {
    deleteButton.style.display = "inline-block";
  } else {
    deleteButton.style.display = "none";
  }
}