const contactFormDataSubmited = () => {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const commentField = document.getElementById("comment");

  const nameFieldValue = nameField.value;
  const emailFieldValue = emailField.value;
  const commentFieldValue = commentField.value;

  if (
    (nameFieldValue && emailFieldValue && commentFieldValue === nameField.value,
    emailField.value,
    commentField.value)
  ) {
    alert("Your comment has been succesfully saved!");
  } else if (
    (nameFieldValue && emailFieldValue && commentFieldValue !== nameField.value,
    emailField.value,
    commentField.value)
  ) {
    alert("Please enter your valuable comment first!");
  } else {
    alert("Please enter your valuable comment first!");
  }

  nameField.value = "";
  emailField.value = "";
  commentField.value = "";

  //console.log(nameFieldValue, emailFieldValue, commentFieldValue)
};
