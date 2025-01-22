void swap(int a, int b){
    a = a + b;
    b = a - b;
    a = a - b;

    printf("%d %d \n", a, b);
}

int main(){
    swap(5,6);
    return 0;
}