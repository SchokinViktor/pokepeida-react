export const defineTypeColor = (type) => {
  let color;
  switch (type) {
    case "bug":
      color = "#DFF978";
      break;
    case "dragon":
      color = "#45B8FF";
      break;
    case "fairy":
      color = "#F6AAD4";
      break;
    case "fire":
      color = "#FF9E58";
      break;
    case "ghost":
      color = "#61FFC6";
      break;
    case "ground":
      color = "#FFC268";
      break;
    case "normal":
      color = "#FDF88F";
      break;
    case "psychic":
      color = "#DFBDFF";
      break;
    case "steel":
      color = "#CBCEF1";
      break;
    case "dark":
      color = "#AE57FF";
      break;
    case "electric":
      color = "#FFDF34";
      break;
    case "fighting":
      color = "#E76D63";
      break;
    case "flying":
      color = "#B9FFF2";
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

  return color;
};
