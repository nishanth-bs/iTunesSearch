import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'processString'})
export class ProcessString implements PipeTransform{
    transform(str: string):string{
        if(str.length > 30){
            let a = str.split(' ');
            let b = [];
            let count = 0;
            a.forEach(word => {
              count += word.length;
              if(count > 27){
                let c :string = `${b.join(' ')}...`;
                console.log(c);
                return c;
              }
              b = b.concat(word);
            });
          }else{
            console.log(str);
            return str;
          }
    }
}