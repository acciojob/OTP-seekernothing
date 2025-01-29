const codes = document.querySelectorAll('.code');

// Auto-focus first input on load
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (e.target.value === '' && idx > 0) {
                codes[idx - 1].value = '';
                codes[idx - 1].focus();
            }
        }
    });
});