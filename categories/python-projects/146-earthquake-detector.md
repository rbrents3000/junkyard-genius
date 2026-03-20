---
layout: build
title: "Earthquake Detector"
build_number: 146
description: "Old smartphones running Phyphox stream accelerometer data to a Python server — a DIY seismograph network from e-waste."
image: /images/builds/146-earthquake-detector.jpg
category: python-projects
category_name: "Python Projects"
tags: [educational, skill, coding]
junk: [arduino, laptop]
ratings:
  jaw: 3
  brain: 3
  wallet: 1
  spicy: 1
  clout: 3
  time: 2
---
# #146 — Earthquake Detector

<p align="center">
  <img src="/images/builds/146-earthquake-detector.jpg" alt="Earthquake Detector" width="700" />
</p>

> Old smartphones running Phyphox stream accelerometer data to a Python server — a DIY seismograph network from e-waste.

## Ratings

![Jaw Drop](https://img.shields.io/badge/Jaw_Drop-%E2%AD%90%E2%AD%90%E2%AD%90-ff6b35) ![Brain Melt](https://img.shields.io/badge/Brain_Melt-%E2%AD%90%E2%AD%90%E2%AD%90-3b82f6) ![Wallet](https://img.shields.io/badge/Wallet-%E2%AD%90-22c55e) ![Spicy](https://img.shields.io/badge/Spicy-%E2%AD%90-ef4444) ![Clout](https://img.shields.io/badge/Clout-%E2%AD%90%E2%AD%90%E2%AD%90-7c3aed) ![Time](https://img.shields.io/badge/Time-%E2%AD%90%E2%AD%90-6b7280)

## 🧪 What Is It?

Every smartphone contains an accelerometer — a precision sensor that detects motion in three axes. Old phones sitting in drawers are fully functional seismometers waiting to be activated. Install Phyphox (a free physics lab app) on old Android or iOS phones, configure them to stream accelerometer data over the network, and collect it all on a Python server running on a Pi or laptop. The server monitors for correlated spikes across multiple sensors (which distinguishes actual ground vibration from someone bumping a phone). Log the data, generate seismograph charts, and set up alerts for detected tremors. With phones at different locations, you've built a seismograph network from literal e-waste.

<details>
<summary><strong>🧰 Ingredients</strong></summary>

- [ ] Old smartphones — 2-5, any age, any OS (as long as they run Phyphox) *(junk drawer, friends, family)*
- [ ] Phyphox app — free, available on Android and iOS *(app store)*
- [ ] Raspberry Pi or laptop — as the data collection server *(electronics supplier or already own)*
- [ ] WiFi network — phones and server must be on the same network *(already have)*
- [ ] Python with flask, numpy, matplotlib *(pip install)*
- [ ] Phone chargers — the phones need to stay powered 24/7 *(junk drawer)*
- [ ] Stable mounting surfaces — hard floor or solid shelf, away from foot traffic *(already have)*

</details>

## 🔨 Build Steps

1. **Prepare the phones.** Factory reset old phones, install Phyphox, and connect to WiFi. In Phyphox, open the Accelerometer experiment and enable "Remote Access" in settings. This exposes the sensor data via a REST API on the phone's local IP.
2. **Test the data stream.** From a browser, navigate to the phone's Phyphox URL (displayed in the app). Verify you can see live accelerometer data in JSON format. Tap the phone and watch the values spike.
3. **Write the collection server.** A Python script polls each phone's Phyphox API every 100ms, collecting X, Y, Z acceleration data with timestamps. Store in a SQLite database or CSV files. Run this on the Pi as a background service.
4. **Implement baseline detection.** Calculate the running average and standard deviation of each sensor over a 5-minute window. Any reading exceeding 3 standard deviations from the mean is flagged as an event. Single-sensor events are likely noise; multi-sensor correlated events indicate real ground motion.
5. **Build the seismograph display.** Use matplotlib to generate real-time scrolling waveform charts showing each phone's accelerometer data. Display on a web dashboard using Flask. The charts should look like classic seismograph paper — horizontal time axis, vertical amplitude.
6. **Set up alerts.** When correlated events are detected across multiple sensors, send a notification via Telegram, email, or push notification. Include the event time, magnitude estimate, and duration.
7. **Optimize phone placement.** Place phones on hard surfaces (concrete, tile) directly coupled to the ground. Avoid wooden tables or shelves that amplify footsteps. Orient phones consistently (same axis pointing the same direction) for easier correlation.
8. **Calibrate sensitivity.** Test by stomping the floor at known distances from the phones. This calibrates the distance-to-amplitude relationship. Adjust the detection threshold to catch real vibrations while ignoring normal household activity.

## ⚠️ Safety Notes

- Old phone batteries degrade over time. Phones left charging 24/7 can swell or overheat. Check battery health periodically and remove any phone with a swollen battery immediately. Consider using phones without batteries (powered directly via USB if the model supports it).
- This is a hobby seismograph, not a certified geological instrument. Do not rely on it for earthquake early warning or safety decisions. Real earthquake warnings come from national geological services.
- Phones sitting on the floor in walkways create trip hazards. Mount them against walls or on shelves using adhesive strips, not in foot traffic areas.

## 🔗 See Also

- [ESP32 Weather Station](/categories/pi-and-arduino/132-esp32-weather-station/)
- [EMF Ghost Detector](/categories/pi-and-arduino/140-emf-ghost-detector/)

