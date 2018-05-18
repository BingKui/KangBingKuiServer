module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const PoemSchema = new Schema({
        title: {
            type: String
        },
        description: {
            type: String
        },
        by: {
            type: String
        },
        url: {
            type: String
        },
        links: {
            type: Number
        },
        tags: {
            type: Array
        },
    });

    return mongoose.model('Poem', PoemSchema);
}