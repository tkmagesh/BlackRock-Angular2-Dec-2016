import {Component, OnInit} from '@angular/core'
import {Bug} from './Bug';
import {BugStorage} from './services/BugStorage';
import {BugService} from './services/BugService';

@Component({
    templateUrl : 'app/bugTracker.template.html',
    selector : 'bug-tracker'
})
export class BugTracker implements OnInit{
    bugs : Array<Bug> = [];
   
    sortBugBy : string = 'name';
    sortBugOrder : boolean = false;

    //bugOperations : BugOperations = new BugOperations();

    constructor(private _bugStorage : BugStorage, private _bugService : BugService){

    }

    ngOnInit(){
        this._bugService
            .getAll()
            .subscribe(bugs => {
                this.bugs = bugs;
            })
    }

    addNew(newBugName:string){
        var self = this;
        this._bugService.addNew(newBugName).subscribe(function(bug) {
            console.log(self);
            self.bugs = self.bugs.concat([bug]);
        })
        
    }

   toggle(bug:Bug){
       this._bugStorage.toggle(bug);
   }

   onBugSort(bugSortData : {by : string, descending : boolean}){
       this.sortBugBy = bugSortData.by;
       this.sortBugOrder = bugSortData.descending;
   }

    removeClosed(){
        for(let i=this.bugs.length-1; i >= 0; i--){
            if (this.bugs[i].isClosed){
                this._bugStorage.remove(this.bugs[i]);
                this.bugs.splice(i,1);
            }
        }
    }

   
}