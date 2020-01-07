module.exports ={
    port: process.env.PORT || 3001,
    mongoUri:process.env.MONGO_URI,
    secret: process.env.SECRET || 'secret'
 
}