import { z } from "zod";

const bpFormSchema = z.object({
  lower: z
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
    .pipe(z.number().int().positive().max(200, "Lower value cannot be more than 200 mmHg")),
    higher: z
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
    .pipe(z.number().int().positive().max(500, "Higher value cannot be more than 500 mmHg")),
});

export default bpFormSchema;
