---
layout: build
title: "Ignition Coil Tesla Coil"
build_number: 220
description: "Car ignition coil + 555 timer at audio frequencies = musical sparks at 40kV. A singing arc of purple lightning from junkyard parts."
image: /images/builds/220-ignition-coil-tesla-coil.jpg
category: junkyard-auto
category_name: "Junkyard Auto"
tags: [functional, practical, mechanical]
junk: [microwave]
ratings:
  jaw: 5
  brain: 2
  wallet: 1
  spicy: 4
  clout: 5
  time: 2
---
# #220 — Ignition Coil Tesla Coil

<p align="center">
  <img src="/images/builds/220-ignition-coil-tesla-coil.jpg" alt="Ignition Coil Tesla Coil" width="700" height="394" />
</p>

> Car ignition coil + 555 timer at audio frequencies = musical sparks at 40kV. A singing arc of purple lightning from junkyard parts.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

An automotive ignition coil is a step-up transformer designed to convert 12V into 20,000-40,000V to fire a spark plug. Normally it gets pulsed by the car's ECU at specific ignition timing intervals. But feed it a continuous square wave from a 555 timer circuit at audio frequencies (200 Hz - 5 kHz), and the spark output becomes a continuous buzzing arc that vibrates the air at the frequency of the signal. That vibration IS sound. The arc literally plays music. Feed it an audio signal instead of a fixed frequency, and you get a plasma speaker — a massless, distortion-free sound source made of lightning. The whole thing runs off a 12V car battery and costs almost nothing. A 2-inch purple arc snapping and crackling while playing the Mario theme is the kind of thing that stops people in their tracks.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Automotive ignition coil — standard canister-type or coil-on-plug *(junkyard, any car)*
- [ ] 555 timer IC *(electronics supplier, ~$0.50)*
- [ ] MOSFET — IRLZ44N or IRFZ44N (logic-level N-channel, conducts fully at 5V gate drive) *(electronics supplier, ~$2)*
- [ ] Resistors and capacitors — for the 555 timer circuit *(electronics supplier, pennies)*
- [ ] Potentiometer — 10k-100k, to adjust frequency *(electronics supplier, ~$1)*
- [ ] 12V car battery or 12V power supply *(junkyard or existing)*
- [ ] Heat sink — for the MOSFET *(electronics supplier or salvage)*
- [ ] Audio input cable — 3.5mm jack if feeding music *(junk drawer)*
- [ ] Spark gap electrodes — bolts or thick wire, mounted 1-2 inches apart *(hardware store)*
- [ ] Perfboard or breadboard for the circuit *(electronics supplier)*

</details>

## 🔨 Build Steps

1. **Pull the ignition coil.** Grab a standard canister-type ignition coil from any car at the junkyard. Older vehicles have a single coil with two terminals (+ and -) and a high-voltage output tower. Coil-on-plug units from newer cars work too but are smaller. The canister type produces bigger sparks.
2. **Build the 555 timer driver circuit.** Wire a 555 timer in astable mode. Use a 10k-100k potentiometer on the timing resistor to vary the output frequency. The 555 output goes to the gate of the MOSFET. This creates a variable-frequency square wave between roughly 200 Hz and 10 kHz.
3. **Wire the MOSFET as a switch.** The MOSFET's drain connects to the negative (-) terminal of the ignition coil. The source connects to ground. The gate gets the 555 timer output. When the MOSFET switches on, current flows through the coil primary; when it switches off, the collapsing magnetic field induces a high-voltage spike on the secondary — that's your 40kV spark.
4. **Mount the MOSFET on a heat sink.** The MOSFET is switching high current at high frequency and will get hot. Bolt it to an aluminum heat sink with thermal compound. Without a heat sink, you'll cook the MOSFET in under a minute.
5. **Connect 12V power.** Wire the positive terminal of the ignition coil to 12V (battery or power supply). The MOSFET drain goes to the negative terminal. When power is applied and the 555 is running, you should hear a buzzing tone and see sparks at the coil's high-voltage output tower.
6. **Set up the spark gap.** Mount two bolts or thick copper wires about 1-2 inches apart, connected to the high-voltage output of the coil (one electrode) and the coil's ground/case (other electrode). The arc will jump across this gap. Adjust the gap until you get a continuous, stable arc.
7. **Tune the frequency.** Turn the potentiometer to sweep the frequency. You'll hear the pitch of the buzzing arc change — the spark is vibrating the air like a speaker cone. Find the sweet spot where the arc is loudest and most stable.
8. **Add audio input (optional).** Replace the 555 timer's fixed frequency with an audio signal. Use a 3.5mm audio jack feeding into an audio amplifier circuit (or use the 555 with its control voltage pin modulated by the audio signal). Now the arc plays music. Start with simple tones and chiptune — complex audio sounds distorted because the arc is essentially a single-bit speaker.
9. **Demonstrate responsibly.** Run the coil in a dim or dark room for maximum visual impact. The purple arc dancing while playing recognizable music is the showstopper. Keep sessions short (under 5 minutes) to avoid overheating the MOSFET and coil.

## ⚠️ Safety Notes

> **Spicy Level 4 build.** Read the Safety Guide before starting.

- The ignition coil outputs 20,000-40,000V. While the current is limited (milliamps), a shock from the high-voltage side is painful and can cause involuntary muscle contraction that throws you into other hazards. Never touch the high-voltage output or spark gap while powered. Keep one hand in your pocket when working near the circuit.
- The arc produces UV radiation, ozone (O3), and nitrogen oxides. Run this in a well-ventilated area. If you smell a sharp, metallic odor, that's ozone — step away and ventilate. Prolonged ozone exposure irritates the lungs.
- The MOSFET and coil generate significant heat during operation. Don't run continuously for more than a few minutes. Let components cool between demonstrations. A dead MOSFET can fail short, dumping full battery current through the coil — always fuse the 12V supply line.

## 🔗 See Also

- [Musical Tesla Coil](/categories/mad-scientist/033-musical-tesla-coil/)
- [Plasma Speaker](/categories/sound-and-music/008-plasma-speaker/)

