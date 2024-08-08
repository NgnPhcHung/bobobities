"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent form from submitting traditionally
    const mailtoLink = `mailto:${"Eatbobobites@gmail.com"}?subject=${encodeURIComponent(
      "Plan your next event"
    )}&body=${encodeURIComponent(message)}`;
    toast({
      title: "Success",
      description: "Your plan has been sended!",
    });
    window.location.href = mailtoLink; // Trigger the mail client
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 w-[calc(100vw-10rem)] lg:max-w-[900px] flex flex-col items-center"
    >
      <Label className="text-2xl font-bold text-center uppercase drop-shadow-[0_10px_35px_rgba(181,158,158,1)]">
        Plan your next event with us
      </Label>

      <div className="w-full">
        <Label className="text-lg" htmlFor="inputName">
          Name
        </Label>
        <Input
          id="inputName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-full">
        <Label className="text-lg" htmlFor="inputEmail">
          Email
        </Label>
        <Input
          id="inputEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="w-full">
        <Label className="text-lg" htmlFor="inputPhone">
          Phone
        </Label>
        <Input
          id="inputPhone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="w-full">
        <Label className="text-lg" htmlFor="inputMsg">
          Message
        </Label>
        <Textarea
          id="inputMsg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button variant="brand" type="submit">
        Send Email
      </Button>
    </form>
  );
}

export default EmailForm;
