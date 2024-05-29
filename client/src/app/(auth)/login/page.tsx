"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type LoginInput = {
  username: string;
  password: string;
};

const loginSheme = z.object({
  username: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
});

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
    control,
    setFocus,
  } = useForm<LoginInput>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(loginSheme),
    shouldUnregister: true,
  });

  const onSubmit = (data: any) => console.log(data);
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      component="section"
      className="flex items-center justify-center flex-col"
    >
      <Typography variant="h3" className="mb-10 font-semibold">
        Log in to Chat
      </Typography>
      <Grid
        container
        gap={2}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="bg-white p-8 max-w-sm rounded-lg shadow-lg shadow-indigo-500/40"
      >
        <Grid item xs={12} className="text-center">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <FormControl className="w-full max-w-sm" variant="outlined">
                <TextField
                  {...field}
                  label="Username"
                  required
                  error={errors.username ? true : false}
                  helperText={errors.username?.message}
                  autoFocus
                ></TextField>
              </FormControl>
            )}
          ></Controller>
        </Grid>
        <Grid item xs={12} className="text-center">
          <FormControl className="w-full max-w-sm" variant="outlined">
            <TextField
              {...register("password", { required: true })}
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              required
              InputProps={{
                endAdornment: (
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
                ),
              }}
              error={errors.password ? true : false}
              helperText={errors.username?.message}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            variant="contained"
            type="submit"
            loading={isSubmitting}
            className="w-full"
            disabled={!(isDirty && isValid)}
          >
            Submit
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginPage;
