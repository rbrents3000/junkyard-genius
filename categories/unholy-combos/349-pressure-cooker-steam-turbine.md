---
layout: build
title: "Pressure Cooker Steam Turbine Generator"
build_number: 349
description: "Pipe superheated steam from a pressure cooker onto a junkyard car alternator fitted with turbine blades. Generate electricity from a stovetop. Watt is rolling in his grave."
image: /images/builds/349-pressure-cooker-steam-turbine.jpg
category: unholy-combos
category_name: "Unholy Combos"
tags: [functional, spectacle]
junk: [car-parts]
ratings:
  jaw: 5
  brain: 4
  wallet: 2
  spicy: 3
  clout: 5
  time: 3
---
# #349 — Pressure Cooker Steam Turbine Generator

<p align="center">
  <img src="/images/builds/349-pressure-cooker-steam-turbine.jpg" alt="Pressure Cooker Steam Turbine Generator" width="700" height="394" />
</p>

> Pipe superheated steam from a pressure cooker onto a junkyard car alternator fitted with turbine blades. Generate electricity from a stovetop. Watt is rolling in his grave.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Every coal plant, nuclear plant, natural gas plant, geothermal plant, and concentrated solar plant on Earth generates electricity the exact same way: heat boils water, steam spins a turbine, the turbine spins a generator, the generator makes electricity. The Rankine cycle. It's been the backbone of industrial civilization since 1884 when Charles Parsons bolted a steam turbine to a dynamo and lit up a exhibition hall. The turbines got bigger. The principle never changed.

A pressure cooker is a boiler. It produces steam at 15 PSI and 250°F — modest by power plant standards, but real pressurized steam with real energy. A car alternator is a generator. It produces 12-14V DC at up to 100A when spun at 3,000+ RPM — that's over a kilowatt of electrical power at full tilt. The missing piece is the turbine: something that converts the linear force of a steam jet into rotational motion that spins the alternator shaft.

You can build a Tesla turbine (smooth discs mounted on a shaft, driven by the viscous drag of steam flowing between them) from old hard drive platters. You can build an impulse turbine (cupped blades that catch the steam jet) from scrap stainless steel spoons welded to a hub. You can 3D-print a turbine wheel in ABS or PEEK. However you build it, the turbine mounts to the alternator's pulley shaft, steam from the pressure cooker hits the blades through a nozzle, the shaft spins, and the alternator produces electricity.

Will it power your house? No. At 15 PSI and the flow rate a pressure cooker produces, you're looking at 10-50 watts of useful electrical output — enough to charge a phone, run LED lights, or power a small radio. The efficiency is terrible. The engineering is crude. The whole thing screams at you while it runs. But it works. You are generating electricity from water and fire using the same thermodynamic cycle that powers civilization, and you built it from a thrift store pot and a junkyard alternator. That's worth something that watts can't measure.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Stovetop pressure cooker — 16-quart or larger for sustained steam output *(thrift store, $10–15)*
- [ ] Car alternator — from any vehicle, with built-in voltage regulator preferred *(junkyard, $10–20)*
- [ ] Turbine wheel — Tesla-style from hard drive platters, impulse-style from welded stainless spoons, or 3D-printed *(scrap or $5–15 in filament)*
- [ ] Steam nozzle — copper or brass tubing, 1/4" to 3/8" ID, bent to direct steam tangentially at the turbine *(hardware store, $3–5)*
- [ ] Ball valve — 1/4" brass, for steam flow control *(hardware store, $5–8)*
- [ ] High-temperature silicone hose — steam-rated, from cooker to nozzle *(industrial supplier, $8–12)*
- [ ] Mounting bracket/frame — angle iron or plywood to hold the alternator and turbine assembly aligned with the nozzle *(scrap, $0–5)*
- [ ] 12V battery — to excite the alternator field coil (most alternators need initial excitation) *(junkyard, $5–10)*
- [ ] Multimeter — to measure voltage and current output *(already owned or $10)*
- [ ] 12V LED lights or USB charger — as a load to demonstrate power output *(dollar store, $2–5)*
- [ ] Safety glasses and hearing protection — the turbine screams at high RPM *(hardware store, $5–10)*

</details>

## 🔨 Build Steps

1. **Build the turbine wheel.** The simplest option is a Tesla turbine: stack 5-8 hard drive platters on a threaded rod with spacer washers between them, leaving 1mm gaps. The steam flows between the smooth discs and transfers energy through viscous drag — the boundary layer of steam clinging to each disc surface pulls it along. Tesla turbines are mechanically simple but less efficient than bladed designs. For more power, weld the bowls of stainless steel dessert spoons around the rim of a steel disc as impulse buckets — the concave spoon bowls catch the steam jet and redirect it, transferring momentum to the wheel. Balance the wheel carefully on the shaft — imbalance at 3,000+ RPM tears things apart.

2. **Mate the turbine to the alternator.** The turbine wheel needs to spin the alternator shaft. The simplest connection is direct-drive: mount the turbine on the alternator's existing pulley shaft. Remove the pulley, slide the turbine wheel onto the shaft, and secure it with a key and set screw or weld it. Alternatively, use a belt drive between the turbine shaft and the alternator pulley for speed matching — the alternator needs 3,000+ RPM to produce useful voltage, and your turbine may spin faster or slower depending on design.

3. **Build the steam nozzle.** The nozzle converts the pressure energy of the steam into velocity (kinetic energy) by forcing it through a constriction. A 1/4" copper tube narrowed to 1/8" at the tip and bent to aim tangentially at the turbine wheel's outer edge works well. The tangential angle is critical — steam should hit the blades (or enter the disc gaps) at the rim, not the hub. A converging nozzle (wide to narrow) accelerates subsonic steam efficiently. Position the nozzle tip 1/4" from the turbine wheel — close enough for the steam jet to hit the blades before dispersing, far enough to avoid physical contact.

4. **Mount everything on a rigid frame.** The alternator, turbine, and nozzle must be rigidly aligned. Bolt the alternator to an angle iron frame. Mount the nozzle on an adjustable bracket so you can aim it precisely at the turbine. The whole assembly needs to be heavy or clamped down — a spinning turbine at 3,000+ RPM generates gyroscopic forces and vibration that will walk a lightweight frame across the workbench.

5. **Connect the steam supply.** Run high-temperature silicone hose from the pressure cooker's valve port (using the same fitting approach as the Steam Generator build #340) through a ball valve to the nozzle. The ball valve gives you throttle control — you can modulate steam flow to control turbine speed. Open it slowly to spin up the turbine gradually instead of shocking it with full steam.

6. **Wire the alternator.** Most car alternators need field excitation to start generating — connect a 12V battery to the field terminal. Once the alternator begins spinning fast enough (usually above 1,500 RPM), it self-excites and produces voltage at the output terminal. Connect a multimeter to the output to monitor voltage. At generating speed, you should see 12-14V. Connect a 12V LED light strip or a USB car charger as a load. When the LEDs light up from steam power, you've just completed the Rankine cycle in your backyard.

7. **Measure and optimize.** With the multimeter, measure voltage and current to your load. Voltage times current equals watts. A well-built system produces 10-50W. Experiment with nozzle diameter (smaller = faster jet but less mass flow), nozzle distance and angle, turbine blade count and shape, and steam pressure. Each variable affects output. A 5% improvement in nozzle angle might double your wattage. This is engineering, and the feedback loop is immediate — change something, measure the result.

## ⚠️ Safety Notes

> **Spicy Level 3 build.** Moving parts at high RPM combined with superheated steam.

- A turbine wheel at 3,000+ RPM that sheds a blade or fragment becomes shrapnel. Enclose the turbine in a steel housing or at minimum stand behind a shield during testing. Never lean over a spinning turbine.
- The steam supply is at 250°F and 15 PSI. All steam-handling safety from build #340 applies. Burns are instant on contact.
- The alternator produces 12-14V at potentially high current (50-100A if the turbine spins fast enough). 12V DC is not lethal, but a dead short across the output terminals produces sparks and heat that can start fires. Use appropriately rated wire and include a fuse.
- The turbine makes an ear-splitting whine at operating speed. Wear hearing protection. Seriously.
- Car alternator bearings are designed for belt loads, not axial loads from a steam jet. The alternator bearings will wear faster in this application. Expect to replace the alternator periodically if you run it often.

## 🔗 See Also

- [Pressure Cooker Steam Generator](/categories/pressure-cooker/340-steam-generator/)
- [E-Waste Wind Turbine](/categories/unholy-combos/285-e-waste-wind-turbine/)
- [Junkyard Auto](/categories/junkyard-auto/)
