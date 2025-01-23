int binarySearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


int main() {
    int arr[] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target;

    printf("Въведете число за търсене: ");
    scanf("%d", &target);

    int result = binarySearch(arr, size, target);

    if (result != -1) {
        printf("Елементът %d е намерен на индекс %d.\n", target, result);
    } else {
        printf("Елементът %d не е намерен в масива.\n", target);
    }

    return 0;
}