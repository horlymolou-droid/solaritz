const form = document.getElementById("co2-form");
const energyInput = document.getElementById("energy");
const sourceSelect = document.getElementById("source");
const resultText = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const energy = Number(energyInput.value);
    const co2Factor = Number(sourceSelect.value);

    if (energy <= 0) {
        resultText.textContent = "Entre une valeur superieure a 0 kWh.";
        return;
    }

    const monthlySaving = energy * co2Factor;
    const yearlySaving = monthlySaving * 12;

    resultText.textContent =
        "Economies estimees : " +
        monthlySaving.toFixed(1) +
        " kg de CO2 par mois, soit environ " +
        yearlySaving.toFixed(1) +
        " kg de CO2 par an.";
});

const tips = {
    energie: "Moins consommer d'energie permet de reduire les emissions de CO2.",
    classe: "Une classe sensibilisee peut transmettre les bons gestes a tout le lycee.",
    nature: "Proteger la nature, c'est aussi proteger l'air, l'eau, les arbres et les animaux."
};

const tipButtons = document.querySelectorAll(".tip-button");
const tipText = document.getElementById("tip-text");

tipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        tipButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
        tipText.textContent = tips[button.dataset.tip];
    });
});
