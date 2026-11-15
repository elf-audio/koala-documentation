---
---
{% flexible_image link="settings-midi-no-mapping.png" alt="MIDI Channels settings" %}

* **MIDI Channel:** when MIDI mapping is off, you can select the MIDI channel Koala listens to, or ALL.  
  <span lang="zh-CN">**MIDI Channel（MIDI 通道）**：关闭 MIDI 映射时，可选择 Koala 接收的 MIDI 通道，也可选 ALL（全部）。</span>
* **MIDI Note Offset:** when MIDI mapping is off, you can select which MIDI note triggers the first pad in the first bank. Each consecutive note triggers the next pad in line. Type a number or a note name like C#3. The default pad-to-MIDI-note mapping uses a fixed 4×4 pad layout regardless of portrait or landscape window shape.  
  <span lang="zh-CN">**MIDI Note Offset（MIDI 音符偏移）**：关闭 MIDI 映射后，可指定触发第一组第一个打击垫的 MIDI 音符。之后每个连续音符对应下一个打击垫。可输入数字或 C#3 等音名。默认音符映射使用固定的 4×4 布局，横屏与竖屏相同。</span>
* **Same pad mapping for all banks:** when on, map the 16 pads once. The selected sample bank (A–D) determines which pads your controller plays. The bank buttons can be MIDI-mapped too. Switch it off so all 64 pads keep separate mappings.  
  <span lang="zh-CN">**Same pad mapping for all banks（所有采样组共用映射）**：开启后，只需映射一次 16 个打击垫。控制器演奏当前选择的 A–D 组。组按钮也可映射。关闭后，64 个打击垫各自保留独立映射。</span>
* **Keyboard Mode MIDI Channel:** the channel used when a pad is in keyboard mode, so a keyboard and a pad controller can share one connection.  
  <span lang="zh-CN">**Keyboard Mode MIDI Channel（键盘模式 MIDI 通道）**：指定打击垫进入键盘模式时使用的通道，让键盘和打击垫控制器可以共用一个连接。</span>
* **Use built-in midi mappings:** Koala has ready-made mappings for some controllers, currently the Novation Launchpad Mini MK3 and the Roland SP-404MK2, with pad colours and sequence selection. Turn this off to ignore them. Tap Configure to adjust a device's built-in mapping. [Read more](#836-roland-sp-404mk2-and-controller-mappings).  
  <span lang="zh-CN">**Use built-in midi mappings（使用内置 MIDI 映射）**：Koala 目前为 Novation Launchpad Mini MK3 和 Roland SP-404MK2 提供现成的映射，包括打击垫颜色和音序选择。关闭此项可忽略内置映射。点击 Configure（配置）可调整设备的映射。[了解更多](#836-roland-sp-404mk2-and-controller-mappings)。</span>
* **MIDI can select pads:** pads are selected by corresponding MIDI note mapped to the pad.  
  <span lang="zh-CN">**MIDI can select pads（MIDI 可选中打击垫）**：收到与打击垫对应的 MIDI 音符时会选中该打击垫。</span>
* **MIDI can record pads:** pressing a key on your MIDI controller will engage record mode if the pad is free when this setting is on.  
  <span lang="zh-CN">**MIDI can record pads（MIDI 可触发打击垫录音）**：开启后，按下 MIDI 控制器上的键时，如果对应打击垫为空，就会开始录音。</span>
* **MIDI snap to scale:** when a pad is in keyboard mode, incoming MIDI notes are snapped to the currently chosen scale.  
  <span lang="zh-CN">**MIDI snap to scale（MIDI 音符对齐音阶）**：打击垫处于键盘模式时，传入音符会对齐到当前音阶。</span>
* **Midi Clock mode:** OFF, SEND or RECEIVE. SEND makes Koala send MIDI clock and start/stop to control other devices, RECEIVE syncs Koala to an external clock. You cannot use RECEIVE together with Ableton Link, since there can only be one clock source.  
  <span lang="zh-CN">**Midi Clock mode（MIDI 时钟模式）**：可选 OFF（关闭）、SEND（发送）或 RECEIVE（接收）。SEND 会发送 MIDI 时钟和启动／停止消息来控制外部设备。RECEIVE 会跟随外部时钟。Koala 同一时间只能使用一个时钟源，因此 RECEIVE 无法与 Ableton Link 同时使用。</span>
* **Sync latency compensation:** when receiving external MIDI clock, nudge the timing if Koala plays slightly early or late.  
  <span lang="zh-CN">**Sync latency compensation（同步延迟补偿）**：接收外部 MIDI 时钟时，如果 Koala 播放略早或略晚，可微调时序。</span>
* **Pads send MIDI notes** (plugin mode): Koala sends a MIDI note for every pad you play, so the host can record it. Turn this off if you are also using MIDI-OUT pads, to avoid double triggers.  
  <span lang="zh-CN">**Pads send MIDI notes（打击垫发送 MIDI 音符）**（插件模式）：演奏打击垫时，Koala 会发送 MIDI 音符供宿主录制。若同时使用 MIDI-OUT 打击垫，可关闭此项以免重复触发。</span>
