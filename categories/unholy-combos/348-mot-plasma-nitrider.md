---
layout: build
title: "MOT Plasma Nitrider"
build_number: 348
description: "A microwave oven transformer creates a plasma arc inside a sealed pressure cooker filled with nitrogen. The plasma bonds nitrogen atoms to steel surfaces — case hardening at 50,000°F."
image: /images/builds/348-mot-plasma-nitrider.jpg
category: unholy-combos
category_name: "Unholy Combos"
tags: [spectacle, functional]
junk: [microwave]
ratings:
  jaw: 5
  brain: 5
  wallet: 3
  spicy: 5
  clout: 5
  time: 3
---
# #348 — MOT Plasma Nitrider

<p align="center">
  <img src="/images/builds/348-mot-plasma-nitrider.jpg" alt="MOT Plasma Nitrider" width="700" height="394" />
</p>

> A microwave oven transformer creates a plasma arc inside a sealed pressure cooker filled with nitrogen. The plasma bonds nitrogen atoms to steel surfaces — case hardening at 50,000°F.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Plasma nitriding is an industrial surface-hardening process used on gears, crankshafts, injection mold tooling, and firearm components. The workpiece sits inside a vacuum chamber filled with nitrogen gas. High voltage ionizes the nitrogen into a plasma — a glowing, electrically conductive gas where nitrogen atoms have been stripped of electrons and are moving at enormous energy. These energized nitrogen ions slam into the steel surface and diffuse into the crystal lattice, forming iron nitrides (Fe₂N, Fe₃N, Fe₄N) that are dramatically harder than the base steel. Surface hardness jumps from 200 HV (mild steel) to 700-1200 HV (approaching ceramic hardness) while the core stays tough and ductile. It's the best of both worlds — a hard shell over a flexible core.

Industrial plasma nitriding systems cost $50,000 to $500,000. They use vacuum pumps, mass flow controllers, precision power supplies, and computer-controlled process recipes. The physics, however, is surprisingly simple: you need a sealed vessel, a nitrogen atmosphere, and enough voltage to strike a plasma. A pressure cooker is a sealed vessel rated for pressure differentials. A microwave oven transformer (MOT) produces 2,100 volts at lethal current — more than enough to ionize nitrogen gas. The workpiece becomes the cathode (negative electrode), the cooker wall becomes the anode (positive), and the nitrogen gas between them becomes a glowing purple plasma sheath that wraps the workpiece and bombards it with nitrogen ions.

This is one of the most legitimately dangerous builds in the entire collection. You're combining a high-voltage transformer that can kill instantly with a sealed pressure vessel containing ionized gas at elevated temperature. The result, if you build it correctly, is a tool that transforms garbage-grade mild steel into tool-grade surface hardness — a capability that professional shops pay thousands of dollars to access. If you build it incorrectly, the result is an arc flash, a ruptured vessel, or electrocution. This build is not for beginners. Read every safety note twice.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Stovetop pressure cooker — stainless steel, 8-quart minimum *(thrift store, $8–12)*
- [ ] Microwave oven transformer (MOT) — from any 700W+ microwave *(thrift store/junkyard microwave, $5–10)*
- [ ] Variac or SCR controller — for variable voltage control on the MOT primary *(electronics supplier, $15–30)*
- [ ] Ceramic feedthrough insulators — two, for passing electrodes through the cooker lid without shorting *(electrical supplier, $5–10)*
- [ ] Tungsten or stainless steel electrode rods — 1/4" diameter, for cathode and anode connections inside the vessel *(welding supplier, $5–8)*
- [ ] Nitrogen gas cylinder with regulator — pure nitrogen, not air (oxygen in plasma causes oxidation instead of nitriding) *(welding supplier rental, $30–50)*
- [ ] Vacuum pump (optional but recommended) — to evacuate air before filling with nitrogen *(harbor freight, $60; or car A/C vacuum pump)*
- [ ] High-voltage cable — silicone-insulated, rated for 3kV+ *(electrical supplier, $8–12)*
- [ ] Current-limiting resistor or ballast — to prevent runaway arc current from tripping the MOT or welding the electrodes *(power resistor, $5–10)*
- [ ] Thermocouple — K-type, to monitor workpiece temperature through a sealed port *(electronics supplier, $5–10)*
- [ ] Pressure gauge — 0–30 PSI *(auto parts store, $8–12)*
- [ ] High-voltage safety gear — insulated gloves rated 2.5kV+, insulated mat, safety glasses *(electrical supplier, $20–30)*
- [ ] Kill switch — clearly labeled, within arm's reach, wired to cut MOT primary power instantly *(hardware store, $5)*

</details>

## 🔨 Build Steps

1. **Extract and prepare the MOT.** Remove the microwave oven transformer from a dead microwave. Discharge the capacitor first — MOT capacitors hold lethal charge. The MOT has a primary winding (120V input) and a secondary winding (2,100V output). Leave both windings intact. You'll power the primary through a variac for voltage control. The secondary's 2,100V output strikes and maintains the plasma arc. Wire a kill switch in series with the primary — you need to be able to cut power instantly.

2. **Install electrode feedthroughs in the cooker lid.** Drill two holes in the pressure cooker lid, spaced 3-4 inches apart. Install ceramic feedthrough insulators in each hole — these must electrically isolate the electrodes from the metal lid while maintaining a pressure seal. Thread stainless steel or tungsten rods through the insulators. The inner rod ends will be the anode and cathode inside the vessel. The outer rod ends connect to the MOT secondary winding with high-voltage cable. Seal around each insulator with high-temperature RTV silicone rated for the working temperature.

3. **Configure the electrodes.** The workpiece connects to the cathode (negative terminal of MOT secondary). Suspend the workpiece from the cathode rod using stainless steel wire so it hangs freely in the center of the cooker, not touching the walls. The anode rod (positive terminal) should point toward the workpiece from the opposite side. The gap between the workpiece surface and the anode determines the plasma characteristics — start with 1-2 inches. Too close and you get arc welding instead of glow discharge. Too far and the plasma won't strike.

4. **Purge air and fill with nitrogen.** This is critical. Air contains 21% oxygen. Oxygen plasma doesn't nitride steel — it oxidizes it (makes rust). You need a pure nitrogen atmosphere. Connect the nitrogen cylinder to one port on the cooker lid. If you have a vacuum pump, evacuate the cooker first, then backfill with nitrogen. If you don't have a vacuum pump, flow nitrogen through the cooker for 10 minutes with a second port open as an exhaust to purge the air by displacement. Once purged, seal the exhaust and pressurize to 2-5 PSI with nitrogen. Full 15 PSI is unnecessary and increases the voltage needed to strike plasma.

5. **Strike the plasma.** With the cooker sealed, nitrogen-filled, and electrodes connected to the MOT secondary through the variac, slowly increase the variac from zero. At some voltage — typically 800-1,500V depending on gap distance and nitrogen pressure — the gas ionizes and a glow discharge forms around the workpiece. You'll see a purple-violet glow through any sight glass or transparent feedthrough. The glow should be even and diffuse (glow discharge), not a single bright point (arc discharge). If it arcs, reduce voltage immediately — an arc melts the workpiece surface instead of nitriding it.

6. **Maintain glow discharge for 2-6 hours.** The nitriding process is slow — nitrogen ions need time to diffuse into the steel surface. Maintain a stable glow at the lowest voltage that sustains it. Monitor the thermocouple — workpiece temperature should reach 400-550°C (750-1020°F) from the plasma bombardment. This temperature range optimizes nitrogen diffusion depth. Too cold and the nitrogen stays on the surface. Too hot and the nitride layer becomes brittle and spalls off.

7. **Cool under nitrogen.** When the treatment time is complete, reduce the variac to zero and kill power to the MOT. Leave the nitrogen flowing and let the workpiece cool inside the sealed vessel. Do not open the cooker while hot — exposing the freshly nitrided surface to air at high temperature causes surface oxidation that ruins the hardened layer. Wait until the thermocouple reads below 150°C (300°F) before venting and opening.

8. **Test the results.** The nitrided surface should be visually different — often a silver-gray or blue-gray color instead of the original steel color. Test hardness with a file — a file that bit into the steel before nitriding should skate across the surface without cutting. If you have a Rockwell or Vickers hardness tester, measure the surface. A successful treatment on mild steel yields 500-800 HV surface hardness. The hardened layer is typically 0.1-0.3mm deep after a 4-hour treatment — thin, but enough to dramatically improve wear resistance on cutting edges, bearing surfaces, and sliding contacts.

## ⚠️ Safety Notes

> **Spicy Level 5 build.** This is the most electrically dangerous build in the collection. The MOT secondary delivers 2,100V at currents that are instantly lethal. Do not attempt this build without experience working with high-voltage systems.

- **LETHAL VOLTAGE.** The MOT secondary produces 2,100V AC at up to 1A — more than enough to kill instantly. This is not the kind of shock that throws you across the room. This is the kind that stops your heart. Never touch any part of the circuit while energized. Use one hand only when adjusting the variac (one-hand rule prevents current path through the chest). Always use the kill switch before approaching the setup. Work on an insulated mat. Have a second person present who knows where the kill switch is and can call emergency services.
- The pressure cooker is electrically live during operation — the anode or cathode may short to the vessel wall through a failed insulator. Ground the cooker body through a separate ground wire to your electrical panel ground. Use a GFCI outlet for the MOT primary.
- Nitrogen gas is an asphyxiant. A leaking fitting in an enclosed space displaces breathable air with no warning — nitrogen is odorless and colorless. Work in a ventilated area. If you feel dizzy or lightheaded, leave immediately.
- The cooker reaches 400-550°C internally during operation. The exterior will be extremely hot. Do not touch with bare hands. Keep flammable materials well clear.
- If the glow discharge transitions to a hard arc (single bright point, loud buzzing), kill power immediately. Arcing damages the workpiece and can melt through the electrode or insulator, breaching the vessel.
- This build modifies a pressure cooker beyond its design intent. The ceramic feedthroughs are potential weak points. Test at pressure with nitrogen before applying any voltage. If a feedthrough fails under pressure, it becomes a projectile.

## 🔗 See Also

- [Microwave Chemical Reactor](/categories/alchemist-cookbook/279-microwave-chemical-reactor/)
- [Capacitor Bank Plasma Igniter](/categories/alchemist-cookbook/275-capacitor-bank-plasma-igniter/)
- [Pressure Cooker Autoclave](/categories/pressure-cooker/339-pressure-cooker-autoclave/)
