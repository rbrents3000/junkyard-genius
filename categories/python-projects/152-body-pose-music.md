# #152 — Body Pose Music

<p align="center">
  <img src="../../images/builds/152-body-pose-music.jpg" alt="Body Pose Music" width="700" />
</p>

> Camera + MediaPipe body pose detection — each body part controls a different instrument or effect. Dance to make music.

## Ratings

| Jaw Drop Rating | Brain Melt Level | Wallet Damage | Spicy Level | Clout Potential | Time to Build |
|---|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

## What Is It?

Google's MediaPipe tracks 33 body landmarks in real time from a single camera — no special hardware needed. Map those landmarks to musical parameters: right hand height controls pitch, left hand X-position controls filter frequency, hip sway controls tempo, arm spread controls volume, jump triggers a bass drop. Your body becomes a musical instrument. Dance and the music responds. Stand still and it goes quiet. Wave your arms and synthesizer sweeps fill the room. It's part instrument, part dance game, part performance art. The camera sees you as a skeleton of control points, and every movement produces sound. Set this up at a party and it becomes the main attraction.

## Ingredients

- [ ] Webcam — USB, 720p+ with good frame rate *(junk drawer, thrift store)*
- [ ] Computer with Python — needs enough power for MediaPipe + audio *(already own)*
- [ ] Speakers or PA system — for audio output *(already own, thrift store)*
- [ ] MediaPipe, OpenCV, pygame, mido (MIDI library) *(pip install)*
- [ ] Projector (optional) — to show the skeleton overlay on a wall *(thrift store, already own)*
- [ ] MIDI synthesizer software — FluidSynth, Ableton, or similar *(free/already own)*

## Build Steps

1. **Set up MediaPipe pose detection.** Install MediaPipe: `pip install mediapipe`. Write a script that captures webcam frames and runs the Pose solution. Draw the detected skeleton on the frame and display it. Verify it tracks all 33 landmarks reliably.
2. **Extract key measurements.** From the landmarks, calculate useful values: right wrist Y position (0 = top, 1 = bottom), left wrist X position, distance between wrists, hip center Y (for jump detection), angle between shoulder-elbow-wrist (arm bend), torso lean angle.
3. **Map body to MIDI.** Map extracted values to MIDI messages: right hand height -> MIDI note number (higher hand = higher pitch), left hand -> MIDI CC for filter cutoff, arm spread -> velocity/volume, hip position -> pitch bend for vibrato. Send MIDI via mido to a software synthesizer.
4. **Set up the synthesizer.** Install FluidSynth or use Ableton/GarageBand as the MIDI receiver. Load interesting instrument patches — pads and synths respond well to continuous control. Set up the MIDI routing so the Python script's MIDI output reaches the synthesizer.
5. **Add gesture triggers.** Implement specific gestures as triggers: both hands above head = cymbal crash, hands clapped together = snare hit, right foot raised = kick drum, spinning = build-up effect. Use velocity and position thresholds for detection.
6. **Add visual feedback.** Display the skeleton on screen with color-coded joints (active controls glow). If using a projector, project the skeleton overlay on a wall behind the performer so the audience sees the tracking in action.
7. **Tune the mapping.** Adjust sensitivity, dead zones, and scaling for each control. The mapping should feel responsive but not twitchy — small movements create subtle changes, big movements create dramatic changes. This tuning is the difference between a gimmick and an instrument.
8. **Add a backing track.** Play a drum loop or backing track through the same speakers. The body-controlled instruments layer on top. This gives structure to the improvisation and makes the output more musical immediately.
9. **Perform.** The best way to develop this is to perform with it. Each session reveals which mappings feel intuitive and which feel awkward. Iterate the mapping based on what feels right in your body, not what looks logical in code.

## Safety Notes

- Vigorous dancing in front of a computer setup creates a risk of tripping on cables, knocking over the camera, or colliding with furniture. Clear a safe movement area of at least 6x6 feet. Secure all cables and position the camera out of the movement zone.
- Projectors can be blinding if you look directly into the lens. Position the projector behind the performer pointing at the wall, never at the audience or performer's face.
- Sustained energetic movement can cause injury. Warm up before performing. Take breaks. The system is fun enough that people push themselves harder than they realize.

## See Also

- [Music Visualizer LED Wall](145-music-visualizer-led-wall.md)
- [AI Photo Booth](143-ai-photo-booth.md)
