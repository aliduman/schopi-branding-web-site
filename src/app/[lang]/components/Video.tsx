"use client";
import { useState } from "react";
import Container from "../components/Container";
import Dictionary from "@/app/[lang]/dictionary";

interface VideoProps {
  videoId: string;
  dict: Dictionary;
}

export function Video({ videoId, dict }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <Container>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-schopiColor-primary to-schopiColor-primary-100">
        {!playVideo && (
          <button
            onClick={() => setPlayVideo(!playVideo)}
            className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16  lg:w-28 lg:h-28"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">
                {dict.videoSection.playButtonText}
            </span>
          </button>
        )}
        {playVideo && (
          /*<iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full aspect-video"
          ></iframe>*/

            /*Coming Soon Template*/
            <div className="flex items-center justify-center w-full h-full text-white">
              <h2 className="text-3xl font-bold">
                    {dict.videoSection.comingSoonButtonText}
              </h2>
            </div>
        )}
      </div>
    </Container>
  );
}
