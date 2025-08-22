import { useEffect } from "react";
import { Button, VolumeSlider } from "../ui";
import { Colors, Icons } from "../../util";
import { useAudioLooper, LoopTrack } from "../../hooks/useAudioLooper";

export interface AudioLooperProps {
  className?: string;
  maxTracks?: number;
  defaultLoopDuration?: number;
  color?: string;
}

interface TrackControlsProps {
  track: LoopTrack;
  isRecording: boolean;
  currentTime: number;
  loopDuration: number;
  color: string;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onTogglePlayback: () => void;
  onClear: () => void;
  onVolumeChange: (volume: number) => void;
  onRemove: () => void;
}

function TrackControls({
  track,
  isRecording,
  currentTime,
  loopDuration,
  color,
  onStartRecording,
  onStopRecording,
  onTogglePlayback,
  onClear,
  onVolumeChange,
  onRemove,
}: TrackControlsProps) {
  const progress = (currentTime / loopDuration) * 100;
  const canRecord = !isRecording && !track.isRecording;
  const hasAudio = Boolean(track.audioUrl);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px",
      border: `1px solid ${track.isPlaying ? color : "#333"}`,
      borderRadius: 8,
      background: track.isRecording ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.2)",
      width: "100%",
    }}>
      {/* Main Controls Row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        flexWrap: "wrap",
      }}>
        {/* Record Button */}
        <Button
          onClick={track.isRecording ? onStopRecording : onStartRecording}
          disabled={!canRecord && !track.isRecording}
          title={track.isRecording ? "Stop Recording" : "Record"}
          style={{ minWidth: 40, height: 40 }}
        >
          {track.isRecording ? <Icons.Stop /> : <Icons.Mic />}
        </Button>

        {/* Play/Pause Button */}
        <Button
          onClick={onTogglePlayback}
          disabled={!hasAudio}
          title={track.isPlaying ? "Pause" : "Play"}
          style={{ minWidth: 40, height: 40 }}
        >
          {track.isPlaying ? <Icons.Pause /> : <Icons.Play />}
        </Button>

        {/* Clear Button */}
        <Button
          onClick={onClear}
          disabled={!hasAudio}
          title="Clear Track"
          style={{ minWidth: 40, height: 40 }}
        >
          <Icons.Trash />
        </Button>

        {/* Remove Button */}
        <Button
          onClick={onRemove}
          title="Remove Track"
          style={{ minWidth: 40, height: 40 }}
        >
          <Icons.X />
        </Button>
      </div>

      {/* Progress Bar */}
      <div style={{
        height: 8,
        background: "#333",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}>
        {track.isPlaying && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${progress}%`,
              background: color,
              transition: "width 0.1s linear",
            }}
          />
        )}
        {hasAudio && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
        )}
      </div>

      {/* Volume Control */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
        <div style={{ width: 120 }}>
          <VolumeSlider
            size={16}
            color={color}
            value={track.volume}
            onVolumeInput={onVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * AudioLooper component
 * - Multi-track loop recording and playback
 * - Configurable loop duration
 * - Individual track controls (record, play, volume, clear)
 * - Master controls for all tracks
 * - Visual progress indicators
 */
export function AudioLooper({
  className,
  maxTracks = 8,
  defaultLoopDuration = 4,
  color = Colors.primary,
}: AudioLooperProps) {
  const {
    tracks,
    isRecording,
    masterVolume,
    loopDuration,
    currentTime,
    addTrack,
    removeTrack,
    startRecording,
    stopRecording,
    togglePlayback,
    clearTrack,
    setTrackVolume,
    setMasterVolume,
    setLoopDuration,
    startAllTracks,
    stopAllTracks,
    clearAllTracks,
  } = useAudioLooper();

  // Initialize loop duration on mount
  useEffect(() => {
    setLoopDuration(defaultLoopDuration);
  }, [defaultLoopDuration, setLoopDuration]);



  const canAddTrack = tracks.length < maxTracks;
  const hasAnyAudio = tracks.some(t => t.audioUrl);
  const hasAnyPlaying = tracks.some(t => t.isPlaying);

  return (
    <div className={className} style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: 16,
      border: "1px solid #333",
      borderRadius: 8,
      background: "rgba(0, 0, 0, 0.1)",
      maxWidth: "100%",
      overflow: "hidden",
    }}>
      {/* Header Controls */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        paddingBottom: 16,
        borderBottom: "1px solid #333",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: "bold", minWidth: 100 }}>Loop Duration:</span>
          <input
            type="range"
            min="1"
            max="16"
            step="0.5"
            value={loopDuration}
            onChange={(e) => {
              const newDuration = parseFloat(e.target.value);
              setLoopDuration(newDuration);
            }}
            style={{
              width: 120,
              height: 20,
              WebkitAppearance: "none",
              appearance: "none",
              background: "#333",
              borderRadius: 10,
              outline: "none",
            }}
            title="Loop Duration"
            aria-label="Loop Duration in seconds"
            className="cursor-pointer"
          />
          <span style={{ minWidth: 40 }}>{loopDuration}s</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: "bold", minWidth: 100 }}>Master Volume:</span>
          <div style={{ width: 100 }}>
            <VolumeSlider
              size={20}
              color={color}
              value={masterVolume}
              onVolumeInput={setMasterVolume}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Master Controls */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 12,
        paddingBottom: 16,
        borderBottom: "1px solid #333",
      }}>
        <Button
          onClick={addTrack}
          disabled={!canAddTrack}
          title="Add Track"
          className="cursor-pointer"
        >
          <Icons.Plus /> Add Track
        </Button>

        <Button
          onClick={hasAnyPlaying ? stopAllTracks : startAllTracks}
          disabled={!hasAnyAudio}
          title={hasAnyPlaying ? "Stop All" : "Play All"}
          className="cursor-pointer"
        >
          {hasAnyPlaying ? <Icons.Pause /> : <Icons.Play />}
          {hasAnyPlaying ? "Stop All" : "Play All"}
        </Button>

        <Button
          onClick={clearAllTracks}
          disabled={!hasAnyAudio}
          title="Clear All Tracks"
          className="cursor-pointer"
        >
          <Icons.Trash /> Clear All
        </Button>
      </div>

      {/* Tracks */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {tracks.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: 32,
            color: "#666",
            fontStyle: "italic",
          }}>
            No tracks yet. Click &quot;Add Track&quot; to get started.
          </div>
        ) : (
          tracks.map((track, index) => (
            <div key={track.id} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              width: "100%",
            }}>
              <div style={{
                fontWeight: "bold",
                color: track.isPlaying ? color : "#666",
                fontSize: "1.1em",
                textAlign: "center",
              }}>
                Track {index + 1}
              </div>
              <div style={{
                width: "100%",
                maxWidth: 400,
                display: "flex",
                justifyContent: "center",
              }}>
                <TrackControls
                  track={track}
                  isRecording={isRecording}
                  currentTime={currentTime}
                  loopDuration={loopDuration}
                  color={color}
                  onStartRecording={() => startRecording(track.id)}
                  onStopRecording={() => stopRecording(track.id)}
                  onTogglePlayback={() => togglePlayback(track.id)}
                  onClear={() => clearTrack(track.id)}
                  onVolumeChange={(volume) => setTrackVolume(track.id, volume)}
                  onRemove={() => removeTrack(track.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Status Display */}
      {(isRecording || hasAnyPlaying) && (
        <div style={{
          textAlign: "center",
          padding: 8,
          background: "rgba(0, 0, 0, 0.2)",
          borderRadius: 4,
          fontSize: "0.9em",
        }}>
          {isRecording && <span style={{ color: "red" }}>● Recording...</span>}
          {hasAnyPlaying && (
            <span style={{ color: color }}>
              Playing • {currentTime.toFixed(1)}s / {loopDuration}s
            </span>
          )}
        </div>
      )}
    </div>
  );
}
