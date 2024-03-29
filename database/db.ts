import mongoose, { connections } from "mongoose";

/** 
 * 0:disconnected
 * 1=conected
 * 2 = conecting
 * 3: disconecting
 * 
 */

const mongooConnection ={
    isConnected:0
}

export const connect = async ()=>{
    if(mongooConnection.isConnected){
        console.log('conect')
        return;
    }

    if(mongoose.connections.length > 0){
        mongooConnection.isConnected = mongoose.connections[0].readyState;

        if(mongooConnection.isConnected === 1){
            console.log('usando conexion anterios')
            return;
        }
                        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongooConnection.isConnected = 1;
    console.log('conectado a mongo','...')


}

export const disconnect =async ()=>{

    if(process.env.NODE_ENV === 'development') return
    if(mongooConnection.isConnected === 0)return
    await mongoose.disconnect();

    console.log('desconectado mondocb')

}