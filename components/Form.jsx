"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Form = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const currentDate = new Date();
  const formattedDateTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_EMAIL_API_KEY}`
      )
      .then(
        (result) => {
          setSending(false);
          console.log(result.text);
          toast(
            <div className="flex flex-col">
              <p className=" text-md">Mail send successfully</p>
              <p>{formattedDateTime}</p>
            </div>
          );
        },
        (error) => {
          setSending(false);
          console.log(error.text);
          toast(
            <div className="flex flex-col">
              <p className=" text-lg font-bold">Mail send failed</p>
              <p>{formattedDateTime}</p>
            </div>
          );
        }
      );
  };

  return (
    <form className=" flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
      {/* input */}
      <div className=" relative flex items-center">
        <Input
          type="text"
          name="from_name"
          id="name"
          placeholder="Name"
          required
          minLength={3}
        />
        <User className=" absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className=" relative flex items-center">
        <Input
          type="email"
          name="reply_to"
          id="email"
          placeholder="Email"
          required
        />
        <MailIcon className=" absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className=" relative flex items-center">
        <Textarea
          name="message"
          placeholder="Type Your Message Here"
          required
          minLength={25}
        />
        <MessageSquare className=" absolute top-4 right-6" size={20} />
      </div>
      {/* button */}
      <Button
        className="flex items-center gap-x-1 max-w-[166px]"
        type="submit"
        value="send"
        disabled={sending}
      >
        {sending ? "Sending" : "Let's Talk"}
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};
export default Form;
