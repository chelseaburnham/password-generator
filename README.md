# password-generator

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

1. when I click on generate password, a window pops up (create a function that returns a window prompt)
2. Inside the window is message asking for how many characters the password should contain (should be between 8 and 128)
    - If someone puts in a number less than 8, a message will appear saying they need more characters.
    -If someone puts in a number more than 128, a message will appear saying they have too many characters.
3. Once they have the correct amount of characters, a new window prompt will pop up asking if they would like special characters. repeat these steps for lower case and upper case, and numeric. 
    - if none are selected, reprompt (counter variable)
4. Once all window prompts are answered, a value will pop up in the secure password box.
