const flexbox = document.querySelector('.generator__illustration');
const valueSelects = document.querySelectorAll('.value-select');

valueSelects.forEach((select) => {
    select.addEventListener('change', () => {
        const { dataset: { property }, value } = select;
        
        flexbox.style[property] = value;
    });
});
