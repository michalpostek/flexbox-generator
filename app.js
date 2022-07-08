const flexbox = document.querySelector('.generator__illustration');
const valueSelects = document.querySelectorAll('.value-select');
const rulesOutput = document.querySelector('.output__rules');

valueSelects.forEach((select) => {
    select.addEventListener('change', () => {
        const { dataset: { property }, value } = select;
        flexbox.style[property] = value;

        showCode();
    });
});

const showCode = () => {
    rulesOutput.innerHTML = '';

    valueSelects.forEach((select) => {
        const { value, name } = select;
        const rule = `<span>${name}: ${value};<span>`;

        rulesOutput.innerHTML += rule;
    });
}

showCode();
