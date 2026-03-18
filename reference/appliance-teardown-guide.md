# Appliance Teardown Guide

> What's inside each appliance, what to salvage, and what to watch out for while taking it apart.

Every dead appliance is a parts bin. This guide covers what you'll find inside the most common salvage sources, which parts are worth keeping, which builds use them, and how not to get hurt during disassembly.

---

## Microwave Oven

The single most valuable salvage appliance in this repo. A dead microwave yields more dangerous-but-useful parts per dollar than anything else in your house.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Microwave Oven Transformer (MOT)** | Heavy iron-core transformer. Primary winding takes 120V AC, secondary outputs ~2,000V at high current. The most dangerous and most useful part. | [Plasma Tornado Lamp](../categories/fire-and-plasma/001-plasma-tornado-lamp.md), [Lichtenberg Wood Burner](../categories/fire-and-plasma/002-lichtenberg-wood-burner.md), [Atmospheric Reentry Simulator](../categories/fire-and-plasma/006-atmospheric-reentry-simulator.md) |
| **Magnetron** | The microwave-generating vacuum tube. Contains strong ceramic magnets inside. The tube itself is less useful for builds, but the magnets are excellent. | Magnets used across many builds |
| **High-Voltage Capacitor** | Oil-filled capacitor rated at ~2,100V, 1µF. Stores enough energy to kill. Even dead microwaves may have this charged. | [Electromagnetic Can Crusher](../categories/mad-scientist/035-electromagnetic-can-crusher.md), capacitor bank projects |
| **Turntable Motor** | Small synchronous AC motor (typically 3-5 RPM). Runs on mains voltage. Slow, steady rotation. | Display turntables, slow-rotation builds |
| **Cooling Fan** | 120V AC fan, usually 80-120mm. Reliable and quiet. | Ventilation for any build, [Forge Blower](../categories/power-tools-remixed/079-angle-grinder-forge-blower.md) |
| **Door Switches** | Multiple interlock switches (safety). Rated for mains voltage and current. | General-purpose safety switches |
| **Control Panel / Touchpad** | Membrane switches with a control board. Limited reuse, but the buttons and display can be repurposed. | Creative control panels |
| **Sheet Metal Housing** | Thick, welded steel panels. Good scrap material. | Enclosures, brackets |

### Teardown Safety

- **ALWAYS discharge the high-voltage capacitor first.** A charged MOT capacitor stores enough energy to kill an adult. Even unplugged microwaves can retain a lethal charge for weeks. Use a discharge tool: a high-wattage resistor (10k ohm, 10W) connected between the capacitor terminals, or short the terminals through a screwdriver with an insulated handle while standing on a rubber mat. Verify discharge with a multimeter before touching anything.
- **The magnetron contains beryllium oxide (BeO) in the ceramic insulators.** BeO dust is extremely toxic if inhaled. NEVER break, grind, or sand the pink/white ceramic insulators inside the magnetron. If you're salvaging magnets, crack the casing carefully and extract the magnets without disturbing the ceramics.
- **Wear gloves.** Sheet metal edges inside microwaves are razor-sharp.

### Tools Needed
- Phillips and flathead screwdrivers
- Socket set or nut driver (for transformer bolts)
- Wire cutters
- Insulated capacitor discharge tool
- Multimeter
- Gloves and safety goggles

---

## Refrigerator

Refrigerators are heavy, awkward, and full of useful parts — especially the compressor and sealed-system components.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Compressor** | Hermetically sealed motor/pump that circulates refrigerant. Powerful, reliable, and nearly indestructible. Can be repurposed as a vacuum pump or air compressor (with modifications). | [DIY Freeze Dryer](../categories/fridge-and-cooling/094-diy-freeze-dryer.md), [Vacuum Chamber](../categories/mad-scientist/039-vacuum-chamber.md), [Absorption Cooler](../categories/fridge-and-cooling/095-absorption-cooler.md) |
| **Condenser Coils** | Copper or aluminum tubing in a serpentine pattern. Excellent heat exchanger material. | Heat exchanger projects, [Absorption Cooler](../categories/fridge-and-cooling/095-absorption-cooler.md) |
| **Evaporator Coils** | Same as condenser coils, but inside the fridge. Often aluminum. | Same uses as condenser coils |
| **Thermostat** | Mechanical or electronic temperature controller. | Temperature-controlled builds |
| **Fan Motors** | Condenser fan and evaporator fan — small, reliable 120V motors. | Ventilation, cooling |
| **Peltier Module** (mini fridges only) | Thermoelectric cooler — applies voltage, one side gets hot, the other gets cold. No moving parts. | [Fermentation Chamber](../categories/fridge-and-cooling/092-fermentation-chamber.md), cooling projects |
| **Shelving and Drawers** | Tempered glass, plastic bins. Not electronics, but useful workshop storage. | Workshop organization |

### Teardown Safety

- **Refrigerant is pressurized.** Do NOT cut refrigerant lines without recovering the refrigerant first. Venting refrigerant (CFC, HCFC, HFC) is illegal under the Clean Air Act and harmful to the ozone layer. If you need to cut lines, do so outdoors and expect a burst of cold gas. Better: have an HVAC tech recover the refrigerant.
- **Compressors contain oil** that may leak when lines are cut. Place rags underneath.
- **Refrigerators are heavy.** Get help tipping them. Lay them on their back for easier access to the compressor and coils.
- **Older fridges may contain PCB-contaminated oil** in the compressor. If the fridge is from before 1979, handle compressor oil as hazardous waste.

### Tools Needed
- Socket set, screwdrivers
- Tube cutter or hacksaw (for copper lines)
- Wire cutters
- Wrenches for compressor mounting bolts
- Rags and oil catch pan

---

## Washing Machine

Washing machines contain some of the beefiest motors and heaviest-duty mechanical parts in any household appliance.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Motor** | Older top-loaders: universal (brushed) motor, 1/2 HP+. Newer front-loaders: brushless DC motor (variable speed, very powerful). Both are excellent for repurposing. | [Electric Skateboard](../categories/scooter-and-motor/088-electric-skateboard.md), [Belt Grinder](../categories/functional-machines/) projects, generators |
| **Drum** | Stainless steel cylinder with holes. Perfect for fire pits, or as a centrifuge drum. | Fire pits, [Desktop Foundry](../categories/fire-and-plasma/005-desktop-foundry.md) (as a forge body) |
| **Pump** | AC or DC water pump. Rated for continuous duty. | Water circulation, [Fountain](../categories/pyro-and-chemistry/118-fluorescein-blacklight-fountain.md) builds |
| **Bearings** | Heavy-duty sealed bearings. Expensive to buy new. | Any mechanical build needing bearings |
| **Counterweight** | A 20-40 lb concrete or cast iron block. | Ballast, anvil substitute for light work |
| **Control Board** | Modern machines have sophisticated control boards with triacs, relays, and microcontrollers. | Component harvesting (relays, triacs, connectors) |
| **Solenoid Valves** | Water inlet valves — 120V solenoid-operated. | Automated water control builds, [Auto Plant Watering](../categories/pi-and-arduino/127-auto-plant-watering.md) |

### Teardown Safety

- **Unplug first.** Obvious, but worth stating.
- **The concrete counterweight is extremely heavy** and mounted at the top of front-loaders. It can fall when you remove the outer housing. Support it before unbolting.
- **Springs and shock absorbers** are under tension. They can snap when disconnected. Wear goggles.
- **Front-loader doors have a glass window** — tempered glass, but can shatter if the door is dropped.

### Tools Needed
- Socket set, screwdrivers
- Pliers, wire cutters
- Bearing puller (for extracting bearings from the drum shaft)
- Helper (washing machines are heavy)

---

## Dryer

Dryers are simpler machines than washers, but the motor and heating element are valuable.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Motor** | 1/4 to 1/3 HP AC motor. Reliable, high-RPM. Often has a blower wheel attached. | Fan builds, [Cyclone Dust Separator](../categories/vacuum-cleaner/077-cyclone-dust-separator.md) |
| **Drum** | Large steel cylinder. Can be repurposed as a fire pit, compost tumbler, or large enclosure. | Fire pit, large project housings |
| **Heating Element** | Coiled nichrome wire in a housing, rated for 4,000-5,500 watts at 240V. Serious heat output. | [Desktop Foundry](../categories/fire-and-plasma/005-desktop-foundry.md), heating projects |
| **Belt** | Long, flexible rubber belt. Can be repurposed for drive belts in other mechanical builds. | Mechanical power transmission |
| **Lint Screen Assembly** | Fine mesh screen in a frame. Useful as a filter or sieve. | Filtering, straining |
| **Thermal Fuses and Thermostats** | Calibrated temperature safety devices. | Temperature-controlled builds |

### Teardown Safety

- **Electric dryers run on 240V.** Even unplugged, be aware of the wiring gauge and terminal block. The heating element circuit is 240V — double the shock hazard of 120V appliances.
- **Gas dryers have a gas valve and burner assembly.** Ensure the gas supply is disconnected before teardown. Let any residual gas dissipate (open garage door, wait 15 minutes).
- **The drum is large and awkward.** The front panel usually comes off first, then the drum lifts out. Have a helper.

### Tools Needed
- Screwdrivers (Phillips, 1/4" hex head)
- Socket set
- Putty knife (for releasing top panel clips)
- Wire cutters

---

## Dishwasher

Dishwashers are underrated salvage sources — the pump, motor, and solenoid valves are high-quality water-handling components.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Wash Pump / Motor** | Powerful water pump (often 1/3 HP). Designed for continuous wet operation. | Water circulation projects, fountain builds |
| **Drain Pump** | Smaller pump for draining. Self-priming. | Water movement, drainage |
| **Heating Element** | Exposed heating element in the tub, rated for 120V or 240V. | Heating water, [Fermentation Chamber](../categories/fridge-and-cooling/092-fermentation-chamber.md) |
| **Spray Arms** | Rotating water jets with precisely drilled nozzle holes. | Creative water display, parts washing |
| **Solenoid Valves** | Water inlet valve — same as washing machine, 120V solenoid-operated. | Automated water control |
| **Float Switch** | Mechanical water level sensor. | Water level detection, overflow protection |
| **Stainless Steel Tub** | The inner tub is a large, corrosion-resistant stainless steel basin. | Container for chemical baths, [Electroplating Station](../categories/chemical-electronic/156-electroplating-station.md) |

### Teardown Safety

- **The water supply must be disconnected** before removing a dishwasher. Drain residual water from hoses.
- **The heating element** may be wired to 240V in some models. Verify before handling.
- **The tub edges can be sharp** where the insulation has been removed.
- **Dishwashers are compact** and parts are tightly packed. Work methodically from the front panel inward.

### Tools Needed
- Screwdrivers, socket set
- Adjustable wrench (for water connections)
- Pliers
- Towels (residual water will spill)

---

## Vacuum Cleaner

Vacuum cleaners contain high-speed motors and air-handling components perfect for airflow-based builds.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Motor** | High-RPM universal motor (15,000-30,000 RPM). Incredibly powerful for its size. Produces both suction and blowing. | [Vacuum Hovercraft](../categories/vacuum-cleaner/075-vacuum-hovercraft.md), [Wall-Climbing Robot](../categories/vacuum-cleaner/076-wall-climbing-robot.md), [Vacuum Leaf Blower](../categories/vacuum-cleaner/078-vacuum-leaf-blower.md) |
| **Impeller/Fan** | High-speed centrifugal fan. Moves a lot of air. | [Cyclone Dust Separator](../categories/vacuum-cleaner/077-cyclone-dust-separator.md), airflow builds |
| **Hose** | Flexible, crush-resistant tubing. | Ducting for fog, air, or wiring |
| **HEPA Filter** | Fine particulate filter. | Filtration for workshop, [Fume extraction](../categories/chemical-electronic/158-pcb-etching-station.md) |
| **Brush Roller** | Motorized spinning brush with belt drive. | Conveyor belt ideas, cleaning mechanisms |
| **Power Switch** | Heavy-duty rocker or trigger switch rated for motor current (10-15A). | High-current switching |

### Teardown Safety

- **Vacuum motors run at extremely high RPM.** If you test the motor outside the housing, secure it firmly — the torque can spin the motor body violently if it's not clamped down.
- **Carbon brush dust** inside the motor housing is conductive and messy. Work on a surface you don't care about.
- **Some vacuums have capacitors** for motor starting. Discharge before handling.

### Tools Needed
- Screwdrivers (often Torx or security bits)
- Pliers
- Wire cutters

---

## Printer / Scanner

Printers and scanners are gold mines for precision motion components — stepper motors, linear rails, belts, and optical sensors.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Stepper Motors** | Precision motors that rotate in discrete steps. Usually NEMA 17-equivalent. Printers typically have 2-4 of them. | [Printer Stepper CNC](../categories/printer-and-scanner/069-printer-stepper-cnc.md), [Pen Plotter](../categories/printer-and-scanner/072-pen-plotter.md), [MIDI Stepper Organ](../categories/pi-and-arduino/135-midi-stepper-organ.md), [Printer Robot Arm](../categories/pi-and-arduino/129-printer-robot-arm.md) |
| **Linear Rails / Guide Rods** | Precision-ground steel rods that the print head rides on. Smooth, straight, and hard to buy this quality cheaply. | CNC builds, [Printer Stepper CNC](../categories/printer-and-scanner/069-printer-stepper-cnc.md), linear motion projects |
| **Timing Belts and Pulleys** | GT2-style toothed belts and pulleys for zero-backlash linear motion. | All CNC and precision motion builds |
| **Optical Sensors** | Photointerruptors (slot sensors) used for position homing. | Position sensing, counting, CNC homing |
| **Laser Diode** (from laser printers/DVD drives) | Infrared or red laser diodes. DVD burner diodes are powerful enough for engraving. | [DVD Laser Engraver](../categories/printer-and-scanner/071-dvd-laser-engraver.md) |
| **Scanner CCD/CIS Sensor** | Linear image sensor with LED light bar. | [Scanner Camera](../categories/printer-and-scanner/070-scanner-camera.md), [DIY 3D Scanner](../categories/printer-and-scanner/074-diy-3d-scanner.md) |
| **Power Supply Board** | Regulated power supply (5V, 12V, 24V, sometimes 36V). | Powering any project |

### Teardown Safety

- **Laser printers contain toner** — a fine, electrostatically charged powder that gets everywhere. Wear a dust mask and old clothes. Toner is difficult to clean from carpet and fabric.
- **DVD/Blu-ray laser diodes** can damage your eyes even at low power. Never look into the beam. Handle with the laser powered off.
- **Some printer power supplies have high-voltage capacitors** on the AC side. Discharge before handling.

### Tools Needed
- Small Phillips screwdrivers
- Torx drivers (T8, T10, T15 common in printers)
- Pliers, wire cutters
- Dust mask (for laser printers)

---

## CRT Television

CRT TVs are mostly obsolete, but they contain some unique high-voltage components that can't be sourced anywhere else.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Flyback Transformer** | Generates 10,000-30,000V for the electron gun. The most potent high-voltage source you'll find in consumer electronics. | High-voltage experiments, [Jacob's Ladder](../categories/mad-scientist/034-jacobs-ladder.md), plasma projects |
| **Electron Gun** | Precision assembly at the neck of the CRT. Mostly a curiosity. | Display/art only |
| **Phosphor Screen** | The front of the CRT is coated with phosphor compounds that glow when struck by electrons. | UV/blacklight demonstrations |
| **Deflection Yoke** | Electromagnetic coils that steer the electron beam. Strong, precisely wound coils. | Electromagnet projects, coil experiments |
| **High-Voltage Capacitor / Anode** | The CRT glass itself acts as a capacitor (the inner and outer conductive coatings). Can hold a charge for WEEKS after unplugging. | Nothing safe — discharge and respect this component |
| **Speaker** | CRT TVs often have decent full-range speakers. | Audio projects |

### Teardown Safety

- **CRT TVs can kill you.** The anode on the CRT tube can hold 25,000+ volts for weeks or months after unplugging. NEVER touch the anode cap (the suction cup thing on the side of the tube) without discharging it first. Discharge procedure: connect a high-value resistor (10M ohm) between the anode and the chassis ground (the DAG coating or grounding strap). You should hear a loud snap. Verify with a multimeter.
- **The CRT tube itself is under vacuum.** If the tube breaks, it implodes violently, sending glass fragments in all directions. Wear safety goggles, gloves, and long sleeves. Work on a soft surface (blanket on the floor).
- **The phosphor coating on the screen** may contain toxic compounds (especially in color CRTs). Do not break the screen intentionally. Do not inhale or handle phosphor dust.
- **Leaded glass.** CRT glass contains significant lead. Do not grind, cut, or dispose of in regular trash. Treat as e-waste.

### Tools Needed
- Insulated screwdrivers (long-shaft, for anode discharge)
- High-value resistor and wire (for discharge tool)
- Socket set, screwdrivers
- Multimeter
- Safety goggles, gloves, long sleeves

---

## Old Laptop

Dead laptops are one of the densest sources of useful components — screens, batteries, cameras, and more in a compact package.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **LCD/LED Screen** | 13-17" LCD panel, often 1080p IPS. The screen outlives the laptop 99% of the time. | [Laptop Screen Monitor](../categories/computer-and-phone/061-laptop-screen-monitor.md), [Laptop Screen Light Table](../categories/computer-and-phone/062-laptop-screen-light-table.md), [Smart Mirror](../categories/pi-and-arduino/123-smart-mirror.md) |
| **Controller Board Connection** | Write down the panel model number (on the back label) — you'll need it to buy the matching LVDS/eDP controller board. | [Laptop Screen Monitor](../categories/computer-and-phone/061-laptop-screen-monitor.md) |
| **18650 Battery Cells** | Laptop battery packs contain 3-9 lithium 18650 cells. Many are still usable even when the pack is "dead" (one bad cell kills the pack). | [Laptop Battery Power Bank](../categories/computer-and-phone/067-laptop-battery-power-bank.md), [Electric Skateboard](../categories/scooter-and-motor/088-electric-skateboard.md), battery pack projects |
| **Keyboard** | USB or PS/2 keyboard with full key matrix. | USB keyboard conversion, art projects |
| **Webcam** | Small USB camera module with microphone. | [ESP32-CAM Security](../categories/pi-and-arduino/128-esp32-cam-security.md), surveillance builds |
| **Speakers** | Small, thin speakers — low power but functional. | Audio projects, notification sounds |
| **WiFi Card** | Mini PCIe or M.2 WiFi/Bluetooth module. | Network projects (with compatible hardware) |
| **Hard Drive / SSD** | Storage drive — may still work. SSDs especially tend to outlive their laptops. | Data storage, [Hard Drive Speaker](../categories/computer-and-phone/056-hard-drive-speaker.md) (HDD only) |
| **Cooling Fan** | Small, quiet 5V DC fan. | Cooling for any small build |

### Teardown Safety

- **Lithium batteries can catch fire** if punctured, short-circuited, or crushed. Remove the battery pack carefully. Do not pry near the cells with metal tools. If a cell is swollen (puffy), it is damaged — do not attempt to reuse it. Dispose at a battery recycling center.
- **CCFL-backlit screens** (older laptops) have an inverter board that produces 600-1000V AC for the backlight tubes. LED-backlit screens (modern laptops) are much safer.
- **Some laptops have small CMOS batteries** (CR2032 coin cells) that may leak. Check for corrosion.

### Tools Needed
- Small Phillips screwdrivers (#0, #1)
- Plastic pry tools (guitar picks, spudgers)
- Tweezers
- Anti-static wrist strap (if reusing sensitive components)

---

## Old Phone / Tablet

Phones and tablets are packed with sensors, cameras, and displays in an incredibly compact form factor. Even "dead" ones often have working components.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Sensors** | Accelerometer, gyroscope, magnetometer, barometer, proximity sensor, ambient light sensor — all on one device. | [Phone Sensor Network](../categories/computer-and-phone/064-phone-sensor-network.md), [Earthquake Detector](../categories/python-projects/146-earthquake-detector.md) |
| **Camera** | Front and rear cameras — often 8-48 MP. The rear camera usually has autofocus and LED flash. | [Phone Macro Photography](../categories/computer-and-phone/063-phone-macro-photography.md), [Phone IR Camera](../categories/computer-and-phone/066-phone-ir-camera.md) |
| **Touchscreen / Display** | High-resolution display with touch digitizer. Difficult to reuse without the phone's controller, but the whole phone can serve as a display. | [Tablet AI Picture Frame](../categories/computer-and-phone/065-tablet-ai-picture-frame.md) |
| **Battery** | Lithium polymer (LiPo) cell, 3.7V. Thin, flat, and energy-dense. | Small battery projects (with proper protection circuits) |
| **Speakers** | Tiny but high-quality speakers optimized for voice and music in a small enclosure. | Small audio projects |
| **Vibration Motor** | Tiny eccentric rotating mass (ERM) or linear resonant actuator (LRA). | Haptic feedback, vibration alerts |

### Teardown Safety

- **Phone batteries are LiPo (lithium polymer)** — more dangerous than 18650 cells if punctured. LiPo cells are in soft pouches and can swell, vent, or catch fire if damaged. NEVER pry near the battery with metal tools. Use plastic spudgers only.
- **Phones are held together with adhesive.** Heat guns and iFixit opening tools are essential. Too much heat can ignite the battery.
- **For most builds, you don't need to disassemble the phone at all.** Use it as a complete device running apps for sensor access and display output. Disassembly is only for advanced component harvesting.

### Tools Needed
- iFixit toolkit or equivalent (pentalobe, Torx, tri-point drivers)
- Plastic spudgers and picks
- Suction cup (for screen removal)
- Heat gun or hair dryer (for softening adhesive)
- Anti-static mat

---

## Electric Scooter / Hoverboard

Dead electric scooters and hoverboards are the best source of high-power brushless motors, ESCs, and battery packs.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **BLDC Hub Motor** | Brushless DC motor built into the wheel. 250-500W typical. High torque, low RPM, long-lasting. | [Electric Skateboard](../categories/scooter-and-motor/088-electric-skateboard.md), [Motorized Camera Slider](../categories/scooter-and-motor/089-motorized-camera-slider.md), [Electric Winch](../categories/scooter-and-motor/090-electric-winch.md), [Wind Phone Charger](../categories/scooter-and-motor/091-wind-phone-charger.md) |
| **ESC (Electronic Speed Controller)** | Controller board that drives the BLDC motor. Handles regenerative braking, speed control, and motor commutation. | [Electric Skateboard](../categories/scooter-and-motor/088-electric-skateboard.md), motor control projects |
| **Battery Pack** | 36V lithium-ion pack (10S configuration), typically 4-6 Ah. Contains 18650 or pouch cells with a BMS. | [Electric Skateboard](../categories/scooter-and-motor/088-electric-skateboard.md), power source for any high-voltage DC build |
| **Throttle** | Thumb or twist throttle with hall-effect sensor. Outputs 0-5V proportional to position. | Speed control input for motor projects |
| **Brake Lever** | Mechanical or electronic brake lever with cutoff switch. | Safety cutoff for motor builds |
| **LED Lights** | Front/rear LED assemblies with drivers. | Lighting for any project |
| **Charging Port and Charger** | The charger is a purpose-built 42V Li-ion charger. | Charging salvaged battery packs |

### Teardown Safety

- **The battery pack is live and dangerous.** A 36V pack can deliver enormous current if short-circuited. Disconnect the battery first before working on anything else. Tape over exposed terminals.
- **BLDC motors generate voltage when spun.** If you spin the wheel by hand, the motor produces back-EMF. This won't kill you at low speed, but it can spark if wires touch.
- **Some hoverboards caught fire** due to cheap battery cells and inadequate BMS protection. If the battery pack looks puffy, damaged, or corroded, do NOT reuse it. Dispose at a battery recycling center.

### Tools Needed
- Allen keys (hex wrenches — metric)
- Screwdrivers
- Wire cutters and strippers
- Multimeter (for battery voltage verification)
- Electrical tape

---

## Humidifier

Ultrasonic humidifiers contain one of the most interesting components in all of consumer electronics — the ultrasonic transducer disc.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Ultrasonic Transducer Disc** | Piezoelectric disc that vibrates at 1.7 MHz, atomizing water into cold fog. Tiny, cheap, and produces an impressive volume of mist. | [Ultrasonic Fog Machine](../categories/humidifier-and-water/084-ultrasonic-fog-machine.md), [Ultrasonic Parts Cleaner](../categories/humidifier-and-water/085-ultrasonic-parts-cleaner.md), [Fog Waterfall Table](../categories/humidifier-and-water/086-fog-waterfall-table.md), [Nebula Lamp](../categories/humidifier-and-water/087-nebula-lamp.md) |
| **Driver Circuit Board** | Electronics that drive the transducer at the correct frequency. Usually includes power regulation. | Paired with the transducer in all builds above |
| **Fan** | Small DC fan (often 5V or 12V) that pushes mist out of the unit. | Small ventilation/airflow |
| **Water Tank** | Plastic reservoir, often translucent. | Water container for builds |
| **Float Switch** | Mechanical float that detects low water level and shuts off the unit. | Water level detection, overflow protection |

### Teardown Safety

- **The transducer operates at high frequency (1.7 MHz).** Don't run it dry — the disc overheats and shatters within seconds without water.
- **The driver board may have capacitors** that hold a charge. Discharge before handling.
- **Mineral buildup** on the transducer disc is normal. Clean with vinegar before testing.

### Tools Needed
- Screwdrivers
- Pliers
- Multimeter

---

## Power Tools

Dead or damaged power tools contain motors, gears, chucks, and switches that are overbuilt and durable.

### Parts to Salvage

| Part | What It Is | Builds That Use It |
|---|---|---|
| **Motors** | DC motors (cordless tools) or universal motors (corded tools). Usually powerful relative to their size. | [Angle Grinder Forge Blower](../categories/power-tools-remixed/079-angle-grinder-forge-blower.md), [Sawzall Power Hammer](../categories/power-tools-remixed/081-sawzall-power-hammer.md), [Router CNC Spindle](../categories/power-tools-remixed/083-router-cnc-spindle.md) |
| **Chucks and Collets** | Precision tool-holding mechanisms. Drill chucks are especially useful. | [Hand Drill Press](../categories/power-tools-remixed/080-hand-drill-press.md), any build needing to hold a rotating tool |
| **Gearboxes** | Planetary or spur gear assemblies for speed/torque conversion. | Mechanical power transmission, [Motorized Camera Slider](../categories/scooter-and-motor/089-motorized-camera-slider.md) |
| **Trigger Switches** | Variable-speed trigger switches rated for high current (15-20A). | Speed control for motor builds |
| **Battery Packs** (cordless tools) | 12V-20V lithium-ion packs with high discharge ratings. | Power source for portable builds, [Laptop Battery Power Bank](../categories/computer-and-phone/067-laptop-battery-power-bank.md) |
| **Brushes and Commutators** | Replacement-ready carbon brushes. | Maintaining salvaged universal motors |

### Teardown Safety

- **Remove the battery pack** (cordless) or unplug (corded) before disassembly.
- **Springs under tension** are common in power tools (trigger springs, blade guard springs). They can fly when released.
- **Gear assemblies are packed with grease.** Work on a surface you don't mind getting oily.
- **Angle grinders** have guard mounting points — always use a guard when repurposing the motor/disc assembly.

### Tools Needed
- Torx and hex drivers
- Screwdrivers
- Bearing puller (for motor shaft bearings)
- Snap ring pliers (for gear assemblies)
- Rags (for grease)

---

## General Teardown Tips

1. **Photograph everything before you start.** Take pictures of wire connections, screw locations, and assembly order. You'll want these references if you need to figure out how something was connected.

2. **Label wires.** Tape or tag wires as you disconnect them, noting what they connect to. A bag of unlabeled wires is useless.

3. **Sort parts immediately.** Have bins or bags ready: "motors," "fasteners," "electronic modules," "wire," "scrap." A pile of unsorted parts is just a different kind of junk.

4. **Test before storing.** Use a multimeter to verify motors spin, switches work, and components aren't burned out. There's no point storing dead parts.

5. **Keep the screws.** Appliance screws are often unusual sizes (metric, security Torx, etc.). Keep them with the parts they came from.

6. **Recycle what you don't use.** Scrap metal (steel, copper, aluminum) has value. E-waste recycling centers take the rest. Don't throw appliance parts in the regular trash.
