import { Fragment } from "react";

function MonsterInfo({ monster, onClick }) {
  return (
    <div
      className={`card ${monster.selected ? "card--selected" : ""}`}
      onClick={() => onClick(monster)}
    >
      <div className="card__box-image">
        <img
          className="card__image"
          src={require(`../assets/${monster.id}.gif`)}
          alt="Monster"
        />
        <h3>{monster.name}</h3>
      </div>
      <div className="card__drops">
        <h4>
          <span>Item drops</span>
          <span>Rate</span>
        </h4>
        <ul className="card__list">
          {monster.drops.map((item) => (
            <Fragment key={item.id}>
              <li className="card__list-item card__list-item--left">
                {item.itemName}
              </li>
              <li className="card__list-item card__list-item--right">
                {item.rate}
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MonsterInfo;
