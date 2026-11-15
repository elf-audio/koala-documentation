---
---

{% flexible_image link="sample-midi-out.png" alt="MIDI-OUT pad editor" %}

Open the SAMPLES browser, go to MORE and load MIDI-OUT onto a free pad. In the pad editor choose the DEVICE (a connected MIDI output, or ALL) and the MIDI CHANNEL (1 to 16). The display shows the last message sent, for example NOTE ON C3 (60) CH 1 VEL 110.  
<span lang="zh-CN">打开 SAMPLES（采样库），进入 MORE（更多），将 MIDI-OUT 载入空打击垫。在打击垫编辑器中，选择 DEVICE（设备，可以是已连接的 MIDI 输出或 ALL）和 MIDI CHANNEL（MIDI 通道，1 至 16）。显示区会列出最近发送的消息，例如 NOTE ON C3 (60) CH 1 VEL 110。</span>

Play the pad, use the keyboard modes to play it chromatically, or record it into a sequence like any other pad. Notes in the piano roll are sent with their pitch and velocity.  
<span lang="zh-CN">可直接演奏打击垫，在键盘模式下按半音阶演奏，或像普通打击垫一样录入音序。钢琴卷帘中的音符会连同音高和力度一起发送。</span>

To also send MIDI clock and start/stop to your hardware, set Midi Clock mode to SEND in the MIDI settings. [Read more](../8-settings#83-midi-settings).  
<span lang="zh-CN">如需向硬件发送 MIDI 时钟和启动／停止消息，请在 MIDI 设置中将 Midi Clock 模式设为 SEND（发送）。[查看 MIDI 设置](../8-settings#83-midi-settings)。</span>

Note: a MIDI-OUT pad makes no sound by itself, so you will not hear it in a resample or export. Route the external gear's audio back into Koala to record it.  
<span lang="zh-CN">注意：MIDI-OUT 打击垫本身无声，重采样和导出时也听不到它。要录下外接设备的声音，请将其音频回送到 Koala。</span>
