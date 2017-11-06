const button = document.querySelector(".searcher-send"),
    input = document.querySelector(".searcher-input"),
    api = "https://api.github.com/users/"

button.addEventListener("click", (e) => {
    e.preventDefault();

    let query = api + input.value;
    fetch(`${api}${input.value}`)
        .then( response => response.json())
        .then( data => displayData(data))
});

function displayData(data){
    let container = document.querySelector(".results-container");
    container.innerHTML = `
        <div class='user-info'> 
            <img src=${data.avatar_url}>
            <div class="info">
                <h3>${data.login}</h3>
                <p>${data.bio === null ? "" : data.bio}</p>
            </div>
        </div>
        <div class='user-repos'>
            <h4>Repositories</h4>
        </div>`
    fetch(data.repos_url)
        .then(response => response.json())
        .then(data => displayRepos(data) )
}

function displayRepos(data){
    let reposContainer = document.querySelector(".user-repos");
    data.map( dataRepo => {
        reposContainer.innerHTML += `
        <div class="repo">
            <h5>${dataRepo.name}</h5>
        </div>`
    })
}