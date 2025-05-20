let inputEnter = document.getElementById("inputEnter");
let saveEnter = document.getElementById("saveEnter");
let divUsers = document.getElementById("divUsers");
let todo = document.getElementById("todo");
let doing = document.getElementById("doing");
let done = document.getElementById("done");

saveEnter.addEventListener("click", () => {
  if (inputEnter.value != "") {
    var divs = document.createElement("div");
    let inpu = document.createElement("input");
    let btn_save_change = document.createElement("button");
    let btn_delet = document.createElement("button");
    inpu.readOnly = true;

    divs.appendChild(inpu);
    divs.appendChild(btn_save_change);
    divs.appendChild(btn_delet);
    todo.appendChild(divs);

    
    inpu.value = inputEnter.value;
    btn_save_change.textContent = "♻️";
    btn_delet.textContent = "❌";
    
    btn_save_change.addEventListener("click", () => {
      if (inpu.readOnly) {
        inpu.readOnly = false;
        inpu.focus();
        btn_save_change.textContent = "✅";
      } else {
        inpu.readOnly = true;
        btn_save_change.textContent = "♻️";
      }
    });
    
    btn_delet.addEventListener("click", () => {
      divs.remove();
      inpu.remove();
      btn_save_change.remove();
      btn_delet.remove();
    });
    
    //^ desine
    divs.style =
    "width:95%;display: flex;gap: 10px;padding: 10px;border:0.5px solid #b6b6b6;border-radius:10px;margin-bottom:5px;background:rgb(241, 223, 184);";
    inpu.style =
    "width: 75%;font-size: 20px;padding: 10px;border-radius: 10px;border: 0.5px solid #bebebe;outline: none;background:#e2e2e2;";
    btn_save_change.style =
    "font-size: 20px;padding: 10px;border-radius: 10px;border: 0.5px solid #bebebe;background: #e2e2e2;color: #fff;";
    btn_delet.style =
    "font-size: 20px;padding: 10px;border-radius: 10px;border: 0.5px solid #bebebe;background: #e2e2e2;color: #fff;";
    divs.classList.add('divNote')
    //^ desine

    divs.draggable = true

    let elementTarget = null

    divs.addEventListener('dragstart',(e)=>{
      elementTarget = e.target
      
      doing.addEventListener('dragover',(e)=>{
        e.preventDefault()
      })
      doing.addEventListener('drop',()=>{
        doing.appendChild(elementTarget)
        elementTarget = null
      })

      done.addEventListener('dragover',(e)=>{
        e.preventDefault()
      })
      done.addEventListener('drop',()=>{
        done.appendChild(elementTarget)
        elementTarget = null
      })

      todo.addEventListener('dragover',(e)=>{
        e.preventDefault()
      })
      todo.addEventListener('drop',(e)=>{
        todo.appendChild(elementTarget)
        elementTarget = null
      })
    })

    inputEnter.value = "";
  }
});