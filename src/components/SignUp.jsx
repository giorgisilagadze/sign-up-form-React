import {
  OfferDiv,
  Span,
  SignUpDiv,
  StyledInput,
  StyledSubmit,
} from "../styled-components/SignUp.Styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup
      .string()
      .required("First Name cannot be empty")
      .matches(/^[a-zA-Z]+$/, "Must contain only Latin letters"),
    lastName: yup
      .string()
      .required("Last Name cannot be empty")
      .matches(/^[a-zA-Z]+$/, "Must contain only Latin letters"),
    email: yup
      .string()
      .required("Email cannot be empty")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/,
        "Looks like this is not an email"
      ),
    password: yup
      .string()
      .required("Password cannot be empty")
      .min(8, "Password must contain at least 8 characters")
      .max(20, "Password must contain a maximum of 20 characters"),
  })
  .required();

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <OfferDiv>
        <Span>Try it free 7 days</Span> then $20/mo. thereafter
      </OfferDiv>
      <SignUpDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="text"
            placeholder="First Name"
            {...register("firstName")}
            border={errors.firstName ? "#FF7979" : "#DEDEDE"}
          />
          <p>{errors.firstName?.message}</p>

          <StyledInput
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            border={errors.lastName ? "#FF7979" : "#DEDEDE"}
          />
          <p>{errors.lastName?.message}</p>

          <StyledInput
            type="email"
            placeholder="Email Address"
            {...register("email")}
            border={errors.email ? "#FF7979" : "#DEDEDE"}
          />
          <p>{errors.email?.message}</p>

          <StyledInput
            type="password"
            placeholder="Password"
            {...register("password")}
            border={errors.password ? "#FF7979" : "#DEDEDE"}
          />
          <p>{errors.password?.message}</p>

          <StyledSubmit>CLAIM YOUR FREE TRIAL</StyledSubmit>
        </form>
      </SignUpDiv>
    </div>
  );
}
