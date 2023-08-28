"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import * as z from "zod";

import { ErrorName } from "@/config/errorList";
import { cn } from "@/lib/utils";
import { userAuthSchema, userSignUpSchema } from "@/lib/validations/auth";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/material-ui/Buttons/Button";

import CustomToast from "./ui/custom-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  formType: 1 | 2;
}

type FormData = z.infer<typeof userSignUpSchema>;

/**
 * Set formType = 1 is for Sign In form and
 * Set formType = 2 is for Sign Up form
 */
export function UserAuthForm({
  formType,
  className,
  ...props
}: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver:
      formType === 2
        ? zodResolver(userSignUpSchema)
        : zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    if (formType === 2) {
      try {
        const res = await fetch("/api/users/register", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          return CustomToast({
            title: "Unable to create account",
            description: (await res.json()).message,
          });
        }
      } catch (error: any) {
        return CustomToast({
          title: "Failed to Create",
          description: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    }

    try {
      const signInResult = await signIn("credentials", {
        email: data.email.toLowerCase(),
        password: data.password,
        redirect: false,
      });

      if (signInResult?.error) {
        return CustomToast({
          title: "Something went wrong.",
          description: ErrorName(signInResult?.error),
        });
      }

      if (signInResult?.ok) {
        CustomToast({
          title: "Sign In Successful",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error: any) {
      return CustomToast({
        title: "Failed to Sign In",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          {formType === 2 && (
            <div className="grid gap-1">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                placeholder="Full name"
                type="text"
                autoCapitalize="true"
                autoComplete="name"
                autoCorrect="off"
                disabled={isLoading || isGitHubLoading}
                {...register("name")}
              />
              {errors?.name && (
                <p className="px-1 text-xs text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          <div className="grid gap-1">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="grid gap-1">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register("password")}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {formType === 2 && (
            <div className="grid gap-1">
              <label className="sr-only" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                disabled={isLoading || isGitHubLoading}
                {...register("confirmPassword")}
              />
              {errors?.confirmPassword && (
                <p className="px-1 text-xs text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}

          {formType === 2 ? (
            <button className={cn(buttonVariants({}))} disabled={isLoading}>
              {isLoading && (
                <Icons.loading className="mr-2 h-4 w-4 animate-spin" />
              )}
              {"Sign Up for Account"}
            </button>
          ) : (
            <button className={cn(buttonVariants({}))} disabled={isLoading}>
              {isLoading && (
                <Icons.loading className="mr-2 h-4 w-4 animate-spin" />
              )}
              {"Sign In"}
            </button>
          )}
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2">Or continue with</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({}))}
        onClick={() => {
          setIsGitHubLoading(true);
          signIn("github");
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.loading className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.github className="mr-2 h-4 w-4 fill-on-primary" />
        )}{" "}
        Github
      </button>
      <Toaster />
    </div>
  );
}
