const flexbox = document.querySelector('.generator__illustration');
const valueSelects = document.querySelectorAll('.value-select');
const rulesOutput = document.querySelector('.rules-output');

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
        const { dataset: { property }, value } = select;
        const rule = `<span>${property}: ${value};<span>`;

        rulesOutput.innerHTML += rule;
    });
}

showCode();
