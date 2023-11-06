// Initialize a counter for checked items
let checkedItems = 0;

// Function to update the progress meter
function updateProgress() {
  const totalItems = document.querySelectorAll('.checkbox').length;
  const progress = (checkedItems / totalItems) * 100;

  // Update the progress meter (width of the progress bar)
  document.getElementById('progress-meter').style.width = progress + '%';
}

// Event listener for checking/unchecking items
document.querySelectorAll('.checkbox').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      checkedItems++;
    } else {
      checkedItems--;
    }
    updateProgress();
  });
});
