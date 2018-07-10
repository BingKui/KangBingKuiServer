module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const KnowledgeSchema = new Schema({
        author: {
            type: String
        },
        paragraphs: {
            type: Array
        },
        strains: {
            type: Array
        },
        title: {
            type: String
        }
    });

    return mongoose.model('Knowledge', KnowledgeSchema);
}