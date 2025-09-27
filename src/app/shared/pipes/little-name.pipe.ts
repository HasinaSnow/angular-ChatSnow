import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'littleName'})
export class LittleNamePipe implements PipeTransform {
    transform(fullName: string|undefined, ...args: any[]) {
        return (fullName)
            ? fullName.split(' ').reduce((p, n) => p.length < n.length ? p : n)
            : '' 
    }
}