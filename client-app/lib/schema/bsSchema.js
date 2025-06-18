import { z } from "zod";

const bsFormSchema = z.object({
  beforeMeal: z
    .string()
    .min(1, "Please enter a value")
    .transform((value, ctx) => {
      if (!value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Required",
        });
        return z.NEVER;
      }

      const parsed = parseInt(value);
      if (isNaN(parsed)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Must be a valid number",
        });
        return z.NEVER;
      }
      return parsed;
    })
    .pipe(z.number().int().positive().max(1000, "Value cannot be more than 1000 mg/dL")),
  afterMeal: z
    .string()
    .min(1, "Please enter a value")
    .transform((value, ctx) => {
      if (!value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Required",
        });
        return z.NEVER;
      }

      const parsed = parseInt(value);
      if (isNaN(parsed)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Must be a valid number",
        });
        return z.NEVER;
      }
      return parsed;
    })
    .pipe(z.number().int().positive().max(1000, "Value cannot be more than 1000 mg/dL")),
});

export default bsFormSchema;
