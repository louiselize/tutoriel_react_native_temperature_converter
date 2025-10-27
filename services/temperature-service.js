import { UNITS } from "../constant";

export function getOppositeUnit(unit) {
  if (unit === UNITS.CELSIUS) {
    return UNITS.FAHRENHEIT;
  } else {
    return UNITS.CELSIUS;
  }
}

export function convertTemperatureTo(value, unit) {
  if (unit === UNITS.CELSIUS) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}

export function isIceTemperature(value, unit) {
  if (unit === UNITS.CELSIUS) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}
