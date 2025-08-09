"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BsSendFill } from "react-icons/bs";
import { toast } from 'sonner';

const Contact = () => {
    const successSound = useRef(null);
    const errorSound = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            successSound.current = new Audio("/sounds/success.mp3");
            errorSound.current = new Audio("/sounds/error.mp3");
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let message = e.target.message.value;

        if (name && email && message) {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "3357d083-5d87-47c8-999d-f69d06e467ad",
                    name,
                    email,
                    message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                successSound.current?.play();
                toast("Message sent successfully!", {
                    style: { background: "green", color: "white" }
                });
                e.target.reset();
            } else {
                errorSound.current?.play();
                toast("Failed to send message!", {
                    style: { background: "red", color: "white" }
                });
            }
        } else {
            errorSound.current?.play();
            toast("Fill in all fields", {
                style: { background: "orange", color: "white" }
            });
        }
    }

    return (
        <div className='md:px-28 max-w-full min-h-screen md:p-14 p-7 bg-white dark:bg-black flex items-center justify-center' id='contact' data-aos="fade-up">
            <Card className="w-full max-w-sm bg-white dark:bg-black shadow-2xl shadow-blue-300">
                <CardHeader className="text-center" data-aos="fade-left">
                    <CardTitle className="text-3xl font-semibold shadow-2xl shadow-indigo-600">Contact Me</CardTitle>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2" data-aos="fade-right">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" name="name" placeholder="Enter your name" required />
                            </div>
                            <div className="grid gap-2" data-aos="fade-right">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" name="email" placeholder="email@gmail.com" required />
                            </div>
                            <div className="grid gap-2" data-aos="fade-left">
                                <Label htmlFor="message">Why contact me?</Label>
                                <Textarea name="message" required placeholder="Type your message here." />
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="flex-col gap-2" data-aos="fade-down">
                        <Button type="submit" className="w-full cursor-pointer">
                            Send <BsSendFill className="ml-2" />
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default Contact;
