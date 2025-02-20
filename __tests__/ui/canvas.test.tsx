import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Canvas } from '../../src/components/ui/Canvas';
import React from 'react';

describe('Canvas', () => {
    it('renders without crashing', () => {
        const mockAnalyserNode = {
            getByteFrequencyData: vi.fn(),
            getByteTimeDomainData: vi.fn(),
        };

        const mockAudioContext = {
            createAnalyser: () => mockAnalyserNode,
        };

        vi.stubGlobal('AudioContext', vi.fn(() => mockAudioContext));

        const analyserData = {
            analyser: mockAnalyserNode,
        }

        render(<Canvas role='canvas' analyserData={{
            bufferLength: analyserData.analyser.getByteTimeDomainData.length,
            dataArray: new Uint8Array(analyserData.analyser.getByteTimeDomainData.length),
            analyser: analyserData.analyser as unknown as AnalyserNode,
        }} />);
        expect(screen.getByRole('canvas')).toBeDefined();
    })
});

describe('Canvas', () => {
    it('renders with correct text', () => {
        const mockAnalyserNode = {
            getByteFrequencyData: vi.fn(),
            getByteTimeDomainData: vi.fn(),
        };

        const mockAudioContext = {
            createAnalyser: () => mockAnalyserNode,
        };

        vi.stubGlobal('AudioContext', vi.fn(() => mockAudioContext));

        const analyserData = {
            analyser: mockAnalyserNode,
        }

        render(<Canvas role='canvas' analyserData={{
            bufferLength: analyserData.analyser.getByteTimeDomainData.length,
            dataArray: new Uint8Array(analyserData.analyser.getByteTimeDomainData.length),
            analyser: analyserData.analyser as unknown as AnalyserNode,
        }} />);
        expect(screen.getByRole('canvas')).toBeDefined();
    })
});