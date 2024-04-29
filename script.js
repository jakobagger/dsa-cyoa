document.addEventListener("DOMContentLoaded", start);

function start(){
 console.log("JS running");
 showScene(firstScene);   
}

const firstScene = {
    title: "Første scene",
    text: /*html*/`<p> Historien begynder </p>`,
    choices: [
        "Valg et",
        "Valg to"
    ]
}

function showScene(scene){
    const html = /*html*/`<div class="scene">
    <h2>${scene.title}</h2>
    <div>${scene.text}</div>
    <div class="choices">
        ${scene.choices.map((choice, i) => `<button id="btn-choice${i}">${choice}</button>`).join(" ")}
    </div>
    </div>
    `

    document.getElementById("main").insertAdjacentHTML("beforeend", html);
}