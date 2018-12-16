import { EventEmitter } from '@angular/core';

export class playAudio{
    urlTerm = new EventEmitter<string>();
    setUrl(str:string){
        this.urlTerm.emit(str);
    }
}