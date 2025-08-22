"use client";
import { JSX } from "react";
import { Cards } from "nextra/components";
import { BookAudio, BookUp2 } from "lucide-react";
import { AudioLooper } from "../components/AudioLooper";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://react-audio-docs.vercel.app"
    : "http://localhost:3000";

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center max-h-fit max-w-4xl mx-auto text-center px-5 mt-50 h-screen gap-10 mb-50">
      <h1 className="text-4xl font-bold">Welcome to React Audio</h1>
      <p className="mt-4 xl:text-lg">
        React audio is a modern audio library for React applications, providing
        components for audio playback, visualization, and manipulation. It is
        designed to be easy to use and integrate into your React projects.
      </p>
      <Cards className="w-full max-w-md">
        <div className="w-full flex flex-col items-center justify-stretch gap-6 2xl:flex-row">
          <Cards.Card
            title="Documentation"
            href={`${BASE_URL}/docs`}
            icon={<BookAudio size={24} />}
            arrow
            className="w-2/3 items-center"
          />
          <Cards.Card
            className="w-2/3 items-center"
            title="Changelog"
            href={`${BASE_URL}/docs/changelog`}
            icon={<BookUp2 size={24} />}
          />
        </div>
        <div className="w-full flex flex-col xl:flex-row items-center justify-stretch gap-6"></div>
      </Cards>
      <div>
        <AudioLooper />
      </div>
    </div>
  );
}
