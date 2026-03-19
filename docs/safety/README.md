# General Safety

<p align="center">
  <img src="../images/safety/safety-overview.jpg" alt="Safety First" width="700" />
</p>

> Universal safety rules for every build in this repo. Read this before you build anything.

---

## The Spicy Level Rating

Every build has a Spicy Level rating from 1 to 5 stars. Here's what each level means and what you should have in place before attempting builds at that level.

| Spicy Level | Label | What It Means | Prerequisites |
|---|---|---|---|
| ⭐ | **Chill** | No significant hazards. Standard workshop common sense applies. Hot glue guns, soldering irons, and basic hand tools. | Basic tool safety knowledge |
| ⭐⭐ | **Mildly Sketchy** | Minor hazards present — moderate heat, mild chemicals, low-voltage electricity, sharp edges. Injuries are possible but unlikely to be serious with basic precautions. | Safety goggles, gloves, basic first aid kit |
| ⭐⭐⭐ | **Respect It** | Real hazards that can cause injury if you're careless. Moderate voltages, corrosive chemicals, significant heat, or mechanical forces. You need to understand what you're doing. | PPE (goggles, gloves, closed shoes), fire extinguisher nearby, ventilation, first aid kit, no distractions |
| ⭐⭐⭐⭐ | **One Wrong Move...** | Serious hazards. High voltage, toxic chemicals, high temperatures, pyrotechnics, or fast-moving mechanical parts. Mistakes at this level cause burns, chemical exposure, or electrical injury. | All of the above PLUS: specific PPE for the hazard (welding goggles, chemical splash goggles, insulated gloves), kill switch, someone else present or aware, phone charged and nearby |
| ⭐⭐⭐⭐⭐ | **Call Next of Kin** | Potentially lethal hazards. Lethal voltages (MOTs, CRT anodes, capacitor banks), thermite, large pyrotechnic setups, or builds where a single mistake can kill or cause permanent injury. These builds exist for experienced builders who understand the specific risks. | Everything above PLUS: thorough understanding of the specific hazard, tested emergency procedures, someone present who can call 911 and knows not to touch you if you're being electrocuted, practiced the build sequence mentally before applying power |

```mermaid
flowchart LR
    A["⭐ Chill"] --> B["⭐⭐ Mildly Sketchy"] --> C["⭐⭐⭐ Respect It"] --> D["⭐⭐⭐⭐ One Wrong Move"] --> E["⭐⭐⭐⭐⭐ Call Next of Kin"]
    style A fill:#22c55e,color:#000
    style B fill:#84cc16,color:#000
    style C fill:#eab308,color:#000
    style D fill:#f97316,color:#fff
    style E fill:#ef4444,color:#fff
```

**The Spicy Level is not a gatekeeping system.** It's an honest assessment of risk so you can prepare appropriately. A ⭐⭐⭐⭐⭐ build done by someone who understands the hazards and takes precautions is safer than a ⭐⭐⭐ build done by someone who ignores the safety notes.

---

## Universal Safety Rules

These apply to EVERY build, regardless of Spicy Level.

### 1. Wear Eye Protection
Safety goggles or glasses. Not sunglasses, not regular glasses (no side protection). Actual safety glasses with side shields. This is non-negotiable for any build involving tools, chemicals, or electricity. Your eyes don't heal.

### 2. Work in Ventilated Areas
If a build produces fumes, smoke, dust, or gas — work outdoors or in a space with active ventilation (open windows + fan, or a fume hood). Many chemical and pyrotechnic builds MUST be done outdoors.

### 3. Keep a Fire Extinguisher Within Arm's Reach
Not in the next room. Not in the garage while you're in the backyard. Within arm's reach of your work area. A 5 lb ABC-rated extinguisher covers most situations. Know how to use it BEFORE you need it: Pull pin, Aim at base, Squeeze handle, Sweep side to side.

### 4. Never Work Alone on Dangerous Builds
For builds rated ⭐⭐⭐⭐ or ⭐⭐⭐⭐⭐, have someone present or at minimum someone aware of what you're doing who can check on you. If you get shocked, burned, or splashed with chemicals, you need someone who can call for help.

### 5. Have a First Aid Kit Ready
A basic kit with burn gel, bandages, saline eye wash, and chemical neutralizers. For chemical builds, keep a gallon of water within arm's reach for flushing.

### 6. Dress Appropriately
- Closed-toe shoes (no sandals)
- Long pants (no shorts around heat, chemicals, or grinding)
- No loose clothing, jewelry, or dangling sleeves near rotating machinery
- Tie back long hair
- Gloves appropriate to the hazard (nitrile for chemicals, leather for heat, insulated for electrical)

### 7. Read the Entire Build Before Starting
Don't start a build and discover mid-way that step 7 requires a chemical you don't have, or that step 4 produces toxic fumes you're not prepared for. Read the whole thing. Understand the hazards. Gather all materials and PPE first.

### 8. Respect the Materials
If a build says "this can kill you" — it means it. MOTs kill people. Thermite burns at 4000°F. Capacitors hold lethal charges for weeks. Acetylene is explosive. These are not exaggerations for drama. They are facts stated to keep you alive.

### 9. Know When to Stop
If something feels wrong — a smell you don't recognize, a sound that shouldn't be there, equipment behaving unexpectedly — STOP. Power off. Step back. Assess. Continuing through uncertainty is how accidents happen.

### 10. Clean Up Properly
Dispose of chemicals according to local hazardous waste guidelines. Never pour chemicals down the drain unless specifically confirmed safe. Neutralize acids and bases before disposal. Recycle e-waste. Store unused chemicals properly.

---

## Emergency Contacts

Keep these numbers accessible from your workspace:

| Service | Number | When to Call |
|---|---|---|
| **Emergency Services** | **911** | Life-threatening injury, fire, explosion |
| **Poison Control** | **1-800-222-1222** | Chemical ingestion, inhalation, or significant skin/eye exposure |
| **Local Fire Department** (non-emergency) | Look up your local number | Questions about fire codes, burn permits, safe distances |
| **Burn Center Locator** | ameriburn.org | Finding the nearest specialized burn treatment center |

---

## When NOT to Attempt a Build

Seriously consider skipping a build if:

- **You don't understand the hazard.** If you can't explain WHY a build is dangerous and WHAT specifically could go wrong, you're not ready. Research until you understand the physics, chemistry, or electrical principles involved.

- **You don't have the safety equipment.** "I'll be careful" is not PPE. If a build calls for welding goggles, insulated gloves, or a fire extinguisher — get them first.

- **The build says "outdoors only" and you're indoors.** This isn't a suggestion. Pyrotechnic and chemical builds rated for outdoors produce fumes, heat, sparks, or debris that are dangerous in enclosed spaces. Carbon dioxide, carbon monoxide, and other gases can accumulate and displace oxygen without warning.

- **You're tired, distracted, or impaired.** Most workshop accidents happen when attention lapses. If you're not fully focused, save it for tomorrow.

- **You're alone on a ⭐⭐⭐⭐+ build.** If you get shocked unconscious, who calls 911? If acid splashes in your eyes, who drives you to the ER? Have someone present or immediately available.

- **You're under 18 without adult supervision.** Many of these builds are appropriate for young makers — with adult guidance. The high-voltage, pyrotechnic, and chemical builds absolutely require an experienced adult present.

---

## Legal Considerations

### Local Ordinances
- **Noise:** Carbide cannons, fireworks, and other loud builds may violate local noise ordinances. Check your city/county regulations. Alert neighbors before noisy demonstrations.
- **Open burning:** Many municipalities regulate open fires, even in your own backyard. Fire pits, foundries, and pyrotechnic demonstrations may require a burn permit. Check with your local fire department.
- **Fireworks:** Laws vary wildly by state, county, and city. Some jurisdictions ban all consumer fireworks. Others allow them only on specific dates. Electronically fired displays may require additional permits. Research your local laws.

### FCC Rules (Radio Builds)
- **FM transmitters** ([Pirate Radio](../categories/pi-and-arduino/134-pirate-radio.md)) are legal at very low power (Part 15 rules — signal cannot be received beyond approximately 200 feet). Higher-power transmitters require an FCC license.
- **WiFi and Bluetooth** devices (ESP32, Pi) operate on unlicensed bands and are legal for normal use.
- **Mesh radio networks** must operate within Part 15 limits or on licensed amateur radio frequencies (requires a ham radio license).

### Fire Regulations
- **Thermite, pyrotechnics, and large flames** may be regulated in your area. Some jurisdictions classify thermite demonstrations as open burning; others may require a pyrotechnics license.
- **Always have a fire extinguisher** rated for the type of fire your build could produce (see [Fire & Pyro Safety](fire-and-pyro.md) for extinguisher types).
- **Insurance:** Homeowner's or renter's insurance may not cover damage from experimental builds. If you're working in your garage and things go sideways, check your policy.

### Chemical Regulations
- All chemicals listed in the [Chemicals Guide](../reference/chemicals.md) are legal for consumer purchase and use.
- Purchasing large quantities of certain chemicals (potassium nitrate, sulfur, oxidizers) may trigger reporting requirements or retailer questions. This is normal.
- Chemical disposal must follow local hazardous waste guidelines. Most municipalities have free hazardous waste drop-off days.

---

## Category-Specific Safety Guides

For detailed safety procedures specific to each hazard type:

- [High Voltage Safety](high-voltage.md) — capacitor discharge, insulation, the one-hand rule
- [Chemical Safety](chemicals.md) — PPE, storage, disposal, dangerous combinations
- [Fire & Pyro Safety](fire-and-pyro.md) — extinguisher types, burn treatment, ventilation
