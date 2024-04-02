function palindromeAnalyzer() {
    let palindrome = document.getElementById("initialWord").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "");

        let lastLetter = palindrome.length - 1;
        let isPalindrome = true;

    for (let i = 0; i < palindrome.length; i++){

        if (palindrome[i] !== palindrome[lastLetter - i]) {
            isPalindrome = false
            break
        }
    }

    document.getElementById("palindromeResult").textContent = (isPalindrome) ? "The word indeed is palindrome" : "This isnt a palindrome";

}


function showBox() {
    document.getElementById("button").addEventListener("click", function() {
        document.getElementById("resultBox").style.display = "block";
    });
}
