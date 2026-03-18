# #229 — Electromagnetic Firework Launcher

> A coil gun launches firework shells silently on electromagnetic force, with electrical ignition at altitude. No black powder lift charge. No mortar tube bang. Just physics and fire in the sky.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## What Is It?

A traditional firework mortar uses a black powder lift charge to hurl a shell skyward with a loud BANG. A coil gun uses a solenoid — a coil of wire wrapped around a tube — pulsed with a massive current from a capacitor bank. The magnetic field yanks a ferromagnetic projectile up the barrel at high speed, silently. Combine these concepts: build a coil gun barrel large enough to accept a firework shell fitted with a steel sabot (a steel sleeve around the shell), charge the capacitor bank from a microwave oven transformer, and fire. The shell launches silently on electromagnetic force. At the apex, a timed electronic fuse or altitude sensor triggers the shell's burst charge. The result is a firework that appears in the sky with no launch bang — just a sudden burst of color from silence. This is the most technically ambitious build in the repo. It combines high-voltage capacitor charging, electromagnetic coil design, projectile engineering, and pyrotechnic timing into one system. The silence of the launch makes the aerial burst dramatically more surprising.

## Ingredients

- [ ] Microwave oven transformer (MOT) — for capacitor charging *(dead microwave)*
- [ ] Capacitor bank — large electrolytic capacitors, 400V+, 10,000µF+ total *(salvage from electronics, or purchase ~$30)*
- [ ] Magnet wire — 10-14 gauge enameled copper, for the coil *(electronics supplier, ~$20)*
- [ ] Launch tube — PVC or fiberglass tube, diameter matched to your shell size *(hardware store)*
- [ ] Steel sabots — thin steel sleeves or rings that fit around the firework shell *(machine shop or fabricate from steel pipe)*
- [ ] SCR or IGBT — high-current switching device to dump the capacitor through the coil *(electronics supplier, ~$10)*
- [ ] Timing circuit — Arduino or 555 timer for trigger control *(electronics supplier)*
- [ ] Electronic fuse or time-delay igniter — fires the shell's burst charge at altitude *(fireworks supply or build from nichrome + timer)*
- [ ] Firework shells — consumer aerial shells *(fireworks store, where legal)*
- [ ] Charging circuit — rectifier + current limiting resistor for safe capacitor charging *(build from MOT secondary)*
- [ ] Safety discharge resistor — high-wattage, for emergency capacitor drain *(electronics supplier)*

## Build Steps

1. **Design the coil.** Calculate the solenoid dimensions for your shell size. The launch tube should be slightly larger than the steel sabot's outer diameter. Wind 10-14 gauge magnet wire around the tube in a single-layer or multi-layer coil, about 6-10 inches long. More turns and thicker wire = stronger magnetic field, but also more inductance (slower pulse). A typical starting point is 50-80 turns of 12 gauge wire.
2. **Build the capacitor bank.** Wire large electrolytic capacitors in parallel for more energy storage (capacitance adds) and/or in series for higher voltage (voltage adds). Target 400V at 10,000-50,000µF for meaningful launch energy. The energy stored is E = 0.5 × C × V², so doubling voltage quadruples energy. Use capacitors rated for pulse discharge (photo flash capacitors are ideal).
3. **Build the charging circuit.** The MOT secondary produces 2000V AC — far too high for most capacitors. Use a step-down transformer or a voltage multiplier from the MOT, rectified with high-voltage diodes, to charge the capacitor bank to its rated voltage. Include a current-limiting resistor to prevent inrush damage. Charging should take 10-30 seconds per shot. Add a voltmeter to monitor charge level.
4. **Install the switching device.** An SCR (silicon-controlled rectifier) or IGBT (insulated gate bipolar transistor) switches the capacitor bank's stored energy through the coil in a single, massive pulse. The trigger signal comes from the Arduino or a simple pushbutton circuit. When the SCR fires, thousands of amps flow through the coil for milliseconds, creating the magnetic pulse that launches the projectile.
5. **Build the steel sabots.** Cut short lengths of thin-wall steel pipe that fit snugly around your firework shells. The sabot must be ferromagnetic (attracted to a magnet — test with any fridge magnet). Stainless steel is usually non-magnetic; mild steel or iron works. The sabot should be heavy enough to be grabbed by the coil's field but light enough to not weigh down the shell's flight. Design the sabot to separate from the shell after launch (a friction fit that the acceleration breaks free).
6. **Assemble the launch tube.** Mount the coil-wrapped launch tube vertically in a stable frame. The sabot-clad shell slides down into the tube and rests at the bottom, centered in the coil. When the coil fires, the magnetic field yanks the steel sabot (and the attached shell) upward through and out of the tube.
7. **Install the electronic fuse.** Each firework shell needs a time-delay igniter to fire its burst charge at the apex of flight. Wrap nichrome wire around the shell's fuse and connect it to a small timer circuit (555 timer or ATtiny microcontroller) with a coin cell battery. The timer starts when the shell is launched (triggered by an accelerometer, a pull-pin switch, or a timed signal from the main controller). After a preset delay (2-4 seconds), the nichrome fires and ignites the shell fuse.
8. **Test with inert loads first.** Before launching live firework shells, test the coil gun with steel slugs of the same weight. Measure muzzle velocity and height achieved. You need the shell to reach 80-200 feet for a proper aerial burst. Adjust capacitor voltage, coil turns, and sabot weight until you hit target altitude.
9. **Live fire.** Load a sabot-clad shell with electronic fuse installed. Charge the capacitor bank. Clear the area (200+ foot safety radius — this is experimental). Arm the fuse timer. Fire the coil gun from the control station. The shell launches silently, arcs upward, and the burst charge fires at altitude. The silence of the launch followed by the sudden aerial burst is genuinely startling.
10. **Iterate.** Each variable — capacitor energy, coil geometry, sabot mass, fuse timing — affects the result. Keep a log. Adjust one variable at a time. This build rewards patient engineering more than any other in the repo.

## Safety Notes

- The capacitor bank stores lethal energy. At 400V and 50,000µF, the stored energy is 4,000 joules — enough to kill on contact. Always discharge the capacitor bank through a high-wattage resistor (not a screwdriver — that welds tips and sprays sparks) before touching any part of the circuit. Install a safety discharge switch and a bleeder resistor that automatically drains the bank when the system is powered down. Treat the charged capacitor bank with the same respect you'd give a loaded firearm.
- Firework shells are explosive. Follow all applicable laws. The electromagnetic launch does not change the legal classification of the firework — it's still a firework, and the same distance, age, and permit requirements apply. This build is illegal in many jurisdictions regardless of the launch method.
- The coil gun generates intense electromagnetic fields during discharge. Keep pacemakers, credit cards, hard drives, and sensitive electronics far from the coil. The pulse can also induce currents in nearby metal objects, causing unexpected heating or movement.

## See Also

- [Coil Gun](../mad-scientist/037-coil-gun.md)
- [MOT-Ignited Firework Mortar](227-mot-ignited-firework-mortar.md)
