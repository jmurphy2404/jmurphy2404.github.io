// replace token and find a workaround to hosting it on github bc it gets revoked immediately. tested and this code works though

axios.get('https://api.github.com/users/jmurphy2404/repos', { headers: {"Authorization" : `Bearer afdcddb864e3e2d3f1b1f37ab5fe3a282d1dd933`} }).then((response) => {
	console.log(response.data);
});