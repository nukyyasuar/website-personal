window.onload=()=>{
    let form=document.getElementById("myform")
    let fullname=document.getElementById("fullname")
    let email=document.getElementById("email")
    let telp=document.getElementById("phone")
    let pref=document.getElementsByName("pref")
    let agreement=document.getElementById("agreementCB")
    let errormessages=document.getElementById("errormessage")

    let error=[]
    form.addEventListener("submit",(e)=>{
        error=[]
        errormessages.innerText=''
        validateFullname()
        validateEmail()
        // validateAgreement()
        validatepref()
        validatePhone()
        if(error.length>0){
            for(err of error){
                errormessages.innerText+='*'+err +'\n'
            }
            e.preventDefault()
        }else{
            window.location.href='success.html'
        }

    })

    function isEmpty(value){
        if(value===''){
            return true
        }
        return false
    }

    function validateFullname(){
        let value=fullname.value.trim()
        if(value.length<=5){
            error.push("Name must be > 5 char")
        }

        let count=0
        let a=0
        while(a<value.length){
            if(value[a]==' '){
                count++
            }
            a++
        }
        if(count != 1){
            error.push("Please input first name and last name")
        }
    }

    function validateEmail(){
        let value=email.value.trim()

        if(isEmpty(value)){
            error.push("Email must be filled")
            return
        }

        let a=0
        let count=0
        while(a<value.length){
            if(value[a]=='@'){
                count++
            }
            a++
        }

        if(count != 1){
            error.push("Wrong email format")
        }

    }

    function validatepref(){
        for(a of pref){
            if(a.checked){
                return
            }
        }
        error.push("Please choose a preference")
    }

    // function validateAgreement(){
    //     if(agreement.checked){
    //         return
    //     }
    //     error.push("You must checked the requirement")
    // }


    function validatePhone(){
        let value=phone.value.trim()
        if(value.length<12){
            error.push("Please input a 12 digit phone number")
        }
    }
}