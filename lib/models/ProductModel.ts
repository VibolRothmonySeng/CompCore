import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default ProductModel

export type Product = {
  _id?: string
  name?: string
  slug?: string
  image?: string
  banner?: string
  price?: number
  brand?: string
  description?: string
  category?: string
  rating?: number
  numReviews?: number
  countInStock?: number
  colors?: []
  sizes?: []
}
