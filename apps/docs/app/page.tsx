"use client";
import { JSX } from "react";
import { Cards } from "nextra/components";
import { BookAudio, BookUp2 } from "lucide-react";
import { Waveform } from "../components/Waveform";


const BASE_URL = process.env.NODE_ENV === "production" ?
  "https://react-audio-docs.vercel.app" : "http://localhost:3000";

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
        {/* <Link
          href="/docs"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Get Started ↗
        </Link>
        <Link
          href="/docs/changelog"
          className="mt-6 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Changelog ↗
        </Link> */}
      </Cards>
      {/* <div className="mt-8 w-full pb-10">
        <div className="flex flex-col xl:flex-row gap-6 items-center justify-center w-full">
          <div className="w-2/5 bg-transparent rounded-md shadow drop-shadow-2xl pt-5">
            <Waveform src="/audio/drums.wav" size={420} />
          </div>
          <div className="w-2/5 shadow drop-shadow-2xl pt-5">
            <Spectrogram src={`/audio/drums_2.wav`} colorMap={["#ff0000", "#00ff00", "#0000ff"]} />
          </div>
          <div className="w-2/5 shadow drop-shadow-2xl pt-5">
            <Spectrogram src={`/audio/ah.mp3`} />
          </div>
        </div>
      </div> */}
      <div>
        <Waveform showVolume={false} src="/audio/drums_3.wav" />
      </div>
    </div>
  );
}
