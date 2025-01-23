int isPalindrome(char str[]) {
    int left = 0; 
    int right = strlen(str) - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            printf("Noo");
            return 0;
        }
        left++;
        right--;
    }
    printf("palindome");
    return 1;
}
int main(){
    char str[]=  "leval";

    isPalindrome(str);
}