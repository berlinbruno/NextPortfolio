"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_48yhtud",
        "template_0j5cufb",
        form.current,
        "jSyvCgZFdcfBCNywY"
      )
      .then(
        (result) => {
          setSending(false);
          console.log(result.text);
        },
        (error) => {
          setSending(false);
          console.log(error.text);
        }
      );
  };

  return (
    <form className=" flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
      {/* input */}
      <div className=" relative flex items-center">
        <Input type="text" name="from_name" id="name" placeholder="Name" />
        <User className=" absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className=" relative flex items-center">
        <Input type="email" name="reply_to" id="email" placeholder="Email" />
        <MailIcon className=" absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className=" relative flex items-center">
        <Textarea name="message" placeholder="Type Your Message Here" />
        <MessageSquare className=" absolute top-4 right-6" size={20} />
      </div>
      {/* button */}
      <Button
        className="flex items-center gap-x-1 max-w-[166px]"
        type="submit"
        value="send"
      >
        {sending ? "Sending" : "Let's Talk"}
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};
export default Form;
