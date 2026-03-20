---
layout: build
title: "Vacuum Tube Amp"
build_number: 169
description: "Salvage tubes from old radios and build a Class A tube amplifier — warm, rich sound that audiophiles pay $1000+ for. Build for $50-100."
image: /images/builds/169-vacuum-tube-amp.jpg
category: chemical-electronic
category_name: "Chemical Electronic"
tags: [chemistry, educational]
junk: [crt]
ratings:
  jaw: 4
  brain: 4
  wallet: 3
  spicy: 3
  clout: 4
  time: 4
---
# #169 — Vacuum Tube Amp

<p align="center">
  <img src="/images/builds/169-vacuum-tube-amp.jpg" alt="Vacuum Tube Amp" width="700" />
</p>

> Salvage tubes from old radios and build a Class A tube amplifier — warm, rich sound that audiophiles pay $1000+ for. Build for $50-100.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Before transistors, all electronics ran on vacuum tubes — glass bottles with glowing filaments that amplify signals. Tube amplifiers produce a characteristically warm, rich sound that many audiophiles and musicians consider superior to solid-state. The harmonic distortion tubes produce is even-order — musically pleasant rather than harsh. Audiophile tube amps sell for $1000-10,000. Guitar tube amps are the gold standard of rock tone. Salvage tubes from old radios, TV sets, or buy new-old-stock tubes (warehouses are still selling tubes manufactured decades ago). Build a simple Class A amplifier circuit — one tube stage for voltage gain, one for power output, and an output transformer to match the tube's high impedance to speakers. The result is an amplifier with a warm glow, a warm sound, and retro aesthetics that money can't buy.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Vacuum tubes — 12AX7 (preamp) and EL84 or 6V6 (power) *(salvaged from old radios/TVs, tube suppliers)*
- [ ] Tube sockets — octal or noval, matching your tubes *(electronics supplier)*
- [ ] Output transformer — matches tube impedance to speaker impedance *(tube amp supplier)*
- [ ] Power transformer — provides plate voltage (250-350V) and heater voltage (6.3V or 12.6V) *(tube amp supplier)*
- [ ] Capacitors — high-voltage electrolytic for power supply, coupling caps *(electronics supplier)*
- [ ] Resistors — plate, cathode, grid resistors per the schematic *(electronics supplier)*
- [ ] Chassis — aluminum, steel, or wooden with metal plate *(electronics supplier, workshop)*
- [ ] Input and output jacks — RCA or 1/4" *(electronics supplier)*
- [ ] Speaker — 8 ohm, efficient *(thrift store, electronics supplier)*
- [ ] Power cord and fuse *(hardware store)*

</details>

## 🔨 Build Steps

1. **Choose a proven design.** Don't design your first tube amp from scratch. Use a proven beginner schematic — the Fender Champ (5F1), a single-ended EL84, or any well-documented Class A design. These have decades of real-world validation.
2. **Acquire the tubes.** Salvage tubes from old radios, televisions, and audio equipment at estate sales, thrift stores, or e-waste. Common and useful tubes: 12AX7 (preamp), EL84/6BQ5 (power), 6V6 (power), 5Y3 (rectifier). Test salvaged tubes if possible.
3. **Build the chassis.** Drill holes for tube sockets, transformers, input/output jacks, power switch, and fuse holder. Mount all components. The chassis layout matters — keep input wiring far from output and power wiring to minimize hum.
4. **Wire the power supply.** Connect the power transformer, rectifier tube (or solid-state diode bridge), and filter capacitors. The power supply converts wall AC to the DC plate voltage (~250-350V) and AC heater voltage (6.3V). The high voltage charges the filter capacitors — they hold lethal charge even after power off.
5. **Wire the preamp stage.** Mount the 12AX7 socket and wire the grid, plate, and cathode resistors per the schematic. The input signal connects to the grid through a coupling capacitor. The amplified signal appears at the plate.
6. **Wire the power stage.** Connect the preamp output to the power tube's grid through a coupling capacitor. Wire the power tube's plate to the output transformer primary. The cathode connects to ground through a bias resistor.
7. **Connect the output transformer.** The output transformer's primary connects to the power tube. The secondary connects to the speaker jack. The transformer converts the tube's high-impedance output to the speaker's low impedance.
8. **Test carefully.** Before inserting tubes, power on and check voltages with a multimeter. Verify heater voltage and plate voltage are correct. Insert tubes and test with a low-level audio signal. Start at low volume. Listen for hum, noise, or distortion that indicates wiring errors.
9. **Tune and enjoy.** Adjust bias if needed (cathode resistor value affects operating point). Try different tubes — each tube type and even each individual tube has a slightly different sound character. The warm glow of the tubes in a dark room is as much a part of the experience as the sound.

## ⚠️ Safety Notes

> **Spicy Level 3 build.** Read the Safety Guide and Chemical Safety, Fire & Pyro Safety, High Voltage Safety before starting.

- Tube amplifiers contain LETHAL voltages (250-400V DC on the plates, 300V+ stored in filter capacitors). The capacitors hold charge even after power off. ALWAYS discharge filter capacitors through a bleeder resistor before working inside the chassis. Treat every wire as potentially live.
- Never operate a tube amplifier without a speaker connected. The output transformer can be damaged by the reflected impedance of an open circuit, leading to insulation breakdown and potential transformer failure.
- Tubes get extremely hot during operation (200-300°C envelope temperature). Don't touch them while running or for several minutes after power off. Keep flammable materials away from the chassis. Ensure ventilation holes in the chassis allow heat to escape.

## 🔗 See Also

- [DIY Neon Sign](/categories/chemical-electronic/166-diy-neon-sign/)
- [Arduino Guitar Pedal](/categories/pi-and-arduino/124-arduino-guitar-pedal/)

