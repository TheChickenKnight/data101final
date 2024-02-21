"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import GoogleSignInButton from "../GoogleSignInButton"
import { getSession, signIn } from 'next-auth/react'
 
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form"
import { Input } from "@/ui/input"
import Clink from "@/ui/clink"
 
const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be longer than 8 characters')
})
 
const InputForm = () => {
  
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })
 
  const onSubmit = async data => {
   await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/dashboard'
    });
  }
 
  return (<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <div className="space-y-2">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="something@example.com" type="email" {...field} />
                </FormControl>
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-1/6" type="submit">Log In</Button>
      </form>
      <div className="mx-auto my-4 flex items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">or</div>
      <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
      <p className="test-center text-sm  text-gray-600 mt-2">If you don&apos;t have an account, please&nbsp;
        <Clink href="/auth/signup">Sign up</Clink>
      </p>
    </Form>);
};

export default InputForm;