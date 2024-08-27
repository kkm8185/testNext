import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const sleep = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomElementFromArray(arr: any[]) {
  const len = arr?.length;
  return arr[getRandomInt(0, len - 1)];
}
export function chunkArray(arr: any[], size: number) {
  const resultArray = [];
  let index = 0;
  while (index < arr.length) {
    resultArray.push(arr.slice(index, size + index));
    index += size;
  }
  return resultArray;
}
