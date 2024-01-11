import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import fsPromises from "fs/promises";
import path from "path";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
