const flexbox = document.querySelector('.generator__illustration');
const valueSelects = document.querySelectorAll('.value-select');
const copyCodeBtn = document.querySelector('#copyCodeBtn');
const rulesOutput = document.querySelector('.rules-output');

valueSelects.forEach((select) => {
    select.addEventListener('change', () => {
        const { dataset: { property }, value } = select;
        flexbox.style[property] = value;

        showCode();
    });
});

copyCodeBtn.addEventListener('click', () => {
    const code = rulesOutput.textContent;

    navigator.clipboard.writeText(code);
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
