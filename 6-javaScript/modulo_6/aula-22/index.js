const URL = "http://localhost:3000/transations";

async function createFormForEdit(idOfTransition) {
	const divDad = document.querySelector(`#id-${idOfTransition}`);
	console.log(divDad);
	const formForEdit = document.createElement("form");
	formForEdit.setAttribute("data-formupdate", "formUpdate");

	const chosenTransaction = document.createElement("p");
	chosenTransaction.textContent = `ID: ${idOfTransition}`;

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Nome";
	nameLabel.htmlFor = "newName";
	nameLabel.classList.add("allLabels");

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.name = "newName";
	nameInput.id = "newName";
	nameInput.setAttribute("data-formupdate", "newName");
	nameInput.classList.add("allInputs");

	const valueLabel = document.createElement("label");
	valueLabel.htmlFor = "newValue";
	valueLabel.textContent = "Valor";
	valueLabel.classList.add("allLabels");

	const valueInput = document.createElement("input");
	valueInput.type = "text";
	valueInput.name = "newValue";
	valueInput.id = "newValue";
	valueInput.setAttribute("data-formupdate", "newValue");
	valueInput.classList.add("allInputs");

	const buttonSaveEdit = document.createElement("button");
	buttonSaveEdit.type = "submit";
	buttonSaveEdit.textContent = "atualizar";
	buttonSaveEdit.classList.add("bnt", "bntSaveEdit");

	const buttonCancel = document.createElement("button");
	buttonCancel.type = "button";
	buttonCancel.textContent = "cancelar";

	formForEdit.append(
		chosenTransaction,
		nameLabel,
		nameInput,
		valueLabel,
		valueInput,
		buttonSaveEdit,
		buttonCancel
	);
	divDad.appendChild(formForEdit);

	formForEdit.addEventListener("submit", async (ev) => {
		ev.preventDefault();
		const newName = document.querySelector(
			"[data-formupdate='newName']"
		).value;
		const newValue = document.querySelector(
			"[data-formupdate='newValue']"
		).value;
		const transationUpdate = {
			name: newName,
			value: newValue,
		};

		await updateTrasations(idOfTransition, transationUpdate);

		const name = document.querySelector(`#nameOfPeople-${idOfTransition}`);
		name.textContent = `Nome: ${newName} `;
		const value = document.querySelector(
			`#valueOfTrasation-${idOfTransition}`
		);
		value.textContent = ` Value: ${newValue}`;
		formForEdit.reset();
	});

	buttonCancel.addEventListener("click", () => {
		const divDad = document.querySelector(`.divDad-${idOfTransition}`);
		const formUpdate = buttonCancel.parentNode;

		divDad.removeChild(formUpdate);
	});
}

function createTransationElements(transation) {
	const boxOfTransations = document.querySelector("#showAllTransactions");
	const divDad = document.createElement("div");
	divDad.classList.add(`divDad-${transation.id}`);
	divDad.id = `id-${transation.id}`;

	console.log(divDad);

	const title = document.createElement("h2");
	title.classList.add("title");
	title.textContent = ` Transação`;

	const name = document.createElement("label");
	name.classList.add("paragraph");
	name.textContent = `Nome: ${transation.name}  `;
	name.classList.add("allLabels");
	name.id = `nameOfPeople-${transation.id}`;

	const value = document.createElement("label");
	value.classList.add("paragraph");
	value.textContent = `Valor: ${transation.value}`;
	value.classList.add("allLabels");
	value.id = `valueOfTrasation-${transation.id}`;

	const buttonEdit = document.createElement("button");
	buttonEdit.classList.add("bntEdit");
	buttonEdit.textContent = "Editar";
	buttonEdit.classList.add("bnt", "bntEdit");

	const buttonDelete = document.createElement("button");
	buttonDelete.classList.add("bntDelete");
	buttonDelete.textContent = "Deletar";
	buttonDelete.classList.add("bnt", "bntDelete");

	divDad.append(title, name, value, buttonEdit, buttonDelete);
	boxOfTransations.appendChild(divDad);

	buttonEdit.addEventListener("click", () => {
		createFormForEdit(transation.id);
	});

	buttonDelete.addEventListener("click", async () => {
		const sectionShowAllElements = document.querySelector(
			"#showAllTransactions"
		);
		const divDad = buttonDelete.parentNode;
		sectionShowAllElements.removeChild(divDad);

		await deleteTrasations(transation.id);
	});
}
,
// GET
async function getAllTransations() {
	const response = await fetch(URL);
	const allTransations = await response.json();

	return allTransations;
}
//POST
async function createTransation(objeto) {
	const resp = await fetch(URL, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(objeto),
	});

	const transition = await resp.json();
	createTransationElements(transition);

	form.reset();
}
//PUT
async function updateTrasations(id, objeto) {
	const resp = await fetch(`${URL}/${id}`, {
		method: "PUT",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(objeto),
	});
}
//DELETE
async function deleteTrasations(id) {
	const resp = await fetch(`${URL}/${id}`, {
		method: "DELETE",
		headers: { "Content-type": "application/json" },
	});
}

async function showTransationElements() {
	const allTransations = await getAllTransations();

	try {
		allTransations.forEach((transation) => {
			createTransationElements(transation);
		});
	} catch (error) {
		console.log(error);
	}
}

const form = document.querySelector("[data-mainForm='mainForm']");

form.addEventListener("submit", async (ev) => {
	ev.preventDefault();

	const transation = {
		name: document.querySelector("[data-idform='NameForm']").value,
		value: document.querySelector("[data-idform='ValueForm']").value,
	};

	await createTransation(transation);
});

showTransationElements();

// pegar os valores do form;
// salvar os valores no bd.json
// resgatar os valores do bd.json
// exibir na tela os valores resgatados
