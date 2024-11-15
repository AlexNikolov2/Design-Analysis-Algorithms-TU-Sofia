public class Matrix{
    public static void main(String[] args){
        int[][] arr = {{1,2,-3}, {4,5,6}, {-7,8,9}};

        int sum = OddElementsSum(arr);

        System.err.println(sum);

        int count = CountElements(arr);

        System.err.println(count);

        int minusSum = NegativeElementsSum(arr);

        System.err.println(minusSum);
    }

    public static int OddElementsSum(int[][] arr){
        int sum = 0;

        for (int i = 0; i < arr.length; i++) {
            for(int j = 0; j < arr.length; j++){
                if(i == j && arr[i][j] % 2 != 0){
                    sum += arr[i][j];
                }
            }
        }

        return sum;
    }

    public static int CountElements(int[][] arr){
        int count = 0;

        for(int i = 0; i < arr.length; i++){
            for(int j = i + 1; j < arr[i].length; j++){
                if(arr[i][j] > i + j){
                    count++;
                }
            }
        }

        return count;
    }

    public static int NegativeElementsSum(int[][] arr){

        int n = arr.length;
        int[] secondaryDiagonal = new int[n];


        int sum = 0;
        for(int i = 0; i < arr.length; i++){
            secondaryDiagonal[i] = arr[i][n - 1 - i];

            if(secondaryDiagonal[i] < 0){
                sum += secondaryDiagonal[i];
            }
        }


        return sum;
    }
}

