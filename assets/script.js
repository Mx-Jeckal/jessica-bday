function bigone() {
    var pickle = prompt("How many pickles have you eaten today?");

    if (pickle !== 4) {
        alert("that's not a healthy amount");
    };
};
var imgtag = document.createElement('img');

imgtag.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPNjzw-J1tWbLDBAuxnd4Di1VFldGyKRUvlb3_8nTpouZRgwy&s");
imgtag.style.margin = '0px auto';
imgtag.style.display = 'block';
document.body.append(imgtag);
// psuedo code
// button on page if clicked launch a loop of questions
// if a key is pressed leave the mini game
var btn = document.createElement('button');

btn.textContent = 'Pickle game';
btn.style.textAlign = "center";
document.body.append(btn);

btn.addEventListener("click", bigone);