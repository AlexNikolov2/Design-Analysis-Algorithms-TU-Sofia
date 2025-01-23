float xnpower(float x, int n){
    if(n == 0){
        return 1;
    }
    else{
        if(n > 0){
            return(x * xnpower(x, n - 1));
        }
        if(n < 0){
            return(1 / xnpower(x, -n ));
        }
    }
}

int main(){
    float res = xnpower(3,4);
    printf("%f", res);
}