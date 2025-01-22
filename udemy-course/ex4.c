void secondary(){
    int arr[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
    int sum = 0;

    for(int i = 0; i < 3; i++){
        sum += arr[i][3 - i - 1];
    }

    printf("sum = %d\n", sum);
}

int main(){
    secondary();
    return 0;
}