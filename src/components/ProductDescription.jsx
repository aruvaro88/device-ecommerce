export const ProductDescription = ({ product }) => (
  <ul className="space-y-2 text-gray-700">
    {[
      ["Marca", product.brand],
      ["Modelo", product.model],
      ["Precio", `${product.price || "-"}€`],
      ["CPU", product.cpu],
      ["RAM", product.ram],
      ["SO", product.os],
      ["Resolución", product.displayResolution],
      ["Batería", product.battery],
      ["Cámaras", `${product.primaryCamera} / ${product.secondaryCmera}`],
      ["Dimensiones", product.dimentions],
      ["Peso", product.weight],
    ].map(([label, val]) => (
      <li key={label}>
        <span className="font-medium text-gray-800">{label}:</span> {val}
      </li>
    ))}
  </ul>
)
