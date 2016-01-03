export class MailModel {
    constructor(public id:number,
                public name:string,
                public male:boolean,
                public contactMethod:string,
                public subject?:string) {
    }
}