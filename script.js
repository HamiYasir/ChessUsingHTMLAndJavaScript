function allowDrop(piece) {
  piece.preventDefault();
}

function drag(piece) {
  piece.dataTransfer.setData("Text", piece.target.id);
}

function drop(piece) {
  let data = piece.dataTransfer.getData("Text");
  piece.target.appendChild(document.getElementById(data));
  piece.preventDefault();
}

function showSourceCodeCredentials()
{
  document.getElementById("cover").style.right = "-50px";
}

function hideSourceCodeCredentials()
{
  document.getElementById("cover").style.right = "575px";
}
