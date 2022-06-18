// check if two strings are Anagrams or not

type Freq = {
    [key: string]: number
}
export function validAnagrams(first: string, second: string){
    if(first.length != second.length) return false;

    const firstCount: Freq = {}
    const secondCount: Freq = {}
    for(const char of first){
        firstCount[char] = (firstCount[char] || 0) + 1;
    }
    for(const char of second){
        secondCount[char] = (secondCount[char] || 0) + 1;
    }

    for(const key in firstCount){
        if(!(key in secondCount)) return false
        if(firstCount[key] != secondCount[key]) return false
    }

    return true;
}