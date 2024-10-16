import { Component } from "./Component.js";
import { FormComponents } from "./FormComponents.js";
import { InputComponents } from "./InputComponents.js";
import { LabelComponets } from "./labelComponets.js";

const title = new Component("h1", "body", { textContent: "Olá, mundo!" });

console.log(title);

title.render();

title.tag = 'h3'