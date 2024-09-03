#!/usr/bin/env node

const shell = require('shelljs');
const path = require('path');

// Determine the target Next.js project directory
const nextJsApiDir = path.join(process.cwd(), 'app', 'api', 'generate-waveform');
const apiRoutePath = path.join(nextJsApiDir, 'route.ts');

const apiRouteContent = `
import fluentFfmpeg from 'fluent-ffmpeg';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';

export default function GET(req: NextRequest) {
  const param = new URL(req.url);
  const url = param.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing URL query parameter', status: 400 });
  }

  const waveformPath = path.join(process.cwd(), 'public', 'waveform.png');

  const promise = new Promise((resolve, reject) => {
    fluentFfmpeg(audioUrl)
      .audioFilters('aformat=channel_layouts=stereo')
      .outputOptions('-filter_complex', 'aformat=channel_layouts=stereo,showwavespic=s=600x120')
      .output(waveformPath)
      .on('end', () => {
        resolve(NextResponse.json({ message: "Waveform image available at public/waveform.png" }, { status: 200 }));
      })
      .on('error', (err) => {
        reject(NextResponse.json({ error: err }, { status: 500 }));
      })
      .run();
  });

  return promise;
}
`;

// Create the API directory if it doesn't exist
if (!shell.test('-e', nextJsApiDir)) {
  shell.mkdir('-p', nextJsApiDir);
}

// Write the API route file
shell.ShellString(apiRouteContent.trim()).to(apiRoutePath);

console.log('API route created at:', apiRoutePath);