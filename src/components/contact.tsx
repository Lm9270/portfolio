"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(2, "Le nom est requis"),
    email: z.string().email("Email invalide"),
    message: z.string().min(10, "Le  message doit contenir entre 10 et 10 000 caractères"),
}); 

type ContactFormValues = z.infer<typeof contactSchema>; 

function Contact() {
    const [isSubmited, setIsSubmited] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: "", email: "", message: ""},
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
      
          if (!response.ok) throw new Error("Erreur lors de l'envoi du message");
      
          alert("Votre message a bien été envoyé"); 
          setIsSubmited(true);
          form.reset();

        } catch (error) {
          console.error("Erreur :", error);
          alert("Erreur lors de l'envoi du message"); 
        }
      };

    return (
        <div className="">
             <h2 id="contact" className="text-white text-5xl font-bold mb-8 text-center">📩 Contactez-moi</h2>
            <div className="border-white border-2 p-10 bg-custom-gradient2 shadow-lg shadow-blue-200 rounded-lg mb-10">
    
            {isSubmited && (
            <p className="text-green-600 text-center font-medium">Merci pour votre message !</p>
            )}
    
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[60%] m-auto">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem className="relative">
                    <FormLabel className="text-lg">Nom / prénom</FormLabel>
                    <FormControl>
                        <Input className="bg-white border-black border-1" placeholder="Votre nom" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
    
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="relative">
                    <FormLabel className="text-lg">Email</FormLabel>
                    <FormControl>
                        <Input className="bg-white border-black border-1" type="email" placeholder="Votre email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
    
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-lg">Message</FormLabel>
                    <FormControl>
                        <Textarea className="bg-white border-black border-1 max-h-30" placeholder="Votre message..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
    
                <Button type="submit" className="w-[30%] text-lg bg-gray-200 text-black border-1 border-black hover:border-blue-500 hover:text-blue-500 hover:bg-gray-250" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Envoi..." : "Envoyer"}
                </Button>
            </form>
            </Form>
        </div>
    </div>

    );

}
 export default Contact; 