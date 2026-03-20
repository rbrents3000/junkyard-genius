---
layout: build
title: "Bone Conduction Speaker"
build_number: 14
description: "A transducer that turns any surface into a speaker — stick it on a table, window, or cardboard box and it plays music through the surface."
image: /images/builds/014-bone-conduction-speaker.jpg
category: sound-and-music
category_name: "Sound & Music"
tags: [creative, art, music]
junk: [laptop]
ratings:
  jaw: 3
  brain: 2
  wallet: 2
  spicy: 1
  clout: 3
  time: 1
---
# #014 — Bone Conduction Speaker

<p align="center">
  <img src="/images/builds/014-bone-conduction-speaker.jpg" alt="Bone Conduction Speaker" width="700" height="394" />
</p>

> A transducer that turns any surface into a speaker — stick it on a table, window, or cardboard box and it plays music through the surface.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90-6b7280)

## 🧪 What Is It?

A bone conduction speaker (also called a surface transducer or exciter) works by vibrating a surface directly instead of pushing air with a cone. You attach a small electromagnetic transducer to any rigid surface — a table, window, cardboard box, metal sheet, wooden door — and the entire surface becomes the speaker cone. The sound comes from the surface itself resonating with the audio signal.

The name comes from bone conduction headphones, which vibrate your skull directly so your inner ear hears sound without anything in your ear canal. Same principle, bigger scale. The wild part is how much the surface material affects the sound — a window sounds completely different from a wooden table, which sounds completely different from a metal trash can lid. Each surface has its own acoustic signature.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Surface transducer / exciter (Dayton Audio DAEX25 or similar) *(source: online electronics supplier, ~$8-12 — or salvage the voice coil from any speaker and build your own)*
- [ ] Small audio amplifier board (PAM8403 or similar Class D amp) *(source: online, ~$2-3)*
- [ ] 3.5mm audio cable *(source: old headphones, free)*
- [ ] 5-12V DC power supply for the amp *(source: old phone charger, free)*
- [ ] Various surfaces to test — wooden table, window, cardboard box, metal sheet, plastic bucket *(source: around the house, free)*
- [ ] Double-sided mounting tape or hot glue *(source: hardware store, ~$3)*
- [ ] Wire and solder *(source: electronics supply)*

</details>

## 🔨 Build Steps

1. **Get or build the transducer.** If using a purchased exciter, skip to step 3. To build one from salvage: remove the voice coil and magnet assembly from a small speaker. Glue a flat metal or plastic disc to the top of the voice coil former (the cylindrical tube the coil wraps around). This disc is what presses against surfaces to transmit vibration. The magnet assembly stays stationary; the disc vibrates.

2. **Wire the transducer.** Connect the transducer's leads (or voice coil wires from your salvage build) to the output of your amplifier board. Connect your 3.5mm audio input cable to the amplifier's input. Connect your DC power supply to the amp's power input. The whole signal chain is: phone -> cable -> amp -> transducer.

3. **Mount the transducer on a surface.** Stick the transducer firmly to the center of a flat surface using double-sided tape, hot glue, or a clamp. Good contact is essential — any air gap between the transducer and the surface kills the sound transfer. Press it hard or clamp it.

4. **Play music and listen.** Start with the volume low. The surface should produce clearly audible sound. Walk around the surface — the sound will vary based on where you stand relative to the vibration source. The surface acts as a radiating panel, projecting sound in all directions from its face.

5. **Test different surfaces.** This is the fun part. Move the transducer to different materials and compare:
   - **Wooden table:** Warm, resonant, good midrange
   - **Window glass:** Bright, clear, excellent treble
   - **Cardboard box:** Surprisingly good bass (the enclosed air acts as a resonant cavity)
   - **Metal sheet:** Harsh but loud, with metallic character
   - **Plastic bucket:** Boomy with weird resonant peaks

6. **Optimize the placement.** Where on the surface you mount the transducer dramatically affects the sound. Center placement usually gives the most even frequency response. Near the edge emphasizes certain resonant modes. Experiment with position.

7. **Build a permanent installation.** Once you find a surface and placement you like, mount the transducer permanently. Hide the amplifier and wiring behind or under the surface. The result is a table or wall that seems to produce music from nowhere — no visible speaker, just sound emanating from a solid surface.

## ⚠️ Safety Notes

> [!WARNING]
> **Surface vibration can shake loose objects.** A transducer mounted on a table will vibrate everything sitting on the table. Secure drinks, glasses, and fragile items. At high volume, things will walk right off the edge.

- **Don't mount permanently on structural glass.** While a transducer won't break a window at normal volume, prolonged high-volume operation could stress glass, especially near edges or existing micro-cracks. For windows, use moderate volume.

## 🔗 See Also

- [Thunder Drum](/categories/sound-and-music/012-thunder-drum/) — another unconventional sound production method using vibrating surfaces
- [Ferrofluid Speaker](/categories/sound-and-music/011-ferrofluid-speaker/) — a conventional speaker turned into a visual experience
