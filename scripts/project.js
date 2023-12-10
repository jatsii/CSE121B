const gitHubApi = 'https://api.github.com/users/';

async function getData() {

    //if input text is empty, alert
    if (document.getElementById("userName").value.trim() == "") {
        alert("Please enter Name!");
        return false;
    }

    const userName = document.getElementById('userName').value;
    const userData = document.getElementById('userData');

    const response = await fetch(gitHubApi + userName);
    const data     = await response.json();

    if (response.ok){
        const showData = 
        `
            <img id="userImg" src = "${data.avatar_url}" alt="Profile Picture"> 
            <h2 id="userN"> ${data.login}</h2>
            <div class="container">
            <p>Followers: ${data.followers}</p>
            <p>Repositories: ${data.public_repos}</p>
            </div>
        `;
        userData.innerHTML = showData;
    } else {
        userData.innerHTML = `<h2 class="notFound"> ${userName} does not exists </h2>`;
    }
}