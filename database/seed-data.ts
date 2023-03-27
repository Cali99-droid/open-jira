interface SeedData{
    entries: SeedEntry[];
}


interface SeedEntry {
     description:string,
    createdAt:number,
    status:string
}

export const seedData: SeedData ={
    entries:[
        {
            
            description:'Pendiente wegogwe ojsdgpon  dspgnpswkg kogj ojgnkpn dbfdrb',
            status:'pending',
            createdAt:Date.now(),
          },
          {
            
            description:'In-progess wegogwe ojsdgpon  dspgnpswkg kogj ojgnkpn dbfdrb',
            status:'in-progress',
            createdAt:Date.now()-1000000,
          },
          {
            
            description:'Terminadas wegogwe ojsdgpon  dspgnpswkg kogj ojgnkpn dbfdrb',
            status:'finished',
            createdAt:Date.now()-100000,
          }
        
    ]
}