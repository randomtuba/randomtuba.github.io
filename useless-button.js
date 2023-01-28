var timesClicked = 0;

function message() {
  timesClicked++;
  if (timesClicked == 1) {
    alert("This button is useless. And yet, you've clicked it.")
  } else {
    alert("This button is useless. And yet, you've clicked it " + timesClicked + " times.")
  }
}

//first person to find and screenshot this message gets 5 gwas