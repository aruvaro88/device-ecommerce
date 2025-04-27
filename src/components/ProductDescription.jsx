export const ProductDescription = ({ product }) => (
  <ul className="list-disc space-y-1">
    <li>Marca: {product.brand}</li>
    <li>Modelo: {product.model}</li>
    <li>Precio: {product.price || "-"}€</li>
    <li>CPU: {product.cpu}</li>
    <li>RAM: {product.ram}</li>
    <li>Sistema operativo: {product.os}</li>
    <li>Resolución: {product.displayResolution}</li>
    <li>Batería: {product.battery}</li>
    <li>
      Cámaras: {product.primaryCamera} / {product.secondaryCmera}
    </li>
    <li>Dimensiones: {product.dimentions}</li>
    <li>Peso: {product.weight}</li>
  </ul>
)
