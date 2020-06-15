const text = document.querySelector("#text");
const search = document.querySelector("#button");
const userData = document.querySelector(".data");

search.addEventListener("click", api);

function api() {
    const user = text.value;
    if(user === "") {
        userData.innerHTML = "<h2>Enter Username</h2>";
    }
    else {
        fetch(`https://api.github.com/users/${user}`)
        .then((res) => {
            if(res.status === 200) {
                return res.json();
            }
            else if(res.status === 404) {
                userData.innerHTML = "<h2>Username Not Found</h2>";
            }
        })
        .then((data) => {
            userData.innerHTML = `<div class="cont1">
                                    <div class="innercont">
                                        <img src="${data.avatar_url}" alt="profile_pic">
                                    </div>
                                    <div class="innercont">
                                        <h2>${data.name}</h2>
                                        <h4>${data.login}</h4>
                                        <a class="link" href="${data.html_url}">Show Profile</a>
                                    </div>
                                </div>`;
         })
        .catch((e) => {
            console.log("No data found...");
        })
    }
}