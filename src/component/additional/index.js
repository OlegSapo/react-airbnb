import "./index.css";

import { Fragment } from "react";

import Heading from "../heading";
import Box from "../box";
import Description from "../description";

export default function Additional({
  rules,
  policy,
  transportation,
  languages,
  offers,
  instructions,
}) {
  return (
    <Box shadow>
      <div className="blocks">
        <Heading>Додаткові властивості</Heading>

        <Description mini={true} title="Правила дому" divider={true}>
          {rules}
        </Description>

        <Description mini={true} title="Політика скасування" divider={true}>
          {policy}
        </Description>

        <Description mini={true} title="Місцевий транспорт" divider={true}>
          {transportation}
        </Description>

        <Description mini={true} title="Мови хоста" divider={true}>
          {languages.map((item) => (
            <Fragment key={item.id}>
              <span>{item}, </span>
            </Fragment>
          ))}
        </Description>

        <Description mini={true} title="Спеціальні пропозиції" divider={true}>
          {offers}
        </Description>

        <Description
          mini={true}
          title="Інструкції щодо реєстрації"
          divider={true}
        >
          {instructions}
        </Description>
      </div>
    </Box>
  );
}
