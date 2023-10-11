import "./index.css";

//підключаємо компонент Box
import Box from "../box";

//підключаємо компонент ListItem
import ListItem from "../list-item";

export default function Price({ price, discount, currency, ...rest }) {
  return (
    <Box className="price">
      <div className="price__header">
        <span
          className={`price__value ${
            discount ? "price__value--has-discount" : ""
          }`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>

      <List currency={currency} {...rest} />
    </Box>
  );
}

function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
  return (
    <ul className="price__list">
      <ListItem>
        {/* <ListItem imageSrc={imageItem}> */}
        {/* <ListItem title="titleItem"> */}
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>

      <ListItem>
        <span>Сервісний збір:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>

      <ListItem>
        <span>Дата прибуття:</span>
        <span>{checkin}</span>
      </ListItem>

      <ListItem>
        <span>Дата вибуття:</span>
        <span>{checkout}</span>
      </ListItem>
    </ul>
  );
}
