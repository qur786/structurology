import { object, number, InferType, array } from "yup";

const PMultiplierSchema = object({
  start: number().required(),
  end: number().required(),
  soilLayer: number().required(),
});

export const PMultipliersSchema = object({
  input: array().of(PMultiplierSchema).min(1).max(6),
});

type PMultiplier = InferType<typeof PMultiplierSchema>;

export const PMultiplierFormNames: Record<
  keyof PMultiplier,
  keyof PMultiplier
> = {
  start: "start",
  end: "end",
  soilLayer: "soilLayer",
};
