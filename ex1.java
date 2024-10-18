public class ex1{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5,6};

        int sum = 0;

        for (int i = 0; i < arr.length - 1; i++) {
            int product = arr[i] * arr[i + 1];
            sum += product;
        }

        System.out.println(sum);
    }
}