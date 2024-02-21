"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import Clink from "../ui/clink"
import GoogleSignInButton from "../GoogleSignInButton"
import { useRouter } from "next/navigation"
 
const FormSchema = z
    .object({
        username: z.string().min(1, "Username is required").max(30, "Username is too long"),
        email: z.string().min(1, 'Email is required').email('Invalid email'),
        password: z
            .string()
            .min(1, 'Password is required')
            .min(8, 'Password must be longer than 8 characters'),
        confirmPassword: z.string().min(1, "Re-Enter your password")
    })
    .refine((data) => data.password == data.confirmPassword, {
        path: ['confirmPassword'],
        message: "Passwords do not match"
    })
 
export default function InputForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
  })
 
  async function onSubmit(data) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      })
    })
    console.log(response)
    if (response.ok) {
      router.push('/auth/login');
    } else
      console.error("registration failed");
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <div className="space-y-2">
        <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is your individual username.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="something@example.com" type="email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your personal email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*******" {...field} />
                </FormControl>
                <FormDescription>
                  This is your totally secure password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter your password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*******" {...field} />
                </FormControl>
                <FormDescription>
                  Make sure you type it right.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-1/6" type="submit">Sign up</Button>
      </form>
      <div className="mx-auto my-4 flex items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">or</div>
      <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
      <p className="test-center text-sm  text-gray-600 mt-2">If you already have an account, please&nbsp;
        <Clink href="/auth/login">Log in</Clink>
      </p>
    </Form>
  )
}