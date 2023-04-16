function copyLink() {
  var copyText = window.location.href;
  navigator.clipboard.writeText(copyText);
  alert("Link copied to clipboard!");
}
