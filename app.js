window.addEventListener('load', () => 
{
    document.querySelector("#searchbtn").addEventListener("click", (event) => 
    {
        event.preventDefault();

        let info = document.querySelector("#result");

        fetch(`superheroes.php?query= ${document.querySelector("#herofield").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/,'')}`
        .replace(/"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/, ''), { method: 'GET' })
        .then(resp => resp.text())
        .then(data => 
        {
            let tag = document.createElement("h2");
            tag.appendChild(document.createTextNode("RESULT"));
            let br = document.createElement("br"); 
            let line = document.createElement("hr");

            info.innerHTML = data;
            info.prepend(tag, br, line)
        })
    });
});