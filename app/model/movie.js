module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const MovieSchema = new Schema({
        image: {
            type: String
        },
        name: {
            type: String
        },
        count: {
            type: String
        },
        desc: {
            type: String
        },
        store: {
            type: String
        },
        address: {
            type: String
        },
        from: {
            type: String
        },
        date: {
            type: Date
        },
    });

    return mongoose.model('movielist', MovieSchema);
}