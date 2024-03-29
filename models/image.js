import mongoose from 'mongoose'

export const imageSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    }
})

var Image = mongoose.model('Image', imageSchema)

export default Image