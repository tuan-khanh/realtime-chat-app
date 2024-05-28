"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container component="section" className="flex items-center justify-center">
      <Grid
        container
        gap={4}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item xs={12} className="text-center">
          <FormControl
            className="w-full max-w-sm"
            variant="outlined"
            error={errors.username && false}
          >
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput
              id="username"
              label="Username"
              defaultValue={""}
              required
              {...register("username", { required: true })}
            ></OutlinedInput>
          </FormControl>
        </Grid>
        <Grid item xs={12} className="text-center">
          <FormControl
            className="w-full max-w-sm"
            variant="outlined"
            error={errors.password && false}
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              defaultValue={""}
              type={showPassword ? "text" : "password"}
              required
              {...register("password", { required: true })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      {errors.username?.message && ""}
      {errors.password?.message && ""}
    </Container>
  );
}

export default LoginPage;
