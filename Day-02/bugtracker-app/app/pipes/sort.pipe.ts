import {Pipe, PipeTransform} from '@angular/core'
import {Bug} from '../Bug';

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{

    transform(bugs : Bug[], sortBy:string = "name", descending : boolean = false) : Bug[] {
        let comparer = getBugComparerFor(sortBy);
        if (descending)
            comparer = getDescending(comparer); 
        return bugs.sort(comparer)
        
    }
}



function getDescending(bugComparer){
    return function(bug1 : Bug, bug2 : Bug){
        return -1 * bugComparer(bug1, bug2);
    }
}

function getBugComparerFor(sortBy:string): any{
    return function bugComparer(bug1 : Bug, bug2:Bug) : number{
        if (bug1[sortBy] < bug2[sortBy]) return -1;
        if (bug1[sortBy] > bug2[sortBy]) return 1;
        return 0;
    }
}