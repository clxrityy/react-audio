"use client";
import { Link } from "nextra-theme-docs";
import { JSX } from "react";
import { Waveform } from "@clxrity/react-audio";

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center max-h-fit max-w-4xl mx-auto text-center px-5 mt-50 h-screen gap-10">
      <h1 className="text-4xl font-bold">Welcome to React Audio</h1>
      <p className="mt-4 xl:text-lg">
        React audio is a modern audio library for React applications, providing
        components for audio playback, visualization, and manipulation. It is
        designed to be easy to use and integrate into your React projects.
      </p>
      <div className="w-full flex flex-col items-center justify-center gap-4 xl:flex-row">
        <Link
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
        </Link>
      </div>
      <div className="mt-8 w-full pb-10">
        <div className="flex flex-col xl:flex-row gap-6 items-center justify-center w-full">
          <div className="w-2/5 bg-gradient-to-r from-gray-300/10 to-gray-500/25 bg-transparent rounded-md shadow drop-shadow-2xl pt-5">
            <Waveform src="/drums.wav" color="#ff0000" size={420} />
          </div>
          <div className="w-2/5 bg-gradient-to-r from-gray-300/25 to-gray-500/10 bg-transparent rounded-md shadow drop-shadow-2xl pt-5">
            <Waveform src="/drums_2.wav" color="#00ff00" size={420} />
          </div>
        </div>
      </div>
    </div>
  );
}
