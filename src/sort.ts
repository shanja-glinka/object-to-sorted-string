export function DataToSortedString(data: any, useCompare = false): string {
    if (Array.isArray(data))
        return JSON.stringify(RecursiveArraySort(data, useCompare));

    if (typeof data !== 'object')
        throw ('\'data\' must be an Array or Object \'' + (typeof data) + '\' given');

    return JSON.stringify(RecursiveObjectSort(data));
}

export function RecursiveArraySort(arr: Array<any>, useCompare = false): Array<any> {
    arr.forEach((el: any, index: number, arrPointer: Array<any>) => {

        if (Array.isArray(el)) {
            arrPointer[index] = RecursiveArraySort(el, useCompare);
            return;
        }

        if (typeof el === 'object') {
            arrPointer[index] = RecursiveObjectSort(el, useCompare);
            return;
        }

    }, arr);
    return arr.sort(useCompare === true ? SortByCompareTypes : undefined);
}

export function RecursiveObjectSort(obj: any, useCompare = false): object {
    return Object.keys(obj)
        .sort()
        .reduce((accumulator: any, key: any) => {
            let it = obj[key];

            if (Array.isArray(it))
                it = RecursiveArraySort(it, useCompare);
            else if (typeof it == 'object')
                it = RecursiveObjectSort(it, useCompare);

            accumulator[key] = it;

            return accumulator;
        }, {});
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