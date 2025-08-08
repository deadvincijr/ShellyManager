function downloadFile(fileName) {
  // Create an anchor element
  const link = document.createElement('a');

  // Set the href to the path of the file
  link.href = fileName;

  // Set the download attribute to the desired file name
  link.download = fileName;

  // Append the link to the body
  document.body.appendChild(link);

  // Programmatically click the link
  link.click();

  // Remove the link from the body
  document.body.removeChild(link);
}
