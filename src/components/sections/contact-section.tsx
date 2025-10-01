import React from "react";
import { ProfileCard } from "../game-ui/profile-card"; // Import the new ProfileCard

export const ContactSection = () => {
  // Hardcoded data for the profile card as per the image
  const profileData = {
    name: "Shahina Fathima",
    title: "Data Engineer",
    email: "shahinaf93@gmail.com",
    phone: "+91 9944114973|+971 503933689",
    location: "Chennai,India|Abudhabi,UAE",
    // You can add an avatarUrl here if you have an image:
    // avatarUrl: "/path/to/your/hijab-avatar.png",
    githubUrl: "https://github.com/Shahinaf23", // Replace with actual GitHub URL
    linkedinUrl: "https://www.linkedin.com/in/shahina-fathima-9550981ba/", // Replace with actual LinkedIn URL
    twitterUrl: "https://twitter.com/shahina", // Replace with actual Twitter URL
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-4">
      <h2 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mb-8">Contact: Let's Connect!</h2>
      <ProfileCard {...profileData} />
    </div>
  );
};