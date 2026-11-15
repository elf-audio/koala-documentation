---
title: 11.4. AUv3 Tips
title_zh: "11.4. AUv3 使用技巧"
---
<h2 id="114-auv3-tips">11.4. AUv3 Tips<br><span lang="zh-CN">11.4. AUv3 使用技巧</span></h2>
* **State saving:** with "Enable auv3 state saving" on in the GENERAL settings, your whole Koala session is embedded in the host's project and comes back when you reopen it.  
  <span lang="zh-CN">**保存状态**：在 GENERAL（常规）设置中开启 Enable auv3 state saving，Koala 的整个会话会嵌入宿主工程，并随工程重新打开。</span>
* **Host clock sync:** Koala follows the host transport and tempo. Switch "Host clock sync" off in the AUDIO settings to let Koala run on its own clock.  
  <span lang="zh-CN">**宿主时钟同步**：Koala 跟随宿主的播放状态和速度。在 AUDIO（音频）设置中关闭 Host clock sync，可让 Koala 使用自己的时钟。</span>
* **MIDI:** MIDI notes from the host are honoured even when Koala's window is closed. "Pads send MIDI notes" in the MIDI settings sends a note out for every pad you play so the host can record it.  
  <span lang="zh-CN">**MIDI**：即使关闭 Koala 插件窗口，也能接收宿主的 MIDI 音符。开启 MIDI 设置中的 Pads send MIDI notes 后，每次演奏打击垫时，Koala 都会发送一个 MIDI 音符供宿主录制。</span>
* **Files:** the SAMPLES browser can reach your custom locations and iCloud Drive from inside the AUv3.  
  <span lang="zh-CN">**文件**：在 AUv3 插件内，可通过 SAMPLES（采样库）访问自定义位置和 iCloud 云盘。</span>
* **Not available in iOS AUv3:** Stem Split and hosting third-party plugins inside Koala. Use the standalone app for plugin hosting. Stem Split is also supported in the desktop DAW plugins.  
  <span lang="zh-CN">**iOS AUv3 中不可用的功能**：音轨分离和在 Koala 内加载第三方插件。可使用独立应用加载插件，桌面 DAW 插件也支持音轨分离。</span>
