//import { EventEmitter } from '@angular/core';

export class GetSearchTerm{
    /*urlTerm = new EventEmitter<string>();
    setUrl(str:string){
        this.urlTerm.emit(str);
    }*/
    private term: string= "";
    getTerm(){
        return this.term;

    }
    setTerm(str:string){
        this.term= str;
    }
}