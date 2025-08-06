"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BsSendFill } from "react-icons/bs";

const Contact = () => {
    return (
        <div className='md:px-28 max-w-full min-h-screen md:p-14 p-7 bg-white dark:bg-black flex items-center justify-center' id='contact'>
            {/* <div className='bg-blue-500 w-full p-6'> */}
                <Card className="w-full max-w-sm">
                    <CardHeader className="text-center">
                        <CardTitle>Contact Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="email@gmail.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Why contact me ?</Label>
                                    </div>
                                     <Textarea placeholder="Type your message here." />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Send <BsSendFill />
                        </Button>
                    </CardFooter>
                </Card>
            {/* </div> */}
        </div>
    )
}

export default Contact
