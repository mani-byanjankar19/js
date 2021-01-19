function loginBtnClick() {
    $('#login').removeClass('hide');
    $('#homecontain').addClass('hide');
    $('#about').addClass('hide');
    $('#signup').addClass('hide');
}

function closeBtnClick() {
    $('#login').addClass('hide');
    $('#homecontain').removeClass('hide');
    $('#about').removeClass('hide');
}

function validateForm() {
    alert("Successfully logged in");
    // add hide class
    $('#login').addClass('hide');
    $('#homecontain').removeClass('hide');
    $('#about').removeClass('hide');
}