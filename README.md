# ✨ PerfectDay

A fullscreen, cozy-fantasy "choose your own adventure" browser game. Guide your character through a single day — from the 6:00 AM alarm to lights-out — by picking activities at each branching decision point. The goal: make it home, brush your teeth, and get into bed before the **2:00 AM curfew**, with at least **4 hours of sleep** before the next 6:00 AM alarm.

Built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies.

**🎮 [Play it live](https://playernightqueen16.github.io/Perfect-Day/)**

## How to play

1. Each screen presents a prompt and 2+ options. Every option costs a number of in-game minutes.
2. Watch the **Celestial Clock** (top HUD) and the day-progress timeline bar as time advances.
3. Use the **🌙 Sleep Now** button at any point to head straight to bed.
4. Reach bed by 2:00 AM with enough sleep banked to win. Stay out too late, or "sleep" somewhere other than bed, and you'll get a bad ending.
5. After an ending, review your full day timeline and hit **restart** to try again.

## Project structure

```
PerfectDay/
├── index.html      # Page structure, game state, and core game logic (rendering, choices, endings)
├── nodes.js         # storyNodes — the full decision graph (prompts, options, story text, branching)
├── style.css        # All visual styling: backdrop themes, HUD, cards, timeline, endings
├── morning.png       # Backdrop art
├── afternoon.png     # Backdrop art
├── evening.png       # Backdrop art
└── night.png         # Backdrop art
```

## How it works

- **Story graph (`nodes.js`):** The game is a directed graph of named nodes (e.g. `alarm`, `morning_coffee`, `afternoon_slump_lazy`). Each node has a prompt and a list of options; each option has a label, flavor text, a time cost in minutes, and a pointer to the next node (or an `ending`/`bed` flag).
- **Game state (`index.html`):** Tracks the current node, elapsed minutes, a choice history/log, and a few soft variables (`caffeine`, `exhaustion`, `productivity`, `social`, `relaxation`) that are inferred from the words in each choice's label/story text.
- **Time & routing:** Elapsed minutes are added to a 6:00 AM start time to drive the digital clock, the progress bar, and the visual backdrop theme (morning → afternoon → evening → night → midnight). Routing can adapt based on elapsed time and the tracked variables.
- **Endings:** Reaching a `bed` option checks total elapsed time against the curfew/sleep threshold to decide between a "Perfect Day" win or one of several bad endings (overslept curfew, slept somewhere other than bed, etc.), then renders a recap timeline of the whole day.
- **Styling (`style.css`):** Fullscreen layered backdrops per time-of-day, a floating clock/HUD, a centered "game card," and a bottom choice-history panel, with a light sparkle/particle overlay for the fantasy feel.

## Customizing

- **Add or edit story content:** Modify `storyNodes` in `nodes.js`. Every node needs a `prompt` and an `options` array; each option needs `label`, `story`, `minutes`, and either `next` (another node key) or `ending: true` (optionally with `bed: true`).
- **Change the curfew or sleep requirement:** Edit `START_CLOCK` and `BUST_THRESHOLD` at the top of the inline script in `index.html`.
- **Add new emoji/icons for choices:** Extend the `emojiMap` object in `index.html`.
- **Retheme visuals:** Swap the backdrop PNGs or edit the CSS variables/theme classes in `style.css`.

## Notes

- Entirely client-side and static — it can be served from any static host (or just opened directly as a local file).
- No build tools, package manager, or external libraries required.