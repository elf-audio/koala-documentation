---
layout: chapter
title: Specifications
title_zh: "技术规格"
order: 12
description: >-
  Koala Sampler technical specifications: audio resolution, pad and sequence counts, import formats and supported platforms.
---

- Vertical and horizontal modes  
   <span lang="zh-CN">支持竖屏和横屏</span>
- Adaptive UI, works on multitudes of screen sizes  
   <span lang="zh-CN">界面可适配多种屏幕尺寸</span>
- 32 bit signal processing  
   <span lang="zh-CN">32 位信号处理</span>
- Export as WAV (8 to 32 bit), FLAC or AAC at 22.05, 44.1, 48 or 96 kHz  
   <span lang="zh-CN">支持以 22.05、44.1、48 或 96 kHz 导出为 WAV（8–32 位）、FLAC 或 AAC</span>
- 64 pads for samples  
   <span lang="zh-CN">64 个采样打击垫</span>
- 32 sequence slots  
   <span lang="zh-CN">32 个音序槽位</span>
- Unlimited length for each sequence  
   <span lang="zh-CN">每条音序的长度不限</span>
- Samples of any length, limited only by your device’s memory  
   <span lang="zh-CN">采样长度仅受设备内存限制</span>
- Pads can hold samples, the Quokka synth, Chopper instruments, MIDI out or plugin instruments  
   <span lang="zh-CN">打击垫可承载采样、Quokka 合成器、Chopper 乐器、MIDI 输出或插件乐器</span>
- 16 live effects and over 30 mixer effects  
   <span lang="zh-CN">16 种实时效果，混音器提供 30 多种效果</span>
- System audio capture (SYSTEM input) on iOS 27+, macOS 14.2+, Android 10+ and Windows  
   <span lang="zh-CN">iOS 27 及以上、macOS 14.2 及以上、Android 10 及以上和 Windows 支持录制系统音频（SYSTEM 输入）</span>
- Per-sample quality control (sample rate & HI-QUALITY / CLASSIC / RETRO interpolation)  
   <span lang="zh-CN">可单独调节每个采样的音质，包括采样率和插值模式（HI-QUALITY 高质量／CLASSIC 经典／RETRO 复古）</span>
- Plugin hosting (standalone): AUv3 on iOS, Audio Unit, CLAP and VST3 on macOS, CLAP and VST3 on Windows and Linux  
   <span lang="zh-CN">独立应用可加载插件：iOS 支持 AUv3，macOS 支持 Audio Unit、CLAP 和 VST3，Windows 和 Linux 支持 CLAP 和 VST3</span>
- DAW plugin versions: AUv3 on iOS; Audio Unit and VST3 on macOS, VST3 on Windows, and CLAP and VST3 on Linux (including Koala FX)  
   <span lang="zh-CN">DAW 插件版本：iOS 提供 AUv3，macOS 提供 Audio Unit 和 VST3，Windows 提供 VST3，Linux 提供 CLAP 和 VST3（包含 Koala FX）</span>
- Import MIDI files, export sequences as MIDI  
   <span lang="zh-CN">可导入 MIDI 文件，也可将音序导出为 MIDI</span>
- Songs of any size limited only by your device’s storage  
   <span lang="zh-CN">工程大小仅受设备存储空间限制</span>
- Import any audio file your device can play back with the default media player  
   <span lang="zh-CN">可导入设备默认媒体播放器能够播放的任何音频文件</span>
- Import audio from video files your device can play back with the default media player  
   <span lang="zh-CN">可从设备默认媒体播放器能够播放的视频文件中导入音频</span>
- Runs on iOS, Android (ARM and x86_64 Chromebooks), macOS (Apple Silicon and Intel), Windows (64-bit) and Linux (x86_64 and arm64 / Raspberry Pi)  
   <span lang="zh-CN">支持 iOS、Android（ARM 和 x86_64 Chromebook）、macOS（Apple 芯片和 Intel）、Windows（64 位）以及 Linux（x86_64 和 arm64／树莓派）</span>

PLEASE NOTE: there are some features that aren't available on all platforms. If unsure, consult the app description in the appropriate app store or get in touch at <https://www.koalasampler.com/contact>  
<span lang="zh-CN">请注意，部分功能仅在特定平台提供。如需确认，请查看对应应用商店中的应用说明，或通过 <https://www.koalasampler.com/contact> 联系开发者。</span>

<h2 id="import-formats">Import formats<br><span lang="zh-CN">导入格式</span></h2>

Koala decodes WAV, AIFF, MP3 and FLAC itself, so these load everywhere. The other formats are decoded by your device's operating system, which is why the list differs between platforms.  
<span lang="zh-CN">Koala 可自行解码 WAV、AIFF、MP3 和 FLAC，因此这些格式可在所有平台导入。其余格式由设备操作系统解码，支持情况因平台而异。</span>

| Format<br><span lang="zh-CN">格式</span> | File extensions<br><span lang="zh-CN">文件扩展名</span> | iOS / macOS | Android | Windows | Linux |
|---|---|---|---|---|---|
| WAV | .wav | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> |
| AIFF | .aif .aiff | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> |
| MP3 | .mp3 | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> |
| FLAC | .flac | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> |
| AAC (MPEG-4) | .m4a .mp4 | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | No<br><span lang="zh-CN">不支持</span> |
| AAC (ADTS) | .aac | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | No<br><span lang="zh-CN">不支持</span> |
| 3GP | .3gp | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | No<br><span lang="zh-CN">不支持</span> |
| Ogg Vorbis | .ogg | Yes, on recent iOS and macOS versions<br><span lang="zh-CN">支持（较新的 iOS 和 macOS 版本）</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> | Yes<br><span lang="zh-CN">支持</span> |
| Ogg Opus | .opus .oga | Yes, on recent iOS and macOS versions<br><span lang="zh-CN">支持（较新的 iOS 和 macOS 版本）</span> | Yes<br><span lang="zh-CN">支持</span> | No<br><span lang="zh-CN">不支持</span> | No<br><span lang="zh-CN">不支持</span> |
| AMR | .amr | No<br><span lang="zh-CN">不支持</span> | Yes<br><span lang="zh-CN">支持</span> | No<br><span lang="zh-CN">不支持</span> | No<br><span lang="zh-CN">不支持</span> |
| WMA | .wma | No<br><span lang="zh-CN">不支持</span> | No<br><span lang="zh-CN">不支持</span> | Yes<br><span lang="zh-CN">支持</span> | No<br><span lang="zh-CN">不支持</span> |
| CAF | .caf | Yes<br><span lang="zh-CN">支持</span> | No<br><span lang="zh-CN">不支持</span> | No<br><span lang="zh-CN">不支持</span> | No<br><span lang="zh-CN">不支持</span> |
| Audio from video<br><span lang="zh-CN">视频中的音频</span> | .mp4 .m4v .mov | Yes<br><span lang="zh-CN">支持</span> | .mp4 only<br><span lang="zh-CN">仅 .mp4</span> | .mp4 only<br><span lang="zh-CN">仅 .mp4</span> | No<br><span lang="zh-CN">不支持</span> |

Any sample rate and bit depth can be imported, the audio is converted to the song's sample rate as it loads. Files with more than two channels are mixed down to stereo.  
<span lang="zh-CN">支持导入任意采样率和位深的音频。加载时，Koala 会将音频转换为当前工程所用的采样率。超过两个声道的文件会被缩混为立体声。</span>

If a file in one of these formats will not load, it may use a codec your device has no decoder for. Converting it to WAV or FLAC first will always work.  
<span lang="zh-CN">如果表中所列格式的文件无法导入，可能是设备缺少相应的解码器。先转换为 WAV 或 FLAC 即可导入。</span>
