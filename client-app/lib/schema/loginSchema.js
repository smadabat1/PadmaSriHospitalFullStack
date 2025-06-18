import { z } from "zod";

const loginFormSchema = z.object({
  phoneNumber: z
    .string()
    .length(10, "Please enter a valid phone number")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid phone number"),
});

export default loginFormSchema;
