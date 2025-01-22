void elements(){
    int arr[10] = {3,4,-4,5,7,8,-8,8, 10, 10, 11};
    int count = 0;

    for(int i = 1; i < 10; i++){
        if(arr[i] == -arr[i-1]){
            count++;
        }
    }

    printf("%d", count);
}

int main(){
    elements();
    return 0;
}