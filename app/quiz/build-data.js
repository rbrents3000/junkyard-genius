const BUILDS = [
  {
    "num": 1,
    "name": "Plasma Tornado Lamp",
    "slug": "001-plasma-tornado-lamp",
    "category": "fire-and-plasma",
    "categoryName": "Fire & Plasma",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 2
  },
  {
    "num": 2,
    "name": "Lichtenberg Wood Burner",
    "slug": "002-lichtenberg-wood-burner",
    "category": "fire-and-plasma",
    "categoryName": "Fire & Plasma",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 5,
    "clout": 5,
    "time": 1
  },
  {
    "num": 3,
    "name": "Propane Vortex Cannon",
    "slug": "003-propane-vortex-cannon",
    "category": "fire-and-plasma",
    "categoryName": "Fire & Plasma",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 2
  },
  {
    "num": 4,
    "name": "Thermic Lance",
    "slug": "004-thermic-lance",
    "category": "fire-and-plasma",
    "categoryName": "Fire & Plasma",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 5,
    "clout": 5,
    "time": 1
  },
  {
    "num": 5,
    "name": "Desktop Foundry",
    "slug": "005-desktop-foundry",
    "category": "fire-and-plasma",
    "categoryName": "Fire & Plasma",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 4,
    "clout": 4,
    "time": 2
  },
  {
    "num": 6,
    "name": "Atmospheric Reentry Simulator",
    "slug": "006-atmospheric-reentry-simulator",
    "category": "fire-and-plasma",
    "categoryName": "Fire & Plasma",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 4,
    "clout": 4,
    "time": 1
  },
  {
    "num": 7,
    "name": "Fire Tornado Table",
    "slug": "007-fire-tornado-table",
    "category": "fire-and-plasma",
    "categoryName": "Fire & Plasma",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "chemical"
    ],
    "jaw": 5,
    "brain": 1,
    "wallet": 2,
    "spicy": 3,
    "clout": 5,
    "time": 1
  },
  {
    "num": 8,
    "name": "Plasma Speaker",
    "slug": "008-plasma-speaker",
    "category": "sound-and-music",
    "categoryName": "Sound & Music",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "crt",
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 2
  },
  {
    "num": 9,
    "name": "Rubens' Tube",
    "slug": "009-rubens-tube",
    "category": "sound-and-music",
    "categoryName": "Sound & Music",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 3,
    "clout": 5,
    "time": 2
  },
  {
    "num": 10,
    "name": "Ultrasonic Levitator",
    "slug": "010-ultrasonic-levitator",
    "category": "sound-and-music",
    "categoryName": "Sound & Music",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop",
      "scooter"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 11,
    "name": "Ferrofluid Speaker",
    "slug": "011-ferrofluid-speaker",
    "category": "sound-and-music",
    "categoryName": "Sound & Music",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 12,
    "name": "Thunder Drum",
    "slug": "012-thunder-drum",
    "category": "sound-and-music",
    "categoryName": "Sound & Music",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 13,
    "name": "Aeolian Wind Harp",
    "slug": "013-aeolian-wind-harp",
    "category": "sound-and-music",
    "categoryName": "Sound & Music",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 14,
    "name": "Bone Conduction Speaker",
    "slug": "014-bone-conduction-speaker",
    "category": "sound-and-music",
    "categoryName": "Sound & Music",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 15,
    "name": "Giant Plasma Globe",
    "slug": "015-giant-plasma-globe",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 2
  },
  {
    "num": 16,
    "name": "Infinity Mirror Table",
    "slug": "016-infinity-mirror-table",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 17,
    "name": "Laser Fog Projector",
    "slug": "017-laser-fog-projector",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 18,
    "name": "Shadow Chandelier",
    "slug": "018-shadow-chandelier",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 19,
    "name": "POV Globe",
    "slug": "019-pov-globe",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 20,
    "name": "Fresnel Lens Solar Forge",
    "slug": "020-fresnel-lens-solar-forge",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 1,
    "wallet": 1,
    "spicy": 5,
    "clout": 5,
    "time": 1
  },
  {
    "num": 21,
    "name": "CRT Oscilloscope Visualizer",
    "slug": "021-crt-oscilloscope-visualizer",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "crt",
      "laptop"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 2
  },
  {
    "num": 22,
    "name": "Holographic Fan Display",
    "slug": "022-holographic-fan-display",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 23,
    "name": "UV Reactive Water Wall",
    "slug": "023-uv-reactive-water-wall",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 24,
    "name": "Electric Go-Kart",
    "slug": "024-electric-go-kart",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 3,
    "spicy": 3,
    "clout": 5,
    "time": 3
  },
  {
    "num": 25,
    "name": "Scooter Motor Lathe",
    "slug": "025-scooter-motor-lathe",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 3,
    "time": 3
  },
  {
    "num": 26,
    "name": "Treadmill Belt Grinder",
    "slug": "026-treadmill-belt-grinder",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 2,
    "time": 2
  },
  {
    "num": 27,
    "name": "Spot Welder",
    "slug": "027-spot-welder",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 3,
    "clout": 3,
    "time": 2
  },
  {
    "num": 28,
    "name": "Powder Coating Oven",
    "slug": "028-powder-coating-oven",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "chemical",
      "fridge"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 3,
    "spicy": 2,
    "clout": 3,
    "time": 3
  },
  {
    "num": 29,
    "name": "Vacuum Former",
    "slug": "029-vacuum-former",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 3,
    "time": 2
  },
  {
    "num": 30,
    "name": "Electrostatic Precipitator",
    "slug": "030-electrostatic-precipitator",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "crt",
      "laptop"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 2,
    "time": 2
  },
  {
    "num": 31,
    "name": "Silent Compressor",
    "slug": "031-silent-compressor",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "fridge"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 2,
    "time": 2
  },
  {
    "num": 32,
    "name": "Capacitor Discharge Welder",
    "slug": "032-capacitor-discharge-welder",
    "category": "functional-machines",
    "categoryName": "Functional Machines",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 4,
    "clout": 3,
    "time": 2
  },
  {
    "num": 33,
    "name": "Musical Tesla Coil",
    "slug": "033-musical-tesla-coil",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "crt",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 3
  },
  {
    "num": 34,
    "name": "Jacob's Ladder",
    "slug": "034-jacobs-ladder",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 5,
    "clout": 5,
    "time": 1
  },
  {
    "num": 35,
    "name": "Electromagnetic Can Crusher",
    "slug": "035-electromagnetic-can-crusher",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 3,
    "spicy": 4,
    "clout": 5,
    "time": 3
  },
  {
    "num": 36,
    "name": "Rail Gun",
    "slug": "036-rail-gun",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 5,
    "clout": 5,
    "time": 4
  },
  {
    "num": 37,
    "name": "Coil Gun",
    "slug": "037-coil-gun",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "arduino"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 3,
    "spicy": 4,
    "clout": 4,
    "time": 3
  },
  {
    "num": 38,
    "name": "Electromagnetic Levitator",
    "slug": "038-electromagnetic-levitator",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 39,
    "name": "Vacuum Chamber",
    "slug": "039-vacuum-chamber",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "fridge"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 4,
    "time": 2
  },
  {
    "num": 40,
    "name": "Mass Spectrometer",
    "slug": "040-mass-spectrometer",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "crt",
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 5,
    "wallet": 3,
    "spicy": 3,
    "clout": 4,
    "time": 4
  },
  {
    "num": 41,
    "name": "Cloud Chamber",
    "slug": "041-cloud-chamber",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 1
  },
  {
    "num": 42,
    "name": "Grape Plasma",
    "slug": "042-grape-plasma",
    "category": "mad-scientist",
    "categoryName": "Mad Scientist",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 43,
    "name": "Kinetic Wind Sculpture",
    "slug": "043-kinetic-wind-sculpture",
    "category": "art-and-installation",
    "categoryName": "Art & Installation",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 44,
    "name": "Anti-Gravity Water Fountain",
    "slug": "044-antigravity-water-fountain",
    "category": "art-and-installation",
    "categoryName": "Art & Installation",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 45,
    "name": "Scrap Metal Sculpture",
    "slug": "045-scrap-metal-sculpture",
    "category": "art-and-installation",
    "categoryName": "Art & Installation",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 3
  },
  {
    "num": 46,
    "name": "Ferrofluid Mirror",
    "slug": "046-ferrofluid-mirror",
    "category": "art-and-installation",
    "categoryName": "Art & Installation",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 3,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 47,
    "name": "Dryer Drum Planetarium",
    "slug": "047-dryer-drum-planetarium",
    "category": "art-and-installation",
    "categoryName": "Art & Installation",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 48,
    "name": "CRT Electromagnetic Art",
    "slug": "048-crt-electromagnetic-art",
    "category": "art-and-installation",
    "categoryName": "Art & Installation",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "crt",
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 49,
    "name": "Campfire Thermoelectric Charger",
    "slug": "049-campfire-thermoelectric-charger",
    "category": "power-and-energy",
    "categoryName": "Power & Energy",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "fridge"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 50,
    "name": "Bicycle Generator",
    "slug": "050-bicycle-generator",
    "category": "power-and-energy",
    "categoryName": "Power & Energy",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 51,
    "name": "Solar Water Heater",
    "slug": "051-solar-water-heater",
    "category": "power-and-energy",
    "categoryName": "Power & Energy",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 2,
    "time": 2
  },
  {
    "num": 52,
    "name": "DIY Powerwall",
    "slug": "052-diy-powerwall",
    "category": "power-and-energy",
    "categoryName": "Power & Energy",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 3,
    "spicy": 3,
    "clout": 4,
    "time": 4
  },
  {
    "num": 53,
    "name": "Singing Ferrofluid Tornado",
    "slug": "053-singing-ferrofluid-tornado",
    "category": "unholy-combos",
    "categoryName": "Unholy Combos",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 3,
    "clout": 5,
    "time": 4
  },
  {
    "num": 54,
    "name": "Vacuum Plasma Cloud Chamber",
    "slug": "054-vacuum-plasma-cloud-chamber",
    "category": "unholy-combos",
    "categoryName": "Unholy Combos",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "chemical",
      "fridge"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 4,
    "clout": 5,
    "time": 4
  },
  {
    "num": 55,
    "name": "Levitating Plasma Speaker",
    "slug": "055-levitating-plasma-speaker",
    "category": "unholy-combos",
    "categoryName": "Unholy Combos",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 5,
    "clout": 5,
    "time": 4
  },
  {
    "num": 56,
    "name": "Hard Drive Speaker",
    "slug": "056-hard-drive-speaker",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 57,
    "name": "Hard Drive POV Clock",
    "slug": "057-hard-drive-pov-clock",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 58,
    "name": "HDD Platter Wind Chimes",
    "slug": "058-hdd-platter-wind-chimes",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 59,
    "name": "CPU Resin Jewelry",
    "slug": "059-cpu-resin-jewelry",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 60,
    "name": "GPU Wall Art",
    "slug": "060-gpu-wall-art",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 61,
    "name": "Laptop Screen Monitor",
    "slug": "061-laptop-screen-monitor",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 62,
    "name": "Laptop Screen Light Table",
    "slug": "062-laptop-screen-light-table",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 2,
    "time": 1
  },
  {
    "num": 63,
    "name": "Phone Macro Photography",
    "slug": "063-phone-macro-photography",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 64,
    "name": "Phone Sensor Network",
    "slug": "064-phone-sensor-network",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 65,
    "name": "Tablet AI Picture Frame",
    "slug": "065-tablet-ai-picture-frame",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 66,
    "name": "Phone IR Camera",
    "slug": "066-phone-ir-camera",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 67,
    "name": "Laptop Battery Power Bank",
    "slug": "067-laptop-battery-power-bank",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 2,
    "time": 1
  },
  {
    "num": 68,
    "name": "RAM Stick Ruler",
    "slug": "068-ram-stick-ruler",
    "category": "computer-and-phone",
    "categoryName": "Computer & Phone",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 1,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 2,
    "time": 1
  },
  {
    "num": 69,
    "name": "Printer Stepper CNC",
    "slug": "069-printer-stepper-cnc",
    "category": "printer-and-scanner",
    "categoryName": "Printer & Scanner",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 4
  },
  {
    "num": 70,
    "name": "Scanner Camera",
    "slug": "070-scanner-camera",
    "category": "printer-and-scanner",
    "categoryName": "Printer & Scanner",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "printer"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 71,
    "name": "DVD Laser Engraver",
    "slug": "071-dvd-laser-engraver",
    "category": "printer-and-scanner",
    "categoryName": "Printer & Scanner",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 3
  },
  {
    "num": 72,
    "name": "Pen Plotter",
    "slug": "072-pen-plotter",
    "category": "printer-and-scanner",
    "categoryName": "Printer & Scanner",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "printer",
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 3
  },
  {
    "num": 73,
    "name": "Inkjet Bioprinter",
    "slug": "073-inkjet-bioprinter",
    "category": "printer-and-scanner",
    "categoryName": "Printer & Scanner",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "printer",
      "chemical"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 4
  },
  {
    "num": 74,
    "name": "DIY 3D Scanner",
    "slug": "074-diy-3d-scanner",
    "category": "printer-and-scanner",
    "categoryName": "Printer & Scanner",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 75,
    "name": "Vacuum Hovercraft",
    "slug": "075-vacuum-hovercraft",
    "category": "vacuum-cleaner",
    "categoryName": "Vacuum Cleaner",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 2
  },
  {
    "num": 76,
    "name": "Wall-Climbing Robot",
    "slug": "076-wall-climbing-robot",
    "category": "vacuum-cleaner",
    "categoryName": "Vacuum Cleaner",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop",
      "scooter"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 77,
    "name": "Cyclone Dust Separator",
    "slug": "077-cyclone-dust-separator",
    "category": "vacuum-cleaner",
    "categoryName": "Vacuum Cleaner",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 2,
    "time": 2
  },
  {
    "num": 78,
    "name": "Vacuum Leaf Blower",
    "slug": "078-vacuum-leaf-blower",
    "category": "vacuum-cleaner",
    "categoryName": "Vacuum Cleaner",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 2,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 2,
    "time": 1
  },
  {
    "num": 79,
    "name": "Angle Grinder Forge Blower",
    "slug": "079-angle-grinder-forge-blower",
    "category": "power-tools-remixed",
    "categoryName": "Power Tools Remixed",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 80,
    "name": "Hand Drill Press",
    "slug": "080-hand-drill-press",
    "category": "power-tools-remixed",
    "categoryName": "Power Tools Remixed",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 2,
    "time": 1
  },
  {
    "num": 81,
    "name": "Sawzall Power Hammer",
    "slug": "081-sawzall-power-hammer",
    "category": "power-tools-remixed",
    "categoryName": "Power Tools Remixed",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 82,
    "name": "Circular Saw Table Saw",
    "slug": "082-circular-saw-table-saw",
    "category": "power-tools-remixed",
    "categoryName": "Power Tools Remixed",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 3,
    "clout": 3,
    "time": 2
  },
  {
    "num": 83,
    "name": "Router CNC Spindle",
    "slug": "083-router-cnc-spindle",
    "category": "power-tools-remixed",
    "categoryName": "Power Tools Remixed",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "printer",
      "scooter"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 84,
    "name": "Ultrasonic Fog Machine",
    "slug": "084-ultrasonic-fog-machine",
    "category": "humidifier-and-water",
    "categoryName": "Humidifier & Water",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 85,
    "name": "Ultrasonic Parts Cleaner",
    "slug": "085-ultrasonic-parts-cleaner",
    "category": "humidifier-and-water",
    "categoryName": "Humidifier & Water",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 86,
    "name": "Fog Waterfall Table",
    "slug": "086-fog-waterfall-table",
    "category": "humidifier-and-water",
    "categoryName": "Humidifier & Water",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 87,
    "name": "Nebula Lamp",
    "slug": "087-nebula-lamp",
    "category": "humidifier-and-water",
    "categoryName": "Humidifier & Water",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 88,
    "name": "Electric Skateboard",
    "slug": "088-electric-skateboard",
    "category": "scooter-and-motor",
    "categoryName": "Scooter & Motor",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "laptop",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 2,
    "clout": 4,
    "time": 3
  },
  {
    "num": 89,
    "name": "Motorized Camera Slider",
    "slug": "089-motorized-camera-slider",
    "category": "scooter-and-motor",
    "categoryName": "Scooter & Motor",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 90,
    "name": "Electric Winch",
    "slug": "090-electric-winch",
    "category": "scooter-and-motor",
    "categoryName": "Scooter & Motor",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "laptop",
      "scooter"
    ],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 2,
    "time": 2
  },
  {
    "num": 91,
    "name": "Wind Phone Charger",
    "slug": "091-wind-phone-charger",
    "category": "scooter-and-motor",
    "categoryName": "Scooter & Motor",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "laptop",
      "scooter"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 3
  },
  {
    "num": 92,
    "name": "Fermentation Chamber",
    "slug": "092-fermentation-chamber",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "fridge"
    ],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 2,
    "time": 1
  },
  {
    "num": 93,
    "name": "Fog Chiller",
    "slug": "093-fog-chiller",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "fridge"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 94,
    "name": "DIY Freeze Dryer",
    "slug": "094-diy-freeze-dryer",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "fridge"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 3,
    "spicy": 2,
    "clout": 4,
    "time": 4
  },
  {
    "num": 95,
    "name": "Absorption Cooler",
    "slug": "095-absorption-cooler",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "chemical",
      "fridge"
    ],
    "jaw": 4,
    "brain": 5,
    "wallet": 3,
    "spicy": 4,
    "clout": 4,
    "time": 5
  },
  {
    "num": 96,
    "name": "Peltier Portable Cooler",
    "slug": "096-peltier-portable-cooler",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "fridge"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 97,
    "name": "Absorption Fridge",
    "slug": "097-absorption-fridge",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "chemical",
      "fridge"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 3,
    "spicy": 3,
    "clout": 4,
    "time": 4
  },
  {
    "num": 98,
    "name": "Junk Ice Cream Maker",
    "slug": "098-junk-ice-cream-maker",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter",
      "fridge"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 99,
    "name": "Swamp Cooler",
    "slug": "099-swamp-cooler",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 100,
    "name": "Thermoelectric Beverage Chiller",
    "slug": "100-beverage-chiller",
    "category": "fridge-and-cooling",
    "categoryName": "Fridge & Cooling",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "laptop",
      "fridge"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 101,
    "name": "Colored Fire",
    "slug": "101-colored-fire",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "laptop",
      "chemical"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 102,
    "name": "Elephant Toothpaste",
    "slug": "102-elephant-toothpaste",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 1,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 1
  },
  {
    "num": 103,
    "name": "Smoke Bomb Array",
    "slug": "103-smoke-bomb-array",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "arduino",
      "chemical"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 3,
    "clout": 5,
    "time": 2
  },
  {
    "num": 104,
    "name": "Cold Spark Machine",
    "slug": "104-cold-spark-machine",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop",
      "scooter"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 3,
    "spicy": 2,
    "clout": 5,
    "time": 2
  },
  {
    "num": 105,
    "name": "Thermite Flower Pot",
    "slug": "105-thermite-flower-pot",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 5,
    "clout": 5,
    "time": 1
  },
  {
    "num": 106,
    "name": "Gallium Melting Spoon",
    "slug": "106-gallium-melting-spoon",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 107,
    "name": "Bismuth Crystal Garden",
    "slug": "107-bismuth-crystal-garden",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 108,
    "name": "Instant Ice Sculpture",
    "slug": "108-instant-ice-sculpture",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 109,
    "name": "Luminol Crime Scene",
    "slug": "109-luminol-crime-scene",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 110,
    "name": "Pharaoh's Serpent",
    "slug": "110-pharaohs-serpent",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 111,
    "name": "Chemiluminescent Fountain",
    "slug": "111-chemiluminescent-fountain",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "laptop",
      "chemical"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 3,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 112,
    "name": "Non-Newtonian Speaker",
    "slug": "112-non-newtonian-speaker",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 113,
    "name": "Steel Wool Photography",
    "slug": "113-steel-wool-photography",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 5,
    "brain": 1,
    "wallet": 1,
    "spicy": 3,
    "clout": 5,
    "time": 1
  },
  {
    "num": 114,
    "name": "Dry Ice Comet Balls",
    "slug": "114-dry-ice-comet-balls",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 115,
    "name": "Permanganate Auto-Ignition",
    "slug": "115-permanganate-auto-ignition",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 4,
    "clout": 4,
    "time": 1
  },
  {
    "num": 116,
    "name": "Calcium Carbide Cannon",
    "slug": "116-calcium-carbide-cannon",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 4,
    "clout": 4,
    "time": 1
  },
  {
    "num": 117,
    "name": "Glow Resin River Table",
    "slug": "117-glow-resin-river-table",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 3,
    "wallet": 3,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 118,
    "name": "Fluorescein Blacklight Fountain",
    "slug": "118-fluorescein-blacklight-fountain",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 119,
    "name": "Thermochromic Paint",
    "slug": "119-thermochromic-paint",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 120,
    "name": "Dry Ice Bubble Cauldron",
    "slug": "120-dry-ice-bubble-cauldron",
    "category": "pyro-and-chemistry",
    "categoryName": "Pyro & Chemistry",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 5,
    "time": 1
  },
  {
    "num": 121,
    "name": "Fireworks Sequencer",
    "slug": "121-fireworks-sequencer",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 2
  },
  {
    "num": 122,
    "name": "LED Cube 8x8x8",
    "slug": "122-led-cube-8x8x8",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "crt",
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 123,
    "name": "Smart Mirror",
    "slug": "123-smart-mirror",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 3,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 124,
    "name": "Arduino Guitar Pedal",
    "slug": "124-arduino-guitar-pedal",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 125,
    "name": "ESP32 Mesh Walkie-Talkie",
    "slug": "125-esp32-mesh-walkie-talkie",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 126,
    "name": "Retro Arcade Cabinet",
    "slug": "126-retro-arcade-cabinet",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 127,
    "name": "Auto Plant Watering",
    "slug": "127-auto-plant-watering",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 2,
    "time": 2
  },
  {
    "num": 128,
    "name": "ESP32-CAM Security",
    "slug": "128-esp32-cam-security",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 2,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 2,
    "time": 3
  },
  {
    "num": 129,
    "name": "Printer Robot Arm",
    "slug": "129-printer-robot-arm",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 4
  },
  {
    "num": 130,
    "name": "AI Doorbell",
    "slug": "130-ai-doorbell",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 3
  },
  {
    "num": 131,
    "name": "Pi DJ Controller",
    "slug": "131-pi-dj-controller",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 132,
    "name": "ESP32 Weather Station",
    "slug": "132-esp32-weather-station",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "microwave",
      "arduino"
    ],
    "jaw": 2,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 2,
    "time": 3
  },
  {
    "num": 133,
    "name": "Arduino Breathalyzer",
    "slug": "133-arduino-breathalyzer",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "chemical"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 134,
    "name": "Pirate Radio",
    "slug": "134-pirate-radio",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 135,
    "name": "MIDI Stepper Organ",
    "slug": "135-midi-stepper-organ",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 136,
    "name": "ESP32 Micro Drone",
    "slug": "136-esp32-micro-drone",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 5,
    "wallet": 2,
    "spicy": 3,
    "clout": 4,
    "time": 4
  },
  {
    "num": 137,
    "name": "Star Tracker",
    "slug": "137-star-tracker",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 138,
    "name": "Nerf Sentry Turret",
    "slug": "138-nerf-sentry-turret",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 139,
    "name": "Pi-hole Ad Blocker",
    "slug": "139-pi-hole-ad-blocker",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 140,
    "name": "EMF Ghost Detector",
    "slug": "140-emf-ghost-detector",
    "category": "pi-and-arduino",
    "categoryName": "Pi & Arduino",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 141,
    "name": "Face Tracking Laser",
    "slug": "141-face-tracking-laser",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 2
  },
  {
    "num": 142,
    "name": "Generative Art Plotter",
    "slug": "142-generative-art-plotter",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "printer"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 143,
    "name": "AI Photo Booth",
    "slug": "143-ai-photo-booth",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "printer",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 144,
    "name": "Sentiment Room Lighting",
    "slug": "144-sentiment-room-lighting",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 145,
    "name": "Music Visualizer LED Wall",
    "slug": "145-music-visualizer-led-wall",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 3,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 146,
    "name": "Earthquake Detector",
    "slug": "146-earthquake-detector",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 147,
    "name": "AI Metal Detector",
    "slug": "147-ai-metal-detector",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 4
  },
  {
    "num": 148,
    "name": "Automated Microscope",
    "slug": "148-automated-microscope",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 3
  },
  {
    "num": 149,
    "name": "Voice Home Automation",
    "slug": "149-voice-home-automation",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 2,
    "clout": 3,
    "time": 2
  },
  {
    "num": 150,
    "name": "Fractal Laser Engraver",
    "slug": "150-fractal-laser-engraver",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 151,
    "name": "Translator Glasses",
    "slug": "151-translator-glasses",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 152,
    "name": "Body Pose Music",
    "slug": "152-body-pose-music",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 4,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 153,
    "name": "Deepfake Mirror",
    "slug": "153-deepfake-mirror",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 154,
    "name": "Flight Sim Cockpit",
    "slug": "154-flight-sim-cockpit",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop",
      "scooter"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 3,
    "spicy": 1,
    "clout": 4,
    "time": 4
  },
  {
    "num": 155,
    "name": "AI Dungeon Master",
    "slug": "155-ai-dungeon-master",
    "category": "python-projects",
    "categoryName": "Python Projects",
    "tags": [
      "educational",
      "skill",
      "coding"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 156,
    "name": "Electroplating Station",
    "slug": "156-electroplating-station",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 2
  },
  {
    "num": 157,
    "name": "Anodizing Setup",
    "slug": "157-anodizing-setup",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "crt",
      "chemical"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 4,
    "clout": 4,
    "time": 3
  },
  {
    "num": 158,
    "name": "PCB Etching Station",
    "slug": "158-pcb-etching-station",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "printer",
      "chemical"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 2,
    "clout": 3,
    "time": 3
  },
  {
    "num": 159,
    "name": "Hydrogen Generator",
    "slug": "159-hydrogen-generator",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "laptop",
      "chemical"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 4,
    "clout": 4,
    "time": 1
  },
  {
    "num": 160,
    "name": "Electroforming Art",
    "slug": "160-electroforming-art",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 5,
    "time": 4
  },
  {
    "num": 161,
    "name": "Copper Crystal Tree",
    "slug": "161-copper-crystal-tree",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 162,
    "name": "Electrochemical Etching",
    "slug": "162-electrochemical-etching",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 163,
    "name": "pH Reactive Paint",
    "slug": "163-ph-reactive-paint",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 164,
    "name": "Sodium Silicate Demos",
    "slug": "164-sodium-silicate-demos",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 165,
    "name": "Rochelle Salt Crystal",
    "slug": "165-rochelle-salt-crystal",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 166,
    "name": "DIY Neon Sign",
    "slug": "166-diy-neon-sign",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 3,
    "clout": 5,
    "time": 5
  },
  {
    "num": 167,
    "name": "Ozone Generator",
    "slug": "167-ozone-generator",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "crt"
    ],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 3,
    "clout": 2,
    "time": 2
  },
  {
    "num": 168,
    "name": "Thermochromic Mug",
    "slug": "168-thermochromic-mug",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 169,
    "name": "Vacuum Tube Amp",
    "slug": "169-vacuum-tube-amp",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "crt"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 3,
    "spicy": 3,
    "clout": 4,
    "time": 4
  },
  {
    "num": 170,
    "name": "Supercooled Water",
    "slug": "170-supercooled-water",
    "category": "chemical-electronic",
    "categoryName": "Chemical Electronic",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop",
      "fridge"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 171,
    "name": "Pepper's Ghost Hologram",
    "slug": "171-peppers-ghost-hologram",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 172,
    "name": "Schlieren Optics",
    "slug": "172-schlieren-optics",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 173,
    "name": "Fiber Optic Star Ceiling",
    "slug": "173-fiber-optic-star-ceiling",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 174,
    "name": "Polarization Art",
    "slug": "174-polarization-art",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 175,
    "name": "Camera Obscura Room",
    "slug": "175-camera-obscura-room",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 176,
    "name": "Laser Maze",
    "slug": "176-laser-maze",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 177,
    "name": "UV Mineral Display",
    "slug": "177-uv-mineral-display",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 178,
    "name": "Light Painting Robot",
    "slug": "178-light-painting-robot",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop",
      "scooter"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 179,
    "name": "Solar Projector",
    "slug": "179-solar-projector",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 180,
    "name": "Retroreflector Array",
    "slug": "180-retroreflector-array",
    "category": "light-and-visual",
    "categoryName": "Light & Visual",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 181,
    "name": "Musical Marble Machine",
    "slug": "181-musical-marble-machine",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "laptop",
      "scooter"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 5
  },
  {
    "num": 182,
    "name": "Stirling Engine",
    "slug": "182-stirling-engine",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 183,
    "name": "Hydraulic Robot Arm",
    "slug": "183-hydraulic-robot-arm",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 184,
    "name": "Chain Fountain",
    "slug": "184-chain-fountain",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "laptop"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 185,
    "name": "Trebuchet",
    "slug": "185-trebuchet",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 5,
    "time": 3
  },
  {
    "num": 186,
    "name": "Eddy Current Brake",
    "slug": "186-eddy-current-brake",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 1,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 187,
    "name": "Ball Bearing Motor",
    "slug": "187-ball-bearing-motor",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 188,
    "name": "Magnetic Gear Train",
    "slug": "188-magnetic-gear-train",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 189,
    "name": "Curie Engine",
    "slug": "189-curie-engine",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 190,
    "name": "Prince Rupert's Drop",
    "slug": "190-prince-ruperts-drop",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "laptop"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 1,
    "spicy": 3,
    "clout": 5,
    "time": 1
  },
  {
    "num": 191,
    "name": "Backyard Water Slide",
    "slug": "191-backyard-water-slide",
    "category": "big-builds",
    "categoryName": "Big Builds",
    "tags": [
      "spectacle",
      "functional"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 3,
    "spicy": 2,
    "clout": 5,
    "time": 2
  },
  {
    "num": 192,
    "name": "Weather Balloon Launch",
    "slug": "192-weather-balloon-launch",
    "category": "big-builds",
    "categoryName": "Big Builds",
    "tags": [
      "spectacle",
      "functional"
    ],
    "junk": [
      "arduino",
      "chemical"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 3,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 193,
    "name": "Ham Radio from Scratch",
    "slug": "193-ham-radio-from-scratch",
    "category": "big-builds",
    "categoryName": "Big Builds",
    "tags": [
      "spectacle",
      "functional"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 4
  },
  {
    "num": 194,
    "name": "Geodesic Dome Greenhouse",
    "slug": "194-geodesic-dome-greenhouse",
    "category": "big-builds",
    "categoryName": "Big Builds",
    "tags": [
      "spectacle",
      "functional"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 3,
    "spicy": 1,
    "clout": 4,
    "time": 4
  },
  {
    "num": 195,
    "name": "Underground Root Cellar",
    "slug": "195-underground-root-cellar",
    "category": "big-builds",
    "categoryName": "Big Builds",
    "tags": [
      "spectacle",
      "functional"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 4,
    "spicy": 2,
    "clout": 4,
    "time": 5
  },
  {
    "num": 196,
    "name": "Kirlian Photography",
    "slug": "196-kirlian-photography",
    "category": "weird-science",
    "categoryName": "Weird Science",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "crt",
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 5,
    "time": 3
  },
  {
    "num": 197,
    "name": "Van de Graaff Generator",
    "slug": "197-van-de-graaff-generator",
    "category": "weird-science",
    "categoryName": "Weird Science",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 198,
    "name": "Homopolar Motor",
    "slug": "198-homopolar-motor",
    "category": "weird-science",
    "categoryName": "Weird Science",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 199,
    "name": "Lenz's Law Slow-Mo Magnet",
    "slug": "199-lenzs-law-slow-mo-magnet",
    "category": "weird-science",
    "categoryName": "Weird Science",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 5,
    "brain": 1,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 200,
    "name": "DIY Electron Microscope",
    "slug": "200-diy-electron-microscope",
    "category": "weird-science",
    "categoryName": "Weird Science",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "crt",
      "arduino"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 4,
    "clout": 5,
    "time": 5
  },
  {
    "num": 201,
    "name": "Camera Gimbal Stabilizer",
    "slug": "201-camera-gimbal-stabilizer",
    "category": "drone-salvage",
    "categoryName": "Drone Salvage",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 202,
    "name": "FPV Ground Rover",
    "slug": "202-fpv-ground-rover",
    "category": "drone-salvage",
    "categoryName": "Drone Salvage",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 203,
    "name": "Gimbal Motor Star Tracker",
    "slug": "203-gimbal-motor-star-tracker",
    "category": "drone-salvage",
    "categoryName": "Drone Salvage",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "printer",
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 204,
    "name": "Drone Motor Wind Turbine",
    "slug": "204-drone-motor-wind-turbine",
    "category": "drone-salvage",
    "categoryName": "Drone Salvage",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "printer",
      "microwave",
      "laptop",
      "scooter"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 205,
    "name": "Obstacle-Dodging Robot",
    "slug": "205-obstacle-dodging-robot",
    "category": "drone-salvage",
    "categoryName": "Drone Salvage",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 206,
    "name": "Drone LiPo Powerwall",
    "slug": "206-drone-lipo-powerwall",
    "category": "drone-salvage",
    "categoryName": "Drone Salvage",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "printer"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 1,
    "spicy": 3,
    "clout": 3,
    "time": 2
  },
  {
    "num": 207,
    "name": "Precision Digital Scale",
    "slug": "207-precision-digital-scale",
    "category": "drone-salvage",
    "categoryName": "Drone Salvage",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 3
  },
  {
    "num": 208,
    "name": "FPV RC Boat",
    "slug": "208-fpv-rc-boat",
    "category": "drone-salvage",
    "categoryName": "Drone Salvage",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 209,
    "name": "Alcohol Vapor Cannon",
    "slug": "209-alcohol-vapor-cannon",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 3,
    "clout": 5,
    "time": 1
  },
  {
    "num": 210,
    "name": "Hand Sanitizer Fire Art",
    "slug": "210-hand-sanitizer-fire-art",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 3,
    "clout": 5,
    "time": 1
  },
  {
    "num": 211,
    "name": "Acetone Styrofoam Sculptor",
    "slug": "211-acetone-styrofoam-sculptor",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 212,
    "name": "Electrolysis Rust Eraser",
    "slug": "212-electrolysis-rust-eraser",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "laptop",
      "chemical"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 213,
    "name": "Bleach Crystal Garden",
    "slug": "213-bleach-crystal-garden",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 214,
    "name": "Bleach Pen Tie-Dye",
    "slug": "214-bleach-pen-tie-dye",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 215,
    "name": "Baking Soda Vinegar Rocket",
    "slug": "215-baking-soda-vinegar-rocket",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 216,
    "name": "Invisible Ink Message Board",
    "slug": "216-invisible-ink-message-board",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 217,
    "name": "Pool Shock Smoke Signals",
    "slug": "217-pool-shock-smoke-signals",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 4,
    "clout": 4,
    "time": 1
  },
  {
    "num": 218,
    "name": "Coin Battery Stack",
    "slug": "218-coin-battery-stack",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 219,
    "name": "Alternator Welder",
    "slug": "219-alternator-welder",
    "category": "junkyard-auto",
    "categoryName": "Junkyard Auto",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 4,
    "time": 2
  },
  {
    "num": 220,
    "name": "Ignition Coil Tesla Coil",
    "slug": "220-ignition-coil-tesla-coil",
    "category": "junkyard-auto",
    "categoryName": "Junkyard Auto",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 1,
    "spicy": 4,
    "clout": 5,
    "time": 2
  },
  {
    "num": 221,
    "name": "Starter Motor Go-Kart",
    "slug": "221-starter-motor-go-kart",
    "category": "junkyard-auto",
    "categoryName": "Junkyard Auto",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 4,
    "time": 3
  },
  {
    "num": 222,
    "name": "Wiper Motor Rotisserie",
    "slug": "222-wiper-motor-rotisserie",
    "category": "junkyard-auto",
    "categoryName": "Junkyard Auto",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 223,
    "name": "Spark Plug Cannon",
    "slug": "223-spark-plug-cannon",
    "category": "junkyard-auto",
    "categoryName": "Junkyard Auto",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 4,
    "clout": 4,
    "time": 1
  },
  {
    "num": 224,
    "name": "Window Motor Secret Door",
    "slug": "224-window-motor-secret-door",
    "category": "junkyard-auto",
    "categoryName": "Junkyard Auto",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 225,
    "name": "Seat Heater Sous Vide",
    "slug": "225-seat-heater-sous-vide",
    "category": "junkyard-auto",
    "categoryName": "Junkyard Auto",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 226,
    "name": "HID Headlight UV Curer",
    "slug": "226-hid-headlight-uv-curer",
    "category": "junkyard-auto",
    "categoryName": "Junkyard Auto",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 3,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 2
  },
  {
    "num": 227,
    "name": "MOT-Ignited Firework Mortar",
    "slug": "227-mot-ignited-firework-mortar",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "arduino"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 3,
    "spicy": 5,
    "clout": 5,
    "time": 3
  },
  {
    "num": 228,
    "name": "Chemical-Trigger Color Bombs",
    "slug": "228-chemical-trigger-color-bombs",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 2
  },
  {
    "num": 229,
    "name": "Electromagnetic Firework Launcher",
    "slug": "229-electromagnetic-firework-launcher",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "arduino"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 5,
    "clout": 5,
    "time": 4
  },
  {
    "num": 230,
    "name": "Thermite Cold Spark Fountain",
    "slug": "230-thermite-cold-spark-fountain",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "chemical"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 5,
    "clout": 5,
    "time": 2
  },
  {
    "num": 231,
    "name": "Ignition Coil KNO3 Flame Jet",
    "slug": "231-ignition-coil-kno3-flame-jet",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "chemical"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 1,
    "spicy": 5,
    "clout": 5,
    "time": 2
  },
  {
    "num": 232,
    "name": "Carbide Spark Plug Repeater",
    "slug": "232-carbide-spark-plug-repeater",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 5,
    "clout": 5,
    "time": 2
  },
  {
    "num": 233,
    "name": "Luminol Fog Murder Mystery",
    "slug": "233-luminol-fog-murder-mystery",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 234,
    "name": "Microwave Firework Star Mine",
    "slug": "234-microwave-firework-star-mine",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave",
      "arduino",
      "chemical"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 3,
    "spicy": 5,
    "clout": 5,
    "time": 3
  },
  {
    "num": 235,
    "name": "Cigar Box Guitar",
    "slug": "235-cigar-box-guitar",
    "category": "junk-instruments",
    "categoryName": "Junk Instruments",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 236,
    "name": "PVC Pipe Organ",
    "slug": "236-pvc-pipe-organ",
    "category": "junk-instruments",
    "categoryName": "Junk Instruments",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 237,
    "name": "Bucket Drum Kit",
    "slug": "237-bucket-drum-kit",
    "category": "junk-instruments",
    "categoryName": "Junk Instruments",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 238,
    "name": "Tin Can Banjo",
    "slug": "238-tin-can-banjo",
    "category": "junk-instruments",
    "categoryName": "Junk Instruments",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 239,
    "name": "Steel Tongue Drum",
    "slug": "239-steel-tongue-drum",
    "category": "junk-instruments",
    "categoryName": "Junk Instruments",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 1,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 240,
    "name": "Garden Hose Didgeridoo",
    "slug": "240-garden-hose-didgeridoo",
    "category": "junk-instruments",
    "categoryName": "Junk Instruments",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 241,
    "name": "Beer Bottle Xylophone",
    "slug": "241-bottle-xylophone",
    "category": "junk-instruments",
    "categoryName": "Junk Instruments",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 242,
    "name": "Sound-Reactive LED Jacket",
    "slug": "242-led-jacket",
    "category": "wearable-tech",
    "categoryName": "Wearable Tech",
    "tags": [
      "skill",
      "creative"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 243,
    "name": "Nichrome Wire Heated Gloves",
    "slug": "243-heated-gloves",
    "category": "wearable-tech",
    "categoryName": "Wearable Tech",
    "tags": [
      "skill",
      "creative"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 244,
    "name": "Sound-Reactive LED Face Mask",
    "slug": "244-led-mask",
    "category": "wearable-tech",
    "categoryName": "Wearable Tech",
    "tags": [
      "skill",
      "creative"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 245,
    "name": "Heads-Up Display Glasses",
    "slug": "245-hud-glasses",
    "category": "wearable-tech",
    "categoryName": "Wearable Tech",
    "tags": [
      "skill",
      "creative"
    ],
    "junk": [
      "printer",
      "arduino"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 246,
    "name": "Motion Capture MIDI Glove",
    "slug": "246-motion-capture-glove",
    "category": "wearable-tech",
    "categoryName": "Wearable Tech",
    "tags": [
      "skill",
      "creative"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 247,
    "name": "GPS Treasure Hunt Watch",
    "slug": "247-gps-treasure-watch",
    "category": "wearable-tech",
    "categoryName": "Wearable Tech",
    "tags": [
      "skill",
      "creative"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 248,
    "name": "Solar Still",
    "slug": "248-solar-still",
    "category": "survival-off-grid",
    "categoryName": "Survival & Off-Grid",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 249,
    "name": "Biogas Generator",
    "slug": "249-biogas-generator",
    "category": "survival-off-grid",
    "categoryName": "Survival & Off-Grid",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 4,
    "time": 3
  },
  {
    "num": 250,
    "name": "Gravity Water Filter",
    "slug": "250-gravity-water-filter",
    "category": "survival-off-grid",
    "categoryName": "Survival & Off-Grid",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 251,
    "name": "Hand-Crank Phone Charger",
    "slug": "251-hand-crank-charger",
    "category": "survival-off-grid",
    "categoryName": "Survival & Off-Grid",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "printer",
      "microwave",
      "laptop",
      "scooter"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 252,
    "name": "Faraday Cage",
    "slug": "252-faraday-cage",
    "category": "survival-off-grid",
    "categoryName": "Survival & Off-Grid",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 253,
    "name": "Rocket Stove",
    "slug": "253-rocket-stove",
    "category": "survival-off-grid",
    "categoryName": "Survival & Off-Grid",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 254,
    "name": "Invisible Bluetooth Speaker",
    "slug": "254-invisible-speaker",
    "category": "pranks-and-party",
    "categoryName": "Pranks & Party",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 255,
    "name": "Motion-Activated Jump Scare",
    "slug": "255-motion-jump-scare",
    "category": "pranks-and-party",
    "categoryName": "Pranks & Party",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 256,
    "name": "Piezo Shock Pen",
    "slug": "256-shock-pen",
    "category": "pranks-and-party",
    "categoryName": "Pranks & Party",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 257,
    "name": "Fake Security Camera That Roasts You",
    "slug": "257-insult-camera",
    "category": "pranks-and-party",
    "categoryName": "Pranks & Party",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 258,
    "name": "Self-Pouring Bottle",
    "slug": "258-self-pouring-bottle",
    "category": "pranks-and-party",
    "categoryName": "Pranks & Party",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 259,
    "name": "Magnetic Levitating Display Stand",
    "slug": "259-magnetic-levitating-display",
    "category": "pranks-and-party",
    "categoryName": "Pranks & Party",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 260,
    "name": "Toaster Reflow Oven",
    "slug": "260-toaster-reflow-oven",
    "category": "kitchen-hacks",
    "categoryName": "Kitchen Hacks",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 2
  },
  {
    "num": 261,
    "name": "Stand Mixer Pottery Wheel",
    "slug": "261-stand-mixer-pottery-wheel",
    "category": "kitchen-hacks",
    "categoryName": "Kitchen Hacks",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 262,
    "name": "Coffee Maker Essential Oil Distiller",
    "slug": "262-coffee-maker-distiller",
    "category": "kitchen-hacks",
    "categoryName": "Kitchen Hacks",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "fridge"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 263,
    "name": "Blender Vortex Centrifuge",
    "slug": "263-blender-centrifuge",
    "category": "kitchen-hacks",
    "categoryName": "Kitchen Hacks",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 264,
    "name": "Waffle Iron Heat Press",
    "slug": "264-waffle-iron-press",
    "category": "kitchen-hacks",
    "categoryName": "Kitchen Hacks",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 265,
    "name": "Laser Voice Communicator",
    "slug": "265-laser-communicator",
    "category": "laser-lab",
    "categoryName": "Laser Lab",
    "tags": [
      "spectacle",
      "skill"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 2
  },
  {
    "num": 266,
    "name": "Galvanometer Laser Light Show",
    "slug": "266-laser-galvo-show",
    "category": "laser-lab",
    "categoryName": "Laser Lab",
    "tags": [
      "spectacle",
      "skill"
    ],
    "junk": [
      "printer",
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 267,
    "name": "Laser Harp",
    "slug": "267-laser-harp",
    "category": "laser-lab",
    "categoryName": "Laser Lab",
    "tags": [
      "spectacle",
      "skill"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 268,
    "name": "Laser Tripwire Security System",
    "slug": "268-laser-tripwire-alarm",
    "category": "laser-lab",
    "categoryName": "Laser Lab",
    "tags": [
      "spectacle",
      "skill"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 269,
    "name": "Blu-Ray Laser Cutter",
    "slug": "269-blu-ray-laser-cutter",
    "category": "laser-lab",
    "categoryName": "Laser Lab",
    "tags": [
      "spectacle",
      "skill"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 3,
    "clout": 4,
    "time": 3
  },
  {
    "num": 270,
    "name": "Laser Scanning Microscope",
    "slug": "270-laser-microscope",
    "category": "laser-lab",
    "categoryName": "Laser Lab",
    "tags": [
      "spectacle",
      "skill"
    ],
    "junk": [
      "printer",
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 5,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 4
  },
  {
    "num": 271,
    "name": "Motorized Laser Spirograph",
    "slug": "271-laser-spirograph",
    "category": "laser-lab",
    "categoryName": "Laser Lab",
    "tags": [
      "spectacle",
      "skill"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 5,
    "time": 2
  },
  {
    "num": 275,
    "name": "Capacitor Bank Plasma Igniter",
    "slug": "275-capacitor-bank-plasma-igniter",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 5,
    "clout": 4,
    "time": 3
  },
  {
    "num": 276,
    "name": "Chemical Smoke Screen Machine",
    "slug": "276-chemical-smoke-screen-machine",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 3,
    "clout": 4,
    "time": 2
  },
  {
    "num": 277,
    "name": "Electromagnetic Pulse Cannon (Localized)",
    "slug": "277-electromagnetic-pulse-cannon",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 5,
    "clout": 5,
    "time": 4
  },
  {
    "num": 278,
    "name": "Thermite Sparkler Bombs",
    "slug": "278-thermite-sparkler-bombs",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 2,
    "wallet": 1,
    "spicy": 5,
    "clout": 5,
    "time": 1
  },
  {
    "num": 279,
    "name": "Microwave Chemical Reactor",
    "slug": "279-microwave-chemical-reactor",
    "category": "alchemist-cookbook",
    "categoryName": "Alchemist Cookbook",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 4,
    "brain": 5,
    "wallet": 2,
    "spicy": 4,
    "clout": 4,
    "time": 3
  },
  {
    "num": 280,
    "name": "Density Tower",
    "slug": "280-density-tower",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 281,
    "name": "Vinegar Baking Soda Rocket",
    "slug": "281-vinegar-baking-soda-rocket",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 3,
    "brain": 1,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 282,
    "name": "Elephant Toothpaste",
    "slug": "282-hydrogen-peroxide-elephant-toothpaste",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 5,
    "time": 1
  },
  {
    "num": 283,
    "name": "Plasma Speaker Lamp",
    "slug": "283-plasma-speaker-lamp",
    "category": "unholy-combos",
    "categoryName": "Unholy Combos",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "crt",
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 3
  },
  {
    "num": 284,
    "name": "Thermite Forge Foundry",
    "slug": "284-thermite-forge-foundry",
    "category": "unholy-combos",
    "categoryName": "Unholy Combos",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 5,
    "clout": 5,
    "time": 2
  },
  {
    "num": 285,
    "name": "E-Waste Wind Turbine",
    "slug": "285-e-waste-wind-turbine",
    "category": "unholy-combos",
    "categoryName": "Unholy Combos",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "scooter",
      "chemical",
      "printer",
      "microwave",
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 3
  },
  {
    "num": 286,
    "name": "Microwave Spot Welder Arm",
    "slug": "286-microwave-spot-welder-arm",
    "category": "unholy-combos",
    "categoryName": "Unholy Combos",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "printer",
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 5,
    "wallet": 3,
    "spicy": 3,
    "clout": 4,
    "time": 4
  },
  {
    "num": 287,
    "name": "Chemical LED Art Panel",
    "slug": "287-chemical-led-art-panel",
    "category": "unholy-combos",
    "categoryName": "Unholy Combos",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "arduino",
      "chemical"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 2,
    "clout": 5,
    "time": 4
  },
  {
    "num": 288,
    "name": "Laptop Battery Powerwall",
    "slug": "288-laptop-battery-powerwall",
    "category": "power-and-energy",
    "categoryName": "Power & Energy",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 4,
    "wallet": 3,
    "spicy": 3,
    "clout": 4,
    "time": 5
  },
  {
    "num": 289,
    "name": "Peltier Solar Cooler",
    "slug": "289-peltier-solar-cooler",
    "category": "power-and-energy",
    "categoryName": "Power & Energy",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "chemical",
      "fridge"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 3,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 290,
    "name": "Hand-Crank Generator",
    "slug": "290-hand-crank-generator",
    "category": "power-and-energy",
    "categoryName": "Power & Energy",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 291,
    "name": "Capacitor Bank Flash Charger",
    "slug": "291-capacitor-bank-flash-charger",
    "category": "power-and-energy",
    "categoryName": "Power & Energy",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "crt",
      "microwave"
    ],
    "jaw": 3,
    "brain": 4,
    "wallet": 2,
    "spicy": 4,
    "clout": 3,
    "time": 2
  },
  {
    "num": 292,
    "name": "Motor-Powered Pottery Wheel",
    "slug": "292-motor-powered-pottery-wheel",
    "category": "scooter-and-motor",
    "categoryName": "Scooter & Motor",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 293,
    "name": "Electric Fence Charger",
    "slug": "293-electric-fence-charger",
    "category": "scooter-and-motor",
    "categoryName": "Scooter & Motor",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "microwave",
      "scooter",
      "chemical"
    ],
    "jaw": 2,
    "brain": 3,
    "wallet": 1,
    "spicy": 3,
    "clout": 2,
    "time": 1
  },
  {
    "num": 294,
    "name": "Motor-Driven Turntable",
    "slug": "294-motor-driven-turntable",
    "category": "scooter-and-motor",
    "categoryName": "Scooter & Motor",
    "tags": [
      "functional",
      "practical",
      "mechanical"
    ],
    "junk": [
      "printer",
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 2,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 295,
    "name": "Ultrasonic Parts Cleaner Pro",
    "slug": "295-ultrasonic-parts-cleaner-pro",
    "category": "humidifier-and-water",
    "categoryName": "Humidifier & Water",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 296,
    "name": "Fog Harp Water Collector",
    "slug": "296-fog-harp-water-collector",
    "category": "humidifier-and-water",
    "categoryName": "Humidifier & Water",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 297,
    "name": "Mist Cooling System",
    "slug": "297-mist-cooling-system",
    "category": "humidifier-and-water",
    "categoryName": "Humidifier & Water",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 2
  },
  {
    "num": 298,
    "name": "Vacuum Sandblaster",
    "slug": "298-vacuum-sandblaster",
    "category": "vacuum-cleaner",
    "categoryName": "Vacuum Cleaner",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 3,
    "brain": 3,
    "wallet": 2,
    "spicy": 2,
    "clout": 3,
    "time": 2
  },
  {
    "num": 299,
    "name": "Pneumatic Launcher",
    "slug": "299-pneumatic-launcher",
    "category": "vacuum-cleaner",
    "categoryName": "Vacuum Cleaner",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 3,
    "clout": 5,
    "time": 2
  },
  {
    "num": 300,
    "name": "Backyard Observatory",
    "slug": "300-backyard-observatory",
    "category": "big-builds",
    "categoryName": "Big Builds",
    "tags": [
      "spectacle",
      "functional"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 3,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 301,
    "name": "Shipping Container Workshop",
    "slug": "301-shipping-container-workshop",
    "category": "big-builds",
    "categoryName": "Big Builds",
    "tags": [
      "spectacle",
      "functional"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 4,
    "spicy": 2,
    "clout": 4,
    "time": 5
  },
  {
    "num": 302,
    "name": "Giant Outdoor Tesla Coil",
    "slug": "302-giant-outdoor-tesla-coil",
    "category": "big-builds",
    "categoryName": "Big Builds",
    "tags": [
      "spectacle",
      "functional"
    ],
    "junk": [
      "microwave",
      "arduino"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 4,
    "spicy": 5,
    "clout": 5,
    "time": 5
  },
  {
    "num": 303,
    "name": "Instant Pot Vacuum Chamber",
    "slug": "303-instant-pot-vacuum-chamber",
    "category": "kitchen-hacks",
    "categoryName": "Kitchen Hacks",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 3,
    "time": 1
  },
  {
    "num": 304,
    "name": "Rice Cooker Electroplating Station",
    "slug": "304-rice-cooker-electroplating",
    "category": "kitchen-hacks",
    "categoryName": "Kitchen Hacks",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "crt",
      "laptop",
      "chemical"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 2,
    "clout": 4,
    "time": 2
  },
  {
    "num": 305,
    "name": "Microwave Kiln",
    "slug": "305-microwave-kiln",
    "category": "kitchen-hacks",
    "categoryName": "Kitchen Hacks",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 3,
    "clout": 4,
    "time": 1
  },
  {
    "num": 306,
    "name": "Drill-Powered Lathe",
    "slug": "306-drill-powered-lathe",
    "category": "power-tools-remixed",
    "categoryName": "Power Tools Remixed",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 1,
    "spicy": 2,
    "clout": 3,
    "time": 2
  },
  {
    "num": 307,
    "name": "Jigsaw Scroll Saw",
    "slug": "307-jigsaw-scroll-saw",
    "category": "power-tools-remixed",
    "categoryName": "Power Tools Remixed",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 2,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 2,
    "time": 1
  },
  {
    "num": 308,
    "name": "Angle Grinder Belt Sander",
    "slug": "308-angle-grinder-belt-sander",
    "category": "power-tools-remixed",
    "categoryName": "Power Tools Remixed",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [],
    "jaw": 3,
    "brain": 2,
    "wallet": 2,
    "spicy": 2,
    "clout": 3,
    "time": 1
  },
  {
    "num": 309,
    "name": "DIY Spectroscope",
    "slug": "309-diy-spectroscope",
    "category": "weird-science",
    "categoryName": "Weird Science",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 310,
    "name": "Magnetic Field Viewer",
    "slug": "310-magnetic-field-viewer",
    "category": "weird-science",
    "categoryName": "Weird Science",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 311,
    "name": "Foucault Pendulum",
    "slug": "311-foucault-pendulum",
    "category": "weird-science",
    "categoryName": "Weird Science",
    "tags": [
      "educational",
      "spectacle"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 312,
    "name": "Kinetic Sand Table",
    "slug": "312-kinetic-sand-table",
    "category": "art-and-installation",
    "categoryName": "Art & Installation",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "scooter",
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 4
  },
  {
    "num": 313,
    "name": "Chladni Plate Sand Visualizer",
    "slug": "313-chladni-plate-sand-visualizer",
    "category": "art-and-installation",
    "categoryName": "Art & Installation",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 314,
    "name": "2D Pyro Board (Rubens' Square)",
    "slug": "314-2d-pyro-board",
    "category": "fire-and-plasma",
    "categoryName": "Fire & Plasma",
    "tags": [
      "pyro",
      "chemistry",
      "spectacle"
    ],
    "junk": [
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 4,
    "clout": 5,
    "time": 3
  },
  {
    "num": 315,
    "name": "Tesla Coil Guitar Amp",
    "slug": "315-tesla-coil-guitar-amp",
    "category": "sound-and-music",
    "categoryName": "Sound & Music",
    "tags": [
      "creative",
      "art",
      "music"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter",
      "fridge"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 3,
    "spicy": 4,
    "clout": 5,
    "time": 4
  },
  {
    "num": 316,
    "name": "Pendulum Wave Machine",
    "slug": "316-pendulum-wave-machine",
    "category": "mechanical-and-kinetic",
    "categoryName": "Mechanical & Kinetic",
    "tags": [
      "educational",
      "skill",
      "mechanical"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 317,
    "name": "Crystal Radio",
    "slug": "317-crystal-radio",
    "category": "survival-off-grid",
    "categoryName": "Survival & Off-Grid",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 318,
    "name": "Faraday Flashlight",
    "slug": "318-faraday-flashlight",
    "category": "survival-off-grid",
    "categoryName": "Survival & Off-Grid",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 319,
    "name": "Vortex Smoke Ring Cannon",
    "slug": "319-vortex-smoke-ring-cannon",
    "category": "pranks-and-party",
    "categoryName": "Pranks & Party",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [],
    "jaw": 5,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 5,
    "time": 1
  },
  {
    "num": 320,
    "name": "Confetti Cannon Controller",
    "slug": "320-confetti-cannon-controller",
    "category": "pranks-and-party",
    "categoryName": "Pranks & Party",
    "tags": [
      "spectacle",
      "creative"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 321,
    "name": "DIY EEG Headband",
    "slug": "321-diy-eeg-headband",
    "category": "wearable-tech",
    "categoryName": "Wearable Tech",
    "tags": [
      "skill",
      "creative"
    ],
    "junk": [
      "arduino"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 322,
    "name": "LED Matrix Backpack Display",
    "slug": "322-led-matrix-backpack-display",
    "category": "wearable-tech",
    "categoryName": "Wearable Tech",
    "tags": [
      "skill",
      "creative"
    ],
    "junk": [
      "microwave",
      "arduino"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 323,
    "name": "Scanner Light Painting",
    "slug": "323-scanner-light-painting",
    "category": "printer-and-scanner",
    "categoryName": "Printer & Scanner",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "printer",
      "laptop"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 1
  },
  {
    "num": 324,
    "name": "Thermal Printer Art Station",
    "slug": "324-thermal-printer-art-station",
    "category": "printer-and-scanner",
    "categoryName": "Printer & Scanner",
    "tags": [
      "skill",
      "practical"
    ],
    "junk": [
      "printer",
      "arduino",
      "laptop"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 325,
    "name": "Benchtop Wind Tunnel",
    "slug": "325-benchtop-wind-tunnel",
    "category": "vacuum-cleaner",
    "categoryName": "Vacuum Cleaner",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "microwave",
      "scooter"
    ],
    "jaw": 4,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 326,
    "name": "Air Hockey Table",
    "slug": "326-air-hockey-table",
    "category": "vacuum-cleaner",
    "categoryName": "Vacuum Cleaner",
    "tags": [
      "functional",
      "practical"
    ],
    "junk": [
      "printer",
      "microwave",
      "arduino",
      "scooter"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 327,
    "name": "Sugar Smoke Bombs",
    "slug": "327-sugar-smoke-bombs",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 3,
    "clout": 5,
    "time": 2
  },
  {
    "num": 328,
    "name": "Copper Plating with Vinegar",
    "slug": "328-copper-plating-with-vinegar",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [
      "chemical"
    ],
    "jaw": 4,
    "brain": 2,
    "wallet": 1,
    "spicy": 1,
    "clout": 4,
    "time": 2
  },
  {
    "num": 329,
    "name": "Dry Ice Fog Machine",
    "slug": "329-dry-ice-fog-machine",
    "category": "household-chemistry",
    "categoryName": "Household Chemistry",
    "tags": [
      "chemistry",
      "educational"
    ],
    "junk": [],
    "jaw": 4,
    "brain": 1,
    "wallet": 1,
    "spicy": 2,
    "clout": 4,
    "time": 1
  },
  {
    "num": 330,
    "name": "Cloud Chamber Coffee Table",
    "slug": "330-cloud-chamber-coffee-table",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "chemical",
      "laptop",
      "fridge"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 3,
    "spicy": 2,
    "clout": 5,
    "time": 3
  },
  {
    "num": 331,
    "name": "Fire Organ",
    "slug": "331-fire-organ",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "arduino",
      "scooter",
      "fridge"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 3,
    "spicy": 5,
    "clout": 5,
    "time": 4
  },
  {
    "num": 332,
    "name": "Dead Appliance Rube Goldberg",
    "slug": "332-dead-appliance-rube-goldberg",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "printer",
      "microwave",
      "scooter",
      "fridge"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 1,
    "spicy": 2,
    "clout": 5,
    "time": 5
  },
  {
    "num": 333,
    "name": "Ferrofluid Wall",
    "slug": "333-ferrofluid-wall",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "printer",
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 3,
    "spicy": 2,
    "clout": 5,
    "time": 4
  },
  {
    "num": 334,
    "name": "Water Vortex Table",
    "slug": "334-water-vortex-table",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "arduino"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 335,
    "name": "CRT Electron Art Array",
    "slug": "335-crt-electron-art-array",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "crt",
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 4,
    "wallet": 1,
    "spicy": 4,
    "clout": 5,
    "time": 3
  },
  {
    "num": 336,
    "name": "Water Droplet Time Fountain",
    "slug": "336-water-droplet-time-fountain",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 3,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 3
  },
  {
    "num": 337,
    "name": "Infinity Room",
    "slug": "337-infinity-room",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 2,
    "wallet": 2,
    "spicy": 1,
    "clout": 5,
    "time": 2
  },
  {
    "num": 338,
    "name": "Mechanical Flip-Dot Display",
    "slug": "338-mechanical-flip-dot-display",
    "category": "visual-showstoppers",
    "categoryName": "Visual Showstoppers",
    "tags": [
      "visual",
      "spectacle",
      "art"
    ],
    "junk": [
      "microwave",
      "arduino",
      "laptop"
    ],
    "jaw": 5,
    "brain": 5,
    "wallet": 3,
    "spicy": 2,
    "clout": 5,
    "time": 5
  }
];
