import { useState } from "react";
import MonsterInfo from "./MonsterInfo";

// ES7 Object spread example
const commonItems = [
  { id: 10, itemName: "Armor", rate: "10.00%" },
  { id: 11, itemName: "Shield", rate: "9.00%" },
  { id: 12, itemName: "Garment", rate: "8.00%" },
  { id: 13, itemName: "Boots", rate: "7.00%" },
];

const database = [
  {
    id: 1956,
    name: "Naght Sieger",
    drops: [
      { id: 1, itemName: "Twin Edge", rate: "90.00%" },
      { id: 2, itemName: "Bone Helm", rate: "60.00%" },
      ...commonItems,
    ],
    selected: false,
  },
  {
    id: 1734,
    name: "Kiel D-01",
    drops: [
      { id: 1, itemName: "Pocket Watch", rate: "50.00%" },
      { id: 2, itemName: "Dagger of Counter", rate: "20.00%" },
      ...commonItems,
      { id: 3, itemName: "Kiel-D-01 Card", rate: "1.00%" },
    ],
    selected: false,
  },
  {
    id: 1373,
    name: "Lord of Death",
    drops: [
      { id: 1, itemName: "Piece of Shield", rate: "53.00%" },
      ...commonItems,
      { id: 3, itemName: "Ice Pick", rate: "1.00%" },
      { id: 4, itemName: "Lord of Death Card", rate: "1.00%" },
    ],
    selected: false,
  },
  {
    id: 1768,
    name: "Gloom Under Night",
    drops: [
      { id: 1, itemName: "Hurricane Fury", rate: "40.00%" },
      { id: 2, itemName: "Red Darkness", rate: "20.00%" },
      ...commonItems,
      { id: 4, itemName: "Gloom Under Night Card", rate: "1.00%" },
    ],
    selected: false,
  },
];

function MonsterList() {
  const [monsters, setMonsters] = useState(database);

  function handleSelect(monster) {
    const monstersSetSelected = monsters.map((currentMonster) => {
      currentMonster.selected = currentMonster.id === monster.id ? true : false;
      return currentMonster;
    });
    setMonsters(monstersSetSelected);
  }

  return (
    <div className="monster-list">
      {monsters.map((monster) => (
        <MonsterInfo
          key={monster.id}
          monster={monster}
          onClick={handleSelect}
        ></MonsterInfo>
      ))}
    </div>
  );
}

export default MonsterList;
