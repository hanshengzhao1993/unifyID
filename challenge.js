/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */

const sites = {
  facebook : {
    username: '#email',
    password: '#pass',
    submitButton: '#loginbutton' 
  },
  yahoo : {
    username: '#login-username',
    password: '#login-passwd',
    submitButton: '#login-signin' 
  },
  bankofamerica : {
    username: '#onlineId1',
    password: '#passcode1',
    submitButton: '#hp-sign-in-btn' 
  },
  citi : {
    username: '#usernameMasked',
    password: '#password',
    submitButton: '#signInBtn' 
  },
  instagram : {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    submitButton: 'button' 
  }
}

var currentSite = function (url) {
  if(url.includes('facebook.com')) {
    return 'facebook';
  } else if (url.includes('yahoo.com')) {
    return 'yahoo';
  } else if (url.includes('bankofamerica.com')) {
    return 'bankofamerica';
  } else if (url.includes('citi.com')) {
    return 'citi';
  } else if (url.includes('instagram.com')) {
    return 'instagram';
  } 

}

function getUsernameField() {
  return $(sites[currentSite(window.location.href)].username);
  // return $("#email");
}

function getPasswordField() {
 return $(sites[currentSite(window.location.href)].password);
  // return $("#pass");
}

function getFormField() {
  return getUsernameField().closest('form');
}

function getSubmitButton() {
  return $(sites[currentSite(window.location.href)].submitButton);
  // return $("#loginbutton");
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);


  setTimeout(() => {
  	getSubmitButton().click();
    //slow the time down to be able to get the passwords
  }, 5000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
