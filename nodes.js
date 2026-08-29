const storyNodes = {
  // === STAGE 0: Waking Up (6:00 AM) ===
  alarm: {
    prompt: "6:00 AM. The alarm is shrieking. It is time to wake up, but your bed is so warm.",
    options: [
      {
        label: "Jump out of bed immediately",
        story: "You threw off the covers and leaped out of bed with military precision, feeling like a high-achiever.",
        minutes: 30,
        next: "workout_morning"
      },
      {
        label: "Snooze the alarm for a bit",
        story: "You slapped the snooze button. Just a few more minutes in heaven won't hurt.",
        minutes: 45,
        next: "snooze_1"
      }
    ]
  },

  // === STAGE 1: Morning Routine (6:30 AM - 7:00 AM) ===
  snooze_1: {
    prompt: "The alarm rings again, louder and angrier. You are still half-asleep.",
    options: [
      {
        label: "Drag yourself out of bed in defeat",
        story: "You finally dragged yourself out of bed, feeling groggy and slightly defeated by sleep.",
        minutes: 30,
        next: "morning_coffee"
      },
      {
        label: "Ignore the alarm and check your phone",
        story: "You reached for your phone to check the time, but got instantly sucked into social media notifications.",
        minutes: 45,
        next: "doomscroll_morning"
      }
    ]
  },
  workout_morning: {
    prompt: "You are up early! The house is quiet. What's the plan?",
    options: [
      {
        label: "Go for a jog in the park",
        story: "You went for a jog. The morning air was crisp, and you made eye contact with a very friendly golden retriever.",
        minutes: 60,
        next: "breakfast_healthy"
      },
      {
        label: "Do a quick home yoga routine",
        story: "You rolled out your yoga mat and stretched your muscles, feeling very centered.",
        minutes: 45,
        next: "breakfast_quick"
      }
    ]
  },
  doomscroll_morning: {
    prompt: "You are deep in the scrolling void, reading arguments about pineapple on pizza.",
    options: [
      {
        label: "Throw your phone away and get up",
        story: "With a burst of self-loathing, you threw your phone onto the pillow and stood up.",
        minutes: 30,
        next: "breakfast_quick"
      },
      {
        label: "Keep scrolling for another half hour",
        story: "The algorithm won. You scrolled through five more viral videos and lost another chunk of morning.",
        minutes: 60,
        next: "overslept"
      }
    ]
  },

  // === STAGE 2: Breakfast (7:30 AM - 9:00 AM) ===
  overslept: {
    prompt: "You woke up late! The morning is slipping away. You need to get moving.",
    options: [
      {
        label: "Rush through a quick shower",
        story: "You had a lightning-fast shower and rushed to the kitchen.",
        minutes: 30,
        next: "breakfast_quick"
      },
      {
        label: "Take your time and stretch",
        story: "Since you already overslept, you decided not to panic and did a slow stretch instead.",
        minutes: 45,
        next: "breakfast_relaxed"
      }
    ]
  },
  morning_coffee: {
    prompt: "You need a caffeine kick to clear the brain fog. What are you brewing?",
    options: [
      {
        label: "Brew a fancy pour-over coffee",
        story: "You carefully ground the coffee beans and brewed a perfect pour-over. It tasted like heaven.",
        minutes: 45,
        next: "breakfast_relaxed"
      },
      {
        label: "Gulp down instant coffee",
        story: "No time for art. You mixed instant coffee powder and boiling water, gulped it down, and shivered.",
        minutes: 30,
        next: "breakfast_quick"
      }
    ]
  },
  breakfast_healthy: {
    prompt: "Time for breakfast. You want to keep the healthy streak going.",
    options: [
      {
        label: "Prepare avocado toast and smoothie",
        story: "You toasted some sourdough, mashed fresh avocado, and blended a green smoothie. Extremely aesthetic.",
        minutes: 60,
        next: "morning_work_focus"
      },
      {
        label: "Eat oatmeal with berries and nuts",
        story: "You made a quick bowl of oats topped with fresh blueberries and almonds. Wholesome and fast.",
        minutes: 45,
        next: "morning_work_focus"
      }
    ]
  },
  breakfast_quick: {
    prompt: "You are running behind. Breakfast needs to be fast.",
    options: [
      {
        label: "Grab a protein bar and go",
        story: "You grabbed a protein bar and chewed it quickly. Tasted like sweet cardboard, but it's fuel.",
        minutes: 30,
        next: "morning_commute"
      },
      {
        label: "Cook a bowl of instant Maggi noodles",
        story: "You cooked a spicy bowl of Maggi noodles. Not the healthiest breakfast, but absolutely delicious.",
        minutes: 30,
        next: "morning_study_distracted"
      }
    ]
  },
  breakfast_relaxed: {
    prompt: "You have some time. Let's enjoy a nice morning meal.",
    options: [
      {
        label: "Cook pancakes with maple syrup",
        story: "You flipped a stack of fluffy pancakes and drizzled them with sweet syrup.",
        minutes: 60,
        next: "morning_study_distracted"
      },
      {
        label: "Read the news over eggs and toast",
        story: "You fried two eggs, toasted some bread, and read the morning articles in peace.",
        minutes: 60,
        next: "morning_work_focus"
      }
    ]
  },

  // === STAGE 3: Morning Activity (9:00 AM - 12:00 PM) ===
  morning_work_focus: {
    prompt: "Your mind is clear and you feel energized. How do you tackle your tasks?",
    options: [
      {
        label: "Dive into a deep work coding session",
        story: "You closed all tabs, put on headphones, and coded continuously. You achieved true flow state.",
        minutes: 180,
        next: "lunch_healthy"
      },
      {
        label: "Organize your desk and write a to-do list",
        story: "You decluttered your workspace and planned out your tasks. You feel organized but haven't coded yet.",
        minutes: 60,
        next: "midday_errands"
      }
    ]
  },
  morning_commute: {
    prompt: "You are headed out to the local shared workspace. How are you traveling?",
    options: [
      {
        label: "Take the crowded city metro",
        story: "You squeezed into the metro. It was packed, but you listened to an interesting podcast.",
        minutes: 90,
        next: "office_work"
      },
      {
        label: "Splurge on an air-conditioned cab",
        story: "You ordered a cab. It was expensive, but you got to sit comfortably and read on your phone.",
        minutes: 60,
        next: "office_work"
      }
    ]
  },
  morning_study_distracted: {
    prompt: "You sit down to work, but your focus is completely scattered. The internet beckons.",
    options: [
      {
        label: "Stare at the screen and daydream",
        story: "You spent over an hour staring at your text editor, thinking about what you would do if you won the lottery.",
        minutes: 90,
        next: "lunch_cheat"
      },
      {
        label: "Clean the house to avoid working",
        story: "You did a manic deep clean of your room, desk, and kitchen just so you wouldn't have to work. The house is spotless.",
        minutes: 120,
        next: "midday_errands"
      }
    ]
  },

  // === STAGE 4: Office/Midday Tasks (11:00 AM - 2:00 PM) ===
  office_work: {
    prompt: "You are at your desk and the workday is in full swing.",
    options: [
      {
        label: "Attend a long, boring status meeting",
        story: "You sat through a two-hour status update that definitely could have been an email.",
        minutes: 120,
        next: "lunch_cheat"
      },
      {
        label: "Power through your main programming tasks",
        story: "You focused, ignored slack messages, and finished two critical features.",
        minutes: 90,
        next: "lunch_healthy"
      }
    ]
  },
  midday_errands: {
    prompt: "You are out and about. What errand should you run next?",
    options: [
      {
        label: "Walk to the local organic grocery store",
        story: "You walked to the grocery store and bought fresh vegetables, pasta, and some expensive cheese.",
        minutes: 90,
        next: "lunch_cook_home"
      },
      {
        label: "Pick up dry cleaning and packages",
        story: "You collected your parcels and dry cleaning, walking back with heavy arms.",
        minutes: 90,
        next: "lunch_healthy"
      }
    ]
  },

  // === STAGE 5: Lunch (12:30 PM - 3:00 PM) ===
  lunch_healthy: {
    prompt: "Your stomach is rumbling. Let's get some lunch.",
    options: [
      {
        label: "Eat a fresh salad and grilled chicken",
        story: "You ate a light, healthy chicken salad. You feel refreshed and light.",
        minutes: 60,
        next: "afternoon_slump_active"
      },
      {
        label: "Walk to the local wrap place",
        story: "You walked down the street and grabbed a spicy paneer wrap. Delicious and satisfying.",
        minutes: 60,
        next: "afternoon_slump_lazy"
      }
    ]
  },
  lunch_cheat: {
    prompt: "You want something comforting and heavy. Healthy eating can wait.",
    options: [
      {
        label: "Order a double cheeseburger and fries",
        story: "You ordered a massive cheeseburger. It was incredibly greasy and delicious, but you immediately felt heavy.",
        minutes: 60,
        next: "afternoon_slump_comatose"
      },
      {
        label: "Go out for spicy street food",
        story: "You visited a local stall and stuffed yourself with spicy snacks. Your tongue is burning, but you are happy.",
        minutes: 60,
        next: "afternoon_slump_lazy"
      }
    ]
  },
  lunch_cook_home: {
    prompt: "You have fresh ingredients at home. Time to cook.",
    options: [
      {
        label: "Cook a fresh tomato pasta from scratch",
        story: "You boiled pasta, simmered a fresh tomato sauce, and topped it with fresh basil. You felt like an Italian chef.",
        minutes: 90,
        next: "afternoon_slump_comatose"
      },
      {
        label: "Assemble a quick cheese sandwich",
        story: "You toasted a simple cheese and tomato sandwich. Fast, low effort, and did the job.",
        minutes: 45,
        next: "afternoon_slump_active"
      }
    ]
  },

  // === STAGE 6: Afternoon Slump (2:00 PM - 5:00 PM) ===
  afternoon_slump_active: {
    prompt: "It's mid-afternoon. The post-lunch tiredness is trying to drag you down.",
    options: [
      {
        label: "Power through with an iced double-espresso",
        story: "You downed a cold espresso, forcing your nervous system back into action.",
        minutes: 45,
        next: "afternoon_work_push"
      },
      {
        label: "Go for a brisk walk to clear your head",
        story: "You took a 1-mile walk around the block. The movement woke you up completely.",
        minutes: 60,
        next: "afternoon_creative"
      }
    ]
  },
  afternoon_slump_lazy: {
    prompt: "You feel lazy. The screen is open, but work seems impossible right now.",
    options: [
      {
        label: "Watch funny animal videos on YouTube",
        story: "You spent an hour watching cats fail at jumping and puppies playing. Highly entertaining, zero productivity.",
        minutes: 90,
        next: "afternoon_gaming"
      },
      {
        label: "Take a quick power nap",
        story: "You set an alarm for 30 minutes and collapsed on the sofa. You woke up slightly disoriented.",
        minutes: 90,
        next: "afternoon_gaming"
      }
    ]
  },
  afternoon_slump_comatose: {
    prompt: "The food coma is real. Your eyelids feel like lead weights. You cannot function.",
    options: [
      {
        label: "Fall into a deep 2-hour nap on the bed",
        story: "You crawled into bed and slept heavily for two hours. You woke up not knowing what year it was.",
        minutes: 120,
        next: "afternoon_gaming"
      },
      {
        label: "Stare blankly at a blank document",
        story: "You sat at your desk, screen glowing, staring blankly for an hour. Absolutely no thoughts occurred.",
        minutes: 60,
        next: "afternoon_work_push"
      }
    ]
  },

  // === STAGE 7: Tea/Coffee Time (4:00 PM - 6:30 PM) ===
  afternoon_work_push: {
    prompt: "The end of the day is in sight. Time for one last push.",
    options: [
      {
        label: "Finish your remaining coding tasks",
        story: "You cranked out the last few lines of code and pushed them to GitHub. The green dot feels good.",
        minutes: 120,
        next: "evening_stroll"
      },
      {
        label: "Call a friend to gossip and complain",
        story: "You called a friend and complained about work, life, and the price of avocados for an hour.",
        minutes: 60,
        next: "evening_social"
      }
    ]
  },
  afternoon_creative: {
    prompt: "You feel a spark of creative energy. What are you creating?",
    options: [
      {
        label: "Sketch or paint in your notebook",
        story: "You took out your watercolors and painted a cozy landscape. It actually looks quite nice.",
        minutes: 90,
        next: "evening_stroll"
      },
      {
        label: "Brainstorm ideas for a new side project",
        story: "You opened a blank document and wrote down three ridiculous app ideas. You feel inspired.",
        minutes: 120,
        next: "evening_coding"
      }
    ]
  },
  afternoon_gaming: {
    prompt: "You decide to relax. The console is calling your name.",
    options: [
      {
        label: "Play a quick multiplayer match",
        story: "You played a shooter game online. It was stressful, but you won two matches and felt like a champion.",
        minutes: 90,
        next: "evening_social"
      },
      {
        label: "Get lost in a cozy open-world RPG",
        story: "You explored virtual forests and completed minor quests. You completely lost track of time.",
        minutes: 150,
        next: "evening_coding"
      }
    ]
  },

  // === STAGE 8: Sunset & Evening (6:00 PM - 8:30 PM) ===
  evening_stroll: {
    prompt: "The sun is starting to set, casting a warm orange glow across the room. What's next?",
    options: [
      {
        label: "Go for a walk around the neighborhood park",
        story: "You walked outside. The sunset sky was a beautiful shade of violet and gold. You felt at peace.",
        minutes: 60,
        next: "dinner_healthy"
      },
      {
        label: "Visit a cozy local bookstore",
        story: "You browsed the shelves of a small bookstore and bought a sci-fi novel and a fancy bookmark.",
        minutes: 90,
        next: "dinner_order_in"
      }
    ]
  },
  evening_social: {
    prompt: "You feel like socializing. How are you spending the evening?",
    options: [
      {
        label: "Meet friends at a nearby cafe",
        story: "You met up with friends at a cafe. You drank iced tea, laughed at old jokes, and gossiped.",
        minutes: 90,
        next: "dinner_dine_out"
      },
      {
        label: "Go to a local board game meetup",
        story: "You joined a local board game meet. You learned a complex strategy game and accidentally won.",
        minutes: 120,
        next: "dinner_dine_out"
      }
    ]
  },
  evening_coding: {
    prompt: "You are locked in. The code is flowing. You want to keep writing.",
    options: [
      {
        label: "Write a clean new feature from scratch",
        story: "You vibecoded a complete authentication page. The code is clean and runs flawlessly.",
        minutes: 120,
        next: "dinner_order_in"
      },
      {
        label: "Debug a mysterious CSS layout issue",
        story: "You spent over two hours trying to center a div. It involved three compiler errors and a lot of sighing.",
        minutes: 150,
        next: "dinner_healthy"
      }
    ]
  },

  // === STAGE 9: Dinner (7:30 PM - 10:30 PM) ===
  dinner_healthy: {
    prompt: "It's dinner time. You want to eat something simple.",
    options: [
      {
        label: "Sauté fresh vegetables and tofu",
        story: "You cooked a healthy stir-fry. It tasted clean and fresh, keeping your gut happy.",
        minutes: 60,
        next: "night_movie"
      },
      {
        label: "Boil a hot bowl of clear soup",
        story: "You simmered a warm, comforting broth with vegetables. Cozy and light.",
        minutes: 60,
        next: "night_reading"
      }
    ]
  },
  dinner_order_in: {
    prompt: "You are too tired to cook. Time to order food.",
    options: [
      {
        label: "Order spicy Thai green curry online",
        story: "You ordered Thai food. It arrived hot and spicy, clearing your sinuses and filling your belly.",
        minutes: 65,
        next: "night_coding_project"
      },
      {
        label: "Order a large pepperoni pizza",
        story: "You ordered a pizza. You ate three slices immediately while watching the delivery tracking map.",
        minutes: 60,
        next: "night_movie"
      }
    ]
  },
  dinner_dine_out: {
    prompt: "You are already out. Where should you go for dinner?",
    options: [
      {
        label: "Eat piping-hot ramen at a noodle bar",
        story: "You sat at a cozy bar and slurped delicious, rich pork ramen. You felt warm and happy.",
        minutes: 90,
        next: "night_social_party"
      },
      {
        label: "Have a long, chatty dinner at a cafe",
        story: "You stayed at the cafe, ordering pasta and talking for two hours. Good food, great company.",
        minutes: 120,
        next: "night_reading"
      }
    ]
  },

  // === STAGE 10: Night Entertainment (9:00 PM - 12:30 AM) ===
  night_movie: {
    prompt: "It's late evening. The room is dark. How are you relaxing?",
    options: [
      {
        label: "Watch an acclaimed sci-fi indie film",
        story: "You watched a mind-bending movie about space travel. It left you feeling existential.",
        minutes: 120,
        next: "late_night_tea"
      },
      {
        label: "Put on a trashy reality TV show",
        story: "You watched people argue on a beach. Zero brainpower required, highly entertaining.",
        minutes: 90,
        next: "late_night_chat"
      }
    ]
  },
  night_reading: {
    prompt: "It's quiet. Perfect atmosphere for reading.",
    options: [
      {
        label: "Read a detective thriller novel",
        story: "You read three intense chapters. The plot thickens, making it hard to put the book down.",
        minutes: 90,
        next: "late_night_tea"
      },
      {
        label: "Browse Wikipedia rabbit holes",
        story: "You started reading about ancient Rome and somehow ended up reading about the history of the spork.",
        minutes: 120,
        next: "late_night_existential"
      }
    ]
  },
  night_coding_project: {
    prompt: "The nighttime silence gives you ultimate coding focus.",
    options: [
      {
        label: "Implement a cool new animation library",
        story: "You coded smooth page transitions that feel buttery and premium. You feel like a genius.",
        minutes: 120,
        next: "late_night_stargazing"
      },
      {
        label: "Refactor your messy styling code",
        story: "You cleaned up your CSS class names and organized colors. Satisfying, but took way longer than expected.",
        minutes: 150,
        next: "late_night_existential"
      }
    ]
  },
  night_social_party: {
    prompt: "The night is young and the city is alive.",
    options: [
      {
        label: "Go to a late-night music gig with friends",
        story: "You stood in a crowded room listening to an indie band. The music was loud, bass thumping.",
        minutes: 150,
        next: "late_night_chat"
      },
      {
        label: "Hang out at a rooftop lounge bar",
        story: "You drank mocktails and looked at the city skyline lights from the rooftop. Very peaceful.",
        minutes: 120,
        next: "late_night_stargazing"
      }
    ]
  },

  // === STAGE 11: Late Night Wind-down (10:30 PM - 2:00 AM) ===
  late_night_tea: {
    prompt: "It's late. You are in your room. How are you winding down?",
    options: [
      {
        label: "Brew chamomile tea and do light stretches",
        story: "You drank warm tea and did slow stretches. Your body feels completely relaxed.",
        minutes: 60,
        next: "midnight_meditation"
      },
      {
        label: "Bake a quick batch of midnight cookies",
        story: "You mixed chocolate chips and cookie dough, filling the house with a delicious sweet aroma.",
        minutes: 90,
        next: "midnight_snack_run"
      }
    ]
  },
  late_night_chat: {
    prompt: "You are home, but your mind is still active.",
    options: [
      {
        label: "Call a close friend for deep midnight talk",
        story: "You spoke in hushed tones, talking about stars, childhood memories, and future dreams.",
        minutes: 90,
        next: "midnight_snack_run"
      },
      {
        label: "Share memes on a group chat",
        story: "You sent funny memes to your friends, laughing alone in the dark room.",
        minutes: 60,
        next: "midnight_doomscroll"
      }
    ]
  },
  late_night_stargazing: {
    prompt: "The night sky is clear. What are you doing?",
    options: [
      {
        label: "Sit on the balcony and look at the sky",
        story: "You sat on the chair with a blanket, watching the quiet city lights and faint stars.",
        minutes: 60,
        next: "midnight_meditation"
      },
      {
        label: "Look up astronomical constellations on your phone",
        story: "You opened a sky-mapping app and pointed it at the sky, learning about Ursa Major.",
        minutes: 75,
        next: "midnight_doomscroll"
      }
    ]
  },
  late_night_existential: {
    prompt: "The silence is heavy. Your mind starts asking hard questions.",
    options: [
      {
        label: "Question your life choices in the dark",
        story: "You spent an hour staring at the ceiling, wondering if you are on the right path in life.",
        minutes: 60,
        next: "midnight_existential_spiral"
      },
      {
        label: "Write down your thoughts in a journal",
        story: "You wrote three pages of messy handwriting in your journal, clearing your mind.",
        minutes: 60,
        next: "midnight_meditation"
      }
    ]
  },

  // === STAGE 12: Midnight Hours (12:00 AM - 3:00 AM) ===
  midnight_meditation: {
    prompt: "It is past midnight. The house is completely dark and silent. You should really sleep.",
    options: [
      {
        label: "Do a 15-minute breathing exercise",
        story: "You sat cross-legged and breathed deeply, calming your racing nervous system.",
        minutes: 45,
        next: "final_bedtime_prep"
      },
      {
        label: "Accidentally fall asleep on the floor mat",
        story: "Your eyes closed mid-meditation. You slept on the floor, waking up with a stiff neck.",
        minutes: 90,
        next: "final_stiff_back"
      }
    ]
  },
  midnight_snack_run: {
    prompt: "You have a sudden midnight craving. The kitchen is empty.",
    options: [
      {
        label: "Walk to the 24/7 convenience store",
        story: "You walked down the empty street to buy spicy chips and soda. Felt like a secret agent.",
        minutes: 90,
        next: "final_sugar_rush"
      },
      {
        label: "Raid the fridge for cold cheese slices",
        story: "You stood in the light of the open fridge, eating sliced cheese like a raccoon.",
        minutes: 45,
        next: "final_bedtime_prep"
      }
    ]
  },
  midnight_doomscroll: {
    prompt: "You are holding your phone, screen bright in the dark bedroom. The clock is ticking.",
    options: [
      {
        label: "Read mysterious ghost stories on Reddit",
        story: "You read creepy stories in the dark, making you jump at every tiny house creak.",
        minutes: 90,
        next: "final_insomnia_panic"
      },
      {
        label: "Watch reviews of products you will never buy",
        story: "You watched a 45-minute review of a high-end espresso machine. Fascinating but useless.",
        minutes: 75,
        next: "final_sugar_rush"
      }
    ]
  },
  midnight_existential_spiral: {
    prompt: "You are stuck in a spiral of overthinking, remembering an awkward thing you said in 2018.",
    options: [
      {
        label: "Worry about the future of the planet",
        story: "You spent an hour reading articles about climate change and felt deep dread.",
        minutes: 75,
        next: "final_insomnia_panic"
      },
      {
        label: "Watch nostalgic childhood cartoon intros",
        story: "You watched old theme songs on YouTube, feeling a warm wave of nostalgia.",
        minutes: 60,
        next: "final_bedtime_prep"
      }
    ]
  },

  // === STAGE 13: Final Bedtime Prep (1:00 AM - 4:00 AM) ===
  final_bedtime_prep: {
    prompt: "It's incredibly late. You are running out of time before the 2 AM cutoff.",
    options: [
      {
        label: "Slowly wash your face and brush teeth",
        story: "You did your full skincare routine, moving like a slow-motion sloth.",
        minutes: 45,
        next: "absolute_limit"
      },
      {
        label: "Pick out clothes for tomorrow",
        story: "You neatly laid out your shirt and trousers, trying to pretend you have your life together.",
        minutes: 60,
        next: "absolute_limit"
      },
      {
        label: "Screw it, fall asleep on the living room rug",
        story: "You collapsed on the soft rug in the living room, too tired to make the trip to the bedroom.",
        minutes: 15,
        ending: true,
        bed: false
      }
    ]
  },
  final_stiff_back: {
    prompt: "Your body is sore from sleeping on the floor. You need to move.",
    options: [
      {
        label: "Groan and drag yourself onto the mattress",
        story: "You made a dramatic sound, crawled onto the bed, and lay flat.",
        minutes: 45,
        next: "absolute_limit"
      },
      {
        label: "Do a light yoga stretch to ease the pain",
        story: "You did a gentle stretch, hearing several satisfying pops from your spine.",
        minutes: 60,
        next: "absolute_limit"
      },
      {
        label: "Sleep on the cold kitchen floor next to the stove",
        story: "You curled up on the cold kitchen floor next to the stove, seeking its fading warmth.",
        minutes: 15,
        ending: true,
        bed: false
      }
    ]
  },
  final_sugar_rush: {
    prompt: "The late-night food is giving you an unwanted second wind. Your heart is racing.",
    options: [
      {
        label: "Pace around the room to burn off energy",
        story: "You walked in small circles in the dark, looking like a caged animal.",
        minutes: 60,
        next: "absolute_limit"
      },
      {
        label: "Lie down and wait for the sugar crash",
        story: "You lay starfished on the bed, staring at the ceiling waiting for the crash.",
        minutes: 45,
        next: "absolute_limit"
      },
      {
        label: "Work through the night on your project",
        story: "Fueled by sugar and bad decisions, you coded until the sun came up, never sleeping.",
        minutes: 120,
        ending: true,
        bed: false
      }
    ]
  },
  final_insomnia_panic: {
    prompt: "You are staring at the clock in pure dread. The 2 AM cutoff is almost here.",
    options: [
      {
        label: "Try to count sheep in absolute despair",
        story: "You got to 42 sheep before losing count and sighing heavily.",
        minutes: 90,
        next: "absolute_limit"
      },
      {
        label: "Read a dry programming manual to force sleep",
        story: "You read about memory allocation algorithms. It worked. Your eyes crossed.",
        minutes: 75,
        next: "absolute_limit"
      },
      {
        label: "Give up and sleep sitting upright on the sofa",
        story: "Defeated by insomnia, you slumped onto the sofa and fell asleep sitting upright.",
        minutes: 30,
        ending: true,
        bed: false
      }
    ]
  },

  // === STAGE 14: The Absolute Limit (2:00 AM+) ===
  absolute_limit: {
    prompt: "You are barely conscious. Your brain is shutting down.",
    options: [
      {
        label: "Pass out cold on the floor",
        story: "Your brain pulled the plug. You collapsed and passed out cold on the floor.",
        minutes: 15,
        ending: true,
        bed: false
      },
      {
        label: "Crawl into bed half-asleep",
        story: "You dragged your heavy body into bed just as your eyes closed, successfully completing your day.",
        minutes: 15,
        next: "END_success",
        ending: true,
        bed: true
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = storyNodes;
} else {
  window.storyNodes = storyNodes;
}
