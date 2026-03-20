---
layout: build
title: "Electric Skateboard"
build_number: 88
description: "Scooter motor + ESC + salvaged laptop battery pack + skateboard deck. 15-20 mph for free vs $400+ for a commercial board."
image: /images/builds/088-electric-skateboard.jpg
category: scooter-and-motor
category_name: "Scooter & Motor"
tags: [functional, practical, mechanical]
junk: [microwave, laptop, scooter]
ratings:
  jaw: 4
  brain: 3
  wallet: 2
  spicy: 2
  clout: 4
  time: 3
---
# #088 — Electric Skateboard

<p align="center">
  <img src="/images/builds/088-electric-skateboard.jpg" alt="Electric Skateboard" width="700" />
</p>

> Scooter motor + ESC + salvaged laptop battery pack + skateboard deck. 15-20 mph for free vs $400+ for a commercial board.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Electric skateboards from brands like Boosted, Meepo, and Evolve cost $400-2000. The core components are a brushless motor, an ESC (electronic speed controller), a lithium battery pack, and a wireless remote. All of these exist inside a dead electric scooter or hoverboard. Salvage the motor, ESC, and controller. Build a battery pack from harvested laptop 18650 cells (or reuse the scooter's battery). Mount everything under a regular skateboard deck. Belt-drive or hub-motor — both work. The result is a 15-20 mph electric skateboard that cost you nothing but time and ingenuity, while commercial equivalents cost hundreds.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Brushless DC motor — hub motor from a scooter/hoverboard, or a belt-drive motor *(dead electric scooter/hoverboard)*
- [ ] ESC (electronic speed controller) — matched to your motor *(salvage from scooter, or ~$15-25)*
- [ ] Battery pack — salvaged from scooter, or build from harvested 18650 cells *(dead scooter or laptop batteries)*
- [ ] BMS (battery management system) — if building a custom pack *(~$5, electronics supplier)*
- [ ] Skateboard deck + trucks + wheels — longboard decks are more stable *(thrift store or already own)*
- [ ] Wireless remote — salvage from scooter, or buy a mini remote ($10) *(scooter or electronics supplier)*
- [ ] Motor mount bracket — for belt-drive setup, attach motor to truck *(fabricate from steel plate or 3D print)*
- [ ] Drive belt + pulleys — if using belt-drive motor *(~$10, hobby supplier)*
- [ ] Enclosure — for battery and ESC, mount under the deck *(3D print, sheet metal, or plastic box)*

</details>

## 🔨 Build Steps

1. **Salvage the motor system.** Disassemble the dead scooter or hoverboard. Extract the motor (hub motor or belt-drive motor), the ESC/controller board, and the battery pack if it's still functional. Keep the wiring harness intact — the connectors save you soldering work.
2. **Choose your drive configuration.** Hub motors mount directly to the skateboard truck — the motor IS the wheel. Belt-drive motors mount next to the truck and connect to the wheel via a belt and pulley. Hub motors are simpler to install; belt motors give more torque and better hill climbing.
3. **Prepare the skateboard deck.** Use a longboard deck (36-42 inches) for stability at speed. Remove the rear truck. If using a hub motor, you may need a wider truck hanger to accommodate the motor. If using belt drive, mount the motor bracket to the rear truck.
4. **Mount the motor.** For hub motors: install the motor as the rear wheel on the truck, reconnect the hall sensor and phase wires. For belt drive: bolt the motor mount to the rear truck, install the motor with the drive pulley, install the wheel pulley, and tension the belt.
5. **Build or install the battery pack.** If the scooter battery works, use it directly. If building from 18650 cells: test cells individually (see [Laptop Battery Power Bank](/categories/computer-and-phone/067-laptop-battery-power-bank/)), assemble a 10S2P or 10S3P pack (36V nominal), and connect a BMS for protection. The pack should match the ESC's voltage requirements.
6. **Mount the electronics.** Attach the battery pack and ESC to the underside of the deck using an enclosure. The enclosure must protect against road debris and water splashes. Velcro straps through holes drilled in the deck work for quick removal. Route motor wires from the ESC to the rear motor.
7. **Wire everything.** Connect the battery to the ESC (red to positive, black to negative — polarity matters and reversed polarity kills the ESC instantly). Connect the motor phase wires and hall sensor cable to the ESC. Connect the wireless receiver to the ESC.
8. **Program the ESC.** Some ESCs require configuration — set motor type, braking mode, acceleration curve, and speed limit. Start with gentle acceleration and low top speed. Use the manufacturer's app or programming card if available.
9. **Test at low speed.** Prop the board up so the wheels spin freely. Power on, test the remote, verify motor direction (forward, not backward). Check braking. Then set the board down and test ride at walking speed in a safe, open area. Wear a helmet.
10. **Tune and ride.** Gradually increase the speed limit as you gain confidence. Adjust braking strength, acceleration curves, and remote sensitivity to your preference. Tighten all bolts after the first few rides — vibration loosens things.

## ⚠️ Safety Notes

- Electric skateboards can reach 15-25 mph. At these speeds, falls cause serious injuries — road rash, broken bones, and head trauma. ALWAYS wear a helmet. Wrist guards, knee pads, and elbow pads are strongly recommended, especially while learning.
- Lithium battery packs can catch fire if damaged, short-circuited, or improperly charged. Always use a BMS. Never charge unattended. Inspect the pack after any impact or crash. Store and charge on a non-flammable surface.
- Test brakes thoroughly before riding at speed. ESC braking is regenerative (motor acts as generator) — if the battery is full, regenerative braking may not work because the battery can't accept more charge. Always start a ride with a partially charged battery, never 100%.

## 🔗 See Also

- [Laptop Battery Power Bank](/categories/computer-and-phone/067-laptop-battery-power-bank/)
- [Wind Phone Charger](/categories/scooter-and-motor/091-wind-phone-charger/)

