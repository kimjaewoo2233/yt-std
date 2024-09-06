import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @param ms 1000 1초 (await sleep(1000);)
 * @returns ms시간이 흐룬 후 setTimeout에 의해서 resolve가 된다.
 */
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
