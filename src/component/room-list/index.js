//підключаємо із React підтримку Fragment (фрагментів)
import { Fragment } from "react";

//підключаємо компонент Heading
import Heading from "../heading";

//підключаємо компонент Box (відображення рамки карточки з даними)
import Box from "../box";

import "./index.css";

export default function RoomList({ list }) {
  return (
    <div className="room__block">
      {/* текст "Типи номерів" - передається в компонент, в якості пропса "children" */}
      {/* border - звичайний пропс, що передається в компонент */}
      {/* <Heading border>Типи номерів</Heading> */}
      <Heading border>Типи номерів</Heading>

      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          // Fragment - замість безіменевого тегу, з обов'язковим створенням для елемиентів масиву list ключа key
          <Fragment key={id}>
            <div>
              <Item {...rest} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

//функція для відображення картки масива list
//pricePerNight: price - назву пропса pricePerNight змінюємо для зручності на назву price (це внутрішняя назва, всередині компонента Item)
function Item({ type, pricePerNight: price, currency, capacity }) {
  return (
    <Box className="room">
      <span className="room__title">{type}</span>
      <span className="room__info">Кількість гостей: {capacity}</span>
      <span className="room__price">
        {currency}
        {price}
      </span>
    </Box>
  );
}
