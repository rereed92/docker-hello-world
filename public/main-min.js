function updateTime(){var e=new Date;el.innerHTML=e,setTimeout(function(){updateTime()},1e3)}const el=document.getElementById("current-time");updateTime();