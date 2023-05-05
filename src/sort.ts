export function DataToSortedString(data: any): string {
    if (Array.isArray(data))
        return JSON.stringify(RecursiveArraySort(data));

    if (typeof data !== 'object')
        throw ('\'data\' must be an Array or Object \'' + (typeof data) + '\' given');

    return JSON.stringify(Object.keys(data)
        .sort()
        .reduce((accumulator: any, key: any) => {
            accumulator[key] = (Array.isArray(data[key])) ? RecursiveArraySort(data[key]) : data[key];

            return accumulator;
        }, {})
    );
}

export function RecursiveArraySort(arr: Array<any>): Array<any> {
    arr.forEach((el: any, index: number, arrPointer: Array<any>) => {
        if (Array.isArray(el))
            arrPointer[index] = RecursiveArraySort(el);
    }, arr);
    return arr.sort();
}
