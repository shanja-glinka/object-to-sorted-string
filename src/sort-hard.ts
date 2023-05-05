export function _DataToSortedString(data: any): string {
    if (Array.isArray(data))
        return JSON.stringify(_RecursiveArraySort(data));

    if (typeof data !== 'object')
        throw ('\'data\' must be an Array or Object \'' + (typeof data) + '\' given');

    return JSON.stringify(_RecursiveObjectSort(data));
}

export function _RecursiveObjectSort(obj: any): object {
    return Object.keys(obj)
        .sort()
        .reduce((accumulator: any, key: any) => {
            accumulator[key] = (Array.isArray(obj[key])) ? _RecursiveArraySort(obj[key]) : obj[key];

            return accumulator;
        }, {});
}

export function _RecursiveArraySort(arr: Array<any>): Array<any> {
    arr.forEach((el: any, index: number, arrPointer: Array<any>) => {
        if (Array.isArray(el)) {
            arrPointer[index] = _RecursiveArraySort(el);
            return;
        }

        if (typeof el == 'object'){
            arrPointer[index] = _RecursiveObjectSort(el);
            return;
        }
        
    }, arr);
    return arr.sort(SortByCompareTypes);
}


export function SortByCompareTypes(leftArg: any, rightArg: any): any {
    let typeLeftArg = typeof leftArg;
    let typeRightArg = typeof rightArg;

    if (typeLeftArg === 'number') {
        if (typeRightArg === 'number')
            return leftArg - rightArg;
        if (typeRightArg === 'string')
            return -1;
    }
    if (typeLeftArg === 'string') {
        if (typeRightArg === 'number')
            return 1;
        if (typeRightArg === 'string') {
            if (leftArg < rightArg) return -1;
            else return 1;
        }
    }

    if (typeLeftArg === 'object')
        return -1;
        
    return 0;
}