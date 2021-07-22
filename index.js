const date = document.querySelector('.date')
const year=new Date().getFullYear()-5
            let month=new Date().getMonth()
            let date1=new Date().getDate()
            if(date1<10){
                date1='0'+date1
              } 
              if(month<10){
                month='0'+month
              } 
            // console.log(typeof `${year}-${month}-${date1}`)
            date.setAttribute('max',year+'-'+month+'-'+date1)

const inputh=['fname','lname','email','age','date','phone']
inputh.forEach((ele)=>{
  document.querySelector('.'+ele).addEventListener('click',()=>{
    document.querySelector('.'+ele+'h').style.display="block"
  })
})


document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
// document.querySelector('.wave').style.height=""
// document.querySelector('.content').style.marginTop="-5rem"
document.querySelectorAll('.input_wrapper').forEach((ele)=>{
    ele.style.margin="0.5rem 0 0.5rem 0"
})

    const fname = document.querySelector('.fname')
    const lname = document.querySelector('.lname')
    const phone = document.querySelector('.phone')
    const age = document.querySelector('.age')
    const email = document.querySelector('.email')
    const date = document.querySelector('.date')
    const alert = document.querySelector('.alert')

    // document.querySelector('.alert').style.display='none'


    const arr = [fname, lname, phone, age]
    const alert_arr = ['fname_alert', 'lname_alert', 'phone_alert', 'age_alert','email_alert','date_alert']
    const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

    let k=0;
    arr.forEach((ele) => {
        if (special.test(ele.value)) {
            alert.innerHTML = "* Fields can't contain special characters or numbers"
            ele.style.borderColor = "red"
            k++
        }
        // } else {
        //     alert.innerHTML = "* Required Fields"
        //     ele.style.borderColor = "gray"
        // }
    })
arr.push(email)
    arr.forEach((ele, i) => {

        function func(){
        if (ele.value)
            ele.value = ele.value.trim()

        if (i === 0 || i === 1) {
             if(special.test(arr[i].value) || /\d/.test(arr[i].value)) {
                document.getElementById(`${alert_arr[i]}`).innerHTML = "* Only alphabets"
                ele.style.borderColor = "red"
                ele.style.margin="0.5rem 0 0rem 0"
                k++
            }
            else if (arr[i].value.length <= 5 || arr[i].value.length >= 20) {
                document.getElementById(`${alert_arr[i]}`).innerHTML = "* Length range 5 to 20"
                ele.style.borderColor = "red"
                ele.style.margin="0.5rem 0 0rem 0"
                k++
            }
            else {
                document.getElementById(`${alert_arr[i]}`).innerHTML = ""
                ele.style.borderColor = " rgba(52, 211, 153,1) "
                ele.style.margin="1rem 0 1rem 0"
            }
        } else if (i === 2) {
            if (ele.value.length !== 10) {
                document.getElementById(`${alert_arr[i]}`).innerHTML = "* Number must be 10 digits long"
                ele.style.borderColor = "red"
                ele.style.margin="0.5rem 0 0rem 0"
                k++
            } else {
                document.getElementById(`${alert_arr[i]}`).innerHTML = ""
                ele.style.borderColor = " rgba(52, 211, 153,1) "
                ele.style.margin="1rem 0 1rem 0"
            }
        } else if (i === 3) {
            if (+arr[i].value < 18) {
                document.getElementById(`${alert_arr[i]}`).innerHTML = "* Age should be 18+"
                ele.style.borderColor = "red"
                ele.style.margin="0.5rem 0 0rem 0"
                k++
            } else if (+arr[i].value> 100) {
                document.getElementById(`${alert_arr[i]}`).innerHTML = "* Age should not exceed 100"
                ele.style.borderColor = "red"
                ele.style.margin="0.5rem 0 0rem 0"
                k++
            }
            else {
                document.getElementById(`${alert_arr[i]}`).innerHTML = ""
                ele.style.borderColor = " rgba(52, 211, 153,1) "
                ele.style.margin="1rem 0 1rem 0"
               
            }
        }else if(i===4){
            if (arr[i].value==='') {
                document.getElementById(`${alert_arr[i]}`).innerHTML="*Field Cannot be empty"
                email.style.borderColor="red"
                ele.style.margin="0.5rem 0 0rem 0"
                k++
            }else{
                    document.getElementById(`${alert_arr[i]}`).innerHTML = ""
                    ele.style.borderColor = " rgba(52, 211, 153,1) "
                    ele.style.margin="1rem 0 1rem 0"
            }
        }
    }
        func()
})

    // date.style.borderColor="rgba(52, 211, 153,1)"
    if(date.value===''){
        document.getElementById(`${alert_arr[5]}`).innerHTML="*Enter the DOB"
        date.style.borderColor="red"
        date.style.margin="0.5rem 0 0rem 0"
        k++
      }else {
          document.getElementById(`${alert_arr[5]}`).innerHTML=""
        date.style.borderColor="rgba(52, 211, 153,1)"
        date.style.margin="1rem 0 1rem 0"
      }

    // if(email.value===''){
    //   document.getElementById(`${alert_arr[4]}`).innerHTML="*Field Cannot be empty"
    //   email.style.borderColor="red"
    // }else {
    //     document.getElementById(`${alert_arr[4]}`).innerHTML=""
    //   email.style.borderColor="rgba(52, 211, 153,1)"
    //   ele.style.margin="1rem 0 1rem 0"
    // }
console.log(k)
    if(k===0){
        document.querySelector('.wave').style.backgroundImage='url(./wave1.svg)'
        document.querySelector('.sign').style.color="#00d084ff"
        document.querySelector('.form_wrapper').style.boxShadow="rgba(0, 208, 132,0.4) 1px 1px, rgba(0, 208, 132,0.3) 3px 3px, rgba(0, 208, 132,0.2) 6px 6px,rgba(0, 208, 132,0.2) -3px 1px, rgba(20, 208, 132,0.2) 10px 10px, rgba(0, 208, 132,0.05) 12px 12px"
    }else{
        document.querySelector('.wave').style.backgroundImage='url(./wave2.svg)'
        document.querySelector('.sign').style.color="#eb144cff"
        document.querySelector('.form_wrapper').style.boxShadow="rgba(235, 20, 76,0.4) 1px 1px, rgba(235, 20, 76,0.3) 3px 3px, rgba(235, 20, 76,0.2) 6px 6px,rgba(235, 20, 76,0.2) -3px 1px, rgba(235, 20, 76,0.2) 10px 10px, rgba(235, 20, 76,0.05) 12px 12px"
    }
    
})


// 
// rgba(235, 20, 76,0.4) 1px 1px, rgba(235, 20, 76,0.3) 3px 3px, rgba(235, 20, 76,0.2) 6px 6px,rgba(235, 20, 76,0.2) -3px 1px, rgba(235, 20, 76,0.2) 10px 10px, rgba(235, 20, 76,0.05) 12px 12px;