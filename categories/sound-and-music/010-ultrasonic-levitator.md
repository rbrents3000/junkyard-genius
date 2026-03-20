---
layout: build
title: "Ultrasonic Levitator"
build_number: 10
description: "Ultrasonic transducers create standing waves that trap and levitate small objects in mid-air — actual levitation, no tricks."
image: /images/builds/010-ultrasonic-levitator.jpg
category: sound-and-music
category_name: "Sound & Music"
tags: [creative, art, music]
junk: [microwave, arduino, laptop, scooter]
ratings:
  jaw: 5
  brain: 3
  wallet: 2
  spicy: 1
  clout: 5
  time: 2
---
# #010 — Ultrasonic Levitator

<p align="center">
  <img src="/images/builds/010-ultrasonic-levitator.jpg" alt="Ultrasonic Levitator" width="700" />
</p>

> Ultrasonic transducers create standing waves that trap and levitate small objects in mid-air — actual levitation, no tricks.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Two ultrasonic transducers (the same kind used in cheap mist makers and range finders) are positioned facing each other. When driven at the same frequency (typically 40 kHz — above human hearing), they create a standing wave pattern between them. At the nodes of the standing wave, the air pressure is stable enough to trap and suspend small, lightweight objects: styrofoam beads, water droplets, small insects, tiny screws.

The objects literally float in mid-air with no visible support. You can levitate multiple objects at once, stacked vertically at each node of the standing wave (spaced at half-wavelength intervals). It's one of the most mind-bending physics demonstrations possible — actual acoustic levitation using $10 worth of parts.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Ultrasonic transducers (40 kHz), at least 2 but ideally an array of 10-20 *(source: HC-SR04 ultrasonic sensor modules from electronics supplier, ~$1 each)*
- [ ] Arduino Nano or similar microcontroller *(source: electronics supplier, ~$5)*
- [ ] L298N motor driver or similar H-bridge for driving the transducers *(source: electronics supplier, ~$3)*
- [ ] 9-12V DC power supply *(source: old wall wart or laptop charger, free)*
- [ ] 3D-printed or carved concave reflector (optional, for single-sided levitation) *(source: make it yourself)*
- [ ] Small styrofoam beads or tiny polystyrene balls *(source: craft store or bean bag stuffing, ~$2)*
- [ ] Wire, solder, perfboard *(source: electronics supplier, ~$3)*
- [ ] Tweezers for placing objects *(source: already own)*

</details>

## 🔨 Build Steps

1. **Harvest the transducers.** If using HC-SR04 modules, desolder the two ultrasonic transducers (the silver cans) from each module. You want as many as you can get — a pair works, but an array of 10+ on each side creates a much stronger levitation field. Sort them into transmitters and receivers (they're labeled T and R on the module).

2. **Build the transducer arrays.** Mount the transducers in two opposing groups — one group facing up, one facing down. For a basic setup, mount them on two pieces of perfboard or 3D-printed holders. Space them evenly. All transducers in each array should be wired in parallel (same signal to all of them).

3. **Program the Arduino.** Write a simple program that outputs a 40 kHz square wave on two pins — one for the top array, one for the bottom. The two signals must be exactly 180 degrees out of phase (one HIGH when the other is LOW). This creates the standing wave. The Arduino's `tone()` function can generate 40 kHz, or use direct timer register manipulation for more precise control.

4. **Wire the driver circuit.** Connect the Arduino outputs to the L298N motor driver, which amplifies the signal to drive the transducers at higher voltage (9-12V) for a stronger sound field. Connect the motor driver outputs to the transducer arrays.

5. **Set the spacing.** Position the two transducer arrays facing each other, about 1-3 inches apart (several half-wavelengths at 40 kHz). The spacing matters — the standing wave nodes need to form clearly between the arrays. At 40 kHz, the wavelength is about 8.5mm, so nodes are spaced ~4.25mm apart.

6. **Power up and test.** Turn on the system. You won't hear anything (40 kHz is ultrasonic), but you might feel a slight tingling if you put your finger in the field. Use a small piece of tissue paper to test — hold it between the arrays and let go. If the field is strong enough, it will float.

7. **Levitate objects.** Using tweezers, carefully place small styrofoam beads into the standing wave nodes. They'll snap into position and hover. You can stack multiple beads at different node positions. Tiny water droplets can also be levitated — use a wet paintbrush to place small drops.

8. **Tune and optimize.** Adjust the frequency slightly around 40 kHz to find the exact resonant frequency of your specific transducers (they vary slightly from spec). Small frequency changes can dramatically improve levitation force. Also try adjusting the spacing between arrays.

9. **Advanced: single-sided levitation.** Instead of two opposing arrays, use one array with a curved reflector above it. The reflector bounces the sound waves back, creating standing waves above a single surface. This looks even more magical because there's nothing visible above the floating objects.

## ⚠️ Safety Notes

> [!WARNING]
> **Ultrasound at high power can cause discomfort.** While 40 kHz is above hearing range, high-power ultrasonic fields can cause headaches, nausea, or ear discomfort in some people, especially at harmonic frequencies that are within hearing range. If you feel discomfort, reduce the power or add shielding.

- **Keep the transducer arrays aligned.** Misaligned arrays produce unpredictable standing wave patterns. Secure the mounting hardware so nothing shifts during operation.

## 🔗 See Also

- [Ferrofluid Speaker](/categories/sound-and-music/011-ferrofluid-speaker/) — another way to make invisible forces visible through physical media
- [Schlieren Optics](/categories/light-and-visual/172-schlieren-optics/) — visualize the sound waves themselves instead of levitating objects in them

