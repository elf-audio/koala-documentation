---
title: 7.7. Export Options
title_zh: "7.7. 导出选项"
---
<h2 id="77-export-options">7.7. Export Options<br><span lang="zh-CN">7.7. 导出选项</span></h2>
Export menu entries:  
<span lang="zh-CN">导出菜单项目如下。</span>
* SELECTED SAMPLE / SELECTED SAMPLES: export the selected pad, or every pad you have multi-selected with EDIT, as audio files.  
  <span lang="zh-CN">SELECTED SAMPLE／SELECTED SAMPLES（所选采样）：将选中的打击垫，或用 EDIT 多选的所有打击垫，导出为音频文件。</span>
* ALL SAMPLES: export a zipped file with all samples from the song.  
  <span lang="zh-CN">ALL SAMPLES（全部采样）：将工程中的所有采样导出为一个 ZIP 压缩包。</span>
* CURRENT SEQUENCE: export currently selected sequence. Stems option exports a zipped file with an audio file for every sample in the sequence. Mixed option exports a single file. Buses exports one file per mixer bus.  
  <span lang="zh-CN">CURRENT SEQUENCE（当前音序）：导出选中的音序。STEMS 会按采样分别生成音频文件并打包为 ZIP。MIXED 导出单个混缩文件。BUSES 按混音总线分别导出文件。</span>
* ALL SEQUENCES: export all sequences from your song. Stems exports a zipped version with every pad in every sequence. Files are named numerically, with the first number being the number of the sequence. Mixed exports a mixdown per sequence.  
  <span lang="zh-CN">ALL SEQUENCES（全部音序）：导出工程中的所有音序。STEMS 会为每条音序中的各个打击垫生成文件，并打包为 ZIP。文件按数字命名，第一组数字是音序编号。MIXED 会为每条音序导出一个混缩文件。</span>
* SHARE KOALA SONG: export .koala file and share with your other devices and friends. File can be opened in any other version of Koala.  
  <span lang="zh-CN">SHARE KOALA SONG（共享 Koala 工程）：导出 .koala 文件，可发送到其他设备或分享给朋友。文件可在其他版本的 Koala 中打开。</span>
* CURR SEQUENCE MIDI: export the current sequence as a standard MIDI file, for example to continue in a DAW or to drive hardware from another sequencer.  
  <span lang="zh-CN">CURR SEQUENCE MIDI（当前音序 MIDI）：将当前音序导出为标准 MIDI 文件，可在 DAW 中继续编辑，也可用其他音序器驱动硬件。</span>
* ABLETON DRUM RACK: export an ableton drum rack .adg file with all pads in your project. File can be opened in any recent version of Ableton.  
  <span lang="zh-CN">ABLETON DRUM RACK（Ableton 鼓架）：将工程中的所有打击垫导出到 Ableton Drum Rack 的 .adg 文件。近期版本的 Ableton Live 均可打开。</span>
* ABLETON LIVE SET (iOS, macOS, Windows): export either mixed down loops for Ableton Live Lite or individual stems of sequences for paid versions of Ableton Live. This option is ideal if you want to continue working on your song in arrangement mode of Ableton.  
  <span lang="zh-CN">ABLETON LIVE SET（Ableton Live 工程，iOS、macOS、Windows）：可为 Ableton Live Lite 导出混缩循环，也可为付费版 Ableton Live 导出各音序的独立分轨。适合在 Ableton 的编排视图中继续制作。</span>
* GET ABLETON LIVE LITE (iOS): opens a prompt to enter your email address to get a free version of Ableton Live Lite.  
  <span lang="zh-CN">GET ABLETON LIVE LITE（获取 Ableton Live Lite，仅限 iOS）：打开提示框，输入电子邮件地址即可获取免费的 Ableton Live Lite。</span>

The EXPORT window that follows has these settings:  
<span lang="zh-CN">接下来打开的 EXPORT（导出）窗口包含以下设置。</span>
* Type: MIXED, STEMS or BUSES for sequences. RAW or EDITED for samples.  
  <span lang="zh-CN">类型：音序可选 MIXED（混缩）、STEMS（分轨）或 BUSES（按总线）。采样可选 RAW（原始）或 EDITED（编辑后）。</span>
* Format: WAV, FLAC or AAC.  
  <span lang="zh-CN">格式：WAV、FLAC 或 AAC。</span>
* Sample rate: 22.05, 44.1, 48 or 96 kHz. The speaker icon marks the current session's rate. Choosing a different one resamples the export.  
  <span lang="zh-CN">采样率：22.05、44.1、48 或 96 kHz。扬声器图标标记当前工程的采样率。选择其他采样率时，Koala 会对导出的音频重新采样。</span>
* Bit depth: 8, 12, 16, 24 or 32 bit for WAV, a smaller set for FLAC, and AUTO for AAC since it has no fixed bit depth. 16-bit WAV exports use dithering for cleaner low-level audio.  
  <span lang="zh-CN">位深：WAV 可选 8、12、16、24 或 32 位，FLAC 的选项较少。AAC 没有固定位深，因此显示 AUTO。导出 16 位 WAV 时会应用抖动（dithering），改善低电平音频的听感。</span>

Koala remembers your last choices. The default bit depth can also be set in the EXTRAS settings.  
<span lang="zh-CN">Koala 会记住上一次的选择。也可在 EXTRAS（其他）设置中指定默认位深。</span>
