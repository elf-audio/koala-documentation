---
---
{% flexible_image link="settings-midi-no-mapping.png" alt="MIDI Channels settings" %}

* **MIDI Channel:** when MIDI mapping is off, you can select the MIDI channel Koala listens to, or ALL.
* **MIDI Note Offset:** when MIDI mapping is off, you can select which MIDI note triggers the first pad in the first bank. Each consecutive note triggers the next pad in line. Type a number or a note name like C#3.
* **Keyboard Mode MIDI Channel:** the channel used when a pad is in keyboard mode, so a keyboard and a pad controller can share one connection.
* **Use built-in midi mappings:** Koala has ready-made mappings for some controllers, currently the Novation Launchpad Mini MK3 and the Roland SP-404MK2, with pad colours and sequence selection. Turn this off to ignore them. Tap Configure to adjust a device's built-in mapping.
* **MIDI can select pads:** pads are selected by corresponding MIDI note mapped to the pad.
* **MIDI can record pads:** pressing a key on your MIDI controller will engage record mode if the pad is free when this setting is on.
* **MIDI snap to scale:** when a pad is in keyboard mode, incoming MIDI notes are snapped to the currently chosen scale.
* **Midi Clock mode:** OFF, SEND or RECEIVE. SEND makes Koala send MIDI clock and start/stop to control other devices, RECEIVE syncs Koala to an external clock. You cannot use RECEIVE together with Ableton Link, since there can only be one clock source.
* **Sync latency compensation:** when receiving external MIDI clock, nudge the timing if Koala plays slightly early or late.
* **Pads send MIDI notes** (AUv3): Koala sends a MIDI note for every pad you play, so the host can record it. Turn this off if you are also using MIDI-OUT pads, to avoid double triggers.
