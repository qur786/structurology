import { object, string, number, InferType } from "yup";

export const CorroisonSchema = object({
  considerMethod: string().required(),
  resistivity: number().required(),
  designLife: number().required(),
  zincCoating: number().required(),
});

export type Corroison = InferType<typeof CorroisonSchema>;

export const CorroisonFormNames: Record<keyof Corroison, keyof Corroison> = {
  considerMethod: "considerMethod",
  resistivity: "resistivity",
  designLife: "designLife",
  zincCoating: "zincCoating",
};
