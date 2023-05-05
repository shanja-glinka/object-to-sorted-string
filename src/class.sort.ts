export class SortObject {

    protected useCompare: boolean;

    constructor(useCompare?: boolean) {
        this.useCompare = (useCompare === true);
    }

    public sort(data: object): object {
        return this.recursiveObjectSort(data);
    }

    public sortArray(data: Array<any>): Array<any> {
        return this.recursiveArraySort(data);
    }

    public toString(data: any): string {
        return JSON.stringify(data);
    }


    private recursiveArraySort(arr: Array<any>): Array<any> {
        arr.forEach((el: any, index: number, arrPointer: Array<any>) => {
            if (Array.isArray(el)) {
                arrPointer[index] = this.recursiveArraySort(el);
                return;
            }

            if (typeof el == 'object') {
                arrPointer[index] = this.recursiveObjectSort(el);
                return;
            }
        }, arr);

        return arr.sort(this.useCompare === true ? (a, b): number => {
            return this.sortByCompareTypes(a, b);
        } : undefined);
    }

    private recursiveObjectSort(obj: any): object {
        return Object.keys(obj)
            .sort()
            .reduce((accumulator: any, key: any) => {
                let it = obj[key];

                if (Array.isArray(it))
                    it = this.recursiveArraySort(it);
                else if (typeof it === 'object')
                    it = this.recursiveObjectSort(it);

                accumulator[key] = it;

                return accumulator;
            }, {});
    }

    private sortByCompareTypes(leftArg: any, rightArg: any): any {
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
}