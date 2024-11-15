function Palindrome() {
    let string = 'level';
    let isPalindrome = false;
    let reverse = [];

    for (let i = string.length - 1; i >= 0; i--) {

        reverse.push(string.charAt(i))

    }
    reverse = reverse.join('');

    if (string == reverse) {
        isPalindrome = true;
    }


    console.log(isPalindrome);

}
Palindrome()