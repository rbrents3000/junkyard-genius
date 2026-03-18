# Contributing to Junkyard Genius

<p align="center">
  <img src="images/contributing.jpg" alt="Contributing" width="700" />
</p>

> Got a build idea? Here's how to contribute it.

---

## PR Process

1. **Fork the repo** and create a branch for your build or change.
2. **Follow the template** below for new builds. Match the existing file format exactly.
3. **Place the file** in the correct category directory under `categories/`. If no existing category fits, propose a new one in your PR description.
4. **Number your build** using the next available number in the category. Check the category README for the current highest number.
5. **Update the category README** to add your build to the table.
6. **Submit a PR** with a clear title and description of what the build is and why it belongs in the repo.

### PR Checklist

- [ ] Build file follows the standard template (see below)
- [ ] File is named `NNN-short-name.md` (three-digit number, hyphenated lowercase name)
- [ ] Category README is updated with the new build's row in the table
- [ ] All 6 ratings are filled in honestly
- [ ] Safety notes section is thorough and accurate
- [ ] Ingredients list includes sourcing info
- [ ] Build steps are clear enough that someone with no context can follow them
- [ ] See Also links point to related builds in the repo
- [ ] No broken links
- [ ] Spelling and grammar are clean

---

## Build Template

Copy this template for new builds. Fill in every section.

```markdown
# #NNN — Build Name

> One-line description — punchy, specific, tells you exactly what the build does.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

## What Is It?

Two to three paragraphs explaining what the build is, why it works (the science/engineering),
and why it's worth building. This is where you sell the reader on the idea and teach them
something. No fluff — every sentence should either explain or excite.

## Ingredients

- [ ] Part name — description and specification *(source: where to get it, approximate cost)*
- [ ] Part name — description and specification *(source: where to get it, approximate cost)*
- [ ] Part name — description and specification *(source: where to get it, approximate cost)*

## Build Steps

1. **Step title.** Detailed explanation of what to do and why. Include specific measurements,
   settings, and techniques. Don't assume the reader knows how to do things — explain.
2. **Step title.** Next step. Each step should be one logical action or phase.
3. **Step title.** Continue until the build is complete and functional.

## Safety Notes

- Specific hazard and how to mitigate it. Be direct. Don't soften the language — if something
  can kill you, say it can kill you.
- Another hazard. Include PPE requirements, safe distances, and what to do if things go wrong.
- Chemical, electrical, or mechanical hazards specific to this build.

## See Also

- [Related Build](path-to-related-build.md) — why it's related
- [Another Related Build](path-to-another-build.md) — why it's related
```

---

## Rating System

Every build gets rated on 6 scales. Rate honestly — inflated ratings help nobody.

### Jaw Drop Rating

How visually impressive or mind-blowing is the final result?

| Stars | Level | Description |
|---|---|---|
| ⭐ | Cool | Neat, functional, but not going to make anyone gasp |
| ⭐⭐ | Impressive | People notice and ask about it |
| ⭐⭐⭐ | Wild | People pull out their phones to record it |
| ⭐⭐⭐⭐ | Unreal | People refuse to believe you built it |
| ⭐⭐⭐⭐⭐ | Life-changing | People rethink what's possible |

### Brain Melt Level

How hard is this to understand and execute?

| Stars | Level | Description |
|---|---|---|
| ⭐ | Easy peasy | Follow the steps, it works. No specialized knowledge needed. |
| ⭐⭐ | Some googling | You'll need to look some things up, but nothing exotic |
| ⭐⭐⭐ | Real project | Requires understanding of the underlying concepts (electronics, chemistry, programming) |
| ⭐⭐⭐⭐ | Advanced | Requires significant prior experience or deep study of the domain |
| ⭐⭐⭐⭐⭐ | PhD energy | Cutting-edge difficulty. Multiple complex domains intersecting. |

### Wallet Damage

Total cost of purchased materials (not counting salvaged/free parts).

| Stars | Level | Description |
|---|---|---|
| ⭐ | Free / trash | Everything comes from the junk pile |
| ⭐⭐ | Under $20 | A few cheap components or materials |
| ⭐⭐⭐ | $20-50 | Moderate investment |
| ⭐⭐⭐⭐ | $50-150 | Significant spend |
| ⭐⭐⭐⭐⭐ | $150+ | Major investment |

### Spicy Level

How dangerous is this build? See [General Safety](safety/README.md) for detailed descriptions of each level.

| Stars | Level | Description |
|---|---|---|
| ⭐ | Chill | Standard workshop hazards only |
| ⭐⭐ | Mildly sketchy | Minor hazards with basic precautions |
| ⭐⭐⭐ | Respect it | Real hazards that can injure the careless |
| ⭐⭐⭐⭐ | One wrong move... | Serious hazards requiring specific safety measures |
| ⭐⭐⭐⭐⭐ | Call next of kin | Potentially lethal hazards |

### Clout Potential

How much social media attention will this get?

| Stars | Level | Description |
|---|---|---|
| ⭐ | Cool hobby | Satisfying to build, but not viral material |
| ⭐⭐ | Friends impressed | Your group chat goes wild |
| ⭐⭐⭐ | Party trick | Everyone at the gathering wants to see it |
| ⭐⭐⭐⭐ | Local news | Neighbors are talking. Local maker space wants you to present. |
| ⭐⭐⭐⭐⭐ | 10M TikTok views | This is the kind of content that breaks the internet |

### Time to Build

How long from start to functional result?

| Stars | Level | Description |
|---|---|---|
| ⭐ | 1 hour | Quick win. Start and finish in a single session. |
| ⭐⭐ | Afternoon | Half a day of focused work |
| ⭐⭐⭐ | Weekend | A full weekend project |
| ⭐⭐⭐⭐ | Week+ | Multiple sessions over several days |
| ⭐⭐⭐⭐⭐ | Month saga | A long-term project with multiple phases |

---

## Categories

Place your build in the category that best fits. Current categories:

| Category | Directory | Description |
|---|---|---|
| Fire & Plasma | `fire-and-plasma/` | Arcs, torches, foundries, plasma |
| Sound & Music | `sound-and-music/` | Speakers, levitators, acoustic effects |
| Light & Visual | `light-and-visual/` | Lasers, holograms, optics, LEDs |
| Functional Machines | `functional-machines/` | Practical devices — go-karts, welders, grinders |
| Mad Scientist | `mad-scientist/` | Tesla coils, rail guns, cloud chambers, physics demos |
| Art & Installation | `art-and-installation/` | Art pieces, installations, decorative builds |
| Power & Energy | `power-and-energy/` | Generators, powerwalls, solar |
| Computer & Phone Parts | `computer-and-phone/` | Builds from computer/phone salvage |
| Printer & Scanner | `printer-and-scanner/` | CNC, plotters, engravers from printers |
| Vacuum Cleaner | `vacuum-cleaner/` | Hovercrafts, robots, blowers from vacuums |
| Power Tools Remixed | `power-tools-remixed/` | Repurposed power tool builds |
| Humidifier & Water | `humidifier-and-water/` | Fog machines, cleaners, water effects |
| Scooter & Motor | `scooter-and-motor/` | Motor-driven builds from e-scooters |
| Fridge & Cooling | `fridge-and-cooling/` | Cooling and refrigeration builds |
| Pyro & Chemistry | `pyro-and-chemistry/` | Fire effects, chemical reactions, visual chemistry |
| Raspberry Pi & Arduino | `pi-and-arduino/` | Microcontroller-based builds |
| Python Projects | `python-projects/` | Software-driven builds using Python |
| Chemical + Electronic | `chemical-electronic/` | Builds combining chemistry and electronics |
| Mechanical & Kinetic | `mechanical-and-kinetic/` | Gears, mechanisms, kinetic sculptures |
| Big Builds | `big-builds/` | Large-scale or ambitious projects |
| Weird Science | `weird-science/` | Unusual physics and science demos |
| Unholy Combos | `unholy-combos/` | Cross-category mashups |
| Drone Salvage | `drone-salvage/` | Gimbal stabilizers, brushless motor hacks, FPV builds |
| Household Chemistry | `household-chemistry/` | Crystal gardens, vinegar rockets, kitchen science |
| Junkyard Auto | `junkyard-auto/` | Alternator generators, ignition coil builds, car part hacks |
| Alchemist Cookbook | `alchemist-cookbook/` | Microwave + chemicals + capacitors = controlled chaos |
| Junk Instruments | `junk-instruments/` | Cigar box guitars, PVC pipe organs, steel tongue drums |
| Wearable Tech | `wearable-tech/` | LED jackets, EEG headbands, HUD glasses |
| Survival & Off-Grid | `survival-off-grid/` | Solar stills, crystal radios, Faraday flashlights |
| Pranks & Party | `pranks-and-party/` | Smoke ring cannons, confetti launchers, shock gadgets |
| Kitchen Hacks | `kitchen-hacks/` | Toaster reflow ovens, microwave kilns, appliance repurposing |
| Laser Lab | `laser-lab/` | Laser harps, galvo light shows, Blu-ray cutters |

If your build doesn't fit any existing category, propose a new one in your PR description with a name, tagline, and at least 3 build ideas that would fit.

---

## Writing Style

### Voice

- **Direct.** Don't hedge. "This can kill you" not "this could potentially be somewhat dangerous."
- **Enthusiastic.** You're excited about this build — show it. But let the build speak for itself. Don't oversell.
- **Safety-conscious.** Every real hazard gets called out explicitly. No downplaying. No "just be careful." Specific hazards, specific mitigations.
- **Technical but accessible.** Explain concepts when you introduce them. Don't assume the reader knows what a MOT is or why FFT matters. Define terms on first use, then use them freely.

### Do

- Explain the science behind why the build works
- Include specific measurements, temperatures, voltages, and quantities
- Cite where to buy each ingredient with approximate cost
- Write safety notes that are specific to THIS build, not generic boilerplate
- Link to related builds in the See Also section
- Use the checkbox format (`- [ ]`) for ingredients
- Number build steps and bold the step title

### Don't

- Don't use jargon without explanation
- Don't write vague build steps ("attach the wires" — which wires? to what? how?)
- Don't skip the safety notes or write generic ones
- Don't inflate ratings — an honest ⭐⭐ is more useful than a fake ⭐⭐⭐⭐⭐
- Don't use "franken-" naming (no "frankenspeaker," "frankenbot," etc.)
- Don't reference or attribute content to any specific tool, service, or generation method — the builds stand on their own

### Ingredient Format

Each ingredient line follows this format:
```
- [ ] Part name — specification *(source: where to get it, ~$cost)*
```

Examples:
```
- [ ] Microwave oven transformer (MOT) *(source: dead microwave — free from curb)*
- [ ] WS2812B LED strip — 60 LEDs/meter, 5 meters *(electronics supplier, ~$12)*
- [ ] Copper sulfate — 1 lb *(hardware store as root killer, ~$8)*
```

### Step Format

Each step is numbered, with a bold title and detailed explanation:
```
1. **Step title.** Full explanation of what to do, why, and how. Include specifics.
```

---

## Updating Reference Docs

If your build uses a chemical, component, or tool not covered in the reference docs, update the relevant guide:

- [Chemicals Guide](reference/chemicals.md) — add new chemicals with the same format (what, where, cost, builds, safety)
- [Appliance Teardown Guide](reference/appliance-teardown-guide.md) — add new appliance types or parts
- [Electronics & Microcontrollers](reference/electronics-and-microcontrollers.md) — add new sensors, modules, or platforms
- [Android Apps](reference/android-apps.md) — add new apps used in builds
- [Python Libraries](reference/python-libraries.md) — add new packages

If your build involves new safety considerations not covered in the existing safety guides, update:

- [General Safety](safety/README.md)
- [High Voltage Safety](safety/high-voltage.md)
- [Chemical Safety](safety/chemicals.md)
- [Fire & Pyro Safety](safety/fire-and-pyro.md)

---

## Fixing Errors in Existing Builds

Found a mistake? PRs to fix errors are welcome:

- **Safety corrections** are the highest priority. If a build's safety notes are wrong or incomplete, fix them.
- **Technical errors** (wrong measurements, incorrect wiring, bad chemistry) should be corrected with explanation.
- **Typos and formatting** fixes are always welcome.
- **Rating adjustments** — if you've actually built something and the ratings are off, submit a correction with your reasoning.

---

## Questions?

Open an issue. Tag it with `question` and describe what you're trying to contribute. Someone will help you figure out the right category, format, and approach.
