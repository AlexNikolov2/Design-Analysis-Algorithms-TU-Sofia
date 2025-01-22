void heronFormula(int a, int b, int c){
    int half_perimeter = (a + b + c) / 2;

    float size = (float) (sqrt(half_perimeter * (half_perimeter - a) * (half_perimeter - b) * (half_perimeter - c)));

    printf("%.2f \n", size);
}

int main(){
    heronFormula(3,4,5);
    return 0;
}