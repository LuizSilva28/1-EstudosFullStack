"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initApp() {
    let spaceship;
    let allShips = [];
    function registerSpaceship(ship) {
        allShips.push(ship);
        console.log(allShips);
        alert(`Nave [ ${ship.name} ] cadastrada!`);
    }
    function addMember(allShips) {
        let list = allShips.map((ship) => ship.name);
        let listShips = '';
        list.forEach((name, index) => {
            listShips += `       \n${index + 1}. ${name}`;
        });
        const id = prompt(`Cadastro de tripulante:  ____________________________\n
               ${listShips} \n
            Digite a opção da NAVE: \n`, '1');
        if (id) {
            const idInt = parseInt(id);
            const ship = allShips[idInt - 1];
            let name = prompt(`
                Cadastro de tripulação:
                _________________________\n
                Digite o nome:`, 'Roger');
            let confirmationTeam;
            if (ship && ship.crew !== undefined) {
                console.log('entrei ');
                confirmationTeam = ship.crew.length < ship.crewLimit;
                if (confirmationTeam && name) {
                    ship.crew.push(name);
                    let message = `${name} cadastrado com sucesso!`;
                    alert(message);
                    return;
                }
                let message = 'Limite de tripulantes atingido, não é possível adicionar mais membros';
                alert(message);
                return;
            }
            else if (ship && ship.crew === undefined) {
                ship.crew = [`${name}`];
            }
        }
    }
    function startMission() {
        let list = allShips.map((ship, index) => ship.name);
        console.log(list);
        let listShips = '';
        list.forEach((name, index) => {
            listShips += `       \n${index + 1}. ${name}`;
        });
        if (listShips.length > 0) {
            const id = prompt(`Definir missão:  ____________________________\n
            ${listShips} \n
            Digite a opção da NAVE: \n`, '1');
            const idInt = id ? parseInt(id) : 1;
            const ship = allShips.length > 0 ? allShips[idInt - 1] : null;
            if (ship && ship.crew) {
                let confirmationCrew = ship.crew.length >= Math.floor(ship.crewLimit / 3);
                console.log(allShips.length);
                console.log(ship);
                console.log(Math.floor(ship.crewLimit / 3));
                console.log(ship.crew.length);
                console.log(confirmationCrew);
                if (!ship.inMission && confirmationCrew) {
                    const confirmationMission = prompt(`Iniciar missão:  ____________________________\n

                    Digite a opção sim/não: \n`, 'sim');
                    const mission = prompt(`Definir missão:  ____________________________\n
                        Digite o nome da missão: `);
                    const inMission = confirmationMission === 'sim' ? true : false;
                    ship.inMission = inMission;
                    ship.mission = mission ? mission : '';
                    let message = `Nave enviada para missão | ${mission} | com sucesso!!`;
                    alert(message);
                    return;
                }
                else if (ship.inMission) {
                    let message = `A NAVE ${ship.name} está na missão ${ship.mission}!!`;
                    alert(message);
                    return;
                }
                else if (!confirmationCrew) {
                    let message = `Tripulação insuficiente, adicione mais ${(Math.floor(ship.crewLimit / 3) - ship.crew.length)}!!`;
                    alert(message);
                    return;
                }
            }
            else {
                alert("Cadastre um NAVE!");
            }
        }
    }
    function listSpaceships() {
        let listShips = ``;
        allShips.forEach((ship, index) => {
            let crewMembers = ``;
            let inMission = ship.inMission ? 'Sim' : 'Não';
            let mission = ship.mission ? ship.mission : 'Sem missão';
            console.log(allShips);
            !ship.crew || ship.crew.length <= 0 ?
                crewMembers = 'Sem tripulantes'
                :
                    ship.crew?.forEach((name) => {
                        crewMembers += `  \n${name}`;
                    });
            listShips += `${index + 1}:  
        Nome: ${ship.name}
        Piloto: ${ship.pilot}
        Limite: ${ship.crewLimit}
        Tripulação: ${crewMembers}
        Em missão: ${inMission}
        Missão: ${mission}
        \n\n`;
        });
        console.log(listShips);
        alert(listShips);
    }
    function createMenu() {
        const option = prompt(`BEM VINDO AO NOSSO CENTRO ESPACIAL! ________________________________________________\n
            Digite o número da opção: \n
            1. Cadastrar NAVE.
            2. Cadastrar Tripulação.
            3. Listar NAVEs.
            4. Atribuir Missão.
            5. Sair.
            `, '1');
        switch (option) {
            case '1':
                let name = prompt(`Cadastro de Nave: 
                ____________________________\n
            Digite o nome da NAVE: \n`, 'Foguete Lunar');
                const pilot = prompt(`Cadastro de Nave: 
                    ____________________________\n
            Digite o nome do piloto: \n`, 'Caramelo');
                const crewLimit = prompt(`Cadastro de Nave: 
                    ____________________________\n
            Digite a quantidade máxima de tripulantes: \n`, '5');
                if (name && pilot && crewLimit) {
                    const ship = {
                        name: name,
                        pilot: pilot,
                        crewLimit: parseInt(crewLimit),
                        crew: [],
                        inMission: false,
                    };
                    registerSpaceship(ship);
                }
                createMenu();
                break;
            case '2':
                addMember(allShips);
                createMenu();
                break;
            case '3':
                listSpaceships();
                createMenu();
                break;
            case '4':
                startMission();
                createMenu();
                break;
            case '5':
                let confirmation = confirm('Deseja sair?');
                if (confirmation) {
                    createMenu;
                    break;
                }
                break;
            default:
                createMenu();
                break;
        }
    }
    createMenu();
}
//# sourceMappingURL=index.js.map