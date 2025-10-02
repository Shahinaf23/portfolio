"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react"; // Import Loader2 for a loading spinner
import { cn } from "@/lib/utils";

interface VideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description: string;
}

export const VideoDialog = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
}: VideoDialogProps) => {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset state when dialog opens/closes
  useEffect(() => {
    if (isOpen) {
      setVideoError(false);
      setIsLoading(true);
    }
  }, [isOpen]);

  const handleVideoError = () => {
    setVideoError(true);
    setIsLoading(false);
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-yellow-300">{title}</DialogTitle>
          <DialogDescription className="text-gray-300">{description}</DialogDescription>
        </DialogHeader>
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {isLoading && !videoError && (
            <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
          )}
          {videoError ? (
            <div className="text-white p-4 text-center">
              <p>Failed to load video. Please ensure the video file is valid and accessible.</p>
              <p className="text-sm text-gray-400 mt-2">Path: {videoUrl}</p>
            </div>
          ) : videoUrl ? (
            <video
              src={videoUrl}
              controls
              autoPlay
              className={cn("w-full h-full object-contain", isLoading ? "hidden" : "block")}
              onError={handleVideoError}
              onLoadedData={handleVideoLoaded}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="text-white">Video URL not provided.</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};