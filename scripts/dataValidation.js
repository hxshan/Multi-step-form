
function textFieldEmpty(name,email,phoneNumber){
    if(name.value===""){
        return "name"
    }else if (email.value===""){
        return "email"
    }else if (phoneNumber.value===""){
        return "phone"
    }else{
        return "valid"
    }
}