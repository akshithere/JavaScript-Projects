 var updateTime = () => {
    const date = new Date();
    console.log(date);
    const dateAndTimeEl = document.querySelector("#dateandtime");
    dateAndTimeEl.innerHTML =  date.toLocaleString();
 }


updateTime();
setInterval(updateTime,1000);