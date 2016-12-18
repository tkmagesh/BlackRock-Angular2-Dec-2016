import {Component} from '@angular/core'
import {Bug} from './Bug';
@Component({
    templateUrl : 'app/bugTracker.template.html',
    selector : 'bug-tracker'
})
export class BugTracker{
    bugs : Array<Bug> = [];
    newBugName : string = '';

    addNew(){
        var newBug = {
            name : this.newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugs = this.bugs.concat([newBug]);
    }

   

    removeClosed(){
        for(let i=this.bugs.length-1; i >= 0; i--){
            if (this.bugs[i].isClosed)
                this.bugs.splice(i,1);
        }
    }

   
}