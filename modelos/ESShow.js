module.exports=(app, mongoose)=>{
    const ESShowSchema = new mongoose.Schema({
            titulo:{type:Number},
            anio:{type:Number},
            pais:{type:String}
    });
    mongoose.model('ESShow', ESShowSchema);
}