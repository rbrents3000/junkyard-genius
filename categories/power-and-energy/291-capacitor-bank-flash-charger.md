---
layout: build
title: "Capacitor Bank Flash Charger"
build_number: 291
description: "Slow charge. Fast dump. A bank of salvaged electrolytic capacitors that stores energy like a battery and releases it like a lightning bolt."
image: /images/builds/291-capacitor-bank-flash-charger.jpg
category: power-and-energy
category_name: "Power & Energy"
tags: [functional, practical]
junk: [crt, microwave]
ratings:
  jaw: 3
  brain: 4
  wallet: 2
  spicy: 4
  clout: 3
  time: 2
---
# #291 — Capacitor Bank Flash Charger

<p align="center">
  <img src="/images/builds/291-capacitor-bank-flash-charger.jpg" alt="Capacitor Bank Flash Charger" width="700" height="394" />
</p>

> Slow charge. Fast dump. A bank of salvaged electrolytic capacitors that stores energy like a battery and releases it like a lightning bolt.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

A capacitor stores energy in an electric field. Unlike a battery, which releases energy slowly through a chemical reaction, a capacitor can dump its entire charge in a fraction of a second. A single large electrolytic capacitor from a dead power supply or amplifier can store enough energy to create a loud bang and a bright flash. Wire a bunch of them together in a bank, and you've got a device that charges slowly from a low-power source and discharges fast enough to spot-weld metal, power an electromagnetic coil gun, fire a bank of camera flashes simultaneously, or do things to watermelons that you probably shouldn't describe in writing.

The physics are straightforward: energy stored equals one-half times capacitance times voltage squared. Double the voltage, quadruple the energy. That's why the voltage rating matters more than the capacitance — a 450V capacitor from a dead CRT monitor stores dramatically more energy than a 25V capacitor of the same capacitance from a motherboard. Old power supplies, amplifiers, CRT monitors, microwave ovens, and industrial equipment are the best sources. The capacitors are the largest components inside — big cylindrical cans with two leads, usually clamped to the chassis.

This is a building block more than a finished product. The capacitor bank itself is a general-purpose energy storage and rapid-discharge device. What you do with it determines whether the build is useful, entertaining, or terrifying. At minimum, you'll learn a lot about energy storage, discharge curves, and electrical safety. At maximum, you'll have the power source for a dozen other electromagnetic experiments.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Electrolytic capacitors — salvaged from dead power supplies, CRT monitors, amplifiers, UPS units, and industrial equipment. Match voltage ratings within the bank — never mix ratings. Higher voltage = more energy per farad *(e-waste, ~free)*
- [ ] Bus bars — copper strip or heavy copper wire for connecting capacitors in parallel *(electrical supplier, hardware store, ~$10-$15)*
- [ ] Charging resistor — limits inrush current during charging, sized based on your power supply's current rating (100-1K ohm, high wattage) *(electronics supplier, ~$2-$5)*
- [ ] Discharge resistor (bleeder) — permanently wired across the bank to slowly drain stored charge when not in use, preventing surprise shocks (10K-100K ohm, 2-5W) *(electronics supplier, ~$1-$3)*
- [ ] Dump resistor — low-value, high-wattage resistor for manually discharging the bank quickly before working on it (10-100 ohm, 25-50W) *(electronics supplier, ~$3-$8)*
- [ ] High-current relay or contactor — rated for the bank's voltage and peak discharge current, used to trigger the discharge into a load *(automotive supplier, industrial surplus, ~$10-$30)*
- [ ] Voltage display — panel-mount voltmeter to show current charge level *(electronics supplier, ~$5-$8)*
- [ ] Fuse — fast-blow, rated for the bank's voltage, placed in the charge circuit *(electronics supplier, ~$2)*
- [ ] Banana jack terminals — for connecting external loads safely *(electronics supplier, ~$3-$5)*
- [ ] Safety enclosure — insulating box (plastic or wood, NOT metal) with a lid and clearly labeled HIGH VOLTAGE warnings *(hardware store, ~$10-$20)*
- [ ] Power supply — bench supply or battery charger for charging the bank, voltage must match or exceed the capacitor rating *(workshop, electronics supplier)*

</details>

## 🔨 Build Steps

1. **Harvest the capacitors.** Open dead power supplies, amplifiers, CRT monitors, and UPS units. The electrolytic capacitors are the large cylindrical cans — you can't miss them. Before removing anything, discharge each capacitor by touching a resistor (100 ohm, 5W or higher) across its terminals. Hold for 10 seconds, then verify zero voltage with a multimeter. Never assume a capacitor is discharged. CRT capacitors and microwave oven capacitors can hold lethal charges for days after the device is unplugged. Remove the capacitors by desoldering or cutting leads with enough length to work with.

2. **Sort and match.** Group capacitors by voltage rating and capacitance. Your bank must use capacitors with the same voltage rating — charging a 200V-rated capacitor to 400V will cause it to explode violently. Same voltage rating, same polarity, wired in parallel. Parallel connection adds capacitance while keeping the voltage rating the same. A bank of ten 450V 330uF capacitors in parallel gives you 3300uF at 450V — about 334 joules of stored energy.

3. **Build the bus bars.** Cut two lengths of copper strip or heavy copper wire to serve as the positive and negative bus bars. Space them far enough apart that arcing is impossible at your bank's voltage rating — at least 1 inch per 100V as a conservative rule. Mount the bus bars to an insulating base (wood, plastic, or phenolic board — never metal).

4. **Mount and connect the capacitors.** Arrange the capacitors between the bus bars with all positive terminals facing the positive bus and all negatives facing the negative bus. Solder or bolt each capacitor's leads to the appropriate bus bar. Double-check polarity on every single capacitor — a reversed electrolytic capacitor will fail explosively when charged. Mark the positive bus bar clearly with red tape or paint.

5. **Install the bleeder resistor.** Solder the bleeder resistor (10K-100K ohm) directly across the bus bars. This resistor permanently and slowly drains stored charge whenever the bank is not actively being charged. Its purpose is safety — it ensures the bank doesn't sit at full voltage indefinitely. The bleed-down time constant (R times C) tells you how long it takes. A 47K ohm resistor across 3300uF takes about 155 seconds (one time constant) to drop to 37% voltage, and about 13 minutes (five time constants) to drain to essentially zero.

6. **Wire the charging circuit.** Connect the positive terminal of your power supply through the charging resistor and fuse to the positive bus bar. Connect the negative terminal to the negative bus bar. The charging resistor limits the inrush current — without it, the uncharged capacitor bank looks like a dead short to the power supply and will blow fuses, trip breakers, or destroy the supply. The charging time depends on the resistor value and total capacitance. A 1K ohm resistor charging 3300uF to 450V takes about 16.5 seconds (5 time constants).

7. **Wire the discharge circuit.** Connect the high-current relay between the positive bus bar and one of the banana jack output terminals. Connect the other banana jack terminal to the negative bus bar. The relay is your trigger — when energized, it slams closed and connects the charged bank to whatever load is on the output terminals. Use a momentary switch to activate the relay. The relay must be rated for the bank's full voltage and the expected peak current — at discharge, the current can be hundreds or thousands of amps for milliseconds.

8. **Install the voltage display.** Wire the panel-mount voltmeter across the bus bars so you can see the bank's charge state at all times. This is your go/no-go indicator before every discharge and your confirmation that the bank has been safely drained before you open the enclosure.

9. **Build the safety enclosure.** Mount all components inside a non-conductive enclosure (plastic storage box, wooden box — not a metal enclosure, which could become energized in a fault). Only the voltage display, charge switch, trigger button, and output banana jacks should be accessible from outside. The enclosure should have a secure lid that you must deliberately open — no accidental contact with charged bus bars. Label the enclosure with "HIGH VOLTAGE" and the maximum charge voltage.

10. **Test with low voltage first.** Before charging to full voltage, test the entire system at a low, non-dangerous voltage — 12V from a bench supply is fine. Verify the charging circuit works, the voltage display reads correctly, the relay triggers on command, and the discharge goes through the output terminals. Connect a light bulb as a test load and fire the relay — the bulb should flash brightly as the bank dumps into it. Once everything works at 12V, gradually increase the charge voltage toward the bank's rated maximum.

11. **Calibrate for your application.** A spot welder needs a specific energy level — too little and the weld won't hold, too much and it blows holes. A coil gun needs a specific pulse duration. Camera flash arrays need a specific voltage. Experiment with charge voltage and load resistance to dial in the discharge energy for your specific use case. Keep a log of what works — capacitor bank tuning is empirical.

## ⚠️ Safety Notes

> **Spicy Level 4 build.** Read the Safety Guide and High Voltage Safety before starting.

- A charged capacitor bank can kill you. At 450V and 3300uF, this bank stores 334 joules — roughly the energy of a .22 caliber bullet. The discharge happens in milliseconds, meaning peak current can reach thousands of amps. Treat a charged capacitor bank exactly like a loaded weapon: never point the output at anything you don't intend to destroy, and never work on the internals while charged.
- Always discharge the bank before opening the enclosure or touching any wiring. Use the dump resistor: clip it across the output terminals with insulated test leads and wait for the voltmeter to read zero. Then wait another 30 seconds. Then verify zero with a multimeter. Then you can touch it.
- Electrolytic capacitors can fail catastrophically if reverse-charged, overcharged, or physically damaged. A failing capacitor vents hot electrolyte and can shoot its end cap across the room. Wear safety glasses when working with or near a charged bank. The charging fuse is your protection against overcharge — size it correctly.
- CRT and microwave oven capacitors deserve special respect. Some contain oil-filled paper capacitors that can hold charge for days or weeks. Discharge them before removal, discharge them again before handling, and discharge them one more time before wiring into your bank. Paranoia is appropriate here.
- Do not charge the bank beyond the rated voltage of any capacitor in the bank. The weakest capacitor sets the limit.
- Keep one hand in your pocket when working near charged high-voltage circuits. A current path across the chest (hand to hand) is far more dangerous than hand to ground.

## 🔗 See Also

- [DIY Powerwall](/categories/power-and-energy/052-diy-powerwall/)
- [Rail Gun](/categories/mad-scientist/036-rail-gun/)
- [Coil Gun](/categories/mad-scientist/037-coil-gun/)

