---
layout: build
title: "Confetti Cannon Controller"
build_number: 320
description: "Arduino-triggered solenoid-powered confetti cannons for perfectly synchronized celebration explosions."
image: /images/builds/320-confetti-cannon-controller.jpg
category: pranks-and-party
category_name: "Pranks & Party"
tags: [spectacle, creative]
junk: [arduino, laptop]
ratings:
  jaw: 4
  brain: 2
  wallet: 2
  spicy: 1
  clout: 5
  time: 2
---
# #320 — Confetti Cannon Controller

<p align="center">
  <img src="/images/builds/320-confetti-cannon-controller.jpg" alt="Confetti Cannon Controller" width="700" height="394" />
</p>

> Arduino-triggered solenoid-powered confetti cannons for perfectly synchronized celebration explosions.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

A confetti cannon controller uses salvaged solenoids — from dead washing machines, car door lock actuators, or old pinball machines — to fire spring-loaded confetti tubes on command. An Arduino controls the timing, letting you fire individual cannons in sequence, all at once, synced to a music beat, or triggered from a wireless remote across the room. Wire up four to eight cannons positioned around a room, a stage, or a backyard, and you get synchronized celebration effects that look like a professional pyrotechnics show without the fire, the permits, or the budget. Each cannon fires a burst of confetti 10-15 feet in the air. Eight of them going off in a choreographed wave is the kind of thing people pull out their phones to record.

Each cannon is mechanically simple: a PVC tube holds a compressed spring and a plunger with confetti loaded on top. The solenoid holds the plunger in the cocked (compressed) position via a pin or latch mechanism. When the Arduino triggers the relay, the solenoid retracts the pin, the spring releases, and the plunger slams upward, launching the confetti payload into the air. The cannons are fully reloadable — push the plunger back down, re-engage the solenoid latch, pour in more confetti, and it's ready for the next salvo. Reload time is about 30 seconds per tube once you've practiced the motion.

The controller is where the creativity lives. A basic setup uses a wireless doorbell module as the remote trigger — press the doorbell button from across the room and all cannons fire simultaneously. But with an Arduino in the chain, you can program firing patterns: a sequential wave that ripples across the room left to right, a starburst pattern where cannons fire outward from center, a music-synced mode that triggers on bass hits using a microphone module, or a countdown timer that fires at midnight on New Year's Eve. The relay board handles the electrical switching — each relay controls one solenoid, and the Arduino controls each relay independently. The whole system runs on a single 12V power supply, which can be any old laptop charger rated for 2+ amps. Total cost for an 8-cannon system with wireless remote: about $30 in parts, mostly stuff you already have in a junk drawer.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Solenoid actuators x 4-8 — car door lock solenoids, washing machine water valve solenoids, or pinball machine solenoids *(salvaged from dead appliances — free; or eBay, ~$2 each)*
- [ ] PVC tubes, 1.5-2" diameter — one per cannon, about 12" long *(hardware store, ~$5 total)*
- [ ] Compression springs — one per cannon; pen springs, clothespin springs, or screen door springs *(salvaged — free; or hardware store, ~$3 for assorted pack)*
- [ ] Arduino Uno or Nano — the brain *(electronics supplier, ~$5)*
- [ ] Relay module, 4 or 8 channel — matches the number of cannons *(electronics supplier, ~$4)*
- [ ] 12V power supply — old laptop charger, 2A+ rating *(e-waste bin — free)*
- [ ] Wireless doorbell module — press the button from across the room to trigger *(dollar store or hardware store, ~$5)*
- [ ] Confetti — store-bought, or hole-punch your own from colored paper *(craft store, ~$3; or free with a hole punch)*
- [ ] Wire + connectors — 22-gauge hookup wire, spade connectors, screw terminals *(junk drawer or electronics supplier, ~$3)*
- [ ] Plunger discs — cut from scrap acrylic, wood, or stiff cardboard; sized to fit inside PVC tubes *(scrap bin — free)*
- [ ] Small screws or pins — for the solenoid latch mechanism *(hardware store, ~$2)*
- [ ] Hot glue or zip ties — for mounting solenoids to cannon tubes *(junk drawer)*
- [ ] Scrap wood or mounting board — base for positioning cannons *(scrap bin — free)*
- [ ] Optional: microphone module — for music-synced triggering *(electronics supplier, ~$2)*
- [ ] Optional: WS2812B LED strip — for countdown light effects before firing *(electronics supplier, ~$5)*

</details>

## 🔨 Build Steps

1. **Build the cannon tubes.** Cut PVC tubes to 12" lengths. Sand the inside smooth. For each tube, cut a plunger disc from scrap acrylic or stiff cardboard — it should slide freely inside the tube with minimal wobble. Glue the spring to the bottom of the plunger disc (or just let it sit loose underneath — gravity and the tube walls keep it centered). Drop the spring into the tube, place the plunger on top, and press it down to compress the spring. The plunger should launch upward 12-18 inches when released. If the spring is too weak, double it up or find a stiffer one.

2. **Build the latch mechanism.** Each cannon needs a way to hold the plunger in the cocked (compressed) position until the solenoid releases it. Drill a small hole through the PVC tube wall near the bottom, where the plunger sits when compressed. Insert a pin or small bolt through this hole — the pin passes through the tube wall and sits under the plunger disc, preventing it from rising. The solenoid mounts on the outside of the tube and connects to this pin. When the solenoid fires, it pulls the pin out of the tube, releasing the plunger. Test this mechanism by hand before wiring anything — push the plunger down, insert the pin, verify it holds, pull the pin and confirm the plunger launches.

3. **Mount the solenoids.** Attach each solenoid to its cannon tube using hot glue, zip ties, or a small bracket. The solenoid's plunger connects to the latch pin via a short linkage — a piece of stiff wire bent into a Z-shape works well. When the solenoid energizes, it should pull the pin cleanly out of the tube. Test each cannon individually: cock the spring, engage the latch, manually apply 12V to the solenoid and verify the cannon fires. Adjust the linkage until the release is crisp and reliable.

4. **Wire the relay board.** Connect each solenoid to a relay on the relay module. The relay's normally-open (NO) contacts switch the 12V power supply to the solenoid. The relay module's signal pins connect to Arduino digital output pins. When the Arduino sets a pin HIGH, the relay closes, the solenoid fires, and the cannon launches. Wire all solenoid grounds together to the 12V power supply ground. Double-check polarity — reversing power on some solenoids can damage them.

5. **Program the Arduino.** Start with a simple sketch: when a digital input goes HIGH (from the wireless doorbell receiver), fire all relays simultaneously. Each relay only needs to be energized for 100-200 milliseconds — long enough for the solenoid to pull the pin, short enough to not overheat the coil. Add firing patterns: sequential wave (fire relay 1, wait 200ms, fire relay 2, wait 200ms, etc.), random burst, or alternating pairs. Upload and test with the cannons unloaded first to verify the sequence logic.

6. **Connect the wireless trigger.** Take apart the wireless doorbell receiver. Identify the output that activates when the button is pressed — usually a wire going to the speaker or LED. Solder a wire from this output to an Arduino digital input pin. When you press the doorbell button from across the room, the Arduino detects the signal and executes the firing sequence. Test the wireless range — most doorbell modules work reliably at 30-50 feet through walls.

7. **Load and test.** Cock all cannon springs and engage the latches. Pour a tablespoon of confetti on top of each plunger. Press the wireless button. All cannons should fire in your programmed sequence, launching confetti 10-15 feet in the air. If any cannon misfires, check that the latch pin is properly engaged and the solenoid linkage has enough travel to fully extract the pin. Adjust spring tension if confetti height is uneven between cannons.

8. **Position for events.** Mount cannons on a board, shelf, or attach to walls/ceiling brackets aimed downward for a confetti rain effect. Spread them around the perimeter of a room for surround-fire. For outdoor events, account for wind — fire upward and let gravity distribute the confetti. Set up a reload station with pre-measured confetti portions for fast turnaround between salvos.

9. **Add music sync (optional).** Connect a microphone module to an Arduino analog input. Write code that detects bass hits above a threshold and triggers a cannon on each beat. Calibrate the threshold so it triggers on heavy beats but ignores conversation and ambient noise. This turns a playlist into a light-and-confetti show.

## ⚠️ Safety Notes

- Solenoids snap with significant force — keep fingers away from the latch mechanism when the system is armed. The pin extraction can pinch or cut if your finger is in the path.
- Don't aim cannons at faces. The plunger launches with enough force to sting at close range, and confetti in the eyes is unpleasant.
- Springs under compression store energy. When cocking the cannons, push the plunger down smoothly and engage the latch before releasing pressure. A spring that slips during loading can fling the plunger into your hand.
- The 12V power system is low-voltage and safe from electrical shock, but short circuits across the relay board can overheat wires or damage components. Use appropriately rated wire and add an inline fuse on the 12V supply.
- Clean up confetti after the event. Outdoor confetti should be biodegradable — hole-punched leaves or tissue paper, not metallic foil or plastic.

## 🔗 See Also

- [Motion-Activated Jump Scare](/categories/pranks-and-party/255-motion-jump-scare/)
- [Invisible Bluetooth Speaker](/categories/pranks-and-party/254-invisible-speaker/)

