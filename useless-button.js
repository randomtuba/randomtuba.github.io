var timesClicked = 0;

function message() {
  timesClicked++;
  if (timesClicked == 1) {
    alert("This button is useless. And yet, you've clicked it.")
  } else {
    if (timesClicked == 1000) {
      alert("I appreciate your determination and relentless effort. And yet, you've clicked a useless button " + timesClicked + " times.")
    } else {
      alert("This button is useless. And yet, you've clicked it " + timesClicked + " times.")
    }
  }
}
