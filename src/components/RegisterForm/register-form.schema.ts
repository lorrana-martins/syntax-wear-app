import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

export const registerUserFormSchema = z
  .object({
    firstName: z
      .string({ error: "O primeiro nome é obrigatório" })
      .trim()
      .min(1, "O primeiro nome é obrigatório"),

    lastName: z
      .string({ error: "O último nome é obrigatório" })
      .trim()
      .min(1, "O último nome é obrigatório"),

    email: z
      .email("Insira um e-mail válido"),
    cpf: z
      .string({ error: "O CPF é obrigatório" })
      .min(1, "O CPF é obrigatório")
      .refine((val) => isValidCPF(val), {
        message: "CPF inválido",
      }),

    birthDate: z
      .string()
      .refine(
        (date) => !isNaN(Date.parse(date)),
        "Data de nascimento inválida"
    ),

    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres"),

    confirmPassword: z
      .string()
      .nonempty("A confirmação de senha é obrigatória"),

    phone: z
      .string()
      .nonempty("Telefone é obrigatório")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // Aponta o erro diretamente para o campo de confirmação
  });

export type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur", // Valida o campo quando o usuário sai dele
    defaultValues: {
      email: "",
      password: ""
    },
    criteriaMode: "all"
  });

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    setError,
    reset,
  }
}