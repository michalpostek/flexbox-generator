const flexbox = document.querySelector('.generator__preview');
const valueSelects = document.querySelectorAll('.value-select');
const codeOutput = document.querySelector('.generator__code');
const codeRules = document.querySelector('.code__rules');
const copyCodeBtn = document.querySelector('#copyCodeBtn');

valueSelects.forEach((select) => {
    select.addEventListener('change', () => {
        const { dataset: { property }, value } = select;
        flexbox.style[property] = value;

        showCode();
    });
});

copyCodeBtn.addEventListener('click', () => {
    const code = codeOutput.textContent;

    navigator.clipboard.writeText(code);
});

const showCode = () => {
    codeRules.innerHTML = '';

    valueSelects.forEach((select) => {
        const { value, name } = select;
        const rule = `<span>${name}: ${value};<span>`;

        codeRules.innerHTML += rule;
    });
}

showCode();
