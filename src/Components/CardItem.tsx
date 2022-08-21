import { Product } from "./Products";

export default function CardItem(props: Product) {
    const { image, title, description } = props;

    return(
      <div className="card">
        <div className="card-image">
          <img src={image} alt="img"/>
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{description.substring(0, 60)}...</p>
        </div>
      </div>
    )
}