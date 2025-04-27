export const ProductImage = ({ imgUrl, model }) => (
  <div className="w-full bg-gray-100 rounded-lg p-4 flex items-center justify-center">
    <img src={imgUrl} alt={model} className="max-h-96 object-contain" />
  </div>
)
