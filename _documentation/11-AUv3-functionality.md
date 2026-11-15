---
layout: chapter
title: AUv3 Functionality
title_zh: "AUv3 功能"
order: 11
description: >-
  Using Koala as an AUv3 instrument, effect or multi-bus plugin in iOS hosts like AUM, GarageBand and Logic Pro.
---

This chapter covers running Koala as an **AUv3** plugin on **iOS** (in hosts such as AUM, GarageBand, Logic Pro for iPad and Cubasis; Android has no native audio plugin format). To run Koala and **Koala FX** inside a desktop DAW as an **Audio Unit**, **VST3** or **CLAP** plugin on macOS, Windows or Linux, see the [Koala Plugin Bundle](../13-desktop#134-koala-plugin-bundle).  
<span lang="zh-CN">本章介绍如何在 **iOS** 上将 Koala 用作 **AUv3** 插件，宿主包括 AUM、GarageBand、iPad 版 Logic Pro 和 Cubasis。Android 没有原生音频插件格式。如需在 macOS、Windows 或 Linux 的桌面 DAW 中将 Koala 和 **Koala FX** 用作 **Audio Unit**、**VST3** 或 **CLAP** 插件，请参阅 [Koala Plugin Bundle](../13-desktop#134-koala-plugin-bundle)。</span>

Koala can be loaded as AUv3 plugin in host applications like AUM, Garageband, Logic Pro and Cubasis.  
<span lang="zh-CN">你可以在 AUM、GarageBand、Logic Pro 或 Cubasis 等宿主中将 Koala 加载为 AUv3 插件。</span>

Koala cannot send transport information to the AUv3 host, meaning you need to enable playback in your host application for the sequencer in Koala to start/stop playback.  
<span lang="zh-CN">Koala 无法向 AUv3 宿主发送播放控制信息。要启动或停止 Koala 音序器，应在宿主应用中操作播放。</span>

Koala can be loaded in three different modes:  
<span lang="zh-CN">Koala 可以按以下三种模式加载。</span>

- as AUv3 instrument  
  <span lang="zh-CN">作为 AUv3 乐器。</span>
- as AUv3 effect  
  <span lang="zh-CN">作为 AUv3 效果器。</span>
- as a multi-bus AUv3 plugin.  
  <span lang="zh-CN">作为多总线 AUv3 插件。</span>

Note: Stem Split and hosting third-party plugins inside Koala are not available in iOS AUv3 mode (Stem Split is supported in the desktop DAW plugins).  
<span lang="zh-CN">注意：iOS AUv3 模式下无法使用音轨分离，也无法在 Koala 内加载第三方插件。桌面 DAW 插件支持音轨分离。</span>
