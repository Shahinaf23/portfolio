"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Calendar, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  dob: string;
  location: string;
  avatarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export const ProfileCard = ({
  name,
  title,
  email,
  phone,
  dob,
  location,
  avatarUrl,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}: ProfileCardProps) => {
  return (
    <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-xl flex flex-col items-center text-white animate-fade-in">
      <Avatar className="w-28 h-28 mb-6 border-2 border-orange-500">
        {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
        <AvatarFallback className="bg-orange-500 text-white text-4xl font-bold">SF</AvatarFallback>
      </Avatar>

      <h3 className="text-3xl font-bold mb-2">{name}</h3>
      <div className="bg-gray-700 text-gray-200 px-4 py-1 rounded-full text-sm mb-8">
        {title}
      </div>

      <div className="w-full space-y-4 text-lg">
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-orange-400" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-orange-400" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-4">
          <Calendar className="w-6 h-6 text-orange-400" />
          <span>{dob}</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="w-6 h-6 text-orange-400" />
          <span>{location}</span>
        </div>
      </div>

      <div className="w-full border-t border-gray-700 mt-8 pt-6 flex justify-center space-x-6">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
            <Github className="w-7 h-7" />
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
            <Linkedin className="w-7 h-7" />
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
            <Twitter className="w-7 h-7" />
          </a>
        )}
      </div>
    </div>
  );
};