export function quickSort(arr: number[]): number[]{
    if(arr.length <= 1) return arr
    
    const pivot = findPivot(arr, 0, arr.length)
    
    return [...quickSort(arr.slice(0, pivot)), arr[pivot], ...quickSort(arr.slice(pivot+1, arr.length))]
}

function findPivot(arr: number[], start: number = 0, end: number = arr.length): number{
    let pivot = arr[start];
    let swapIdx = start;
    for(let i= start + 1; i<end; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, i, swapIdx)
        }
    }
    swap(arr, swapIdx, start)
    
    return swapIdx;
}
function swap(arr: number[], i: number, j: number){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([199, 10, 166, 49, 600, 4, -5, 94, 102, -99, 23, 56, 0]))