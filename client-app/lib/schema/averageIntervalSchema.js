import { z } from "zod";

const averageIntervalFormSchema = z.object({
  averageValue: z
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
    .pipe(z.number().int().positive().max(200, "Interval cannot be more than 200 days")),
});

export default averageIntervalFormSchema;
