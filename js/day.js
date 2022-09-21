const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const dates = today.getDate(); 
const day = document.getElementById("TODAY");

day.innerText = `${year}-${month}-${dates}`;
