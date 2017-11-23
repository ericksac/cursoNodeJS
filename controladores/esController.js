const mongoose= require ('mongoose');
const ESShow = mongoose.model('ESShow');

let array = [7,8,9];

const obj ={};
const esShows= [
{
Id:1,
titulo:'LQ1',
anio:2017,
pais:'usa'    
},
{
    Id:2,
    titulo:'LQ2',
    anio:2018,
    pais:'URSS'
}
];

const todos = ()=>{
        //return new Promise((resolve, reject) =>{
         
        /*ESShow.find()
          .then(esshows => resolve(esshows))
          .catch(err => reject({error: err}))           
        });*/

        return ESShow.find();
};

const todos2 = (esshows) =>{
    return new Promise ((resolve, reject)=>{
        if(esshows.length <0){
            return reject('No hay datos');
        }
        return resolve({data: esshows.length});
    });
};
obj.getById = (req, res, next) => {
    /*let tvFind = ESShow.findById((tvShows) => tvShows.Id === Number.parseInt(req.params.id));

    if(!tvFind){
        return res.send({error: `Show: ${req.params.id}, no encontrado`});
    }
    */
  /* 
    ESShow.findById(req.params.id, (err, esshow)=>{
        if(err){

            res.send({error:err});
        }
        res.send(esshow);
    });
*/
ESShow.findById(req.params.id).then (byid =>{

           return res.send(byid);
        })
        .catch(err=>{
            return res.send({error: err});    
        });
   // rs.send(tvFind);
}

obj.deleteEsShow = (req, res, next)=>
{
    /*let indexesShow = tvShows.findIndex((esShow) => esShows.Id === Number.parseInt(req.params.Id));
    if(indexesShow <0)
    {
        return res.send({error:`Id: ${req.params.id}, no encontrado`});
    }
    res.send(tvShows.splice(indexTvshow, 1));*/
 /*   ESShow.remove({
        _id: req.params.id
    },
    (err, tvshow)=>{
        if(err){
            return res.send({error:err});
        }
        res.send(tvshow);
    }


);
*/
ESShow.remove({_id: req.params.id}).
then (byid =>{
               return res.send(byid);
            })
            .catch(err=>{
                return res.send({error: err});    
            });

}

obj.updateEsShow = (req, res, next)=>
{
   /* let indexesShow = tvShows.findIndex((esShow) => esShows.Id === Number.parseInt(req.params.Id));
    if(indexesShow <0)
    {
        return res.send({error:`Id: ${req.params.id}, no encontrado`});
    };
    let esShow = tvShows[indexesShow];
    esshow.anio = req.body.anio;
    esshow.pais = req.body.pais;
    esshow.titulo = req.body.titulo;

    tvShows [indexesShow] = tvshow;
    res.send();*/
   /* ESShow.findByIdAndUpdate(req.params.id, req.body, (err, esshows)=>{
        if(err){
            
            return    res.send({error:err});
        }
                    
        res.send(esshows);
    });*/

    ESShow.findByIdAndUpdate(req.params.id, req.body)
    .then(esshows =>
        {
            return res.send(esshows);
        })
        .catch(err=>{
            return res.send({error: err});    
        });
}
obj.getArray=(req, res, next) => {
    //res.send(esShows);

    /*ESShow.find((err, esshows)=>{
        if(err){

            res.send({error:err});
        }
        res.send(esshows);
    });*/
    /*
    ESShow.find()
    .then(esshows =>
        {
            return res.send(esshows);
        })
        .catch(err=>{
            return res.send({error: err});    
        });
        */
    /*    todos()
        .then(esshows =>
            {
                return res.send(esshows);
            })
            .catch(err=>{
                return res.send({error: err});    
            });*/

        ESShow.find()
        .then(tvshows => {
            if( tvshows.length >0){
                return Promise .reject({error: 'arreglo mayor a 0'});       
            }    
            return todos(tvshows)
        })
        .then (resultado => res.send(resultado))
        .catch(err => res.send({error:err}));
}
obj.postArray=(req, res, next) => {
   // array.push(req.body.number);
    //esShows.push(());
   /*let newESShow = new ESShow({
    titulo: req.body.titulo,
    anio: req.body.anio,
    pais: req.body.pais
   });
   newESShow.save((err, result)=>{
    if(err){
        return res.send({error:err});
    }
    res.send(result);
   });
   */
    //res.send(esShows);

    /********* promesas  **********/
    let newESShow = new ESShow({
        titulo: req.body.titulo,
        anio: req.body.anio,
        pais: req.body.pais
       });

    newESShow.save()
    .then(newI =>{
        return res.send(newI);
    })
    .catch(err=>{
        return res.send({error: err});    
    });;
};

module.exports =obj;