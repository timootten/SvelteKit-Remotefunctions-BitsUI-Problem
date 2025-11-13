import { query } from "$app/server";
import z from "zod";

export const getTest = query(z.string(), (input) => {
  return input + (Math.random() * 100).toFixed(0)
});