let contactObj={
    nameValue:"",
    companyValue:"",
    emailValue:"",
    phoneValue:"",
    resumeFile:"",
    helpValue:"service",
    roleValue:"",
    expValue:"",
    servicesValue:[],
    projectDesc:""
}

console.log('contactObj',contactObj)

const myURL=location.href
const muURLString=JSON.stringify(myURL)
console.log('muURLString',muURLString);

let myURLHelpExists=muURLString.includes("career")
console.log("myURLHelpExists",myURLHelpExists)

let  emailResult=false
let phoneResult=false

let helpValue="service"

const nameChanged=(event)=> {
    console.log(event.target.value)
    contactObj.nameValue=event.target.value
    console.log("contactObj",contactObj)
}

const nameValueEle=document.getElementById("name")
console.log(nameValueEle)
nameValueEle.addEventListener("keyup",nameChanged)

const companyChanged=(event)=> {
    console.log(event.target.value)
    contactObj.companyValue=event.target.value
    console.log("contactObj",contactObj)
}

const companyValueEle=document.getElementById("companyName")
console.log(companyValueEle)
companyValueEle.addEventListener("keyup",companyChanged)

const emailChanged=(event)=> {
    console.log(event.target.value)
    contactObj.emailValue=event.target.value
    console.log("contactObj",contactObj)

    let emailText = contactObj.emailValue;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailResult = emailText.match(emailPattern);
}

const emailValueEle=document.getElementById("email")
console.log(emailValueEle)
emailValueEle.addEventListener("keyup",emailChanged)

const phoneChanged=(event)=> {
    console.log(event.target.value)
    contactObj.phoneValue=event.target.value
    console.log("contactObj",contactObj)
        
    let phoneText = contactObj.phoneValue;
    let phonePattern = /^[6789]{1}[0-9]{9}/;
    phoneResult = phoneText.match(phonePattern);
}

const phoneValueEle=document.getElementById("contactPhoneNumber")
console.log(phoneValueEle)
phoneValueEle.addEventListener("keyup",phoneChanged)

const roleChanged=(event)=> {
    console.log(event.target.value)
    contactObj.roleValue=event.target.value
    console.log("contactObj",contactObj)
}

const roleValueEle=document.getElementById("role")
console.log(roleValueEle)
roleValueEle.addEventListener("keyup",roleChanged)

const expChanged=(event)=> {
    console.log(event.target.value)
    contactObj.expValue=event.target.value
    console.log("contactObj",contactObj)
}

const expValueEle=document.getElementById("experience")
console.log(expValueEle)
expValueEle.addEventListener("keyup",expChanged)

const helpChanged=(event)=> {
    console.log(event.target.value)
    contactObj.helpValue=event.target.value
    console.log("contactObj",contactObj)

    if (contactObj.helpValue=="service") {
        contactObj.roleValue=""
        contactObj.expValue=""
        contactObj.projectDesc=""
        contactObj.resumeFile=""
        projectTextValueEle.value=""
        roleValueEle.value=""
        expValueEle.value=""
        resumeValueEle.style.display="none"
        resumeValueEle.value=""
        projectTextValueEle.style.display="block"
        roleValueEle.style.display="none"
        expValueEle.style.display="none"
        serviceChoiceValueEle.style.display="block"
    }
    else if (contactObj.helpValue=="partnership") {
        contactObj.roleValue=""
        contactObj.expValue=""
        contactObj.projectDesc=""
        contactObj.resumeFile=""
        projectTextValueEle.value=""
        roleValueEle.value=""
        expValueEle.value=""
        contactObj.servicesValue=[]
        roleValueEle.style.display="none"
        expValueEle.style.display="none"
        resumeValueEle.style.display="none"
        resumeValueEle.value=""
        projectTextValueEle.style.display="block"
        serviceEmbeddedValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceElectronicsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceIotValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceRoboticsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceAutomationValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceOthersValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
    }
    else if (contactObj.helpValue=="career") {
        contactObj.servicesValue=[]
        contactObj.projectDesc=""
        projectTextValueEle.value=""
        roleValueEle.style.display="block"
        expValueEle.style.display="block"
        resumeValueEle.style.display="block"
        serviceChoiceValueEle.style.display="none"
        projectTextValueEle.style.display="none"
        serviceEmbeddedValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceElectronicsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceIotValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceRoboticsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceAutomationValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceOthersValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
    }
}

const helpServiceValueEle=document.getElementById("helpServices")
console.log(helpServiceValueEle)
helpServiceValueEle.addEventListener("change",helpChanged)

const helpPartnerValueEle=document.getElementById("helpPartner")
console.log(helpPartnerValueEle)
helpPartnerValueEle.addEventListener("change",helpChanged)

const helpCareerValueEle=document.getElementById("helpCareer")
console.log(helpCareerValueEle)
helpCareerValueEle.addEventListener("change",helpChanged)

const serviceChoiceValueEle=document.getElementById("serviceChoice")
console.log(serviceChoiceValueEle)

const serviceEmbeddedClicked=()=> {
    console.log(serviceEmbeddedValueEle.textContent)
    
    if (contactObj.servicesValue.includes("Embedded Engineering")) {
        console.log("Already Exists")
        let myIndex=contactObj.servicesValue.indexOf("Embedded Engineering")
        console.log(myIndex)
        console.log("contactObj",contactObj)
        contactObj.servicesValue.splice(myIndex,1)
        console.log("contactObj",contactObj)
        serviceEmbeddedValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
    }else {
        contactObj.servicesValue.push("Embedded Engineering")
        console.log("contactObj",contactObj)
        serviceEmbeddedValueEle.style="color: rgb(5, 31, 73); background-color: rgb(255, 255, 255);"
    }
}

const serviceEmbeddedValueEle=document.getElementById("embedded")
console.log(serviceEmbeddedValueEle)

const serviceEleClicked=()=> {
    console.log(serviceElectronicsValueEle.textContent)

    if (contactObj.servicesValue.includes("Electronics")) {
        console.log("Already Exists")
        let myIndex=contactObj.servicesValue.indexOf("Electronics")
        console.log(myIndex)
        console.log("contactObj",contactObj)
        contactObj.servicesValue.splice(myIndex,1)
        console.log("contactObj",contactObj)
        serviceElectronicsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
    }else {
        contactObj.servicesValue.push("Electronics")
        console.log("contactObj",contactObj)
        serviceElectronicsValueEle.style="color: rgb(5, 31, 73); background-color: rgb(255, 255, 255);"
    }
}

const serviceElectronicsValueEle=document.getElementById("electronics")
console.log(serviceEmbeddedValueEle)

const serviceIotClicked=()=> {
    console.log(serviceIotValueEle.textContent)

    if (contactObj.servicesValue.includes("IoT")) {
        console.log("Already Exists")
        let myIndex=contactObj.servicesValue.indexOf("IoT")
        console.log(myIndex)
        console.log("contactObj",contactObj)
        contactObj.servicesValue.splice(myIndex,1)
        console.log("contactObj",contactObj)
        serviceIotValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
    }else {
        contactObj.servicesValue.push("IoT")
        console.log("contactObj",contactObj)
        serviceIotValueEle.style="color: rgb(5, 31, 73); background-color: rgb(255, 255, 255);"
    }
}

const serviceIotValueEle=document.getElementById("iot")
console.log(serviceEmbeddedValueEle)

const serviceRobotClicked=()=> {
    console.log(serviceRoboticsValueEle.textContent)

    if (contactObj.servicesValue.includes("Robotics")) {
        console.log("Already Exists")
        let myIndex=contactObj.servicesValue.indexOf("Robotics")
        console.log(myIndex)
        console.log("contactObj",contactObj)
        contactObj.servicesValue.splice(myIndex,1)
        console.log("contactObj",contactObj)
        serviceRoboticsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
    }else {
        contactObj.servicesValue.push("Robotics")
        console.log("contactObj",contactObj)
        serviceRoboticsValueEle.style="color: rgb(5, 31, 73); background-color: rgb(255, 255, 255);"
    }
}

const serviceRoboticsValueEle=document.getElementById("robotics")
console.log(serviceEmbeddedValueEle)

const serviceAutoClicked=()=> {
    console.log(serviceAutomationValueEle.textContent)

    if (contactObj.servicesValue.includes("Automation")) {
        console.log("Already Exists")
        let myIndex=contactObj.servicesValue.indexOf("Automation")
        console.log(myIndex)
        console.log("contactObj",contactObj)
        contactObj.servicesValue.splice(myIndex,1)
        console.log("contactObj",contactObj)
        serviceAutomationValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
    }else {
        contactObj.servicesValue.push("Automation")
        console.log("contactObj",contactObj)
        serviceAutomationValueEle.style="color: rgb(5, 31, 73); background-color: rgb(255, 255, 255);"
    }
}

const serviceAutomationValueEle=document.getElementById("automation")
console.log(serviceEmbeddedValueEle)

const serviceOthersClicked=()=> {
    console.log(serviceOthersValueEle.textContent)

    if (contactObj.servicesValue.includes("Others")) {
        console.log("Already Exists")
        let myIndex=contactObj.servicesValue.indexOf("Others")
        console.log(myIndex)
        console.log("contactObj",contactObj)
        contactObj.servicesValue.splice(myIndex,1)
        console.log("contactObj",contactObj)
        serviceOthersValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
    }else {
        contactObj.servicesValue.push("Others")
        console.log("contactObj",contactObj)
        serviceOthersValueEle.style="color: rgb(5, 31, 73); background-color: rgb(255, 255, 255);"
    }
}

const serviceOthersValueEle=document.getElementById("others")
console.log(serviceEmbeddedValueEle)

const projectTextChanged=(event)=> {
    console.log("projectDesc",event.target.value)
    contactObj.projectDesc=event.target.value
    console.log("contactObj",contactObj)
}

const projectTextValueEle=document.getElementById("projectText")
console.log("projectTextValueEle",projectTextValueEle)
projectTextValueEle.addEventListener("keyup",projectTextChanged)

const resumeChanged=(event)=> {
    console.log("Resume",event)
    contactObj.resumeFile=event.target.value
    console.log("contactObj",contactObj)
}

const resumeValueEle=document.getElementById("resumeId")
console.log("resumeValueEle",resumeValueEle)
resumeValueEle.addEventListener("change",resumeChanged)

if (myURLHelpExists) {
    helpCareerValueEle.checked=true
    contactObj.helpValue="career"
        contactObj.servicesValue=[]
        contactObj.projectDesc=""
        projectTextValueEle.value=""
        roleValueEle.style.display="block"
        expValueEle.style.display="block"
        resumeValueEle.style.display="block"
        serviceChoiceValueEle.style.display="none"
        projectTextValueEle.style.display="none"
        serviceEmbeddedValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceElectronicsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceIotValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceRoboticsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceAutomationValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        serviceOthersValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
        console.log("contactObj",contactObj)
}

const submitClicked=()=> {
    console.log("Submit Clicked")
    const {nameValue,companyValue,emailValue,phoneValue,resumeFile,helpValue,roleValue,expValue,servicesValue,projectDesc}=contactObj

    let options={
        method:"POST",
        body:JSON.stringify(contactObj),
        headers:{
            "Content-Type":"application/json"
        }
    } 

    let sheetOptions={
        method:"GET"
    }

    if (nameValue !="") {
        if (companyValue !="") {
            if (emailResult) {
                if (phoneResult) {
                    console.log("Submitted")
                    fetch("https://www.smatbot.com:6380/sendEmail",options)
                    .then(function(response) {
                        console.log(typeof response)
                        if (response.status==200) {
                            nameValueEle.value=""
                            companyValueEle.value=""
                            emailValueEle.value=""
                            phoneValueEle.value=""
                            roleValueEle.value=""
                            expValueEle.value=""
                            resumeValueEle.value=""
                            helpServiceValueEle.checked=true
                            projectTextValueEle.value=""
                            serviceEmbeddedValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
                            serviceElectronicsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
                            serviceIotValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
                            serviceRoboticsValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
                            serviceAutomationValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"
                            serviceOthersValueEle.style="color: rgb(255, 255, 255); background-color: rgb(5, 31, 73);"

                            contactObj={
                                nameValue:"",
                                companyValue:"",
                                emailValue:"",
                                phoneValue:"",
                                resumeFile:"",
                                helpValue:"service",
                                roleValue:"",
                                expValue:"",
                                servicesValue:[],
                                projectDesc:""
                            }
                        }
                    })

                    fetch(`https://script.google.com/macros/s/AKfycbyVAg0NWoeIW8Kx-TY1q_rQ--gq5FFrF_T3s2LoHwnVg1EBxWTyHzkzJu2KW_Uzzs3XAw/exec?name=${nameValue}&companyName=${companyValue}&email=${emailValue}&phone=${phoneValue}&help=${helpValue}&services=${servicesValue}&project=${projectDesc}&role=${roleValue}&experience=${expValue}`,sheetOptions)
                    .then(function(response) {
                        console.log("Pushed to Sheet")
                    })
                }else {
                    toastr.error("Please enter a valid PhoneNumber")
                }
            }else {
                toastr.error("Please enter a valid Email")
            }
        }else {
            console.log("Company Name cannot be Empty")
        }
    }else {
        console.log("Name cannot be Empty")
    }
}