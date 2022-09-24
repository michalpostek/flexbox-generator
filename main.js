const flexbox = document.querySelector('.generator__preview');
const valueSelects = document.querySelectorAll('.value-select');
const codeOutput = document.querySelector('.generator__code');
const codeRules = document.querySelector('.code__rules');
const copyCodeBtn = document.querySelector('#copyCodeBtn');

const buttonAnimation = [
    {}, {
        background: 'var(--beige)', 
        color: 'var(--navy)'
    }, {}
];

const buttonTiming = {
    duration: 500,
    iterations: 1,
}

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

    copyCodeBtn.animate(buttonAnimation, buttonTiming);
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
