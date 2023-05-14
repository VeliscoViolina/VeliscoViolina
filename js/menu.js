const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const page0 = document.getElementById("page0")
const page1 = document.getElementById("page1")
let index = 0


const updatePage = () => {
    page0.src = `img/meniu-${index}.jpg`;
    page1.src = `img/meniu-${index + 1}.jpg`;
};

btn0.onclick = (() => {
    index -= 2;
    if ( index < 0) index = 8; 
    updatePage();
});

btn1.onclick = (() => {
    index += 2;
    if ( index > 9) index = 0;
    updatePage();
});