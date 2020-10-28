var error_message = document.getElementById('massage');

function onclick_register() 
{
    error_message.innerHTML ='';
    
    var uname = document.getElementById('name');
    var check_pw = document.getElementById('password');
    var email = document.getElementById('email');
    var nation = document.getElementById('nation');
    var dob = document.getElementById('dot');
    var male = document.getElementById('laki');
    var female = document.getElementById('cewek');
    var check = document.getElementById('aggrebox');
    
    if(checklist(check)){
        return false;
    }else if(check_gender(male,female)){
        return false;
    }else if(check_dob(dob)){
        return false;
    }else if(nationselect(nation)){
        return false;  
    }else if (ValidateEmail(email)){
        return false;
    }else if(check_password(check_pw,6,12)){
        return false;
    }else if(check_name(uname,2)){
        return false;
    }
}

function check_name(uname,min)
{    
    var string = document.getElementById('name').value;
    var name_len = uname.value.length;
    if(name_len == 0 || name_len < min) {
        error_message.innerHTML = 'Name Cannot be Empty!';
        uname.focus();
        return false;
    }
    
    if(!alphabeth_only(string)){
        error_message.innerHTML = 'Name Must Be Character Only';
		return false;
    }
    return true;
}

function check_password(check_pw,min,max)
{
    var pw_len = check_pw.value.length;
    if(pw_len == 0 | pw_len == ''){
        error_message.innerHTML = 'Password Cannot be Empty!';
        check_pw.focus();
        return false;
    }else if (pw_len < min || pw_len > max){
        error_message.innerHTML = 'Password Must Beetween '+min+' to '+max;
        check_pw.focus();
        return false;
    }

    return true;
}

function ValidateEmail(email)
{
    var mail = document.getElementById('email').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(mail == ''){
        error_message.innerHTML = 'Email Cannot be Empty';
        return false;
    }

    if(email.value.match(mailformat))
    {
        return true;
    }else{
        error_message.innerHTML = "You have entered an invalid email address!";
        email.focus();
        return false;
    }
}

function nationselect(nation)
{
    if(nation.value == "Default")
    {
        error_message.innerHTML = 'Select your Nation from the list';
        nation.focus();
        return false;
    }
    else
    {
        return true;
    }
}

function check_dob(dob){
    var dob = document.getElementById('dob').value;

    if(dob == ''){
        error_message.innerHTML = 'Plases Select Your Date of Birth!';
        return false;
    }   
    return true;
}

function check_gender(umale,ufemale)
{
    x=0;

    if(umale.checked)  {
        x = 1;
    } 
    
    if(ufemale.checked){
        x = 1;
    }

    if(x == 0) {
        error_message.innerHTML = 'Select Male/Female';
        return false;
    } 
}

function checklist(agree)
{
    var agree = document.getElementById('agreebox').checked;
    if(agree == false){
        error_message.innerHTML = 'Please Checklist Term and Conditions';
        return false;
    }else{
        alert('Register Succesfully');
        window.location.reload()
        return true;
    }
}

function alphabeth_only(string)
{
	for(var i = 0 ; i < string.length ; i++)
        if((string.charAt(i) <'a' || string.charAt(i) >'z') && 
           (string.charAt(i) <'A' || string.charAt(i) >'Z') && 
           (string.charAt(i) != ' '))
            return false;
	
	return true;
}

function RegisterSuccess()
{
    alert('Register Succes');
}


