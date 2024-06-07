import { object, number, InferType } from "yup";

export const PMultiplierSchema = object({
  start: number().required(),
  end: number().required(),
  soilLayer1: number().required(),
  soilLayer2: number().required(),
  soilLayer3: number().required(),
  soilLayer4: number().required(),
  soilLayer5: number().required(),
  soilLayer6: number().required(),
});

export type PMultiplier = InferType<typeof PMultiplierSchema>;

export const PMultiplierFormNames: Record<
  keyof PMultiplier,
  keyof PMultiplier
> = {
  start: "start",
  end: "end",
  soilLayer1: "soilLayer1",
  soilLayer2: "soilLayer2",
  soilLayer3: "soilLayer3",
  soilLayer4: "soilLayer4",
  soilLayer5: "soilLayer5",
  soilLayer6: "soilLayer6",
};
