# #121 — Fireworks Sequencer

> A Raspberry Pi with a relay board and nichrome igniters gives you professional-grade fireworks show timing.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |

## What Is It?

Professional fireworks shows aren't lit by hand — they're fired by computer-controlled sequencers that cost thousands of dollars. The technology is dead simple: a relay board, some nichrome wire igniters, and a timing program. A Raspberry Pi can do exactly what those professional units do. Wire each firework's fuse to a nichrome igniter, connect the igniter to a relay channel, and write a Python script that fires each channel at precisely timed intervals. Sync it to music. Program build-ups, crescendos, and grand finales. Your backyard Fourth of July show suddenly has the precision of a Disney fireworks display.

## Ingredients

- [ ] Raspberry Pi (any model with GPIO) *(electronics supplier)*
- [ ] 8 or 16 channel relay module — 5V, optically isolated *(electronics supplier)*
- [ ] Nichrome wire — 28-32 gauge, for igniters *(vape supply, online)*
- [ ] Consumer fireworks — whatever is legal in your area *(fireworks retailer)*
- [ ] 12V battery — car battery or deep cycle *(auto parts store)*
- [ ] Jumper wires and screw terminals *(electronics supplier)*
- [ ] Long cable runs — 18-gauge speaker wire, 50+ feet *(hardware store)*
- [ ] Python installed on the Pi *(pre-installed with Raspberry Pi OS)*
- [ ] Master kill switch — physical toggle *(electronics supplier)*
- [ ] Safety goggles and ear protection *(hardware store)*

## Build Steps

1. **Build the igniters.** Cut 3-inch lengths of thin nichrome wire and twist the ends around thicker copper lead wires. When current flows through the thin nichrome section, it glows red-hot in under a second — hot enough to ignite fuse material. Build one igniter per firework.
2. **Wire the relay board.** Connect each relay channel's normally-open contacts to a pair of long speaker wires that run out to the firework positions. One side of each pair connects to the 12V battery positive through the master kill switch. The other side returns to battery negative through the nichrome igniter.
3. **Connect the Pi to the relays.** Wire the relay module's control pins to the Pi's GPIO pins. Use the optically isolated side — this keeps the Pi electrically separated from the 12V ignition circuit. Power the relay module from the Pi's 5V pin.
4. **Write the firing script.** A Python script using RPi.GPIO that activates each relay for a brief pulse (0.5-1 second is enough for nichrome to glow). Program the timing as a list of (channel, time) tuples. Add music sync by using pygame for audio playback with coordinated GPIO triggers.
5. **Set up the firing range.** Place fireworks at their positions outdoors with proper safety distances (follow your local fireworks safety guidelines). Run the speaker wire pairs from each position back to the central control station at least 50 feet away.
6. **Connect the igniters.** At each firework position, clip the nichrome igniter into the fuse of the firework and connect the speaker wire leads. Verify each connection with a multimeter — check for continuity through each igniter circuit.
7. **Test without pyro.** Run the script with the master kill switch OFF. Verify each relay clicks in the correct sequence. Check timing against the music track. Fix any ordering or timing issues in the code.
8. **Arm and fire.** Clear everyone to a safe distance behind the control station. Flip the master kill switch to ARM. Run the firing script. Each channel fires at its programmed time, igniting fuses in precise sequence.
9. **Emergency procedures.** The master kill switch must be within arm's reach at all times. If anything goes wrong, flip the switch. Wait at least 15 minutes before approaching any unfired fireworks — the igniter may have heated the fuse without visible ignition.

## Safety Notes

- This is a real pyrotechnic firing system. Treat it with the same respect as a professional installation. Never wire igniters to fireworks until you are ready to fire. The master kill switch must physically disconnect the battery — never rely on software alone.
- Follow all local fireworks laws. Many jurisdictions require permits for electronically fired displays. Check your local regulations before building or using this system.
- Nichrome igniters are hot enough to ignite fuses, clothing, and skin instantly when energized. Never handle igniters while the system is armed. Never test igniters near fireworks or flammable materials.

## See Also

- [Smoke Bomb Array](../pyro-and-chemistry/103-smoke-bomb-array.md)
- [Cold Spark Machine](../pyro-and-chemistry/104-cold-spark-machine.md)
