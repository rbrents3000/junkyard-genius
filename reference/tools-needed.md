# The Minimum Toolbox

> You don't need a fully equipped workshop to start. You need a screwdriver, some pliers, and the refusal to throw anything away.

Every build in this repo lists its specific tools under the build steps. But there's a core set of tools that shows up again and again — the foundation that makes everything else possible. This guide is organized by budget tier. Start where you are. Upgrade as you go. Half the fun is building your toolbox from salvaged parts anyway.

---

## $0 — Borrowed / Scrounged

You can do a surprising number of builds with tools you already have, borrow from a friend, or salvage from the same junk pile as your ingredients.

| Tool | Why You Need It | Builds That Need It |
|---|---|---|
| **Screwdrivers** (flathead + Phillips) | Every appliance teardown starts here. Get a few sizes of each — #0 Phillips for laptops, #2 for appliances. | Every single build |
| **Pliers** (needle-nose + regular) | Bending wire, pulling connectors, holding hot parts, reaching into tight spaces. Needle-nose pliers are the most-used tool in electronics. | Every single build |
| **Adjustable wrench** | Bolts, nuts, pipe fittings, and anything too big for pliers. One 8" adjustable wrench covers 90% of fastener sizes. | Appliance teardowns, mechanical builds |
| **Wire strippers** (or a knife and steady hand) | Stripping insulation from wire. Dedicated strippers are better, but a sharp utility knife works if you're careful not to nick the copper. | Every electrical build |
| **Utility knife / box cutter** | Cutting cardboard, plastic, zip ties, tape, insulation. The most versatile cutting tool that fits in your pocket. | Constantly |
| **Hammer** | Driving nails, persuading things into position, breaking things apart. A 16 oz claw hammer handles everything. | Mechanical builds, teardowns |
| **Tape measure** | Measuring before cutting. The builder's golden rule: measure twice, cut once, swear anyway. | Every build that involves cutting |
| **Scissors** | Cutting wire, trimming heat shrink, cutting tape and labels. Dedicated shop scissors that you don't have to return to the kitchen. | Every build |

**What these unlock:** Every appliance teardown. Basic mechanical builds like [#184 Chain Fountain](../categories/mechanical-and-kinetic/184-chain-fountain.md), [#058 HDD Platter Wind Chimes](../categories/computer-and-phone/058-hdd-platter-wind-chimes.md), and [#068 Ram Stick Ruler](../categories/computer-and-phone/068-ram-stick-ruler.md). Simple chemistry builds like [#101 Colored Fire](../categories/pyro-and-chemistry/101-colored-fire.md) and [#213 Density Tower](../categories/household-chemistry/213-density-tower.md). Art projects like [#059 CPU Resin Jewelry](../categories/computer-and-phone/059-cpu-resin-jewelry.md) and [#060 GPU Wall Art](../categories/computer-and-phone/060-gpu-wall-art.md).

**Where to scrounge tools for free:**
- Garage sales and estate sales often have tools for $1-5 each
- Buy Nothing groups on Facebook — people give away duplicate tools constantly
- Ask family/friends — most people own tools they haven't touched in years
- Habitat for Humanity ReStore — sometimes has tools in the miscellaneous bins
- Library of Things — some public libraries lend tools. Seriously.

---

## $50 — Starter Kit

This is the investment that unlocks the majority of builds in the repo. At $50, you own a real toolkit that covers electronics, assembly, and basic fabrication.

| Tool | Approx. Cost | Why You Need It |
|---|---|---|
| **Multimeter** | $15 | The single most important tool you will ever own. Measuring voltage, resistance, and continuity. Without a multimeter, you're blind. You cannot safely discharge capacitors, test salvaged components, or debug circuits without one. An Aneng AN8008 or UNI-T UT61E covers everything. |
| **Soldering iron + solder** | $15 | Joining electronic components. Get a temperature-controlled iron (like the Pinecil or Hakko clone) — not a $5 fixed-temp iron from the hardware store. The temperature control makes the difference between clean joints and melted nightmares. Lead-free solder (SAC305) for everything. |
| **Hot glue gun** | $5 | Rapid mounting, strain relief, sealing, insulating, and attaching things that don't need to be pretty. A hot glue gun is the duct tape of the electronics world. Stock up on glue sticks. |
| **Drill + bit set** | $20 | Drilling mounting holes, clearing paths for wires, making enclosures. A corded drill is fine. A cheap cordless from Harbor Freight works too. Get HSS bits from 1/16" to 1/2" and a few spade bits for larger holes. |
| **Safety glasses** | $5 | Protecting your eyes from flying shrapnel, sparks, solder splash, chemical splatter. Non-negotiable. Buy three pairs — keep them everywhere. |
| **Wire assortment** | $5 | 22-gauge solid core hookup wire in multiple colors. Use for breadboarding, point-to-point wiring, jumper wires. Red, black, green, yellow gets you through most projects. |

**Total: ~$50**

**What this unlocks:** Every beginner build. Most intermediate builds. All appliance teardowns. Specifically: the entire [Pi & Arduino](../categories/pi-and-arduino/) and [Python Projects](../categories/python-projects/) categories (electronics assembly + soldering), [#198 Homopolar Motor](../categories/weird-science/198-homopolar-motor.md), [#187 Ball Bearing Motor](../categories/mechanical-and-kinetic/187-ball-bearing-motor.md), [#042 Grape Plasma](../categories/mad-scientist/042-grape-plasma.md), [#067 Laptop Battery Power Bank](../categories/computer-and-phone/067-laptop-battery-power-bank.md), [#122 LED Cube 8x8x8](../categories/pi-and-arduino/122-led-cube-8x8x8.md), [#127 Auto Plant Watering](../categories/pi-and-arduino/127-auto-plant-watering.md), and dozens more.

---

## $150 — Serious Builder

At this level, you can tackle advanced builds, debug problems that would have stumped you before, and work with metal, not just wire and plastic.

| Tool | Approx. Cost | Why You Need It |
|---|---|---|
| **Oscilloscope** (used) | $30-50 | Visualizing electrical signals in real time. Essential for debugging audio circuits, motor drivers, PWM signals, and anything that changes over time. A multimeter tells you "there's voltage." An oscilloscope tells you "here's what that voltage is doing 1,000 times per second." Buy used on eBay — a Rigol DS1054Z clone or an older Tektronix analog scope. |
| **Bench power supply** | $25 | Adjustable voltage and current output. Lets you power any circuit at any voltage without rigging battery packs or modifying wall adapters. Set voltage, set current limit, connect. A basic 0-30V / 0-5A supply covers everything. |
| **Angle grinder** | $20 | Cutting and grinding metal, pipe, bolts, sheet steel. With a cutting disc, it turns scrap metal into parts. With a flap disc, it smooths welds and removes rust. This is the tool that separates "I can work with wood and plastic" from "I can work with anything." Always wear safety glasses and a face shield. |
| **Dremel / rotary tool** | $20 | Precision cutting, grinding, drilling, sanding, and polishing in tight spaces where a full-size grinder is too big. Cut circuit board traces, trim plastic enclosures, drill small holes in thin material. Get the corded version — battery rotary tools don't have enough torque. |
| **Heat gun** | $15 | Controlled heat for shrinking heat shrink, softening adhesive, bending plastic, removing paint, and loosening stuck fasteners. Not a hair dryer — a heat gun reaches 600-1000F. |
| **Digital calipers** | $10 | Measuring dimensions to 0.01mm precision. Essential for 3D printing, machining, and fitting parts together. A $10 pair from Amazon is accurate enough for hobby use. |
| **Crimping tool + heat shrink** | $10 | Crimping spade, ring, and butt-splice connectors onto wire. Heat shrink tubing insulates and weatherproofs connections. Together, they produce connections that are mechanically solid and electrically safe. |
| **Helping hands / PCB holder** | $10 | A clamp stand that holds your workpiece while you solder. Two hands on the iron and solder, zero hands holding the board — the math doesn't work without this. |
| **Desoldering pump / wick** | $5 | Removing components from salvaged circuit boards without destroying them. Essential for harvesting parts from e-waste. |

**Total: ~$150 (cumulative with Starter Kit)**

**What this unlocks:** All intermediate builds, most advanced builds. Metal fabrication projects. Signal debugging. Component-level salvage from circuit boards. Specifically: [#033 Musical Tesla Coil](../categories/mad-scientist/033-musical-tesla-coil.md), [#034 Jacob's Ladder](../categories/mad-scientist/034-jacobs-ladder.md), [#005 Desktop Foundry](../categories/fire-and-plasma/005-desktop-foundry.md), [#088 Electric Skateboard](../categories/scooter-and-motor/088-electric-skateboard.md), [#156 Electroplating Station](../categories/chemical-electronic/156-electroplating-station.md), [#182 Stirling Engine](../categories/mechanical-and-kinetic/182-stirling-engine.md), and the entire [Functional Machines](../categories/functional-machines/) category.

---

## $300+ — Full Workshop

This is the endgame tier. At this level, your workshop can produce almost anything — metal, plastic, circuit boards, 3D-printed parts, and precision mechanical assemblies.

| Tool | Approx. Cost | Why You Need It |
|---|---|---|
| **Welder** (stick or MIG) | $80-150 | Joining steel permanently. A stick welder (SMAW) is the cheapest way in — runs on 120V and welds mild steel. A MIG welder is easier to learn with cleaner welds. Either opens up structural metal fabrication: go-kart frames, forge bodies, sculpture armatures, trebuchet frames. Or build [#219 Alternator Welder](../categories/junkyard-auto/219-alternator-welder.md) from a car alternator for almost free. |
| **3D printer** (Ender 3 clone) | $100 | Custom enclosures, brackets, gears, adapters, and parts that don't exist anywhere else. An Ender 3 or its clones print PLA and PETG with enough precision for functional parts. Once you have a 3D printer, you'll wonder why you ever made enclosures out of cardboard. |
| **Bench vise** | $25-50 | Clamping workpieces solid while you cut, drill, file, grind, or hammer. Bolts to your workbench. A 4-5" jaw vise handles most tasks. Seems optional until you use one — then you wonder how you ever built anything without it. |
| **Bench grinder** | $30-40 | Shaping metal, sharpening tools, removing material quickly. Two wheels: one coarse (for rough shaping), one fine (for finishing). Essential companion to welding — every weld needs cleanup. |
| **Drill press or lathe** | Build it | A drill press puts precisely vertical holes exactly where you want them. A lathe turns cylindrical parts to exact dimensions. Build them: [#080 Hand Drill Press](../categories/power-tools-remixed/080-hand-drill-press.md) and [#025 Scooter Motor Lathe](../categories/functional-machines/025-scooter-motor-lathe.md). |
| **Logic analyzer** | $15 | Reading digital communication protocols (I2C, SPI, UART, PWM) in real time. When your Arduino isn't talking to your sensor and you don't know why, the logic analyzer shows you exactly what's happening on the wire. A Saleae clone covers most protocols. |
| **Bench power supply** (serious) | $50 | Upgrade to a dual-channel, higher-current supply. When one project needs 5V for logic and 24V for motors simultaneously, you need two channels. |
| **Tap and die set** | $15-30 | Cutting threads into metal. When you need a bolt to thread into a piece of steel, you drill a hole and tap it. A metric + SAE set in common sizes (M3-M12, #6-1/2") covers most needs. |

**Total: ~$300-500 (cumulative with previous tiers)**

**What this unlocks:** Every build in the repo, including the endgame builds like [#036 Rail Gun](../categories/mad-scientist/036-rail-gun.md), [#200 DIY Electron Microscope](../categories/weird-science/200-diy-electron-microscope.md), [#181 Musical Marble Machine](../categories/mechanical-and-kinetic/181-musical-marble-machine.md), [#046 Ferrofluid Mirror](../categories/art-and-installation/046-ferrofluid-mirror.md), [#024 Electric Go-Kart](../categories/functional-machines/024-electric-go-kart.md), [#185 Trebuchet](../categories/mechanical-and-kinetic/185-trebuchet.md), and every build in the [Big Builds](../categories/big-builds/) category.

---

## Tools You Can Build from This Repo

Why buy it when you can build it from junk?

| Tool | Build | Source Materials |
|---|---|---|
| Spot welder | [#027](../categories/functional-machines/027-spot-welder.md) | Dead microwave (MOT) |
| Drill press | [#080](../categories/power-tools-remixed/080-hand-drill-press.md) | Hand drill + scrap wood/metal |
| Lathe | [#025](../categories/functional-machines/025-scooter-motor-lathe.md) | Dead electric scooter motor |
| Belt grinder | [#026](../categories/functional-machines/026-treadmill-belt-grinder.md) | Dead treadmill motor |
| CNC machine | [#069](../categories/printer-and-scanner/069-printer-stepper-cnc.md) | Dead printers (2-3 of them) |
| Welder | [#219](../categories/junkyard-auto/219-alternator-welder.md) | Car alternator from junkyard |
| Vacuum former | [#029](../categories/functional-machines/029-vacuum-former.md) | Vacuum cleaner + toaster oven |
| Power hammer | [#081](../categories/power-tools-remixed/081-sawzall-power-hammer.md) | Dead reciprocating saw |
| Silent compressor | [#031](../categories/functional-machines/031-silent-compressor.md) | Dead fridge compressor |
| Table saw | [#082](../categories/power-tools-remixed/082-circular-saw-table-saw.md) | Circular saw + scrap wood |
| Oscilloscope visualizer | [#021](../categories/light-and-visual/021-crt-oscilloscope-visualizer.md) | Old CRT TV |
| Forge blower | [#079](../categories/power-tools-remixed/079-angle-grinder-forge-blower.md) | Angle grinder |

The ultimate flex: building the tools to build the tools. Start with a screwdriver and a free microwave. End with a full machine shop.

---

## Safety Gear (Not Optional)

These aren't tools — they're the reason you keep all your fingers and both eyes. Budget $20-30 for safety gear before you spend a cent on anything else.

| Gear | Cost | When You Need It |
|---|---|---|
| **Safety glasses** (ANSI Z87.1 rated) | $5 | Every build. Every teardown. Always. |
| **Nitrile gloves** (box of 100) | $8 | Chemical builds, soldering, handling sharp metal, electroplating, anything messy |
| **N95 dust mask** | $5 (10-pack) | Grinding, sanding, laser printer teardowns, anything producing fine particles |
| **Welding helmet** (auto-darkening) | $25 | Welding, using a plasma cutter, staring at arc lamps |
| **Hearing protection** (foam plugs or earmuffs) | $3 | Angle grinder, drill press, any sustained noise above conversation level |
| **Fire extinguisher** (ABC type) | $15 | Should already be in your workshop. If it's not, buy one today. Not tomorrow. Today. |
| **Rubber mat** | $10 | High-voltage builds. Stand on it. It could save your life. |
| **Face shield** | $8 | Grinding, cutting, anything that throws sparks or debris toward your face |
| **Leather gloves** | $10 | Metal work, welding, handling sharp or hot materials. Nitrile protects from chemicals; leather protects from cuts and burns. |

---

## The One Tool Rule

If you could only have one tool beyond basic screwdrivers and pliers, get a multimeter. Seriously.

A multimeter lets you:
- **Verify a capacitor is discharged** before you touch it (this is a life-or-death measurement for MOT capacitors)
- **Test salvaged components** to see if they're dead or alive
- **Measure battery voltage** to know if those 18650 cells are worth keeping
- **Check continuity** to find broken connections
- **Measure resistance** to identify unknown components
- **Verify your power supply** is outputting what you think it is

Everything else can be improvised, borrowed, or built. But you cannot improvise a multimeter.

---

Build the toolbox as you build the projects. Every build teaches you which tool you wish you had — and that's when you go find it in a junk pile.
