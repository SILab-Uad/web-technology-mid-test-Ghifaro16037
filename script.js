// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const HurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const HurufKecil = "abcdefghijklmnopqrstuvwxyz";
    const Nomor = "0123456789";
    const KarakterSpesial = "!@#$%^&*()";

    // Create Variabel
    let characterSet = "";

    // TODO: Create a variable for the character set based on selected options
    if (options.includeUppercase) characterSet += HurufBesar;
    if (options.includeLowercase) characterSet += HurufKecil;
    if (options.includeNumbers) characterSet += Nomor;
    if (options.includeSpecialChars) characterSet += KarakterSpesial;

    // Fallback
    if (characterSet === "") {
        alert("Please select at least one option")
        return "";
    }

    // TODO: Generate the password based on the selected criteria
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomindex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    
    // Validation
    if (isNaN(length) || length <= 0 ) {
        alert("Please enter a valid password length")
        return;
    }

    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };
    
    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").value = password;

})
// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').value;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    } else {
        alert('No password to copy!');
    }
 });
