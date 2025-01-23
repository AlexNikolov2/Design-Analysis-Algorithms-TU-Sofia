void decTOBin(int a){
    if(a > 0){
        decTOBin(a / 2);
        printf("%d", a % 2);
    }
}
int main(){
    decTOBin(100);
}