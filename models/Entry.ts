import moongose,{Model, Schema} from 'mongoose'
import { Entry } from '../interfaces/entry';
import mongoose from 'mongoose';


export interface IEntry extends Entry{

}
const entrySchema = new Schema({

    description:{type: String, required:true},
    createdAt:{type:Number},
    status: {
        type: String,
        enum:{
            values:['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        },
        default:'pending'
    }

});

const EntryModel: Model<IEntry> = moongose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;