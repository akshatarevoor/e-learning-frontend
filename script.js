let progress = 0;

function updateProgress() {
  if (progress < 100) {
    progress += 20; // Increase progress by 20% per lesson
    document.getElementById("progress").style.width = progress + "%";
  }
}
