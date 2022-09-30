const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const Header = document.querySelector(".top-site");

//quem é o target??
//quem.addEventListener("evento", (evento)=> {} );

tooltip.addEventListener("mouseover", (e) => {
    // console.log(e);
    // console.log('altura da pagina', body.clientHeight);
    // console.log('largura da pagina', body.clientWidth);
    // console.log('altura do tooltip', tooltip.clientHeight);
    // console.log('largura do tooltip', tooltip.clientWidth);
    // console.log('altura do mouse', e.clientY);
    // console.log('largura do mouse', e.clientX);

    if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
    const newDiv = document.createElement("div");

    newDiv.classList.add("tooltip");
        newDiv.innerHTML = "Meu tooltip que aparece quando passa o cursor sobre o Icone";
        newDiv.style.position = "absolute";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.left = (e.clientX + 200 > body.clientWidth ? e.clientX - 210 : e.clientX +200) + "px";
        newDiv.style.display = 'block';
        Header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout", (e)=>{
    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
    
});