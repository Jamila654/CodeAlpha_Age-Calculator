document.addEventListener('DOMContentLoaded', () => {
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const dayOutput = document.querySelector('.calculate-day');
    const monthOutput = document.querySelector('.calculate-month');
    const yearOutput = document.querySelector('.calculate-year');

    function calculateAge() {
        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);

        if (!day || !month || !year) {
            return;
        }

        const today = new Date();
        let ageYears = today.getFullYear() - year;
        let ageMonths = today.getMonth() + 1 - month;
        let ageDays = today.getDate() - day;

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        dayOutput.textContent = ageYears;
        monthOutput.textContent = ageMonths;
        yearOutput.textContent = ageDays;
    }

    dayInput.addEventListener('input', calculateAge);
    monthInput.addEventListener('input', calculateAge);
    yearInput.addEventListener('input', calculateAge);
});

