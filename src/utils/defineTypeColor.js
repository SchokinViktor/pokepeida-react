export const defineTypeColor = (type) => {
  let color;
  switch (type) {
    case "bug":
      color = "#DFF978";
      break;
    case "dragon":
      color = "#FF5350";
      break;
    case "fairy":
      color = "#FB83C3";
      break;
    case "fire":
      color = "#FF7A00";
      break;
    case "ghost":
      color = "linear-gradient(80deg, #B9FFF2 0%, #CBE6FF 100%)";
      break;
    case "ground":
      color = "#FFC268";
      break;
    case "normal":
      color = "#E6E6E6";
      break;
    case "psychic":
      color = "#C184E7";
      break;
    case "steel":
      color = "#CBCEF1";
      break;
    case "dark":
      color = "#4615D0";
      break;
    case "electric":
      color = "#FFDF34";
      break;
    case "fighting":
      color = "#E76D63";
      break;
    case "flying":
      color = "linear-gradient(80deg, #ADFFDD 0%, #00F0FF 100%)";
      break;
    case "grass":
      color = "#A8EF8C";
      break;
    case "ice":
      color = "#89F4EE";
      break;
    case "poison":
      color = "#7DDD50";
      break;
    case "rock":
      color = "#E9D948";
      break;
    case "water":
      color = "#8EACFF";
      break;

    default:
      break;
  }

  return color
};
