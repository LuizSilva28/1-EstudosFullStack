"use strict";
/** @format */
console.log("1");
const users = [];
const reposList = [];
async function getUser(nameUser) {
    try {
        const userList = await fetch(`https://api.github.com/users/${nameUser}`);
        let userData = await userList.json();
        const { id, login, name, bio, public_repos, repos_url } = await userData;
        const user = {
            id,
            login,
            name,
            bio,
            public_repos,
            repos_url,
        };
        users.push(user);
        const res = await fetch(`${repos_url}`);
        const repos = await res.json();
        let newRepoList = [];
        repos.map((repo) => {
            const { name, description, fork, stargazers_count } = repo;
            const newRepo = {
                name,
                description,
                fork,
                stargazers_count,
            };
            newRepoList.push(newRepo);
        });
        reposList.push(newRepoList);
        console.log(users);
    }
    catch (error) {
        console.log(error);
    }
}
async function getRepo(repos_url, userMatch) {
    const res = await fetch(`${repos_url}`);
    const repos = await res.json();
    repos.map((repo) => {
        const { name, description, fork, stargazers_count } = repo;
        const newRepo = {
            name,
            description,
            fork,
            stargazers_count,
        };
        reposList[userMatch - 1]?.push(newRepo);
    });
}
function menuUser() {
    try {
        const nameUser = prompt("Digite um nome: ");
        if (nameUser) {
            getUser(nameUser);
        }
    }
    catch (error) {
        console.log(error);
    }
}
async function menuShowInfoUser() {
    console.log(users);
    const usersNames = [];
    users.forEach((user) => usersNames.push(user.name));
    let list = `_______Lista de Usúarios:________`;
    const newList = usersNames.forEach((name, index) => (list += `\n${index + 1}. ${name}`));
    console.log(newList);
    console.log(list);
    const userMatch = Number(prompt(`${list}\nDigite o N/ da opção desejada:`));
    const user = users[userMatch - 1];
    const repo_url = users[userMatch - 1]?.repos_url;
    if (repo_url) {
        //getRepo(repo_url, userMatch);
        const repo = reposList[userMatch - 1];
        let listRepo = "\n\n_______Repositório:_________";
        repo?.forEach((r) => (listRepo += `\nNome: ${r.name}\nDescrição: ${r.description}\nForks: ${r.fork}\nEstrela: ${r.stargazers_count}\n_______________________________`));
        alert(`_________Informações do usuário_______\nNome: ${user?.name}\nLogin:${user?.login}\nBio: ${user?.bio}\nQuantidade de repositórios: ${user?.public_repos}\n${listRepo}`);
    }
}
function menu() {
    const option = prompt(`\n1. Buscar Usuário\n2. Salvar Usuário\n5. Sair`);
    switch (option) {
        case "1":
            menuUser();
            break;
        case "2":
            menuShowInfoUser();
            break;
        case "5":
            break;
        default:
            menu();
            break;
    }
}
//# sourceMappingURL=index.js.map