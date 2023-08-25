
//round numbers indicating current tab 
const stepsArr = document.querySelectorAll(".form-step");
const stepNumsArr = document.querySelectorAll(".step-num");

const plansArr=document.querySelectorAll(".radio-con");
//buttons
const nextBtn = document.getElementById("next-btn");
const backBtn =document.getElementById("back-btn");

let tabNum =  parseInt(nextBtn.getAttribute("data-num"));//round numbers indicating current tab

//first tab inputs
const Name=document.getElementById("Name")
const email=document.getElementById("Email")
const phoneNumber=document.getElementById("PhoneNumber")

//second tab
var plans=document.getElementsByName("selectPlan")
let planTypebtn=document.getElementById("plantype");
let planPriceArr=document.querySelectorAll(".planPrice")
let planYearlyDisc=document.querySelectorAll(".Yearlydisc")
var selectedPlan=document.querySelector('input[name="selectPlan"]:checked');

//thirdtab
var Addons=document.querySelectorAll('input[name="selectAddon"]');
var AddonPrices=document.getElementsByName('addonPrice');
var selectedAddon=document.querySelectorAll('input[name="selectAddon"]:checked');
//fourt tab
const changePlanBtn=document.getElementById("changePlan")
const serviceCon=document.getElementById("serv-con")
var selectedPlanText=document.getElementById("selected-plan-name")
var selectedPlanPrice=document.querySelector(".price")
var totplan=document.getElementById("tot-plan")
var totalPriceText=document.getElementById("total");
var totalPrice=0;

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

function planSelected(curr){
    selectedPlan=document.querySelector('input[name="selectPlan"]:checked')
    if(selectedPlan == null){
        if(curr==2){
            alert("Select an plan to continue")
        }
        
        return false
    }else{
        return true
    }
}
function addonSelected(curr){
    selectedAddon=document.querySelectorAll('input[name="selectAddon"]:checked')
    if(selectedAddon.length ===0){
        if(curr==3){
            alert("Select an add-on to continue")
        }
        return false
    }else{
        return true
    }
}

function tabChange(tabNum){
    switch (tabNum) {
        case 1:
            //actual tab
            stepsArr[0].classList.add("active");
            stepsArr[1].classList.remove("active");
            stepsArr[2].classList.remove("active");
            stepsArr[3].classList.remove("active");
            stepsArr[4].classList.remove("active")
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
            stepsArr[4].classList.remove("active")
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
            stepsArr[4].classList.remove("active")
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
            stepsArr[4].classList.remove("active")
            //tab numbers css
            stepNumsArr[0].classList.remove("current");
            stepNumsArr[1].classList.remove("current");
            stepNumsArr[2].classList.remove("current");
            stepNumsArr[3].classList.add("current");
            
               break;
        case 5:
            stepsArr[0].classList.remove("active");
            stepsArr[1].classList.remove("active");
            stepsArr[2].classList.remove("active");
            stepsArr[3].classList.remove("active");
            stepsArr[4].classList.add("active")

    }
}
function ChangePlanValues(plan){
    if(plan==1){
        //Arcade Plan
        planPriceArr[0].innerText="$90/yr"
        plans[0].dataset.price=90
        plans[0].value="Arcade(Yearly)"
        
       
        //Advanced Plan
        planPriceArr[1].innerText="$120/yr"
        plans[1].dataset.price=120
        plans[1].value="Advanced(Yearly)"

        //Pro Plan
        planPriceArr[2].innerText="$150/yr"
        plans[2].dataset.price=150
        plans[2].value="Pro(Yearly)"

        //online services
        AddonPrices[0].innerText="+10/yr"
        Addons[0].value=10

        //LargerStrage
        AddonPrices[1].innerText="+20/yr"
        Addons[1].value=20

        //customizable Profile
        AddonPrices[2].innerText="+20/yr"
        Addons[2].value=20
    }else if(plan==0){
         //Arcade Plan
         planPriceArr[0].innerText="$9/mo"
         plans[0].dataset.price=9
         plans[0].value="Arcade(Monthly)"
 
          //Advanced Plan
         planPriceArr[1].innerText="$12/mo"
         plans[1].dataset.price=12
         plans[1].value="Advanced(Monthly)"
 
          //Pro Plan
         planPriceArr[2].innerText="$15/mo"
         plans[2].dataset.price=15
         plans[2].value="Pro(Monthly)"
 
         //online services
         AddonPrices[0].innerText="+1/mo"
         Addons[0].value=1
 
         //LargerStrage
         AddonPrices[1].innerText="+2/mo"
         Addons[1].value=2
 
         //customizable Profile
         AddonPrices[2].innerText="+2/mo"
         Addons[2].dataset.value=2
    }
}

//planTypebtn.value=false;

planTypebtn.addEventListener('click',()=>{
    //toggle plan
    if(planTypebtn.value==0){
        planTypebtn.value=1
    }else{
        planTypebtn.value=0
    }

    console.log(plans)
    planYearlyDisc.forEach( msg=>{
        msg.classList.toggle("selected")      
    })
    ChangePlanValues(planTypebtn.value)
    
})

 function createserviceDiv(name,price,plan){
        let plantypeText="";
        if (plan==1){
            plantypeText="/yr";
        }else{
            plantypeText="/mo";
        }
        let servCon=document.createElement("div")
        servCon.classList.add("serv")

        let servName=document.createElement("p")
        servName.setAttribute("id","serv-name")
        servName.innerText=name

        let servPrice=document.createElement("p")
        servPrice.setAttribute("id","serv-price")
        servPrice.innerText="+$"+price+plantypeText

        servCon.appendChild(servName)
        servCon.appendChild(servPrice)
        return servCon

 }
nextBtn.addEventListener('click',()=>{
    if(stepOneValidate()===false && tabNum===1){
        tabNum++;
        tabChange(tabNum)   
    }  
    else if(planSelected(tabNum)===true && tabNum===2){
        tabNum++;
        tabChange(tabNum)   
    }
    else if(addonSelected(tabNum)===true && tabNum===3){
        tabNum++;
        tabChange(tabNum)
       
    }
    if(tabNum===4){
        selectedPlanText.innerText=selectedPlan.value
        selectedPlanPrice.innerText="$"+selectedPlan.dataset.price+(planTypebtn.value==0 ? "/mo" : "/yr")
        totplan.innerHTML=(planTypebtn.value==0 ? "month" : "year")
        totalPrice+= parseInt(selectedPlan.dataset.price) 
        selectedAddon.forEach(element => {
            totalPrice+= parseInt(element.value)
            let servCon=createserviceDiv(element.dataset.name,element.value,planTypebtn.value)
            serviceCon.appendChild(servCon)
        });
        totalPriceText.innerText="$"+totalPrice+(planTypebtn.value==0 ? "/mo" : "/yr")
    }
    if(tabNum != 1 &&tabNum !=5){
        backBtn.style.display = 'block';
    }
})

backBtn.addEventListener('click',()=>{
    tabNum--;
    while (serviceCon.firstChild) {
            serviceCon.removeChild(serviceCon.firstChild);
     }
    tabChange(tabNum)
    if(tabNum == 1){
        backBtn.style.display = 'none';
    }
})

changePlanBtn.addEventListener('click',e=>{
    e.preventDefault()
    tabNum=2
    while (serviceCon.firstChild) {
        serviceCon.removeChild(serviceCon.firstChild);
    }
    tabChange(tabNum)
})
