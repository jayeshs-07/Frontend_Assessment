function PasswordStrength() {
	var number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
	var password = $('#password').val().trim();
	if (password.length < 6) {
		$('#password-status').removeClass();
		$('#password-status').addClass('weak-password');
        $('#password-status').css("background-color","red").css("color","white");
		$('#password-status').html("Weak");
	} else {
		if (password.match(number) && password.match(alphabets) && password.match(special_characters)) {
			$('#password-status').removeClass();
            $('#password-status').css("background-color","#008000").css("color","white");
			$('#password-status').addClass('strong-password');
			$('#password-status').html("Strong");
		}
		else {
			$('#password-status').removeClass();
            $('#password-status').css("background-color","#ffb900").css("color","black");
			$('#password-status').addClass('medium-password');
			$('#password-status').html("Medium");
		}
	}
}