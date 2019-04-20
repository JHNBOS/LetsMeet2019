export class Group {
    id: string;
    name: string;
    createdOn: Date;
    createdBy: string;
    members: [{ 'uid': boolean }];
    picture: string;
}
