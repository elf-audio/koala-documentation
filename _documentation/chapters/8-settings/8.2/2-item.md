---
---
- **Input source:** which channels of your audio input to use: L, L + R or R. With a USB audio interface this selects the interface inputs.  
  <span lang="zh-CN">**Input source（输入源）**：选择要使用的音频输入声道，即 L（左）、L + R（左右）或 R（右）。接入 USB 音频接口时，此选项用于选择接口的输入声道。</span>
- **Audio driver** (Windows): choose between the available audio APIs, including ASIO and WASAPI.  
  <span lang="zh-CN">**Audio driver（音频驱动）**（Windows）：在可用的音频接口中选择，包括 ASIO 和 WASAPI。</span>
- **Input / Output** (desktop): choose the input and output device.  
  <span lang="zh-CN">**Input / Output（输入／输出）**（桌面端）：选择输入和输出设备。</span>
- **Sample rate** (Windows): choose the sample rate Koala runs at.  
  <span lang="zh-CN">**Sample rate（采样率）**（Windows）：选择 Koala 运行时的采样率。</span>
- **Background audio** (iOS): audio will continue playing when switching to other apps when on. Not available on Android.  
  <span lang="zh-CN">**Background audio（后台音频）**（iOS）：开启后，切换到其他应用时音频仍会播放。Android 无此选项。</span>
- **Host clock sync** (plugin mode): Koala's clock follows your DAW or host. Turn it off and Koala runs independently of the host and may sound out of time.  
  <span lang="zh-CN">**Host clock sync（宿主时钟同步）**（插件模式）：让 Koala 的时钟跟随 DAW 或其他宿主。关闭后，Koala 会独立运行，可能与宿主不同步。</span>
- **Pocket Operator sync out:** send PO sync signal through the headphone output when on. Turn your device's volume to max and set your Pocket Operator to SY-4.  
  <span lang="zh-CN">**Pocket Operator sync out（Pocket Operator 同步输出）**：开启后，通过耳机输出发送 PO 同步信号。将设备音量调到最大，并将 Pocket Operator 设为 SY-4。</span>
- **Metronome volume:** use the slider to change the volume of the metronome sound.  
  <span lang="zh-CN">**Metronome volume（节拍器音量）**：用滑杆调整节拍器音量。</span>
- **Stereo input** (Android): some phones can only record in stereo even though the microphone is mono. Switch on if your recordings are silent or distorted.  
  <span lang="zh-CN">**Stereo input（立体声输入）**（Android）：有些手机即使麦克风是单声道，也只能以立体声模式录音。如果录音没有声音或出现失真，可以开启此项。</span>
- **Use OpenSL (older devices)** (Android): switches from the modern AAudio API to OpenSL. Try this if audio is glitchy on an older or cheaper phone. Note that MIDI sync does not work with OpenSL.  
  <span lang="zh-CN">**Use OpenSL (older devices)（使用 OpenSL，适用于旧设备）**（Android）：将音频接口从 AAudio 切换到 OpenSL。如果在较旧或入门级手机上出现音频卡顿，可尝试此选项。OpenSL 不支持 MIDI 同步。</span>
- **I/O:** see the sample rate, number of channels and the buffer size.  
  <span lang="zh-CN">**I/O（输入／输出信息）**：查看采样率、声道数量和缓冲区大小。</span>
- **Auto trim on record:** the selection in your sample will automatically start at the beginning of audible content when this option is on.  
  <span lang="zh-CN">**Auto trim on record（录音时自动修剪）**：开启后，采样选区会自动从第一个可听到声音的位置开始。</span>
- **Auto normalize recordings:** quiet recordings are automatically turned up when this option is on.  
  <span lang="zh-CN">**Auto normalize recordings（自动归一化录音）**：开启后，Koala 会自动提高音量较低的录音的电平。</span>
