export class Chat {
    constructor(public image: string,
                public author: string,
                public authorStatus: string,
                public text: string,
                public date: Date,
                public my: boolean) { }
} 