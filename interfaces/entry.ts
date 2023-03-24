export interface Entry{
    _id:string;
    descripcion:string,
    createdAt:number;
    status:string;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'| 'culo';
