import "./index.css";

export default function Title({
  title,
  id1,
  rating,
  review,
  city,
  country,
  superhost,
  id2,
  phone,
  time,
  rate,
}) {
  return (
    <div className="title">
      <h1 className="title__text">{title}</h1>

      {id1 && (
        <div className="title__sub-block">
          <span className="title__sub-value">{rating} рейтинг</span>
          <span className="title__sub-value">{review} відгуків</span>
          <span className="title__sub-value">
            {city}, {country}
          </span>
          {superhost && <span className="title__sub-value">Супер-хост</span>}
        </div>
      )}

      {id2 && (
        <div className="title__sub-block">
          <span className="title__sub-value">{phone}</span>
          <span className="title__sub-value">{time}</span>
          <span className="title__sub-value">{rate}% швидкості відгуку</span>
        </div>
      )}
    </div>
  );
}
