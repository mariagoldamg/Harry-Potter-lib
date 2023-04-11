const search = document.querySelector (`#search`);
const titles = document.querySelectorAll (`.book`);

search.addEventListener (`keyup`, (event)=> {
    const word = event.target.value.toLowerCase();
    const wordTwo = event.target.value.toLowerCase();

    titles.forEach(item => {
        item.querySelector (`h3`).textContent.toLowerCase().includes (word) || item.querySelector (`h4`).textContent.toLowerCase().includes (wordTwo)
        ? (item.style.display = `blok`): (item.style.display = `none`)
        
    })

})