
const stepsArr = document.querySelectorAll(".form-step");
const stepNumsArr = document.querySelectorAll(".step-num");
const nextBtn = document.getElementById("next-btn");
const backBtn =document.getElementById("back-btn");

let tabNum =  parseInt(nextBtn.getAttribute("data-num"));
const Name=document.getElementById("Name")
const email=document.getElementById("Email")
const phoneNumber=document.getElementById("PhoneNumber")


function stepOneValidate()
{
    let emailregex=(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let nameregex=(/^[A-Za-z]+$/) ;
    let phoneregex=(/^[0-9]{10}$/)
    let status=false;

    let Errlist=document.querySelectorAll(".hiddenerror");

    //Name feild validation
    if(Name.value===""){
        Errlist[0].classList.add("inputError");
        Errlist[0].innerText="*Name is required";
        status=true;
    }else if(nameregex.test(Name.value)==false){
        Errlist[0].classList.add("inputError");
        Errlist[0].innerText="*Name can contain only letters";
        status=true;
    }
    else{
        Errlist[0].classList.remove("inputError");
    }


    //Email feild validation
    if (email.value===""){
        Errlist[1].classList.add("inputError");
        Errlist[1].innerText="*Email is required";    
        status=true;
    }else if(emailregex.test(email.value)==false){
            Errlist[1].classList.add("inputError");
            Errlist[1].innerText="*Invalid Email";
            status=true;
    }else{
        Errlist[1].classList.remove("inputError");
    }

    //Phone Number feild validation
    if (phoneNumber.value===""){
        Errlist[2].classList.add("inputError");
        status=true;
    }else if(phoneregex.test(phoneNumber.value)==false){
        Errlist[2].classList.add("inputError");
        Errlist[2].innerText="*Invalid Phone Number";
        status=true;
    }
    else{
        Errlist[2].classList.remove("inputError");
    }

    return status

}

function tabChange(tabNum){
    switch (tabNum) {
        case 1:
            
            //actual tab
            stepsArr[0].classList.add("active");
            stepsArr[1].classList.remove("active");
            stepsArr[2].classList.remove("active");
            stepsArr[3].classList.remove("active");
            //tab numbers css
            stepNumsArr[0].classList.add("current");
            stepNumsArr[1].classList.remove("current");
            stepNumsArr[2].classList.remove("current");
            stepNumsArr[3].classList.remove("current");
            

            break;
        case 2:
            //actual tab
            stepsArr[0].classList.remove("active");
            stepsArr[1].classList.add("active");
            stepsArr[2].classList.remove("active");
            stepsArr[3].classList.remove("active");
            //tab numbers css
            stepNumsArr[0].classList.remove("current");
            stepNumsArr[1].classList.add("current");
            stepNumsArr[2].classList.remove("current");
            stepNumsArr[3].classList.remove("current");
            break;
        case 3:
            stepsArr[0].classList.remove("active");
            stepsArr[1].classList.remove("active");
            stepsArr[2].classList.add("active");
            stepsArr[3].classList.remove("active");
            //tab numbers css
            stepNumsArr[0].classList.remove("current");
            stepNumsArr[1].classList.remove("current");
            stepNumsArr[2].classList.add("current");
            stepNumsArr[3].classList.remove("current");
            break;
        case 4:
            stepsArr[0].classList.remove("active");
            stepsArr[1].classList.remove("active");
            stepsArr[2].classList.remove("active");
            stepsArr[3].classList.add("active");
            //tab numbers css
            stepNumsArr[0].classList.remove("current");
            stepNumsArr[1].classList.remove("current");
            stepNumsArr[2].classList.remove("current");
            stepNumsArr[3].classList.add("current");
               break;
    }
}


nextBtn.addEventListener('click',()=>{
    if(stepOneValidate()===false){
        tabNum++;
        tabChange(tabNum)
    }  
    if(tabNum != 1){
        backBtn.style.display = 'block';
    }
})
backBtn.addEventListener('click',()=>{
    tabNum--;
    tabChange(tabNum)
    if(tabNum == 1){
        backBtn.style.display = 'none';
    }
})
