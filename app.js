const flexbox = document.querySelector('.generator__preview');
const valueSelects = document.querySelectorAll('.value-select');
const codeOutput = document.querySelector('.generator__code');

valueSelects.forEach((select) => {
    select.addEventListener('change', () => {
        const { dataset: { property }, value } = select;
        flexbox.style[property] = value;

        showCode();
    });
});

const showCode = () => {
    codeOutput.innerHTML = '';

    valueSelects.forEach((select) => {
        const { value, name } = select;
        const rule = `<span>${name}: ${value};<span>`;

        codeOutput.innerHTML += rule;
    });
}

showCode();
