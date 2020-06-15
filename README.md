This repo uses [Github API](https://api.github.com/users/VigneshwaranDev) to get the user info.

The basic fetch javascript functionality.

##Function

```javascript

fetch(`https://api.github.com/users/${user}`)
    .then((res) => {
        if(res.status === 200) {
            return res.json();
        }
        else if(res.status === 404) {
            return "No data found";
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("No data found...");
    });

```