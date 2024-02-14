let button=document.getElementById("submit");
document.addEventListener("keydown",function(event){
    if(event.keyCode===13){
        button.click();
    }
})
function additems(){
    let input=document.getElementById("input").value;
    if(input===''){
        alert("Enter the task!!!");
    }
    else{
        listarray(input);
        let output1=document.querySelector(".listbody");
        output1.innerHTML='';
        display();
        document.getElementById("input").value='';
        
    }
}
let arr=JSON.parse(localStorage.getItem("arr")||[]);
function listarray(input){
    arr.push(input);
    localStorage.setItem("arr",JSON.stringify(arr));
}
function display(){
    let output=document.querySelector(".listbody");
    output.innerHTML='';
    arr=JSON.parse(localStorage.getItem("arr")||[]);
    arr.forEach((item, i) => {
        let output1=`
            <div class="list">
                <p>${item}</p>
                <button onclick="removeItem(${i});">&#x2714;</button>
                
            </div>
        `;
        output.innerHTML+=output1;
    });
}

function removeItem(index) {
    arr.splice(index, 1);
    localStorage.setItem("arr",JSON.stringify(arr));
    display();
}

display();
