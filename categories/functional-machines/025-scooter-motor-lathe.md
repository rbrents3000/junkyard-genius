---
layout: build
title: "Scooter Motor Lathe"
build_number: 25
description: "That dead scooter motor has the torque and speed control to spin a lathe. So let it."
image: /images/builds/025-scooter-motor-lathe.jpg
category: functional-machines
category_name: "Functional Machines"
tags: [functional, practical]
junk: [microwave, scooter]
ratings:
  jaw: 4
  brain: 3
  wallet: 2
  spicy: 3
  clout: 3
  time: 3
---
# #025 — Scooter Motor Lathe

<p align="center">
  <img src="/images/builds/025-scooter-motor-lathe.jpg" alt="Scooter Motor Lathe" width="700" />
</p>

> That dead scooter motor has the torque and speed control to spin a lathe. So let it.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

A functioning wood or soft-metal lathe powered by a brushless DC motor salvaged from an electric scooter. The motor mounts at the headstock end, drives a spindle through direct coupling or belt, and spins a workpiece while you bring a cutting tool to bear against it. The scooter's speed controller gives you variable RPM from a few hundred to several thousand — exactly what a lathe needs. The bed, tailstock, and tool rest are fabricated from steel bar and angle iron.

A real bench lathe costs $300-$1000+. This one costs the price of some bearings and a few hours of welding. It won't hold the tolerances of a Jet or a Grizzly, but it'll turn wood, aluminum, and brass just fine for hobbyist work.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Scooter brushless DC motor — 250W-500W, with matching ESC *(dead scooter, e-waste)*
- [ ] Throttle control — twist grip or potentiometer *(from the scooter, or electronics supplier)*
- [ ] Steel channel or angle iron — for the lathe bed, 3-4 feet long *(scrap metal, hardware store)*
- [ ] Shaft coupler or belt/pulley set — to connect motor to spindle *(hardware store, ~$10)*
- [ ] Spindle shaft — hardened steel rod, 3/4" or 1" *(hardware store)*
- [ ] Bearings x2 — for the headstock spindle *(hardware store, ~$8 each)*
- [ ] Chuck or faceplate — a drill chuck works for small pieces *(hardware store, salvage from an old drill press)*
- [ ] Tailstock — fabricated from steel block with a center point *(hardware store steel + drill)*
- [ ] Tool rest — steel bar welded to an adjustable post *(scrap steel)*
- [ ] 24V-48V battery pack or bench power supply *(salvage or electronics supplier)*
- [ ] Welder, angle grinder, drill press *(workshop)*

</details>

## 🔨 Build Steps

1. **Build the lathe bed.** Two parallel lengths of steel channel or heavy angle iron, mounted on a flat base (plywood or steel plate). The bed must be straight and rigid — this is the reference surface everything else rides on. Space the rails 4"-6" apart. Weld cross members every 12" for rigidity.
2. **Build the headstock.** Weld a steel block or plate at one end of the bed. Press or bolt two bearings into the block, aligned perfectly. Slide the spindle shaft through the bearings. The spindle must spin freely with zero wobble — any runout here gets amplified at the workpiece.
3. **Attach the chuck.** Thread or weld a mounting plate to the spindle's outboard end. Bolt a drill chuck or faceplate to the mounting plate. A 3-jaw drill chuck from a dead drill press is ideal for small work. For larger pieces, weld a faceplate with bolt holes.
4. **Mount the motor.** Bolt the scooter motor behind the headstock. Connect motor shaft to spindle via a flexible coupler (direct drive) or a belt and pulleys (allows speed reduction for more torque). Belt drive is more forgiving of slight misalignment and absorbs vibration better.
5. **Build the tailstock.** A sliding steel block on the bed rails, with a pointed center (a bolt ground to a point works) that can be tightened against the workpiece's far end. The tailstock must slide along the bed and lock in position. A bolt-and-clamp arrangement works.
6. **Build the tool rest.** A horizontal steel bar mounted on a vertical post that can be adjusted in height and distance from the workpiece. The tool rest must be rock-solid when locked down — any flex here means chatter marks on your work.
7. **Wire the electrics.** Connect the ESC to the motor, throttle, and power supply. Verify the motor spins in the correct direction (toward the operator at the top of the rotation). Add a power switch and a kill switch within easy reach.
8. **Balance and test.** Mount a piece of scrap wood in the chuck. Start at low RPM and check for vibration. If the workpiece wobbles, it's either not centered in the chuck or the spindle has runout. Gradually increase speed. Try a light cut with a sharp chisel held firmly on the tool rest.
9. **Add a speed indicator.** A small tachometer (from an old bicycle computer or a cheap IR tach) helps you dial in the right RPM for different materials. Wood generally wants 1000-3000 RPM; soft metals want 300-800 RPM.

## ⚠️ Safety Notes

> **Spicy Level 3 build.** Read the Safety Guide before starting.

- A lathe will grab loose clothing, hair, gloves, or rags and pull them (and you) into the spinning workpiece instantly. Never wear gloves while operating a lathe. Tie back long hair. Remove dangling jewelry. Roll up sleeves.
- Always wear a full face shield, not just safety glasses. A workpiece coming loose at 2000 RPM is a projectile. Ensure the chuck is tight before every power-on.
- Start at low RPM with new or unbalanced workpieces. An unbalanced piece at high speed will vibrate violently and can shake itself loose.

## 🔗 See Also

- [Electric Go-Kart](/categories/functional-machines/024-electric-go-kart/)
- [Treadmill Belt Grinder](/categories/functional-machines/026-treadmill-belt-grinder/)

