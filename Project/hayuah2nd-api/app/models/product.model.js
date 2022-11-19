module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            description: String,
            full_description: String,
            image: String,
            category_id: Number,
            price: Number
        },
        { timestamps: true }
    )

    schema.method("toJSON", function(){
        const {_v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Product = mongoose.model("products", schema)
    return Product
}