public class Recursion {
    public static void main(String[] args) {
        int number = 10;
        String binary = DecToBinRecursive(number);
        System.out.println("Binary representation of " + number + ": " + binary);
    }

    public static String DecToBinRecursive(int num) {
        if (num == 0) {
            return ""; 
        }
        return DecToBinRecursive(num / 2) + (num % 2); 
    }
}
