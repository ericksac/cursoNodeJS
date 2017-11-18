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

/*
obj.getById = (req, res, next) => {
    let tvFind = tvShows.find((tvShows) => tvShows.Id === Number.parseInt(req.params.id));

    if(!tvFind){
        return res.send({error: `Show: ${req.params.id}, no encontrado`});
    }

    rs.send(tvFind);
}
*/
obj.deleteEsShow = (req, res, next)=>
{
    let indexesShow = tvShows.findIndex((esShow) => esShows.Id === Number.parseInt(req.params.Id));
    if(indexesShow <0)
    {
        return res.send({error:`Id: ${req.params.id}, no encontrado`});
    }
    res.send(tvShows.splice(indexTvshow, 1));

}

obj.updateEsShow = (req, res, next)=>
{
    let indexesShow = tvShows.findIndex((esShow) => esShows.Id === Number.parseInt(req.params.Id));
    if(indexesShow <0)
    {
        return res.send({error:`Id: ${req.params.id}, no encontrado`});
    };
    let esShow = tvShows[indexesShow];
    esshow.anio = req.body.anio;
    esshow.pais = req.body.pais;
    esshow.titulo = req.body.titulo;

    tvShows [indexesShow] = tvshow;
    res.send();
}
obj.getArray=(req, res, next) => {
    res.send(esShows);
}
obj.postArray=(req, res, next) => {
    array.push(req.body.number);
    res.send(esShows);
 }

module.exports =obj;