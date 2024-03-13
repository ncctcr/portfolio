export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const toHex = (num: number): string => {
  const hex = num.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export const parseHexColor = (hex: string): [number, number, number] => {
  const hexWithoutHash = hex.replace("#", "");
  const red = parseInt(hexWithoutHash.substr(0, 2), 16);
  const green = parseInt(hexWithoutHash.substr(2, 2), 16);
  const blue = parseInt(hexWithoutHash.substr(4, 2), 16);
  return [red, green, blue];
}

export const generateSimilarColor = (baseColor: string): string => {
  const [baseRed, baseGreen, baseBlue] = parseHexColor(baseColor);

  const maxChange = 50;

  const redChange = getRandomNumber(-maxChange, maxChange);
  const greenChange = getRandomNumber(-maxChange, maxChange);
  const blueChange = getRandomNumber(-maxChange, maxChange);

  const newRed = Math.min(255, Math.max(0, baseRed + redChange));
  const newGreen = Math.min(255, Math.max(0, baseGreen + greenChange));
  const newBlue = Math.min(255, Math.max(0, baseBlue + blueChange));

  return `#${toHex(newRed)}${toHex(newGreen)}${toHex(newBlue)}`;;
}

export const hexToRgba = (hexColor: string, alpha: number = 1): string => {
  const hex = hexColor.replace("#", "");

  if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
    return hexColor;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  alpha = Math.min(1, Math.max(0, alpha));

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}