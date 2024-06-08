import { object, number, InferType, array } from "yup";

export const PMultiplierSchema = object({
  start: number().required(),
  end: number().required(),
  soilLayers: array().of(number().required()).max(6),
});

export type PMultiplier = InferType<typeof PMultiplierSchema>;

export const PMultiplierFormNames: Record<
  keyof PMultiplier,
  keyof PMultiplier
> = {
  start: "start",
  end: "end",
  soilLayers: "soilLayers",
};
