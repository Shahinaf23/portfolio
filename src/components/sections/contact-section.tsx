import React from "react";
import { GoalTemple } from "../game-ui/goal-temple";
import { ContactForm } from "../game-ui/contact-form";

export const ContactSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-4">
      <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mb-8">Contact: Reach the Goal Temple!</h2>
      <GoalTemple />
      <div className="mt-8 w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Unlock the Treasure!</h3>
        <ContactForm />
      </div>
    </div>
  );
};