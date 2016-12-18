import {Component} from '@angular/core'
import {Bug} from './Bug';
import {BugOperations} from './BugOperations';

@Component({
    templateUrl : 'app/bugTracker.template.html',
    selector : 'bug-tracker'
})
export class BugTracker{
    bugs : Array<Bug> = [];
   

    //bugOperations : BugOperations = new BugOperations();

    constructor(private _bugOperations : BugOperations){

    }

    addNew(newBugName:string){
        var newBug = this._bugOperations.createNew(newBugName)
        this.bugs = this.bugs.concat([newBug]);
    }

   

    removeClosed(){
        for(let i=this.bugs.length-1; i >= 0; i--){
            if (this.bugs[i].isClosed)
                this.bugs.splice(i,1);
        }
    }

   
}