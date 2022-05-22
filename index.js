// document.querySelector("#form").addEventListener("submit", myFunction)

// let arr = JSON.parse(localStorage.getItem("index")) || [];

// function myFunction(){

//     event.preventDefault();

//     let obj = {
       
//         sName: form.name.value,
//         sCourse: form.course.value,
//         sUnit: form.unit.value,
//         sImg: form.image.value,
//         sBatch: form.batch.value,
//     }

//     arr.push(obj)
   
//     localStorage.setItem("index",JSON.stringify(arr));

//     document.getItem(JSON.parse(localStorage,check()));


    //🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪

    // document.getItem(JSON.parse(localStorage,formValid()))

    // function formValid() {

      
    //     for(let i=0;i<arr.length;i++){

    //         if(arr[i]== "" ){

    //             alert("Please fill all details")
    //         }
    //         else{

    //             alert("Congratulations! You have successfully fill all details")
    //         }
    //     }
    // }


    //🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪 🔪

//     function check() {

//         if(unit.value > 6){

//             alert("Please enter valid unit number")
//         }
//         else if(unit.value<1){

//             alert("Value should be greater than 1")
//         }
//         else{

//             // alert("")
//         }

//     }
// }

function Student(n,c,u,i,b){

    this.name = n;
    this.course=c;
    this.unit = u;
    this.image = i;
    this.batch= `FT-WEB ${b}`;
}

function storeData(e){

    e.preventDefault()

    let form = document.getElementById('form');
    let name = form.name.value;
    let course= form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

   let s1 = new Student(name,course,unit,image,batch)

   let data = JSON.parse(localStorage.getItem('student')) || [];

   data.push(s1)

   localStorage.setItem('student',JSON.stringify(data))

   window.location.href ="dashboard.html"
//    console.log(data)
}

function calculate(){

    let data = JSON.parse(localStorage.getItem('student')) || [];

    let batchName = document.getElementById("#batchName")
    let students  = document.getElementById("#studentsEnroll");
    let obj = {};

    for(let i=0;i<data.length;i++){

       if(!obj[data[i].batch]){

        obj[data[i].batch]=0;
       }
    }
    //console.log(obj)
    for(let i=0;i<data.length;i++){

        obj[data[i].batch]++;
       
    }
    console.log(obj)
   
}

calculate()