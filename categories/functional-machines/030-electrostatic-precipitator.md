---
layout: build
title: "Electrostatic Precipitator"
build_number: 30
description: "A high-voltage wire between grounded plates ionizes smoke and dust particles, then yanks them out of the air. Industrial-grade air cleaning from junkyard parts."
image: /images/builds/030-electrostatic-precipitator.jpg
category: functional-machines
category_name: "Functional Machines"
tags: [functional, practical]
junk: [crt, laptop]
ratings:
  jaw: 3
  brain: 3
  wallet: 2
  spicy: 3
  clout: 2
  time: 2
---
# #030 — Electrostatic Precipitator

<p align="center">
  <img src="/images/builds/030-electrostatic-precipitator.jpg" alt="Electrostatic Precipitator" width="700" />
</p>

> A high-voltage wire between grounded plates ionizes smoke and dust particles, then yanks them out of the air. Industrial-grade air cleaning from junkyard parts.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Electrostatic precipitators (ESPs) are how coal power plants clean their exhaust, how commercial kitchens handle grease smoke, and how industrial facilities meet air quality regulations. The principle is simple: a thin wire charged to high voltage ionizes air molecules. Those ions attach to smoke, dust, or grease particles passing by, giving them an electrical charge. Grounded metal plates flanking the wire attract the charged particles and collect them. Clean air comes out the other side.

A flyback transformer from an old CRT TV provides the high voltage (10-30kV DC). Aluminum foil or sheet metal provides the collector plates. A section of PVC or duct provides the housing. The result is a device that visibly pulls smoke out of the air, leaving the output stream clean and clear. It's one of the most satisfying demonstrations of applied physics you can build.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Flyback transformer — from a dead CRT TV or monitor *(e-waste, thrift store)*
- [ ] Driver circuit for the flyback — 555 timer + MOSFET, or a ZVS driver board *(electronics supplier, ~$5-$10)*
- [ ] Thin stainless steel wire — 30-gauge or thinner, for the ionizing electrode *(hardware store, craft supply)*
- [ ] Aluminum sheet or foil — for collector plates *(hardware store, kitchen roll)*
- [ ] PVC pipe or duct — 4"-6" diameter, ~12" long, for the housing *(hardware store)*
- [ ] 12V power supply — 2A+ for the flyback driver *(old laptop charger, electronics bin)*
- [ ] Small fan — PC case fan or similar, to pull air through the unit *(dead PC, electronics)*
- [ ] High-voltage wire — silicone-insulated, for connecting the flyback output *(electronics supplier)*
- [ ] Insulators — plastic standoffs to mount the wire away from the grounded plates *(hardware store)*
- [ ] Resistor — 10M ohm, in series with the HV output for current limiting *(electronics supplier)*

</details>

## 🔨 Build Steps

1. **Build the flyback driver.** Wire the 555 timer circuit or ZVS driver board to the flyback transformer's primary. These circuits are well-documented and require only a handful of components. Power it from the 12V supply. When energized, the flyback output produces 10-30kV DC at very low current — enough to ionize air but not enough to be immediately lethal (still dangerous though).
2. **Test the flyback.** With the driver running, bring the high-voltage output wire near a grounded surface. You should see or hear small sparks jumping across a 1/4"-1/2" gap. If you get consistent arcing, the flyback is working. Add the 10M ohm resistor in series with the output to limit current.
3. **Build the collection chamber.** Cut the PVC pipe to length. Inside, mount alternating grounded plates and high-voltage wires. The simplest arrangement: a row of parallel aluminum plates spaced 1" apart, with a thin wire running between each pair of plates. The plates connect to ground; the wires connect to the flyback's high voltage output.
4. **Mount the ionizing wires.** Stretch the thin wire taut between plastic insulators at each end of the chamber. The wire must not touch any grounded surface. Tension matters — a sagging wire changes the gap distance and creates inconsistent ionization.
5. **Connect the collector plates to ground.** All plates connect together and to the ground terminal of the flyback. The plates must be smooth and clean — dirty or rough plates don't collect as efficiently.
6. **Install the fan.** Mount a small fan at one end of the tube to pull air through the collection chamber. The air speed should be moderate — too fast and particles blow past the plates before being collected. Too slow and throughput is minimal.
7. **Seal and insulate.** Ensure all high-voltage connections are insulated and cannot be touched during operation. The HV wire inside the chamber is enclosed by the PVC pipe. External connections should be covered with silicone or hot glue.
8. **Test with smoke.** Light an incense stick or a match, blow it out, and hold the smoke stream near the intake. You should see the smoke entering the device and clean air exiting. The collector plates will accumulate a visible layer of soot after several minutes of operation.

## ⚠️ Safety Notes

> **Spicy Level 3 build.** Read the Safety Guide before starting.

- The flyback transformer produces high voltage (10-30kV) that can cause a painful shock and potentially cardiac disruption. Always include the current-limiting resistor. Never touch the high-voltage wire or connections while the unit is powered. Discharge all components before servicing.
- Ozone is produced as a byproduct of corona discharge. In small amounts it smells clean; in large amounts it's a respiratory irritant. Run the device in a ventilated area. If the ozone smell is strong, reduce the voltage or increase airflow.
- If used for kitchen grease or workshop smoke, the collector plates accumulate flammable residue. Clean the plates regularly with degreaser. Do not let buildup become excessive.

## 🔗 See Also

- [Vacuum Chamber](/categories/mad-scientist/039-vacuum-chamber/)
- [Silent Compressor](/categories/functional-machines/031-silent-compressor/)
