function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Months are zero-indexed
    const year = parseInt(document.getElementById('year').value);

    const today = new Date();
    const birthDate = new Date(year, month, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birth date has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent ='Your age is '+ age +' years old.';
}