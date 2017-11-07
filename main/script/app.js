const button = document.querySelector(".searcher-send"),
    input = document.querySelector(".searcher-input"),
    searcherContainer = document.querySelector(".searcher-container"),
    api = "https://api.github.com/users/"

button.addEventListener("click", (e) => submitUser(e));
searcherContainer.addEventListener("submit", (e) => submitUser(e))

function submitUser(event)  {
    event.preventDefault();
    let query = api + input.value;
    fetch(`${api}${input.value}`)
        .then( response => response.json())
        .then( data => displayData(data))
}

function displayData(data){
    let container = document.querySelector(".results-container");
    if(data.message === "Not Found"){
        return container.innerHTML = `<div class="error">User does not exist</div>`
    }
    container.innerHTML = `
        <div class='user-info'> 
            <img src=${data.avatar_url} width="60" height="60">
            <div class="info">
                <p>${data.name === null ? "" : data.name}</p>
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
            <div class="repo-title"><a href=${dataRepo.html_url}>${dataRepo.name}</a></div> 
            <div><span>${dataRepo.forks} <i class="fa fa-code-fork" aria-hidden="true"></i></span>
            <span>${dataRepo.watchers}<i class="fa fa-star" aria-hidden="true"></i></span></div>
        </div>`
    })
}