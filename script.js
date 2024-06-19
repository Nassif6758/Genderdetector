const know = document.getElementById("know");
const search = document.getElementById("search");

const genderinfo=document.getElementById("genderinfo");

know.onclick = details;

function details() {
    const name=search.value;
    const pname=search.value;
    fetch(`https://api.genderize.io?name=${pname}`)
        .then(response => response.json())
        .then(info => {
            genderinfo.innerHTML = `${name}  is a  ${info.gender}  name`; 
        })
       
}
