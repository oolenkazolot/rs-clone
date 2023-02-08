const workout_plans = [
  {
    title: "ABS Workouts",
    image: "../assets/png/abs3.png",
    block: [
      {
        title: "ABS beginner",
        exercisesAmt: "19",
        exercisesTime: "15",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(24,240,237,1) 0%, rgba(206,247,242,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "jumping jacks",
            description:
              "Stand upright with your legs together, arms at your sides Bend your knees slightly, and jump into the air. As you jump , spread your legs to be shoulder-width apart. Stretch your arms out and over your head. Jump back to standing position.",
            example: "../assets/gifs/jumping_jacks.gif",
            youtube: "https://www.youtube.com/watch?v=2W4ZNSwoW_4",
            quantity: "x30",
          },
          {
            id: 2,
            title: "high stepping",
            description:
              "Run in place while pulling you knees as high as possible with each step. Do it as fast as you can. Keep your back straight",
            example: "../assets/gifs/high_stepping.gif",
            youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
            quantity: "00:22",
          },
          {
            id: 3,
            title: "standing bicycle crunches",
            description:
              "Stand with feet together, knees slightly bent, hands behind head. Brace abs in tight and lift left knee up as right shoulder rotates towards knee (try to touch). Lower back to start.",
            example: "../assets/gifs/standing_bicycle_crunch.gif",
            youtube: "https://www.youtube.com/watch?v=8lsAXzvVHrc",
            quantity: "x14",
          },
          {
            id: 4,
            title: "russian twist",
            description:
              "Sit with your feet slightly lifted and back titled backwards. Then hold your hands together and twist from side to side. Keep your legs still when twisting and your neck neutral. Tighten your abs.",
            example: "../assets/gifs/russian_twist.gif",
            youtube: "https://www.youtube.com/watch?v=DJQGX2J4IVw",
            quantity: "x16",
          },
          {
            id: 5,
            title: "mountain climber",
            description:
              "Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion switch your legs, keeping your arms in the same position. Switch your legs back and forth twice, such that your right leg is again close to your right hand.",
            example: "../assets/gifs/mountain_climber.gif",
            youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
            quantity: "x18",
          },
          {
            id: 6,
            title: "flutter kicks",
            description:
              "Lie on your back with your arms at your sides and legs slightly lifted. Then quickly raise your right leg up, and simultaneous lower your left hand. This exercise can increase core strength and improve your endurance.",
            example: "../assets/gifs/flutter_kicks.gif",
            youtube: "https://www.youtube.com/watch?v=K5wuM_gNWyw",
            quantity: "00:15",
          },
          {
            id: 7,
            title: "leg raisers",
            description:
              "Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up. Repeat.",
            example: "../assets/gifs/leg_raisers.gif",
            youtube: "https://www.youtube.com/watch?v=dGKbTKLnym4",
            quantity: "x8",
          },
          {
            id: 8,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x14",
          },
          {
            id: 9,
            title: "skipping without rope",
            description:
              "This is a good warm-up exercise. Pretend to hold a skipping rope handle in each hand. Jump and alternately land on the balls of your feet, rotating your wrists at the same time as you as if you were spinning a rope.",
            example: "../assets/gifs/skipping_without_rope.gif",
            youtube: "https://www.youtube.com/watch?v=CYGeazlNbU4",
            quantity: "00:30",
          },
          {
            id: 10,
            title: "standing bicycle crunches",
            description:
              "Stand with feet together, knees slightly bent, hands behind head. Brace abs in tight and lift left knee up as right shoulder rotates towards knee (try to touch). Lower back to start.",
            example: "../assets/gifs/standing_bicycle_crunch.gif",
            youtube: "https://www.youtube.com/watch?v=8lsAXzvVHrc",
            quantity: "x12",
          },
          {
            id: 11,
            title: "russian twist",
            description:
              "Sit with your feet slightly lifted and back titled backwards. Then hold your hands together and twist from side to side. Keep your legs still when twisting and your neck neutral. Tighten your abs.",
            example: "../assets/gifs/russian_twist.gif",
            youtube: "https://www.youtube.com/watch?v=DJQGX2J4IVw",
            quantity: "x14",
          },
          {
            id: 12,
            title: "mountain climber",
            description:
              "Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion switch your legs, keeping your arms in the same position. Switch your legs back and forth twice, such that your right leg is again close to your right hand.",
            example: "../assets/gifs/mountain_climber.gif",
            youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
            quantity: "x16",
          },
          {
            id: 13,
            title: "flutter kicks",
            description:
              "Lie on your back with your arms at your sides and legs slightly lifted. Then quickly raise your right leg up, and simultaneous lower your left hand. This exercise can increase core strength and improve your endurance.",
            example: "../assets/gifs/flutter_kicks.gif",
            youtube: "https://www.youtube.com/watch?v=K5wuM_gNWyw",
            quantity: "00:15",
          },
          {
            id: 14,
            title: "leg raisers",
            description:
              "Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up. Repeat.",
            example: "../assets/gifs/leg_raisers.gif",
            youtube: "https://www.youtube.com/watch?v=dGKbTKLnym4",
            quantity: "x6",
          },
          {
            id: 15,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x12",
          },
          {
            id: 16,
            title: "plank",
            description:
              "Keep your abs tight and look at the space between your hands to ensure a neutral spine position. Hold the position. Hold the position for as long as you can",
            example: "../assets/gifs/plank.gif",
            youtube: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
            quantity: "00:30",
          },
          {
            id: 17,
            title: "cobra stretch",
            description:
              "Lie on your belly. Bend your elbows and place your hands on the floor next to your ribs, stacking your wrist and elbow. On an inhale, begin to peel your chest away from the floor, lifting into spinal extension. Hold this position. Breathe naturally.",
            example: "../assets/png/cobra.png",
            youtube: "https://www.youtube.com/watch?v=z21McHHOpAg",
            quantity: "00:30",
          },
          {
            id: 18,
            title: "lying twist stretch left",
            description:
              "Lie on your back with your arms extended at your sides. Bend your legs and twist your legs to the left. Hold this position. This exercise stretches your obliques and lower back.",
            example: "../assets/images/lying_twist_stretch_left.jpg",
            youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
            quantity: "00:30",
          },
          {
            id: 19,
            title: "lying twist stretch right",
            description:
              "Lie on your back with your arms extended at your sides. Bend your legs and twist your legs to the right. Hold this position. This exercise stretches your obliques and lower back.",
            example: "../assets/images/lying_twist_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
            quantity: "00:30",
          },
        ],
      },
      {
        title: "ABS intermediate",
        exercisesAmt: "20",
        exercisesTime: "17",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(113,179,235,1) 0%, rgba(202,227,249,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "jumping jacks",
            description:
              "Stand upright with your legs together, arms at your sides Bend your knees slightly, and jump into the air. As you jump , spread your legs to be shoulder-width apart. Stretch your arms out and over your head. Jump back to standing position.",
            example: "../assets/gifs/jumping_jacks.gif",
            youtube: "https://www.youtube.com/watch?v=2W4ZNSwoW_4",
            quantity: "x30",
          },
          {
            id: 2,
            title: "high stepping",
            description:
              "Run in place while pulling you knees as high as possible with each step. Do it as fast as you can. Keep your back straight",
            example: "../assets/gifs/high_stepping.gif",
            youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
            quantity: "00:30",
          },
          {
            id: 3,
            title: "mountain climber",
            description:
              "Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion switch your legs, keeping your arms in the same position. Switch your legs back and forth twice, such that your right leg is again close to your right hand.",
            example: "../assets/gifs/mountain_climber.gif",
            youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
            quantity: "x24",
          },
          {
            id: 4,
            title: "reverse crunches",
            description:
              "Lie on your back with your knees up and hands behind your head. Lift your shoulders and thighs, and then stretch out.",
            example: "../assets/gifs/reverse_crunches.gif",
            youtube: "https://www.youtube.com/watch?v=UwRfRN5fYRg",
            quantity: "x18",
          },
          {
            id: 5,
            title: "leg raisers",
            description:
              "Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up. Repeat.",
            example: "../assets/gifs/leg_raisers.gif",
            youtube: "https://www.youtube.com/watch?v=dGKbTKLnym4",
            quantity: "x16",
          },
          {
            id: 6,
            title: "heel touch",
            description:
              "Keep your back flat and bend your knees to a 90-degree angle with your feet firmly planted on the floor. Engage your core as you bend your spine to reach your right hand toward your right ankle. Repeat this movement on your left side. Keep your lower back on the floor.",
            example: "../assets/gifs/heel_touch.gif",
            youtube: "https://www.youtube.com/watch?v=9bR-elyolBQ",
            quantity: "x20",
          },
          {
            id: 7,
            title: "reclined oblique twist",
            description:
              "Lie on your back with your legs extended and your elbow directly under your shoulders. LIft your left leg up at a 45 degree angle while reaching your right arm over to your left side. Then slowly go back to the starting position. Repeat several times, and then switch to the other side.",
            example: "../assets/gifs/reclined_oblique_twist.gif",
            youtube: "https://www.youtube.com/watch?v=XKW5jru5pGo",
            quantity: "x16",
          },
          {
            id: 8,
            title: "heels to the heaven",
            description:
              "Lie on your back, position your arms out to your sides. From here, activate the lower abdominals and lift the legs until they are perpendicular to the ground.",
            example: "../assets/gifs/heels_to_the heaven.gif",
            youtube: "https://www.youtube.com/watch?v=wdS2U6z0JGY",
            quantity: "x12",
          },
          {
            id: 9,
            title: "plank",
            description:
              "Keep your abs tight and look at the space between your hands to ensure a neutral spine position. Hold the position. Hold the position for as long as you can",
            example: "../assets/gifs/plank.gif",
            youtube: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
            quantity: "00:30",
          },
          {
            id: 10,
            title: "skipping without rope",
            description:
              "This is a good warm-up exercise. Pretend to hold a skipping rope handle in each hand. Jump and alternately land on the balls of your feet, rotating your wrists at the same time as you as if you were spinning a rope.",
            example: "../assets/gifs/skipping_without_rope.gif",
            youtube: "https://www.youtube.com/watch?v=CYGeazlNbU4",
            quantity: "00:30",
          },
          {
            id: 11,
            title: "mountain climber",
            description:
              "Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion switch your legs, keeping your arms in the same position. Switch your legs back and forth twice, such that your right leg is again close to your right hand.",
            example: "../assets/gifs/mountain_climber.gif",
            youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
            quantity: "x22",
          },
          {
            id: 12,
            title: "reverse crunches",
            description:
              "Lie on your back with your knees up and hands behind your head. Lift your shoulders and thighs, and then stretch out.",
            example: "../assets/gifs/reverse_crunches.gif",
            youtube: "https://www.youtube.com/watch?v=UwRfRN5fYRg",
            quantity: "x16",
          },
          {
            id: 13,
            title: "leg raisers",
            description:
              "Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they are just above the floor. Hold for a moment. Raise your legs back up. Repeat.",
            example: "../assets/gifs/leg_raisers.gif",
            youtube: "https://www.youtube.com/watch?v=dGKbTKLnym4",
            quantity: "x14",
          },
          {
            id: 14,
            title: "heel touch",
            description:
              "Keep your back flat and bend your knees to a 90-degree angle with your feet firmly planted on the floor. Engage your core as you bend your spine to reach your right hand toward your right ankle. Repeat this movement on your left side. Keep your lower back on the floor.",
            example: "../assets/gifs/heel_touch.gif",
            youtube: "https://www.youtube.com/watch?v=9bR-elyolBQ",
            quantity: "x18",
          },
          {
            id: 15,
            title: "reclined oblique twist",
            description:
              "Lie on your back with your legs extended and your elbow directly under your shoulders. LIft your left leg up at a 45 degree angle while reaching your right arm over to your left side. Then slowly go back to the starting position. Repeat several times, and then switch to the other side.",
            example: "../assets/gifs/reclined_oblique_twist.gif",
            youtube: "https://www.youtube.com/watch?v=XKW5jru5pGo",
            quantity: "x14",
          },
          {
            id: 16,
            title: "heels to the heaven",
            description:
              "Lie on your back, position your arms out to your sides. From here, activate the lower abdominals and lift the legs until they are perpendicular to the ground.",
            example: "../assets/gifs/heels_to_the heaven.gif",
            youtube: "https://www.youtube.com/watch?v=wdS2U6z0JGY",
            quantity: "x10",
          },
          {
            id: 17,
            title: "plank",
            description:
              "Keep your abs tight and look at the space between your hands to ensure a neutral spine position. Hold the position. Hold the position for as long as you can",
            example: "../assets/gifs/plank.gif",
            youtube: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
            quantity: "00:30",
          },
          {
            id: 18,
            title: "cobra stretch",
            description:
              "Lie on your belly. Bend your elbows and place your hands on the floor next to your ribs, stacking your wrist and elbow. On an inhale, begin to peel your chest away from the floor, lifting into spinal extension. Hold this position. Breathe naturally.",
            example: "../assets/png/cobra.png",
            youtube: "https://www.youtube.com/watch?v=z21McHHOpAg",
            quantity: "00:30",
          },
          {
            id: 19,
            title: "lying twist stretch left",
            description:
              "Lie on your back with your arms extended at your sides. Bend your legs and twist your legs to the left. Hold this position. This exercise stretches your obliques and lower back.",
            example: "../assets/images/lying_twist_stretch_left.jpg",
            youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
            quantity: "00:30",
          },
          {
            id: 20,
            title: "lying twist stretch right",
            description:
              "Lie on your back with your arms extended at your sides. Bend your legs and twist your legs to the right. Hold this position. This exercise stretches your obliques and lower back.",
            example: "../assets/images/lying_twist_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
            quantity: "00:30",
          },
        ],
      },
      {
        title: "ABS advanced",
        exercisesAmt: "26",
        exercisesTime: "13",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(244,117,117,1) 0%, rgba(255,209,209,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "jumping jacks",
            description:
              "Stand upright with your legs together, arms at your sides Bend your knees slightly, and jump into the air. As you jump , spread your legs to be shoulder-width apart. Stretch your arms out and over your head. Jump back to standing position.",
            example: "../assets/gifs/jumping_jacks.gif",
            youtube: "https://www.youtube.com/watch?v=2W4ZNSwoW_4",
            quantity: "x30",
          },
          {
            id: 2,
            title: "high stepping",
            description:
              "Run in place while pulling you knees as high as possible with each step. Do it as fast as you can. Keep your back straight",
            example: "../assets/gifs/high_stepping.gif",
            youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
            quantity: "00:30",
          },
          {
            id: 3,
            title: "cross knee plank",
            description:
              "Get on the floor on all fours and assume a push up or ab plank position. To execute this move, squeeze the abs and bring your left leg up to your right elbow and back. Repeat with the opposite leg.",
            example: "../assets/gifs/cross_knee_plank.gif",
            youtube: "https://www.youtube.com/watch?v=O4fFIYpYySU",
            quantity: "x28",
          },
          {
            id: 4,
            title: "cross arm crunches",
            description:
              "Lie flat on your back and cross your arms across your chest. Bend your knees and firmly plant your feet on the floor. Brace your core and lift your shoulders and upper back off of the floor. Hold at the top for a second and then retract back down to starting position.",
            example: "../assets/gifs/cross_arm_crunches.gif",
            youtube: "https://www.youtube.com/watch?v=Qz3ylqqJ90M",
            quantity: "x18",
          },
          {
            id: 5,
            title: "heel touch",
            description:
              "Keep your back flat and bend your knees to a 90-degree angle with your feet firmly planted on the floor. Engage your core as you bend your spine to reach your right hand toward your right ankle. Repeat this movement on your left side. Keep your lower back on the floor.",
            example: "../assets/gifs/heel_touch.gif",
            youtube: "https://www.youtube.com/watch?v=9bR-elyolBQ",
            quantity: "x24",
          },
          {
            id: 6,
            title: "x man crunch",
            description:
              "Lie down on the floor. Take the x position, keeping your hands and feet off the ground. Bring your arms and legs together in the middle/ Go back to starting position.",
            example: "../assets/gifs/x_man_crunch.gif",
            youtube: "https://www.youtube.com/watch?v=f_ZsJgaqFNE",
            quantity: "x18",
          },
          {
            id: 7,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x20",
          },
          {
            id: 8,
            title: "side crunches left",
            description:
              "Lie on your side with your legs straight and arm closest to the floor extended out in front of you for support , with your other hand resting on your head for balance. Crunch your obliques.",
            example: "../assets/gifs/side_crunch_left.gif",
            youtube: "https://www.youtube.com/watch?v=w0OWFjfI3zM",
            quantity: "x16",
          },
          {
            id: 9,
            title: "side crunches right",
            description:
              "Lie on your side with your legs straight and arm closest to the floor extended out in front of you for support , with your other hand resting on your head for balance. Crunch your obliques.",
            example: "../assets/gifs/side_crunch_right.gif",
            youtube: "https://www.youtube.com/watch?v=w0OWFjfI3zM",
            quantity: "x16",
          },
          {
            id: 10,
            title: "heels to the heaven",
            description:
              "Lie on your back, position your arms out to your sides. From here, activate the lower abdominals and lift the legs until they are perpendicular to the ground.",
            example: "../assets/gifs/heels_to_the heaven.gif",
            youtube: "https://www.youtube.com/watch?v=wdS2U6z0JGY",
            quantity: "x20",
          },
          {
            id: 11,
            title: "vhold",
            description:
              "Sit on the floor, lift your legs up at a 45 degree angle, and lean your upper body back at a 45 degree angle. Stretch your arms forward. Hold this position.",
            example: "../assets/images/vhold.jpg",
            youtube: "https://www.youtube.com/watch?v=WGwI629aTAY",
            quantity: "00:30",
          },
          {
            id: 12,
            title: "plank",
            description:
              "Keep your abs tight and look at the space between your hands to ensure a neutral spine position. Hold the position. Hold the position for as long as you can",
            example: "../assets/gifs/plank.gif",
            youtube: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
            quantity: "01:00",
          },
          {
            id: 13,
            title: "skipping without rope",
            description:
              "This is a good warm-up exercise. Pretend to hold a skipping rope handle in each hand. Jump and alternately land on the balls of your feet, rotating your wrists at the same time as you as if you were spinning a rope.",
            example: "../assets/gifs/skipping_without_rope.gif",
            youtube: "https://www.youtube.com/watch?v=CYGeazlNbU4",
            quantity: "00:30",
          },
          {
            id: 14,
            title: "cross knee plank",
            description:
              "Get on the floor on all fours and assume a push up or ab plank position. To execute this move, squeeze the abs and bring your left leg up to your right elbow and back. Repeat with the opposite leg.",
            example: "../assets/gifs/cross_knee_plank.gif",
            youtube: "https://www.youtube.com/watch?v=O4fFIYpYySU",
            quantity: "x26",
          },
          {
            id: 15,
            title: "cross arm crunches",
            description:
              "Lie flat on your back and cross your arms across your chest. Bend your knees and firmly plant your feet on the floor. Brace your core and lift your shoulders and upper back off of the floor. Hold at the top for a second and then retract back down to starting position.",
            example: "../assets/gifs/cross_arm_crunches.gif",
            youtube: "https://www.youtube.com/watch?v=Qz3ylqqJ90M",
            quantity: "x16",
          },
          {
            id: 16,
            title: "heel touch",
            description:
              "Keep your back flat and bend your knees to a 90-degree angle with your feet firmly planted on the floor. Engage your core as you bend your spine to reach your right hand toward your right ankle. Repeat this movement on your left side. Keep your lower back on the floor.",
            example: "../assets/gifs/heel_touch.gif",
            youtube: "https://www.youtube.com/watch?v=9bR-elyolBQ",
            quantity: "x22",
          },
          {
            id: 17,
            title: "x man crunch",
            description:
              "Lie down on the floor. Take the x position, keeping your hands and feet off the ground. Bring your arms and legs together in the middle/ Go back to starting position.",
            example: "../assets/gifs/x_man_crunch.gif",
            youtube: "https://www.youtube.com/watch?v=f_ZsJgaqFNE",
            quantity: "x16",
          },
          {
            id: 18,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x18",
          },
          {
            id: 19,
            title: "side crunches left",
            description:
              "Lie on your side with your legs straight and arm closest to the floor extended out in front of you for support , with your other hand resting on your head for balance. Crunch your obliques.",
            example: "../assets/gifs/side_crunch_left.gif",
            youtube: "https://www.youtube.com/watch?v=w0OWFjfI3zM",
            quantity: "x14",
          },
          {
            id: 20,
            title: "side crunches right",
            description:
              "Lie on your side with your legs straight and arm closest to the floor extended out in front of you for support , with your other hand resting on your head for balance. Crunch your obliques.",
            example: "../assets/gifs/side_crunch_right.gif",
            youtube: "https://www.youtube.com/watch?v=w0OWFjfI3zM",
            quantity: "x14",
          },
          {
            id: 21,
            title: "heels to the heaven",
            description:
              "Lie on your back, position your arms out to your sides. From here, activate the lower abdominals and lift the legs until they are perpendicular to the ground.",
            example: "../assets/gifs/heels_to_the heaven.gif",
            youtube: "https://www.youtube.com/watch?v=wdS2U6z0JGY",
            quantity: "x18",
          },
          {
            id: 22,
            title: "vhold",
            description:
              "Sit on the floor, lift your legs up at a 45 degree angle, and lean your upper body back at a 45 degree angle. Stretch your arms forward. Hold this position.",
            example: "../assets/images/vhold.jpg",
            youtube: "https://www.youtube.com/watch?v=WGwI629aTAY",
            quantity: "00:25",
          },
          {
            id: 23,
            title: "plank",
            description:
              "Keep your abs tight and look at the space between your hands to ensure a neutral spine position. Hold the position. Hold the position for as long as you can",
            example: "../assets/gifs/plank.gif",
            youtube: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
            quantity: "00:30",
          },
          {
            id: 24,
            title: "cobra stretch",
            description:
              "Lie on your belly. Bend your elbows and place your hands on the floor next to your ribs, stacking your wrist and elbow. On an inhale, begin to peel your chest away from the floor, lifting into spinal extension. Hold this position. Breathe naturally.",
            example: "../assets/png/cobra.png",
            youtube: "https://www.youtube.com/watch?v=z21McHHOpAg",
            quantity: "00:30",
          },
          {
            id: 25,
            title: "lying twist stretch left",
            description:
              "Lie on your back with your arms extended at your sides. Bend your legs and twist your legs to the left. Hold this position. This exercise stretches your obliques and lower back.",
            example: "../assets/images/lying_twist_stretch_left.jpg",
            youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
            quantity: "00:30",
          },
          {
            id: 26,
            title: "lying twist stretch right",
            description:
              "Lie on your back with your arms extended at your sides. Bend your legs and twist your legs to the right. Hold this position. This exercise stretches your obliques and lower back.",
            example: "../assets/images/lying_twist_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
            quantity: "00:30",
          },
        ],
      },
    ],
  },
  // {
  //   title: "BUTT Workouts",
  //   image: "../assets/png/butt.png",
  //   block: [
  //     {
  //       title: "BUTT beginner",
  //       exercisesAmt: "18",
  //       exercisesTime: "13",
  //       complexityLevel: true,
  //       color:
  //         "linear-gradient(90deg, rgba(24,240,237,1) 0%, rgba(206,247,242,1) 100%)",
  //     },
  //     {
  //       title: "BUTT intermediate",
  //       exercisesAmt: "26",
  //       exercisesTime: "18",
  //       complexityLevel: true,
  //       color:
  //         "linear-gradient(90deg, rgba(113,179,235,1) 0%, rgba(202,227,249,1) 100%)",
  //     },
  //     {
  //       title: "BUTT advanced",
  //       exercisesAmt: "32",
  //       exercisesTime: "24",
  //       complexityLevel: true,
  //       color:
  //         "linear-gradient(90deg, rgba(244,117,117,1) 0%, rgba(255,209,209,1) 100%)",
  //     },
  //   ],
  // },
  // {
  //   title: "THIGH Workouts",
  //   color:
  //     "linear-gradient(90deg, rgba(244,117,117,1) 0%, rgba(255,209,209,1) 100%)",
  //   image: "../assets/png/thigh.png",
  //   block: [
  //     {
  //       title: "THIGH beginner",
  //       exercisesAmt: "19",
  //       exercisesTime: "14",
  //       complexityLevel: true,
  //       color:
  //         "linear-gradient(90deg, rgba(24,240,237,1) 0%, rgba(206,247,242,1) 100%)",
  //     },
  //     {
  //       title: "THIGH intermediate",
  //       exercisesAmt: "26",
  //       exercisesTime: "19",
  //       complexityLevel: true,
  //       color:
  //         "linear-gradient(90deg, rgba(113,179,235,1) 0%, rgba(202,227,249,1) 100%)",
  //     },
  //     {
  //       title: "THIGH advanced",
  //       exercisesAmt: "29",
  //       exercisesTime: "21",
  //       complexityLevel: true,
  //       color:
  //         "linear-gradient(90deg, rgba(244,117,117,1) 0%, rgba(255,209,209,1) 100%)",
  //     },
  //   ],
  // },
  // {
  //   title: "Routines",
  //   image: "../assets/images/morning_evening.jpg",
  //   block: [
  //     {
  //       title: "morning warmup",
  //       exercisesAmt: "11",
  //       exercisesTime: "10",
  //       color:
  //         "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)",
  //     },
  //     {
  //       title: "sleepy time stretch",
  //       exercisesAmt: "13",
  //       exercisesTime: "13",
  //       color:
  //         "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)",
  //     },
  //   ],
  // },
  // {
  //   title: `7 x 4 Challenges`,
  //   image: "../assets/png/whole_body2.png",
  //   block: [
  //     {
  //       title: "full body",
  //       exercisesAmt: "16 - 24",
  //       exercisesTime: "13 - 22",
  //       complexityLevel: true,
  //       color:
  //         "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)",
  //     },
  //   ],
  // },
];

export default workout_plans;
