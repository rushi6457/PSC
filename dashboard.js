function append(){

    let data = JSON.parse(localStorage.getItem("student")) || [];

    let container = document.getElementById("container");

    data.forEach(function(el,index){

        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let p = document.createElement("p");
        p.innerText = el.name;
        let btn = document.createElement("btn");
        btn.innerText = "Remove";
        btn.addEventListener("click",function() {

            remove(index);

        });

        div.append(img,p,btn);
        container.append(div);

    });
}

append();

function remove(index) {

    let data = JSON.parse(localStorage.getItem('student')) || [];

    let newData = data.filter(function(el,i){

        return i !==index;
    })

    console.log(newData)
}