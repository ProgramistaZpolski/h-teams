setInterval(function(){
let h = ["h1", "i" ,"span","p", "h2", "h3", "h4", "span", "b", "a", "h5", "h6"];
h.forEach(function(a) {
    document.querySelectorAll(a).forEach(hh => {
        hh.innerText = "h";
    })
})
}, 2500);
