---
---
Tap a free slot to open the effect chooser. Above Koala's effects you will find folders for the plugin formats your platform supports (AUV3, AUDIO UNITS, VST3, CLAP) once Koala has finished scanning your plugins. Use SORT to list them A-Z or by COMPANY. Tap a plugin to put it in the slot.  
<span lang="zh-CN">点击空槽位打开效果选择器。Koala 完成插件扫描后，内置效果上方会出现按平台支持的格式分类的文件夹（AUV3、AUDIO UNITS、VST3、CLAP）。用 SORT（排序）按字母顺序（A-Z）或厂商（COMPANY）排列。点击插件即可将其载入槽位。</span>

In the slot, OPEN EDITOR shows the plugin's own window. Plugin effect parameters can be automated in sequences ([Read more](../5-sequence#59-automation-samurai)) and MIDI-mapped per song.  
<span lang="zh-CN">在槽位中点击 OPEN EDITOR（打开编辑器），会打开插件自己的窗口。效果器插件的参数可录入音序作为自动化（[了解更多](../5-sequence#59-automation-samurai)），也可以按工程进行 MIDI 映射。</span>

Notes:  
<span lang="zh-CN">注意事项：</span>
* Plugin hosting is only available in the standalone app, not when Koala itself is loaded as a plugin.  
  <span lang="zh-CN">只有独立应用可以加载第三方插件。Koala 自身作为插件运行时无法使用该功能。</span>
* Koala scans plugins in a separate process so a crashing plugin cannot take Koala down with it. Plugins that fail the scan are greyed out with the note "Plug-in unavailable".  
  <span lang="zh-CN">Koala 在独立进程中扫描插件，单个插件崩溃时，Koala 仍可继续运行。未通过扫描的插件会变灰，并显示 Plug-in unavailable（插件不可用）。</span>
* Plugin states are saved with your song. If a song is opened on a device where the plugin is missing, the slot shows PLUGIN NOT AVAILABLE and the audio passes through unchanged.  
  <span lang="zh-CN">插件状态会随工程保存。如果在缺少该插件的设备上打开工程，槽位会显示 PLUGIN NOT AVAILABLE（插件不可用），音频会直接通过。</span>
* On macOS, "Hide Apple Audio Units" in the EXTRAS settings hides the built-in system Audio Units from the list.  
  <span lang="zh-CN">在 macOS 上，可在 EXTRAS（其他）设置中开启 Hide Apple Audio Units（隐藏 Apple Audio Units），从列表中隐藏系统自带的 Audio Units。</span>

[Read more](../4-sample#420-plugin-instruments) about using instrument plugins on pads.  
<span lang="zh-CN">[了解如何在打击垫上使用乐器插件](../4-sample#420-plugin-instruments)。</span>
