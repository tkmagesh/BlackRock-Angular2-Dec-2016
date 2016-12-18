import {Bug} from "./Bug";
import {Injectable} from '@angular/core';

@Injectable()
export class BugOperations{
    currentBugId : number = 0;
    createNew(bugName:string) : Bug{
        var newBug = {
            id : ++this.currentBugId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return newBug;
    }

    toggle(bug : Bug) : void{
        console.log(this.currentBugId);
        bug.isClosed = !bug.isClosed
    }
}