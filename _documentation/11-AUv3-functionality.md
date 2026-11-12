---
layout: chapter
title: AUv3 Functionality
order: 11
description: >-
  Using Koala as an AUv3 instrument, effect or multi-bus plugin in iOS hosts like AUM, GarageBand and Logic Pro.
---

This chapter covers running Koala as an **AUv3** plugin on **iOS** (in hosts such as AUM, GarageBand, Logic Pro for iPad and Cubasis; Android has no native audio plugin format). To run Koala and **Koala FX** inside a desktop DAW as an **Audio Unit**, **VST3** or **CLAP** plugin on macOS, Windows or Linux, see the [Koala Plugin Bundle](../13-desktop#134-koala-plugin-bundle).

Koala can be loaded as AUv3 plugin in host applications like AUM, Garageband, Logic Pro and Cubasis.

Koala cannot send transport information to the AUv3 host, meaning you need to enable playback in your host application for the sequencer in Koala to start/stop playback.

Koala can be loaded in three different modes:

- as AUv3 instrument
- as AUv3 effect
- as a multi-bus AUv3 plugin.

Note: Stem Split and hosting third-party plugins inside Koala are not available in iOS AUv3 mode (Stem Split is supported in the desktop DAW plugins).
