---
layout: build
title: "Pressure Cooker Rocket Nozzle Test Stand"
build_number: 351
description: "Before you put propellant behind a homemade nozzle, you hydrostatic-test it in a pressure cooker. The boring step that keeps your fingers attached to your hands."
image: /images/builds/351-pressure-cooker-rocket-test-stand.jpg
category: alchemist-cookbook
category_name: "Alchemist Cookbook"
tags: [pyro, chemistry, functional]
junk: []
ratings:
  jaw: 4
  brain: 4
  wallet: 2
  spicy: 4
  clout: 5
  time: 2
---
# #351 — Pressure Cooker Rocket Nozzle Test Stand

<p align="center">
  <img src="/images/builds/351-pressure-cooker-rocket-test-stand.jpg" alt="Pressure Cooker Rocket Nozzle Test Stand" width="700" height="394" />
</p>

> Before you put propellant behind a homemade nozzle, you hydrostatic-test it in a pressure cooker. The boring step that keeps your fingers attached to your hands.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Amateur rocketry — the hobby of designing, building, and launching solid-fuel rockets — has a dirty secret that the YouTube highlight reels don't show: most homemade rocket motors fail during ground testing, not in flight. The motor casing cracks. The nozzle blows out. The bulkhead seal gives way. The O-rings leak. These failures happen when the combustion chamber pressurizes to 300-800 PSI during the burn, and the weakest component surrenders. When that failure happens with burning propellant inside, the result is a CATO (Catastrophic At Take-Off) — an uncontrolled rupture of a vessel full of burning solid fuel. CATOs are loud, spectacular, and occasionally injurious.

The professionals prevent CATOs by hydrostatic testing every pressure component before it ever sees propellant. Hydrostatic testing means filling the vessel with water (which is nearly incompressible) and pressurizing it. If the vessel fails under water pressure, it splits or cracks gently — water doesn't expand when released like compressed gas does, so there's no explosion. Just a leak. If it holds, you know it'll hold under gas pressure too. NASA hydrostatic-tests every pressure vessel that goes to space. You should hydrostatic-test every nozzle, casing, and bulkhead that goes on your launch pad.

A pressure cooker is already a hydrostatic test vessel — it's a sealed chamber rated for 15 PSI. That's not enough to test a full rocket motor casing (which sees 300+ PSI), but it's more than enough to test the most failure-prone components at their low-pressure failure modes: nozzle retention threads, O-ring groove concentricity, bulkhead seal integrity, and assembly fit. If your nozzle fitting leaks at 15 PSI of water pressure, it will absolutely blow out at 500 PSI of combustion gas. This build catches the easy failures early, when the consequence is a wet workbench instead of a trip to the emergency room.

For higher-pressure testing, you can use the pressure cooker as a water reservoir connected to a hand-operated hydraulic pump (a brake bleeder pump or grease gun) that pressurizes a separate test chamber to 200+ PSI through the cooker's output port. The cooker supplies the water volume; the pump supplies the pressure. This two-stage approach lets you test rocket motor casings at realistic operating pressures using equipment that costs $30 total.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Stovetop pressure cooker — 8-quart, for water reservoir and low-pressure testing *(thrift store, $8–12)*
- [ ] Hydraulic hand pump — brake bleeder pump or small grease gun for high-pressure testing *(auto parts store, $15–25)*
- [ ] Pressure gauge — 0-300 PSI or 0-600 PSI depending on target test pressure *(auto parts store, $10–15)*
- [ ] High-pressure hydraulic hose — rated for 500+ PSI, 1/4" ID *(auto parts store, $8–12)*
- [ ] Pipe fittings, tees, and adapters — brass, for connecting cooker to pump to test article *(hardware store, $10–15)*
- [ ] Test fixture clamp — to hold the rocket motor casing or nozzle assembly while under pressure *(build from angle iron and bolts, $5–10)*
- [ ] Teflon tape and pipe sealant — for all threaded connections *(hardware store, $3)*
- [ ] Towels and a bucket — for catching leaks during testing *(already owned)*
- [ ] Safety glasses — in case a fitting lets go under pressure *(hardware store, $5)*
- [ ] Written test procedure — write it before you start, not during *(pen and paper, free)*

</details>

## 🔨 Build Steps

1. **Set up the low-pressure test circuit.** Connect the pressure cooker's valve port (via the usual hose barb adapter) to a tee fitting. One branch of the tee goes to the pressure gauge. The other branch goes to the test article — a rocket nozzle, bulkhead, or casing assembly. Fill the entire circuit with water, including the test article. Water is the test medium because it's essentially incompressible — if the test article fails, the water simply leaks out instead of releasing stored energy like compressed air would. A compressed-air failure is an explosion. A hydrostatic failure is a puddle.

2. **Seal and pressurize for low-pressure testing.** With the system water-filled and air bled out (tilt and tap to remove trapped air bubbles), lock the pressure cooker lid and heat it on the stove. As the water heats, it expands slightly and pressure builds. At 15 PSI, the jiggler valve vents. Watch the test article for leaks — any water seeping from threaded joints, O-ring grooves, or seams indicates a failure point that would be catastrophic under combustion pressure. Mark leaks, depressurize, fix them, and retest.

3. **Set up the high-pressure test circuit.** For testing at realistic motor pressures (200-600 PSI), disconnect the test article from the cooker and connect it to the hydraulic hand pump instead. Fill the test article completely with water. Connect the pump to one end and the pressure gauge to the other. Place the test article inside a containment — an old metal toolbox, a sandbag ring, or behind a plywood blast shield. Even hydrostatic failures at 300+ PSI can eject fittings at high velocity.

4. **Pressurize incrementally.** Pump slowly. Watch the gauge. Pressurize in 50 PSI increments, pausing at each step for 30 seconds to check for leaks or deformation. Listen for creaking, popping, or hissing. If a fitting weeps, it fails the test — depressurize, disassemble, inspect, and fix before retesting. Continue incrementing until you reach your target test pressure — typically 1.5x the expected operating pressure (a safety factor of 1.5). If the nozzle assembly holds at 750 PSI hydrostatic, you can be reasonably confident it'll hold at 500 PSI combustion pressure.

5. **Hold and inspect.** At the target pressure, stop pumping and watch the gauge for 5 minutes. A slow pressure drop indicates a leak — even a tiny one that isn't visibly weeping. No drop means the assembly is pressure-tight. Depressurize slowly by opening a bleed valve (not by disconnecting fittings under pressure). Remove the test article, dry it, and inspect all sealing surfaces under magnification for cracks, deformation, or O-ring extrusion.

6. **Document everything.** Record the test article description, test date, target pressure, actual test pressure, hold time, pass/fail result, and any observations. Tape the test record to the motor casing. If it goes on the launch pad, the test record goes with it. If it fails on the pad anyway, the test record tells you what pressure it held under hydrostatic, which tells you a lot about what went wrong under combustion.

7. **Proof-test the pressure cooker itself.** Before using the cooker as a test vessel or steam source for any build in this collection, hydrostatic-test the cooker. Fill it completely with water (no air space), seal it, and heat it gently. If the cooker has a hidden crack, worn gasket, or fatigued wall from years of Goodwill abuse, it will fail under water pressure as a leak — not under steam pressure as an explosion. This takes 10 minutes and might save your face. Do it first.

## ⚠️ Safety Notes

> **Spicy Level 4 build.** Hydrostatic testing is the safe way to test pressure components — but "safer than a live motor test" is not the same as "safe."

- Hydrostatic testing with water is dramatically safer than pneumatic testing with compressed air, but high-pressure water can still cause serious injury. A fitting that fails at 300 PSI ejects like a bullet. Always work behind a shield or barricade when testing above 100 PSI.
- Never substitute compressed air for water in a hydrostatic test. Water stores almost no energy when compressed — air stores enormous energy. A vessel that fails at 300 PSI of air pressure explodes. The same vessel at 300 PSI of water just leaks.
- Trapped air in the test circuit defeats the purpose of hydrostatic testing. Even a small air pocket stores enough compressive energy to turn a failure into a projectile hazard. Bleed all air before pressurizing.
- Wear safety glasses during all pressure testing. Even at 15 PSI, a popped fitting or hose end can whip with enough force to injure an eye.
- This build tests components. It does not test complete motor assemblies with propellant. Testing live motors requires a proper test stand with remote ignition, blast shields, and fire suppression. Hydrostatic testing tells you the pressure vessel is sound — it tells you nothing about whether the propellant grain will burn evenly, the nozzle throat will erode uniformly, or the igniter will function reliably.

## 🔗 See Also

- [Pressure Cooker Autoclave](/categories/pressure-cooker/339-pressure-cooker-autoclave/)
- [Electromagnetic Firework Launcher](/categories/alchemist-cookbook/229-electromagnetic-firework-launcher/)
- [Carbide Spark Plug Repeater](/categories/alchemist-cookbook/232-carbide-spark-plug-repeater/)
