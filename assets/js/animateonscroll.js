function reveal(){for(var e=document.querySelectorAll(".reveal"),t=0;t<e.length;t++){var n=window.innerHeight;e[t].getBoundingClientRect().top<n-150?e[t].classList.add("active"):e[t].classList.remove("active")}}window.addEventListener("scroll",reveal);