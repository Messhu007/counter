const endDate = "1 January 2025";

document.getElementById("end-date").innerHTML = endDate;
const input = document.querySelectorAll('input')

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    


    if(diff < 0)   //   negetive values conditions
    return;
    input[0].value = (Math.floor (diff / 3600 / 24));   // Days
    input[1].value = (Math.floor(diff /  3600) % 24);   // console.log(diff/3600%24) hour
    input[2].value = (Math.floor(diff / 60) % 60);      // min..
    input[3].value = (Math.floor(diff) % 60);           // seconds
}
clock()
setInterval( () => {
    clock() }, 1000 );
