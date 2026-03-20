---
layout: build
title: "Absorption Cooler"
build_number: 95
description: "A fridge powered by fire. No electricity needed. Einstein patented one in 1930. Use fridge heat exchanger coils, ammonia solution, and a candle."
image: /images/builds/095-absorption-cooler.jpg
category: fridge-and-cooling
category_name: "Fridge & Cooling"
tags: [functional, practical]
junk: [chemical, fridge]
ratings:
  jaw: 4
  brain: 5
  wallet: 3
  spicy: 4
  clout: 4
  time: 5
---
# #095 — Absorption Cooler

<p align="center">
  <img src="/images/builds/095-absorption-cooler.jpg" alt="Absorption Cooler" width="700" />
</p>

> A fridge powered by fire. No electricity needed. Einstein patented one in 1930. Use fridge heat exchanger coils, ammonia solution, and a candle.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90%E2%AD%90%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Every fridge you've ever seen uses a compressor — an electric motor that pressurizes refrigerant to move heat. But there's another way. In 1930, Albert Einstein and Leo Szilard patented an absorption refrigerator that uses heat as the energy source instead of electricity. No moving parts. No compressor. Just heat, gravity, and clever chemistry. An ammonia-water solution is heated (by fire, propane, solar, waste heat — anything), causing ammonia gas to separate. The ammonia flows through coils, evaporates at low pressure (absorbing heat — making things cold), then re-absorbs into water and cycles back. This is how RV fridges and off-grid gas refrigerators work today. Build one from salvaged fridge coils, ammonia solution, and a heat source. A fridge powered by a candle. Physics at its most elegant.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Heat exchanger coils — evaporator and condenser from a dead fridge, or copper/steel tubing *(dead fridge, hardware store)*
- [ ] Steel or copper tubing — for the generator (boiler), condenser, evaporator, and absorber sections *(hardware store)*
- [ ] Ammonia solution (ammonium hydroxide) — household ammonia cleaner works for demonstration; lab-grade for better performance *(grocery store or chemical supplier)*
- [ ] Hydrogen gas (optional) — used in Einstein/Szilard design as an equalizing gas; simpler designs use gravity *(welding supplier)*
- [ ] Heat source — propane burner, candle array, or electric hot plate *(hardware store)*
- [ ] Insulated box — cooler or fabricated insulated chamber for the cold side *(hardware store)*
- [ ] Pressure gauge — to monitor system pressure *(hardware store)*
- [ ] Pipe fittings, valves, and solder/brazing equipment — for building sealed tubing circuits *(hardware store, workshop)*
- [ ] Safety valve/pressure relief — mandatory for pressurized ammonia systems *(hardware store)*

</details>

## 🔨 Build Steps

1. **Study absorption refrigeration theory.** Before building, understand the 4 stages: the GENERATOR (boiler) heats ammonia-water solution, boiling off ammonia gas; the CONDENSER cools ammonia gas back to liquid; the EVAPORATOR allows liquid ammonia to expand and evaporate (absorbing heat — this is the cold part); the ABSORBER recombines ammonia gas with water, restarting the cycle. Gravity drives the flow — no pump needed.
2. **Design the circuit.** Sketch the tubing layout. The generator sits at the bottom (over the heat source). Hot ammonia gas rises to the condenser (at the top, with fins for air cooling). Liquid ammonia flows down to the evaporator (inside the insulated cold box). Ammonia vapor exits the evaporator and flows to the absorber, where it meets a thin film of water flowing down from the generator. The enriched solution returns to the generator by gravity.
3. **Build the generator.** Create a sealed steel chamber (a section of thick steel pipe with welded end caps works). This holds the ammonia-water solution and sits directly over the heat source. A tube exits the top for ammonia vapor, and a tube at the bottom returns enriched solution from the absorber. Use brazed or welded joints — this system must be completely sealed and withstand moderate pressure (30-50 PSI).
4. **Build the condenser.** Connect tubing from the generator's vapor outlet. Route it through a series of air-cooled coils or fins — salvaged fridge condenser coils are perfect. The ammonia gas cools and condenses to liquid. The tubing exits at the bottom, feeding liquid ammonia to the evaporator.
5. **Build the evaporator.** Route tubing from the condenser into the insulated cold box. Inside the box, coil the tubing to maximize surface area. This is where liquid ammonia evaporates, absorbing heat from the box interior. The evaporator outlet carries ammonia vapor to the absorber.
6. **Build the absorber.** Create a section where ammonia vapor meets a thin film of water flowing downward. The water absorbs the ammonia gas (an exothermic reaction — the absorber gets warm). The now-enriched ammonia-water solution flows back to the generator by gravity.
7. **Install the pressure relief valve.** Mount a pressure relief valve rated for your system's expected pressure (typically 50-75 PSI max) on the generator or the highest-pressure point. This is a mandatory safety feature — if pressure exceeds safe limits, the valve vents before the system ruptures.
8. **Charge the system.** With all joints sealed and pressure-tested (use pressurized nitrogen to test for leaks at joints), charge the system with ammonia-water solution through a fill port. The ammonia concentration determines the cooling capacity — start with a 25-30% ammonia solution. Seal the fill port.
9. **Apply heat.** Light the heat source under the generator. Start with low heat. The solution should begin to percolate as ammonia boils off. Monitor the pressure gauge — a functioning system stabilizes at a moderate pressure. The evaporator side should begin to feel cold within 15-30 minutes.
10. **Test and refine.** Place a thermometer inside the insulated cold box. A well-built absorption cooler can reach 35-45F (refrigerator temperature) with a moderate heat input. If performance is poor, check for: air leaks (the system must be sealed), insufficient ammonia charge, poor condenser airflow, or inadequate insulation on the cold box. Adjust heat input — too much heat can overwhelm the condenser's ability to cool the ammonia gas.

## ⚠️ Safety Notes

> **Spicy Level 4 build.** Read the Safety Guide before starting.

- Ammonia is toxic and corrosive. Even household ammonia cleaner produces irritating fumes. Work outdoors or in a very well-ventilated area. Wear chemical splash goggles and nitrile gloves. Concentrated ammonia (anhydrous) is far more dangerous — do not use it without proper training and PPE. If ammonia contacts eyes, flush with water for 15+ minutes and seek medical attention immediately.
- This system operates under pressure with a flammable and toxic refrigerant. ALL joints must be pressure-tested before charging with ammonia. A leak in a pressurized ammonia system releases toxic gas rapidly. The pressure relief valve is not optional — it prevents catastrophic rupture. Never heat a sealed system without a functioning relief valve.
- The generator section gets very hot (heated by flame). Keep all flammable materials away. The open flame presents fire risk. Never leave the system running unattended, especially during initial testing. Have a fire extinguisher accessible.

## 🔗 See Also

- [DIY Freeze Dryer](/categories/fridge-and-cooling/094-diy-freeze-dryer/)
- [Fermentation Chamber](/categories/fridge-and-cooling/092-fermentation-chamber/)

