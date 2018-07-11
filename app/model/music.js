module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const MusicSchema = new Schema({
        image: {
            type: String
        },
        name: {
            type: String
        },
        count: {
            type: String
        },
        author: {
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
        show: {
            type: Boolean
        },
    });

    return mongoose.model('playlist', MusicSchema);
}