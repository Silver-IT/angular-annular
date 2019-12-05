export class Mail {
    constructor(public id: number,
                public sender: string,
                public senderPhoto: string,
                public senderMail: string,
                public subject: string,
                public date:string,
                public body: string,
                public attachment:boolean,
                public attachments: string[],
                public unread: boolean,
                public sent: boolean,
                public starred: boolean,
                public draft: boolean,
                public trash: boolean,
                public selected:boolean) { }
}