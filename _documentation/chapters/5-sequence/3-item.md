---
title: 5.3. Tempo Menu
title_zh: "5.3. 速度菜单"
---

<h2 id="53-tempo-menu">5.3. Tempo Menu<br><span lang="zh-CN">5.3. 速度菜单</span></h2>

{% flexible_image link="sequence-bpm-menu.png" alt="BPM Tempo" %}

Tap the metronome button to enable or disable metronome sound.  
<span lang="zh-CN">点击节拍器按钮，可打开或关闭节拍器声音。</span>

Double tap on tempo to open TEMPO MENU.  
<span lang="zh-CN">双击速度数值，打开 TEMPO MENU（速度菜单）。</span>

* TEMPO: tap and drag within the tempo to gradually change the tempo. Fine dragging changes tempo in decimal increments. Fast dragging changes tempo in full increments.  
  <span lang="zh-CN">TEMPO（速度）：按住速度数值并拖动可逐步调整。缓慢拖动按小数步进，快速拖动按整数步进。</span>
* -, TAP, +: change tempo by 1 bpm with the -/+, tap the TAP button repeatedly to set tempo. Tap the BPM number itself to type in an exact tempo.  
  <span lang="zh-CN">−、TAP、＋：点击 − 或 ＋，以 1 BPM 为单位调整速度。反复点击 TAP（点拍）可按点击间隔设定速度。也可以点击 BPM 数值，直接输入精确速度。</span>
* BEATS PER BAR: change the number of beats per bar. Use this setting to change the time signature of your song  
  <span lang="zh-CN">BEATS PER BAR（每小节拍数）：调整每小节的拍数，从而改变工程拍号。</span>
* QUANTIZE: enable or disable note quantization. When disabled, recorded notes are placed exactly as played. Enabling quantization records notes to the nearest 1/16th note. Switch on "Advanced Quantization Options" in the EXTRAS settings and QUANTIZE becomes a menu: choose the division (1/4 to 1/64, with triplets) and switch on LIVE QUANTIZE to also quantize the pads as you play them, not just when they are recorded.  
  <span lang="zh-CN">QUANTIZE（量化）：关闭时按实际演奏时点录入音符，开启时将音符对齐到最近的十六分音符。在 EXTRAS（其他）设置中开启 Advanced Quantization Options（高级量化选项）后，QUANTIZE 会变成菜单，可选择四分音符至六十四分音符的网格（含三连音）。开启 LIVE QUANTIZE（实时量化）后，演奏打击垫时也会量化。</span>
* SEQ SNAP: when changing sequences from one to another (e.g, in the UI or via MIDI), controls how quickly the sequence will switch from the current playing sequence to the newly selected sequence. When disabled, the end of the note is recorded as played and then the sequence is immediately switched to the selected next sequence. 1 BEAT, 1 BAR and SEQ END waits until the end of the respective time step (the end of the currently playing beat, bar or sequence) before switching to the newly selected sequence. Note that when you use a sequence snap setting other than the OFF setting, the next sequence ALWAYS starts at the beginning of the newly selected sequence - with snap off, it always matches the current position of the playhead, so the sequence can jump mid sequence to another.  
  <span lang="zh-CN">SEQ SNAP（音序切换对齐）：控制在界面或通过 MIDI 选择另一条音序时何时切换。OFF（关闭）会按实际演奏时点记录音符结束，随后立即切换，新的音序会沿用当前播放头位置，因此可能从中间开始。1 BEAT（1 拍）、1 BAR（1 小节）和 SEQ END（音序结束）分别等当前拍、小节或音序结束后再切换，并始终从新音序开头播放。</span>
* AUTO-PLAY: a checkbox in the SEQ SNAP menu. When on, Koala automatically moves on to the next sequence slot when the current sequence reaches its end, so a row of sequences plays back as a song. Auto-play pauses while you edit a sequence in the grid.  
  <span lang="zh-CN">AUTO-PLAY（自动续播）：在 SEQ SNAP 菜单中勾选后，当前音序播完会自动播放下一个槽位，可以将一排音序连成一首曲子。在网格中编辑音序时，自动续播会暂停。</span>
* SWING: increase or decrease amount of swing for note playback by draggin within the SWING bar.  
  <span lang="zh-CN">SWING（摇摆）：在 SWING 条上拖动，增减音符播放的摇摆量。</span>
