
function validateSyntax() {
    let input = document.getElementById('petInput').value;

    let result = ''; // Placeholder for validation result

       // Define the prefix expected in the input
    let petPrefix = "pet_";

    // The pattern checks if the input starts with 'pet_', followed by a 4-digit year (\d{4}) and then followed by one or more alphabetical characters ([a-zA-Z]+)
    let validInputRegex = new RegExp(`^${petPrefix}\\d{4}[a-zA-Z]+$`);

    console.log(validInputRegex);
    
      
       // Check if input starts with 'pet_' and followed by alphanumeric characters

        if (validInputRegex.test(input)) {
            // If the input matches the pattern, set the result to "Valid syntax"
            result = "Valid syntax";
        } else {
            // If the input does not match the pattern, set the result to "Invalid syntax"
            result = "Invalid syntax";
        }
 
             // Display the validation result
            document.getElementById('result').innerText = result;
}


