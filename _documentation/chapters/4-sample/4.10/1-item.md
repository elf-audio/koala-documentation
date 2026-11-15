---
---
{% flexible_image link="sample-split-stems.png" alt="Split stems" %}

SPLIT STEMS is a powerful stem separation feature which allows extracting up to 4 stems from your sample: DRUMS, VOCALS, BASS and OTHER.  
<span lang="zh-CN">SPLIT STEMS（分离音轨）最多可从采样中提取四种音轨：DRUMS（鼓）、VOCALS（人声）、BASS（贝斯）和 OTHER（其他）。</span>

Open the TOOLS dropdown and tap SPLIT STEMS. Switch on the stems you want. Each selected stem is placed on its own free pad. Switch on MERGE SELECTED to mix the selected stems into a single new pad instead, which is a quick way to make an instrumental or an a cappella.  
<span lang="zh-CN">打开 TOOLS（工具）下拉菜单，点击 SPLIT STEMS，再开启想提取的音轨。每条选中的音轨各占一个空打击垫。开启 MERGE SELECTED（合并所选音轨）后，选中的音轨会混合到同一个新打击垫上，便于快速制作伴奏或纯人声。</span>

Two neural networks are available. FAST works faster but the quality is less good. HI QUALITY is slower but gives far cleaner stems. Pick the quality with the switch in the split window.  
<span lang="zh-CN">有两种神经网络模型可选。FAST（快速）处理更快，分离质量较低。HI QUALITY（高质量）处理较慢，分离出的音轨更干净。可在音轨分离窗口切换质量。</span>

Note: the networks are downloaded the first time you use them (you only need to do this once), and need a few hundred megabytes of space. Splitting is heavy work for a phone and can take a while. Koala warns you if there is not enough free memory for the sample you chose. You can remove the downloaded networks under "Stem splitter files" in the EXTRAS settings. [Read more](../8-settings#84-extras-settings).  
<span lang="zh-CN">注意：首次使用时需要下载模型，下载一次即可。模型会占用几百 MB 的存储空间。在手机上分离音轨比较耗费资源，可能需要等一会儿。如果运行内存不足以处理选中的采样，Koala 会提示。可在 EXTRAS（其他）设置的 Stem splitter files（音轨分离文件）中删除已下载的模型。[了解更多](../8-settings#84-extras-settings)。</span>

Stem splitting is available in the standalone app on iOS, Android, macOS, Windows and Linux, and inside the desktop Koala DAW plugin (AU, VST3 and CLAP). It is not available inside the iOS AUv3 plugin due to iOS memory limits.  
<span lang="zh-CN">音轨分离支持 iOS、Android、macOS、Windows 和 Linux 上的独立应用，也支持桌面 Koala DAW 插件（AU、VST3 和 CLAP）。受 iOS 内存限制，iOS AUv3 插件内无法使用该功能。</span>
