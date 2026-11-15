---
---

{% flexible_image link="effect-vocoder.png" alt="Vocoder effect" %}

### VOCODER<br><span lang="zh-CN">声码器</span>
Classic vocoder: a VOICE signal shapes the sound of a SYNTH signal, so a pad or synth "talks".  
<span lang="zh-CN">经典声码器，用 VOICE 信号塑造 SYNTH 信号，让打击垫或合成器发出类似说话的声音。</span>
* SYNTH: the carrier. VOICE SYNTH uses the built-in synth, THIS BUS uses the audio on the channel.  
  <span lang="zh-CN">SYNTH（合成器）：载波。VOICE SYNTH 使用内置合成器，THIS BUS 使用当前总线的音频。</span>
* VOICE: the modulator. MIC or BUS A–D.  
  <span lang="zh-CN">VOICE（语音）：调制信号，可选择 MIC（麦克风）或 BUS A–D（总线 A–D）。</span>
* DRIVE: -6–10 dB  
  <span lang="zh-CN">DRIVE（驱动）：-6–10 dB。</span>
* TONE: 0–100%  
  <span lang="zh-CN">TONE（音色）：0–100%。</span>

Warning: when the MIC is the voice source, use headphones to avoid feedback. Koala asks you to confirm that you are wearing headphones the first time.  
<span lang="zh-CN">注意：将 MIC 作为语音来源时，请戴上耳机以免产生反馈。首次使用时，Koala 会请你确认已佩戴耳机。</span>

Pro tip: put the VOCODER on BUS A with SYNTH set to THIS BUS, route a sustained chord pad to BUS A and sing into the mic.  
<span lang="zh-CN">技巧：将 VOCODER 放在 BUS A，把 SYNTH 设为 THIS BUS，然后将持续发声的和弦打击垫路由到 BUS A，再对着麦克风唱歌。</span>
