import type { NextApiRequest, NextApiResponse } from 'next'
import moongose from 'mongoose';

import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = 
|{message: string}
|IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {id} = req.query;
    if(!moongose.isValidObjectId(id)){
        return res.status(400).json({message:'el id no es valido' + id})
    }

    switch (req.method) {
        case 'PUT':
             return updateEntry(req, res);
            break;
        case 'GET':
            return getEntry(req, res);
            break;
        default:
            return res.status(400).json({message:'no existe el mretofos'})
            break;
    }
  
}

const getEntry = async(req:NextApiRequest, res:NextApiResponse<Data>)=>{
   
    const{id} = req.query;
    await db.connect();

    const entry = await Entry.findById(id);
    await db.disconnect();
    if(!entry){
        await db.disconnect();
        return res.status(400).json({message:'no hay entrada oocon esi ID ' + id})
    }

    res.status(200).json(entry)
}

const updateEntry = async(req:NextApiRequest, res:NextApiResponse<Data>)=>{
    const{id} = req.query;
    await db.connect();

    const entryToUpdate = await Entry.findById(id);
    await db.disconnect();
    if(!entryToUpdate){
        await db.disconnect();
        return res.status(400).json({message:'no hay entrada con esi ID ' + id})
    }

    const {
        description= entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;

    try {
         const updatEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators:true, new:true}) 
         await db.disconnect();
           res.status(200).json(updatEntry!)
    } catch (error) {
        console.log(error)
        await db.disconnect();
        res.status(400).json({message:'bad request'})
    }

   

 ;


}