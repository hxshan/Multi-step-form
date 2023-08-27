//round numbers indicating current tab 
const stepsArr = document.querySelectorAll(".form-step");
const stepNumsArr = document.querySelectorAll(".step-num");

const plansArr=document.querySelectorAll(".radio-con");
//buttons
const nextBtn = document.getElementById("next-btn");
const confirmBtn = document.getElementById("submit-btn");
const backBtn =document.getElementById("back-btn");

let tabNum =  parseInt(nextBtn.getAttribute("data-num"));//round numbers indicating current tab
let monthLabel=document.querySelector("#month-lab")
let yearLabel=document.querySelector("#year-lab")

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

//validating the inputs taken in step 1
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
        Name.style.borderColor="red"
        status=true;
    }else if(nameregex.test(Name.value)==false){
        Errlist[0].classList.add("inputError");
        Errlist[0].innerText="*Name can contain only letters";
        Name.style.borderColor="red"
        status=true;
    }
    else{
        Errlist[0].classList.remove("inputError");
        Name.style.borderColor="black"
    }


    //Email feild validation
    if (email.value===""){
        Errlist[1].classList.add("inputError");
        Errlist[1].innerText="*Email is required";    
        email.style.borderColor="red"
        status=true;
    }else if(emailregex.test(email.value)==false){
            Errlist[1].classList.add("inputError");
            Errlist[1].innerText="*Invalid Email";
            email.style.borderColor="red"
            status=true;
    }else{
        Errlist[1].classList.remove("inputError");
        email.style.borderColor="black"
    }

    //Phone Number feild validation
    if (phoneNumber.value===""){
        Errlist[2].classList.add("inputError");
        phoneNumber.style.borderColor="red"
        status=true;
    }else if(phoneregex.test(phoneNumber.value)==false){
        Errlist[2].classList.add("inputError");
        Errlist[2].innerText="*Invalid Phone Number";
        phoneNumber.style.borderColor="red"
        status=true;
    }
    else{
        Errlist[2].classList.remove("inputError");
        phoneNumber.style.borderColor="black"
    }

    return status

}


//checks wether  a plan is selected 
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

//checks wether  a addon is selected 
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

//changes tab either to the next or previos one depending on the index passed
function tabChange(tabNum){
    stepsArr.forEach(element=>{
        element.classList.remove("active")
    })
    stepsArr[tabNum-1].classList.add("active")

    if(tabNum!=5){
        stepNumsArr.forEach(element=>{
            element.classList.remove("current")
        })
        stepNumsArr[tabNum-1].classList.add("current")
    }
}

//Changes name and price depending on wether plan is Monthly or Yearly
function ChangePlanValues(plan){
    if(plan==1){
        yearLabel.style.color="hsl(213, 96%, 18%)"
        monthLabel.style.color="hsl(231, 11%, 63%)"

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
        monthLabel.style.color="hsl(213, 96%, 18%)"
        yearLabel.style.color="hsl(231, 11%, 63%)"


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
         Addons[2].value=2
    }
}



planTypebtn.addEventListener('click',()=>{

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
        totalPrice=0;
        //changes the text values depending on plan type selected
        selectedPlanText.innerText=selectedPlan.value
        selectedPlanPrice.innerText="$"+selectedPlan.dataset.price+(planTypebtn.value==0 ? "/mo" : "/yr")
        totplan.innerHTML=(planTypebtn.value==0 ? "month)" : "year)")

        totalPrice+= parseInt(selectedPlan.dataset.price) //adds the plan price price to total
        selectedAddon=document.querySelectorAll('input[name="selectAddon"]:checked');

        //adds each selected addon to summary and add the total
        selectedAddon.forEach(element => {
            totalPrice+= parseInt(element.value)
            let servCon=createserviceDiv(element.dataset.name,element.value,planTypebtn.value)
            serviceCon.appendChild(servCon)
        });
        totalPriceText.innerText="$"+totalPrice+(planTypebtn.value==0 ? "/mo" : "/yr")
        nextBtn.classList.add("inactive")
        confirmBtn.classList.remove("inactive")
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
    if(!confirmBtn.classList.contains("inactive")){
        confirmBtn.classList.add("inactive")
        nextBtn.classList.remove("inactive")
    }
})

changePlanBtn.addEventListener('click',e=>{
    e.preventDefault()
    tabNum=2
    while (serviceCon.firstChild) {
        serviceCon.removeChild(serviceCon.firstChild);
    }
    if(!confirmBtn.classList.contains("inactive")){
        confirmBtn.classList.add("inactive")
        nextBtn.classList.remove("inactive")
    }
    tabChange(tabNum)
})
confirmBtn.addEventListener('click',()=>{
    tabNum=5;
    tabChange(tabNum)
    backBtn.style.display='none'
    confirmBtn.style.display='none'
})

