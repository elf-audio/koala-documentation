---
layout: chapter
title: Specifications
order: 12
description: >-
  Koala Sampler technical specifications: audio resolution, pad and sequence counts, import formats and supported platforms.
---

- Vertical and horizontal modes
- Adaptive UI, works on multitudes of screen sizes
- 32 bit signal processing
- Export as WAV (8 to 32 bit), FLAC or AAC at 22.05, 44.1, 48 or 96 kHz
- 64 pads for samples
- 32 sequence slots
- Unlimited length for each sequence
- Samples of any length, limited only by your device’s memory
- Pads can hold samples, the Quokka synth, Chopper instruments, MIDI out or plugin instruments
- 16 live effects and over 30 mixer effects
- System audio capture (SYSTEM input) on iOS 27+, macOS 14.2+, Android 10+ and Windows
- Per-sample quality control (sample rate & HI-QUALITY / CLASSIC / RETRO interpolation)
- Plugin hosting (standalone): AUv3 on iOS, Audio Unit, CLAP and VST3 on macOS, CLAP and VST3 on Windows and Linux
- DAW plugin versions: AUv3 on iOS; Audio Unit and VST3 on macOS, VST3 on Windows, and CLAP and VST3 on Linux (including Koala FX)
- Import MIDI files, export sequences as MIDI
- Songs of any size limited only by your device’s storage
- Import any audio file your device can play back with the default media player
- Import audio from video files your device can play back with the default media player
- Runs on iOS, Android (ARM and x86_64 Chromebooks), macOS (Apple Silicon and Intel), Windows (64-bit) and Linux (x86_64 and arm64 / Raspberry Pi)

PLEASE NOTE: there are some features that aren't available on all platforms. If unsure, consult the app description in the appropriate app store or get in touch at <https://www.koalasampler.com/contact>

## Import formats

Koala decodes WAV, AIFF, MP3 and FLAC itself, so these load everywhere. The other formats are decoded by your device's operating system, which is why the list differs between platforms.

| Format | File extensions | iOS / macOS | Android | Windows | Linux |
|---|---|---|---|---|---|
| WAV | .wav | Yes | Yes | Yes | Yes |
| AIFF | .aif .aiff | Yes | Yes | Yes | Yes |
| MP3 | .mp3 | Yes | Yes | Yes | Yes |
| FLAC | .flac | Yes | Yes | Yes | Yes |
| AAC (MPEG-4) | .m4a .mp4 | Yes | Yes | Yes | No |
| AAC (ADTS) | .aac | Yes | Yes | Yes | No |
| 3GP | .3gp | Yes | Yes | Yes | No |
| Ogg Vorbis | .ogg | Yes, on recent iOS and macOS versions | Yes | Yes | Yes |
| Ogg Opus | .opus .oga | Yes, on recent iOS and macOS versions | Yes | No | No |
| AMR | .amr | No | Yes | No | No |
| WMA | .wma | No | No | Yes | No |
| CAF | .caf | Yes | No | No | No |
| Audio from video | .mp4 .m4v .mov | Yes | .mp4 only | .mp4 only | No |

Any sample rate and bit depth can be imported, the audio is converted to the song's sample rate as it loads. Files with more than two channels are mixed down to stereo.

If a file in one of these formats will not load, it may use a codec your device has no decoder for. Converting it to WAV or FLAC first will always work.
