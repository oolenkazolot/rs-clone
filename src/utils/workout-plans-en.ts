const workout_plans = [
  {
    title: "ABS Workouts",
    image: "../assets/png/abs3.png",
    block: [
      {
        id: 1,
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
              "Stand upright with your legs together, arms at your sides. Bend your knees slightly, and jump into the air. As you jump, spread your legs to be shoulder-width apart. Stretch your arms out and over your head. Jump back to standing position.",
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
        id: 2,
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
        id: 3,
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
  {
    title: "BUTT Workouts",
    image: "../assets/png/butt.png",
    block: [
      {
        id: 4,
        title: "BUTT beginner",
        exercisesAmt: "18",
        exercisesTime: "13",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(24,240,237,1) 0%, rgba(206,247,242,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "high stepping",
            description:
              "Run in place while pulling you knees as high as possible with each step. Do it as fast as you can. Keep your back straight",
            example: "../assets/gifs/high_stepping.gif",
            youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
            quantity: "00:30",
          },
          {
            id: 2,
            title: "butt kicks",
            description:
              "Run in place while kicking your heel up to touch your butt with each step. Try to do it as fast as you can. Keep your chest up, tighten your abs. It's a great exercise for the gluteus and hamstrings.",
            example: "../assets/gifs/butt_kicks.gif",
            youtube: "https://www.youtube.com/watch?v=vXVPvY1UbJI",
            quantity: "00:30",
          },
          {
            id: 3,
            title: "squats",
            description:
              "Stand with feet a little wider than hip width, then lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. This exercise works the thighs hips buttocks, quads, hamstrings and lower body.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
            quantity: "x12",
          },
          {
            id: 4,
            title: "standing glute kickbacks left",
            description:
              "Сontract your core muscles. Extend your left leg back and up. The sole of your right foot should be facing the ceiling. Contract your glute at the top of the move and hold for a bit. Return to your starting position and repeat.",
            example: "../assets/gifs/standing_glute_kickbacks_left.gif",
            youtube: "https://www.youtube.com/watch?v=pn2EZjEE_ZU",
            quantity: "x10",
          },
          {
            id: 5,
            title: "standing glute kickbacks right",
            description:
              "Get into all fours, with a straight spine, and contract your core muscles. Extend your right leg back and up until your thigh is parallel with the ground. The sole of your right foot should be facing the ceiling. Contract your glute at the top of the move and hold for a bit. Return to your starting position without touching your knee to the ground and repeat.",
            example: "../assets/gifs/standing_glute_kickbacks_right.gif",
            youtube: "https://www.youtube.com/watch?v=pn2EZjEE_ZU",
            quantity: "x10",
          },
          {
            id: 6,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x10",
          },
          {
            id: 7,
            title: "mountain climber",
            description:
              "Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion switch your legs, keeping your arms in the same position. Switch your legs back and forth twice, such that your right leg is again close to your right hand.",
            example: "../assets/gifs/mountain_climber.gif",
            youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
            quantity: "x14",
          },
          {
            id: 8,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 9,
            title: "squats",
            description:
              "Stand with feet a little wider than hip width, then lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. This exercise works the thighs hips buttocks, quads, hamstrings and lower body.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
            quantity: "x10",
          },
          {
            id: 10,
            title: "standing glute kickbacks right",
            description:
              "Get into all fours, with a straight spine, and contract your core muscles. Extend your right leg back and up until your thigh is parallel with the ground. The sole of your right foot should be facing the ceiling. Contract your glute at the top of the move and hold for a bit. Return to your starting position without touching your knee to the ground and repeat.",
            example: "../assets/gifs/standing_glute_kickbacks_right.gif",
            youtube: "https://www.youtube.com/watch?v=pn2EZjEE_ZU",
            quantity: "x8",
          },
          {
            id: 11,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x8",
          },
          {
            id: 12,
            title: "standing glute kickbacks left",
            description:
              "Сontract your core muscles. Extend your left leg back and up. The sole of your right foot should be facing the ceiling. Contract your glute at the top of the move and hold for a bit. Return to your starting position and repeat.",
            example: "../assets/gifs/standing_glute_kickbacks_left.gif",
            youtube: "https://www.youtube.com/watch?v=pn2EZjEE_ZU",
            quantity: "x8",
          },
          {
            id: 13,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x8",
          },
          {
            id: 14,
            title: "mountain climber",
            description:
              "Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion switch your legs, keeping your arms in the same position. Switch your legs back and forth twice, such that your right leg is again close to your right hand.",
            example: "../assets/gifs/mountain_climber.gif",
            youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
            quantity: "x12",
          },
          {
            id: 15,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 16,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 17,
            title: "knee to chest stretch left",
            description:
              "Lie on your back with your legs extended and back straight. Keep your hips level and your lower back down on the floor. Pull your left knee towards your chest as much as you can while keeping your right leg straight on the ground. Hold this position.",
            example: "../assets/images/knee_to_chest_left.jpg",
            youtube: "https://www.youtube.com/watch?v=bJms9YyjoBI",
            quantity: "00:30",
          },
          {
            id: 18,
            title: "knee to chest stretch right",
            description:
              "Lie on your back with your legs extended and back straight. Keep your hips level and your lower back down on the floor. Pull your right knee towards your chest as much as you can while keeping your left leg straight on the ground. Hold this position.",
            example: "../assets/images/knee_to_chest_right.jpg",
            youtube: "https://www.youtube.com/watch?v=bJms9YyjoBI",
            quantity: "00:30",
          },
        ],
      },
      {
        id: 5,
        title: "BUTT intermediate",
        exercisesAmt: "26",
        exercisesTime: "18",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(113,179,235,1) 0%, rgba(202,227,249,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "high stepping",
            description:
              "Run in place while pulling you knees as high as possible with each step. Do it as fast as you can. Keep your back straight",
            example: "../assets/gifs/high_stepping.gif",
            youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
            quantity: "00:30",
          },
          {
            id: 2,
            title: "butt kicks",
            description:
              "Run in place while kicking your heel up to touch your butt with each step. Try to do it as fast as you can. Keep your chest up, tighten your abs. It's a great exercise for the gluteus and hamstrings.",
            example: "../assets/gifs/butt_kicks.gif",
            youtube: "https://www.youtube.com/watch?v=vXVPvY1UbJI",
            quantity: "00:30",
          },
          {
            id: 3,
            title: "lunges",
            description:
              "Start in a standing position with your feet hip-width apart. Step forward longer than a walking stride so one leg is ahead of your torso and the other is behind. Your foot should land flat and remain flat while it is on the ground. Your rear heel will rise off of the ground. Bend your knees to approximately 90 degrees as you lower yourself. Remember to keep your trunk upright and core engaged. Then, forcefully push off from your front leg to return to the starting position.",
            example: "../assets/gifs/lunges.gif",
            youtube: "https://www.youtube.com/watch?v=yIc1YbVLMZ8",
            quantity: "x14",
          },
          {
            id: 4,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 5,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 6,
            title: "squats",
            description:
              "Stand with feet a little wider than hip width, then lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. This exercise works the thighs hips buttocks, quads, hamstrings and lower body.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
            quantity: "x12",
          },
          {
            id: 7,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x12",
          },
          {
            id: 8,
            title: "bottom leg lift left",
            description:
              "Lie on your left side with your head resting on your left hand. Then put your right foot forward on the floor Lift your left leg up and down.",
            example: "../assets/gifs/bottom_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
            quantity: "x12",
          },
          {
            id: 9,
            title: "bottom leg lift right",
            description:
              "Lie on your right side with your head resting on your right hand. Then put your left foot forward on the floor Lift your right leg up and down.",
            example: "../assets/gifs/bottom_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
            quantity: "x12",
          },
          {
            id: 10,
            title: "fire hydrant left",
            description:
              "Begin on your hands and knees on the floor, your hands directly beneath the shoulders, and knees under the hips. Then try to lift your left leg to the side at a 90 degree angle.",
            example: "../assets/gifs/fire_hydrand_left.gif",
            youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
            quantity: "x10",
          },
          {
            id: 11,
            title: "fire hydrant right",
            description:
              "Begin on your hands and knees on the floor, your hands directly beneath the shoulders, and knees under the hips. Then try to lift your right leg to the side at a 90 degree angle.",
            example: "../assets/gifs/fire_hydrand_right.gif",
            youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
            quantity: "x10",
          },
          {
            id: 12,
            title: "split squat left",
            description:
              "From a standing position, take a long step forward as if performing a lunge. The heel of your back foot should be raised. Keeping your torso straight, lower slowly until your back knee almost touches the floor, then push back up.",
            example: "../assets/gifs/split_squat_left.gif",
            youtube: "https://www.youtube.com/watch?v=SFSZVKzqnXA",
            quantity: "x10",
          },
          {
            id: 13,
            title: "split squat right",
            description:
              "From a standing position, take a long step forward as if performing a lunge. The heel of your back foot should be raised. Keeping your torso straight, lower slowly until your back knee almost touches the floor, then push back up.",
            example: "../assets/gifs/split_squat_left.gif",
            youtube: "https://www.youtube.com/watch?v=SFSZVKzqnXA",
            quantity: "x10",
          },
          {
            id: 14,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 15,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 16,
            title: "squats",
            description:
              "Stand with feet a little wider than hip width, then lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. This exercise works the thighs hips buttocks, quads, hamstrings and lower body.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
            quantity: "x10",
          },
          {
            id: 17,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x10",
          },
          {
            id: 18,
            title: "bottom leg lift left",
            description:
              "Lie on your left side with your head resting on your left hand. Then put your right foot forward on the floor Lift your left leg up and down.",
            example: "../assets/gifs/bottom_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
            quantity: "x10",
          },
          {
            id: 19,
            title: "bottom leg lift right",
            description:
              "Lie on your right side with your head resting on your right hand. Then put your left foot forward on the floor Lift your right leg up and down.",
            example: "../assets/gifs/bottom_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
            quantity: "x10",
          },
          {
            id: 20,
            title: "lunges",
            description:
              "Start in a standing position with your feet hip-width apart. Step forward longer than a walking stride so one leg is ahead of your torso and the other is behind. Your foot should land flat and remain flat while it is on the ground. Your rear heel will rise off of the ground. Bend your knees to approximately 90 degrees as you lower yourself. Remember to keep your trunk upright and core engaged. Then, forcefully push off from your front leg to return to the starting position.",
            example: "../assets/gifs/lunges.gif",
            youtube: "https://www.youtube.com/watch?v=yIc1YbVLMZ8",
            quantity: "x12",
          },
          {
            id: 21,
            title: "fire hydrant left",
            description:
              "Begin on your hands and knees on the floor, your hands directly beneath the shoulders, and knees under the hips. Then try to lift your left leg to the side at a 90 degree angle.",
            example: "../assets/gifs/fire_hydrand_left.gif",
            youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
            quantity: "x8",
          },
          {
            id: 22,
            title: "fire hydrant right",
            description:
              "Begin on your hands and knees on the floor, your hands directly beneath the shoulders, and knees under the hips. Then try to lift your right leg to the side at a 90 degree angle.",
            example: "../assets/gifs/fire_hydrand_right.gif",
            youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
            quantity: "x8",
          },
          {
            id: 23,
            title: "split squat left",
            description:
              "From a standing position, take a long step forward as if performing a lunge. The heel of your back foot should be raised. Keeping your torso straight, lower slowly until your back knee almost touches the floor, then push back up.",
            example: "../assets/gifs/split_squat_left.gif",
            youtube: "https://www.youtube.com/watch?v=SFSZVKzqnXA",
            quantity: "x8",
          },
          {
            id: 24,
            title: "split squat right",
            description:
              "From a standing position, take a long step forward as if performing a lunge. The heel of your back foot should be raised. Keeping your torso straight, lower slowly until your back knee almost touches the floor, then push back up.",
            example: "../assets/gifs/split_squat_left.gif",
            youtube: "https://www.youtube.com/watch?v=SFSZVKzqnXA",
            quantity: "x8",
          },
          {
            id: 25,
            title: "kneeling lunge stretch left",
            description:
              "Kneel on a mat with both knees, then place one foot forward so that you have a 90-degree angle at the hip and knee. Place your hands on the front knee for support (if needed). This is the start position of the kneeling hip flexor stretch. Keeping the torso upright, slowly lean forward until you feel a comfortable stretch through the groin and top of the thigh (rear leg).",
            example: "../assets/gifs/kneeling_lunge_stretch_left.gif",
            youtube: "https://www.youtube.com/watch?v=3wthmvKWoOU",
            quantity: "00:30",
          },
          {
            id: 26,
            title: "kneeling lunge stretch right",
            description:
              "Kneel on a mat with both knees, then place one foot forward so that you have a 90-degree angle at the hip and knee. Place your hands on the front knee for support (if needed). This is the start position of the kneeling hip flexor stretch. Keeping the torso upright, slowly lean forward until you feel a comfortable stretch through the groin and top of the thigh (rear leg).",
            example: "../assets/gifs/kneeling_lunge_stretch_right.gif",
            youtube: "https://www.youtube.com/watch?v=3wthmvKWoOU",
            quantity: "00:30",
          },
        ],
      },
      {
        id: 6,
        title: "BUTT advanced",
        exercisesAmt: "32",
        exercisesTime: "24",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(244,117,117,1) 0%, rgba(255,209,209,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "high stepping",
            description:
              "Run in place while pulling you knees as high as possible with each step. Do it as fast as you can. Keep your back straight",
            example: "../assets/gifs/high_stepping.gif",
            youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
            quantity: "00:30",
          },
          {
            id: 2,
            title: "butt kicks",
            description:
              "Run in place while kicking your heel up to touch your butt with each step. Try to do it as fast as you can. Keep your chest up, tighten your abs. It's a great exercise for the gluteus and hamstrings.",
            example: "../assets/gifs/butt_kicks.gif",
            youtube: "https://www.youtube.com/watch?v=vXVPvY1UbJI",
            quantity: "00:30",
          },
          {
            id: 3,
            title: "squats",
            description:
              "Stand with feet a little wider than hip width, then lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. This exercise works the thighs hips buttocks, quads, hamstrings and lower body.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
            quantity: "x15",
          },
          {
            id: 4,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 5,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 6,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x15",
          },
          {
            id: 7,
            title: "curtsy lunges",
            description:
              "Stand with your feet hip-width apart, hands on your hips. Take a big step back with your right leg, crossing it behind your left. Bend your knees and lower your hips until your left thigh is nearly parallel to the floor. Keep your torso upright and your hips and shoulders as square as possible to the wall in front of you. Then repeat on the other side.",
            example: "../assets/gifs/curtsy_lunges.gif",
            youtube: "https://www.youtube.com/watch?v=-rTyKlHjYT8",
            quantity: "x14",
          },
          {
            id: 8,
            title: "mountain climber",
            description:
              "Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion switch your legs, keeping your arms in the same position. Switch your legs back and forth twice, such that your right leg is again close to your right hand.",
            example: "../assets/gifs/mountain_climber.gif",
            youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
            quantity: "x14",
          },
          {
            id: 9,
            title: "lunge knee hops right",
            description:
              "From a standing position, step back into a lunge. Bring same leg in front with knee bent. Hop off the ground, bringing knees as hight as you can. Repeat with same leg for this segment. Switch legs for each following segment.",
            example: "../assets/gifs/lunge_knee_hops_right.gif",
            youtube: "https://www.youtube.com/watch?v=NSy3QKsZ7uI",
            quantity: "x12",
          },
          {
            id: 10,
            title: "lunge knee hops left",
            description:
              "From a standing position, step back into a lunge. Bring same leg in front with knee bent. Hop off the ground, bringing knees as hight as you can. Repeat with same leg for this segment. Switch legs for each following segment.",
            example: "../assets/gifs/lunge_knee_hops_left.gif",
            youtube: "https://www.youtube.com/watch?v=NSy3QKsZ7uI",
            quantity: "x12",
          },
          {
            id: 11,
            title: "flutter kicks",
            description:
              "Lie on your back with your arms at your sides and legs slightly lifted. Then quickly raise your right leg up, and simultaneous lower your left hand. This exercise can increase core strength and improve your endurance.",
            example: "../assets/gifs/flutter_kicks.gif",
            youtube: "https://www.youtube.com/watch?v=K5wuM_gNWyw",
            quantity: "00:30",
          },
          {
            id: 12,
            title: "bench glute kick back left",
            description: "Same with glute kickbacks, just work with a bench.",
            example: "../assets/gifs/bench_glute_kick_back_left.gif",
            youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
            quantity: "x16",
          },
          {
            id: 13,
            title: "bench glute kick back right",
            description: "Same with glute kickbacks, just work with a bench.",
            example: "../assets/gifs/bench_glute_kick_back_right.gif",
            youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
            quantity: "x16",
          },
          {
            id: 14,
            title: "sumo squat",
            description:
              "Start in a traditional squat stance with your feet about shoulder-width apart and toes pointed forward. Clasp your hands together at your chest. Take a step to the side with your right foot until your stance is 3–4 feet wide, or wider than hip width. Wider is OK as long as you can perform the move correctly. Move your hips back slightly and bend your knees as you lower your body into a squat position. Draw your tailbone straight down to the floor. Be mindful to keep your spine neutral, core engaged, and eyes forward throughout the movement. Lower until your thighs are parallel to the floor. You can go lower or shorten the squat if parallel is too low or if you can’t maintain your leg alignmen. Pause in the squat position for a few seconds. Then, engaging your glutes, press up to standing, driving up through your heels.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=Z2F0bArQH5s",
            quantity: "x15",
          },
          {
            id: 15,
            title: "single leg bridge left",
            description:
              "Raise your hips, tightening your abdominals and buttock muscles to support the lift, until your shoulders and knees are in a straight line. Squeeze your core at the same time, as if trying to pull your belly button back toward your spine. Hold this position for a count of one or two. Lower the hips to the floor slowly and with control, keeping the leg extended, to return to the starting position. Repeat on the same leg for the desired number of reps.",
            example: "../assets/gifs/single_leg_bridge_left.gif",
            youtube: "https://www.youtube.com/watch?v=ZgvzRn-16zI",
            quantity: "x12",
          },
          {
            id: 16,
            title: "single leg bridge right",
            description:
              "Raise your hips, tightening your abdominals and buttock muscles to support the lift, until your shoulders and knees are in a straight line. Squeeze your core at the same time, as if trying to pull your belly button back toward your spine. Hold this position for a count of one or two. Lower the hips to the floor slowly and with control, keeping the leg extended, to return to the starting position. Repeat on the same leg for the desired number of reps.",
            example: "../assets/gifs/single_leg_bridge_right.gif",
            youtube: "https://www.youtube.com/watch?v=ZgvzRn-16zI",
            quantity: "x12",
          },
          {
            id: 17,
            title: "jumping squats",
            description:
              "Stand with feet shoulder width and knees slightly bent. Start by doing a regular squat. engage your core, and jump up explosively.",
            example: "../assets/gifs/jumping_squats.webp",
            youtube: "https://www.youtube.com/watch?v=txLE-jOCEsc",
            quantity: "x12",
          },
          {
            id: 18,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 19,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 20,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x12",
          },
          {
            id: 21,
            title: "curtsy lunges",
            description:
              "Stand with your feet hip-width apart, hands on your hips. Take a big step back with your right leg, crossing it behind your left. Bend your knees and lower your hips until your left thigh is nearly parallel to the floor. Keep your torso upright and your hips and shoulders as square as possible to the wall in front of you. Then repeat on the other side.",
            example: "../assets/gifs/curtsy_lunges.gif",
            youtube: "https://www.youtube.com/watch?v=-rTyKlHjYT8",
            quantity: "x12",
          },
          {
            id: 22,
            title: "mountain climber",
            description:
              "Put both hands and knees on the floor. Place your right foot near your right hand and extend your left leg behind you. In one smooth motion switch your legs, keeping your arms in the same position. Switch your legs back and forth twice, such that your right leg is again close to your right hand.",
            example: "../assets/gifs/mountain_climber.gif",
            youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
            quantity: "x12",
          },
          {
            id: 23,
            title: "lunge knee hops left",
            description:
              "From a standing position, step back into a lunge. Bring same leg in front with knee bent. Hop off the ground, bringing knees as hight as you can. Repeat with same leg for this segment. Switch legs for each following segment.",
            example: "../assets/gifs/lunge_knee_hops_left.gif",
            youtube: "https://www.youtube.com/watch?v=NSy3QKsZ7uI",
            quantity: "x10",
          },
          {
            id: 24,
            title: "lunge knee hops right",
            description:
              "From a standing position, step back into a lunge. Bring same leg in front with knee bent. Hop off the ground, bringing knees as hight as you can. Repeat with same leg for this segment. Switch legs for each following segment.",
            example: "../assets/gifs/lunge_knee_hops_right.gif",
            youtube: "https://www.youtube.com/watch?v=NSy3QKsZ7uI",
            quantity: "x10",
          },
          {
            id: 25,
            title: "flutter kicks",
            description:
              "Lie on your back with your arms at your sides and legs slightly lifted. Then quickly raise your right leg up, and simultaneous lower your left hand. This exercise can increase core strength and improve your endurance.",
            example: "../assets/gifs/flutter_kicks.gif",
            youtube: "https://www.youtube.com/watch?v=K5wuM_gNWyw",
            quantity: "00:30",
          },
          {
            id: 26,
            title: "bench glute kick back left",
            description: "Same with glute kickbacks, just work with a bench.",
            example: "../assets/gifs/bench_glute_kick_back_left.gif",
            youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
            quantity: "x14",
          },
          {
            id: 27,
            title: "bench glute kick back right",
            description: "Same with glute kickbacks, just work with a bench.",
            example: "../assets/gifs/bench_glute_kick_back_right.gif",
            youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
            quantity: "x14",
          },
          {
            id: 28,
            title: "sumo squat",
            description:
              "Start in a traditional squat stance with your feet about shoulder-width apart and toes pointed forward. Clasp your hands together at your chest. Take a step to the side with your right foot until your stance is 3–4 feet wide, or wider than hip width. Wider is OK as long as you can perform the move correctly. Move your hips back slightly and bend your knees as you lower your body into a squat position. Draw your tailbone straight down to the floor. Be mindful to keep your spine neutral, core engaged, and eyes forward throughout the movement. Lower until your thighs are parallel to the floor. You can go lower or shorten the squat if parallel is too low or if you can’t maintain your leg alignmen. Pause in the squat position for a few seconds. Then, engaging your glutes, press up to standing, driving up through your heels.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=Z2F0bArQH5s",
            quantity: "x12",
          },
          {
            id: 29,
            title: "single leg bridge left",
            description:
              "Raise your hips, tightening your abdominals and buttock muscles to support the lift, until your shoulders and knees are in a straight line. Squeeze your core at the same time, as if trying to pull your belly button back toward your spine. Hold this position for a count of one or two. Lower the hips to the floor slowly and with control, keeping the leg extended, to return to the starting position. Repeat on the same leg for the desired number of reps.",
            example: "../assets/gifs/single_leg_bridge_left.gif",
            youtube: "https://www.youtube.com/watch?v=ZgvzRn-16zI",
            quantity: "x10",
          },
          {
            id: 30,
            title: "single leg bridge right",
            description:
              "Raise your hips, tightening your abdominals and buttock muscles to support the lift, until your shoulders and knees are in a straight line. Squeeze your core at the same time, as if trying to pull your belly button back toward your spine. Hold this position for a count of one or two. Lower the hips to the floor slowly and with control, keeping the leg extended, to return to the starting position. Repeat on the same leg for the desired number of reps.",
            example: "../assets/gifs/single_leg_bridge_right.gif",
            youtube: "https://www.youtube.com/watch?v=ZgvzRn-16zI",
            quantity: "x10",
          },
          {
            id: 31,
            title: "kneeling lunge stretch left",
            description:
              "Kneel on a mat with both knees, then place one foot forward so that you have a 90-degree angle at the hip and knee. Place your hands on the front knee for support (if needed). This is the start position of the kneeling hip flexor stretch. Keeping the torso upright, slowly lean forward until you feel a comfortable stretch through the groin and top of the thigh (rear leg).",
            example: "../assets/gifs/kneeling_lunge_stretch_left.gif",
            youtube: "https://www.youtube.com/watch?v=3wthmvKWoOU",
            quantity: "00:30",
          },
          {
            id: 32,
            title: "kneeling lunge stretch right",
            description:
              "Kneel on a mat with both knees, then place one foot forward so that you have a 90-degree angle at the hip and knee. Place your hands on the front knee for support (if needed). This is the start position of the kneeling hip flexor stretch. Keeping the torso upright, slowly lean forward until you feel a comfortable stretch through the groin and top of the thigh (rear leg).",
            example: "../assets/gifs/kneeling_lunge_stretch_right.gif",
            youtube: "https://www.youtube.com/watch?v=3wthmvKWoOU",
            quantity: "00:30",
          },
        ],
      },
    ],
  },
  {
    title: "THIGH Workouts",
    color:
      "linear-gradient(90deg, rgba(244,117,117,1) 0%, rgba(255,209,209,1) 100%)",
    image: "../assets/png/thigh.png",
    block: [
      {
        id: 7,
        title: "THIGH beginner",
        exercisesAmt: "19",
        exercisesTime: "14",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(24,240,237,1) 0%, rgba(206,247,242,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "high stepping",
            description:
              "Run in place while pulling you knees as high as possible with each step. Do it as fast as you can. Keep your back straight",
            example: "../assets/gifs/high_stepping.gif",
            youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
            quantity: "00:30",
          },
          {
            id: 2,
            title: "jumping jacks",
            description:
              "Stand upright with your legs together, arms at your sides Bend your knees slightly, and jump into the air. As you jump , spread your legs to be shoulder-width apart. Stretch your arms out and over your head. Jump back to standing position.",
            example: "../assets/gifs/jumping_jacks.gif",
            youtube: "https://www.youtube.com/watch?v=2W4ZNSwoW_4",
            quantity: "x30",
          },
          {
            id: 3,
            title: "squats",
            description:
              "Stand with feet a little wider than hip width, then lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. This exercise works the thighs hips buttocks, quads, hamstrings and lower body.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
            quantity: "x12",
          },
          {
            id: 4,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 5,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 6,
            title: "backward lunge",
            description:
              "Stand tall with your feet hip distance apart. Take a large step backward and lower your body toward the floor.  Both legs should be bent at a 90-degree angle at the bottom of the lunge.  Rise back to start and repeat.",
            example: "../assets/gifs/backward_lunge.gif",
            youtube: "https://www.youtube.com/watch?v=_LGpDtENZ5U",
            quantity: "x14",
          },
          {
            id: 7,
            title: "side lying leg lift left",
            description:
              "Lie down on your right side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your left hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x10",
          },
          {
            id: 8,
            title: "side lying leg lift right",
            description:
              "Lie down on your left side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your right hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x10",
          },
          {
            id: 9,
            title: "burpees",
            description:
              "Stand with your feet shoulder-width apart and your arms by your sides. Lower into a squat position and place your hands on the floor. Kick or step your legs back into a plank position. Jump or step your legs forward to return to a squat position. Return to the standing position.",
            example: "../assets/gifs/burpees.gif",
            youtube: "https://www.youtube.com/watch?v=818SkLAPyKY",
            quantity: "x5",
          },
          {
            id: 10,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 11,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 12,
            title: "backward lunge",
            description:
              "Stand tall with your feet hip distance apart. Take a large step backward and lower your body toward the floor.  Both legs should be bent at a 90-degree angle at the bottom of the lunge.  Rise back to start and repeat.",
            example: "../assets/gifs/backward_lunge.gif",
            youtube: "https://www.youtube.com/watch?v=_LGpDtENZ5U",
            quantity: "x12",
          },
          {
            id: 13,
            title: "side lying leg lift left",
            description:
              "Lie down on your right side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your left hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x8",
          },
          {
            id: 14,
            title: "side lying leg lift right",
            description:
              "Lie down on your left side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your right hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x8",
          },
          {
            id: 15,
            title: "quad stretch left",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your left foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_left.jpg/",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 16,
            title: "quad stretch right",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your right foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 17,
            title: "knee to chest stretch left",
            description:
              "Lie on your back with your legs extended and back straight. Keep your hips level and your lower back down on the floor. Pull your left knee towards your chest as much as you can while keeping your right leg straight on the ground. Hold this position.",
            example: "../assets/images/knee_to_chest_left.jpg",
            youtube: "https://www.youtube.com/watch?v=bJms9YyjoBI",
            quantity: "00:30",
          },
          {
            id: 18,
            title: "knee to chest stretch right",
            description:
              "Lie on your back with your legs extended and back straight. Keep your hips level and your lower back down on the floor. Pull your right knee towards your chest as much as you can while keeping your left leg straight on the ground. Hold this position.",
            example: "../assets/images/knee_to_chest_right.jpg",
            youtube: "https://www.youtube.com/watch?v=bJms9YyjoBI",
            quantity: "00:30",
          },
        ],
      },
      {
        id: 8,
        title: "THIGH intermediate",
        exercisesAmt: "26",
        exercisesTime: "19",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(113,179,235,1) 0%, rgba(202,227,249,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "side hop",
            description:
              "Jump with both feet to the right and then to the left, in a quick, repetitive movement",
            example: "../assets/gifs/side_hop.gif",
            youtube: "https://www.youtube.com/watch?v=nYmUEJIBj3c",
            quantity: "00:30",
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
            title: "lunges",
            description:
              "Start in a standing position with your feet hip-width apart. Step forward longer than a walking stride so one leg is ahead of your torso and the other is behind. Your foot should land flat and remain flat while it is on the ground. Your rear heel will rise off of the ground. Bend your knees to approximately 90 degrees as you lower yourself. Remember to keep your trunk upright and core engaged. Then, forcefully push off from your front leg to return to the starting position.",
            example: "../assets/gifs/lunges.gif",
            youtube: "https://www.youtube.com/watch?v=yIc1YbVLMZ8",
            quantity: "x14",
          },
          {
            id: 4,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 5,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x12",
          },
          {
            id: 6,
            title: "sumo squat",
            description:
              "Start in a traditional squat stance with your feet about shoulder-width apart and toes pointed forward. Clasp your hands together at your chest. Take a step to the side with your right foot until your stance is 3–4 feet wide, or wider than hip width. Wider is OK as long as you can perform the move correctly. Move your hips back slightly and bend your knees as you lower your body into a squat position. Draw your tailbone straight down to the floor. Be mindful to keep your spine neutral, core engaged, and eyes forward throughout the movement. Lower until your thighs are parallel to the floor. You can go lower or shorten the squat if parallel is too low or if you can’t maintain your leg alignmen. Pause in the squat position for a few seconds. Then, engaging your glutes, press up to standing, driving up through your heels.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=Z2F0bArQH5s",
            quantity: "x12",
          },
          {
            id: 7,
            title: "frog press",
            description:
              "Lie on your back with your knees bent to 90 degrees, turning them outwards like a frog. Make sure to keep your heels pressed together while flexing your feet towards you. Tighten your stomach and crunch up, lifting your head and shoulders off the floor, holding this position. Place your arms down by your side, hovering just above the floor. Straighten your legs away from your body at a 45-degree angle. Return to the starting position, completing the desired amount of repetitions.",
            example: "../assets/gifs/frog_press.gif",
            youtube: "https://www.youtube.com/watch?v=JvA7t9xKWgg",
            quantity: "x12",
          },
          {
            id: 8,
            title: "fire hydrant left",
            description:
              "Begin on your hands and knees on the floor, your hands directly beneath the shoulders, and knees under the hips. Then try to lift your left leg to the side at a 90 degree angle.",
            example: "../assets/gifs/fire_hydrand_left.gif",
            youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
            quantity: "x12",
          },
          {
            id: 9,
            title: "fire hydrant right",
            description:
              "Begin on your hands and knees on the floor, your hands directly beneath the shoulders, and knees under the hips. Then try to lift your right leg to the side at a 90 degree angle.",
            example: "../assets/gifs/fire_hydrand_right.gif",
            youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
            quantity: "x12",
          },
          {
            id: 10,
            title: "side lying leg lift left",
            description:
              "Lie down on your right side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your left hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x10",
          },
          {
            id: 11,
            title: "side lying leg lift right",
            description:
              "Lie down on your left side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your right hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x10",
          },
          {
            id: 12,
            title: "burpees",
            description:
              "Stand with your feet shoulder-width apart and your arms by your sides. Lower into a squat position and place your hands on the floor. Kick or step your legs back into a plank position. Jump or step your legs forward to return to a squat position. Return to the standing position.",
            example: "../assets/gifs/burpees.gif",
            youtube: "https://www.youtube.com/watch?v=818SkLAPyKY",
            quantity: "x6",
          },
          {
            id: 13,
            title: "lunges",
            description:
              "Start in a standing position with your feet hip-width apart. Step forward longer than a walking stride so one leg is ahead of your torso and the other is behind. Your foot should land flat and remain flat while it is on the ground. Your rear heel will rise off of the ground. Bend your knees to approximately 90 degrees as you lower yourself. Remember to keep your trunk upright and core engaged. Then, forcefully push off from your front leg to return to the starting position.",
            example: "../assets/gifs/lunges.gif",
            youtube: "https://www.youtube.com/watch?v=yIc1YbVLMZ8",
            quantity: "x12",
          },
          {
            id: 14,
            title: "donkey kicks left",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_left.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 15,
            title: "donkey kicks right",
            description:
              "Start with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Keep your core tight.",
            example: "../assets/gifs/donkey_kicks_right.gif",
            youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
            quantity: "x10",
          },
          {
            id: 16,
            title: "sumo squat",
            description:
              "Start in a traditional squat stance with your feet about shoulder-width apart and toes pointed forward. Clasp your hands together at your chest. Take a step to the side with your right foot until your stance is 3–4 feet wide, or wider than hip width. Wider is OK as long as you can perform the move correctly. Move your hips back slightly and bend your knees as you lower your body into a squat position. Draw your tailbone straight down to the floor. Be mindful to keep your spine neutral, core engaged, and eyes forward throughout the movement. Lower until your thighs are parallel to the floor. You can go lower or shorten the squat if parallel is too low or if you can’t maintain your leg alignmen. Pause in the squat position for a few seconds. Then, engaging your glutes, press up to standing, driving up through your heels.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=Z2F0bArQH5s",
            quantity: "x10",
          },
          {
            id: 17,
            title: "frog press",
            description:
              "Lie on your back with your knees bent to 90 degrees, turning them outwards like a frog. Make sure to keep your heels pressed together while flexing your feet towards you. Tighten your stomach and crunch up, lifting your head and shoulders off the floor, holding this position. Place your arms down by your side, hovering just above the floor. Straighten your legs away from your body at a 45-degree angle. Return to the starting position, completing the desired amount of repetitions.",
            example: "../assets/gifs/frog_press.gif",
            youtube: "https://www.youtube.com/watch?v=JvA7t9xKWgg",
            quantity: "x10",
          },
          {
            id: 18,
            title: "fire hydrant left",
            description:
              "Begin on your hands and knees on the floor, your hands directly beneath the shoulders, and knees under the hips. Then try to lift your left leg to the side at a 90 degree angle.",
            example: "../assets/gifs/fire_hydrand_left.gif",
            youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
            quantity: "x10",
          },
          {
            id: 19,
            title: "fire hydrant right",
            description:
              "Begin on your hands and knees on the floor, your hands directly beneath the shoulders, and knees under the hips. Then try to lift your right leg to the side at a 90 degree angle.",
            example: "../assets/gifs/fire_hydrand_right.gif",
            youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
            quantity: "x10",
          },
          {
            id: 20,
            title: "side lying leg lift left",
            description:
              "Lie down on your right side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your left hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x8",
          },
          {
            id: 21,
            title: "side lying leg lift right",
            description:
              "Lie down on your left side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your right hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x8",
          },
          {
            id: 22,
            title: "burpees",
            description:
              "Stand with your feet shoulder-width apart and your arms by your sides. Lower into a squat position and place your hands on the floor. Kick or step your legs back into a plank position. Jump or step your legs forward to return to a squat position. Return to the standing position.",
            example: "../assets/gifs/burpees.gif",
            youtube: "https://www.youtube.com/watch?v=818SkLAPyKY",
            quantity: "x5",
          },
          {
            id: 23,
            title: "quad stretch left",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your left foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_left.jpg/",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 24,
            title: "quad stretch right",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your right foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 25,
            title: "knee to chest stretch left",
            description:
              "Lie on your back with your legs extended and back straight. Keep your hips level and your lower back down on the floor. Pull your left knee towards your chest as much as you can while keeping your right leg straight on the ground. Hold this position.",
            example: "../assets/images/knee_to_chest_left.jpg",
            youtube: "https://www.youtube.com/watch?v=bJms9YyjoBI",
            quantity: "00:30",
          },
          {
            id: 26,
            title: "knee to chest stretch right",
            description:
              "Lie on your back with your legs extended and back straight. Keep your hips level and your lower back down on the floor. Pull your right knee towards your chest as much as you can while keeping your left leg straight on the ground. Hold this position.",
            example: "../assets/images/knee_to_chest_right.jpg",
            youtube: "https://www.youtube.com/watch?v=bJms9YyjoBI",
            quantity: "00:30",
          },
        ],
      },
      {
        id: 9,
        title: "THIGH advanced",
        exercisesAmt: "29",
        exercisesTime: "21",
        complexityLevel: true,
        color:
          "linear-gradient(90deg, rgba(244,117,117,1) 0%, rgba(255,209,209,1) 100%)",
        exercises: [
          {
            id: 1,
            title: "high stepping",
            description:
              "Run in place while pulling you knees as high as possible with each step. Do it as fast as you can. Keep your back straight",
            example: "../assets/gifs/high_stepping.gif",
            youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
            quantity: "00:30",
          },
          {
            id: 2,
            title: "burpees",
            description:
              "Stand with your feet shoulder-width apart and your arms by your sides. Lower into a squat position and place your hands on the floor. Kick or step your legs back into a plank position. Jump or step your legs forward to return to a squat position. Return to the standing position.",
            example: "../assets/gifs/burpees.gif",
            youtube: "https://www.youtube.com/watch?v=818SkLAPyKY",
            quantity: "x10",
          },
          {
            id: 3,
            title: "squats",
            description:
              "Stand with feet a little wider than hip width, then lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. This exercise works the thighs hips buttocks, quads, hamstrings and lower body.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
            quantity: "x15",
          },
          {
            id: 4,
            title: "side lying leg lift left",
            description:
              "Lie down on your right side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your left hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x10",
          },
          {
            id: 5,
            title: "side lying leg lift right",
            description:
              "Lie down on your left side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your right hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x10",
          },
          {
            id: 6,
            title: "side lunges",
            description:
              "Start with your feet shoulder-width apart, toes pointed straight forward. Step out with your right foot as wide as possible. Engage through the right heel as you drop your hips down and back while keeping the left leg straight, stretching the groin on the left leg and keeping both soles of the feet on the ground and toes pointed straight forward. Make sure your right knee is tracking over your right foot the whole motion. Powerfully your right heel into the floor to push yourself back to the full standing start position. This exercise strengthens your glutes and thighs.",
            example: "../assets/gifs/side_lunges.gif",
            youtube: "https://www.youtube.com/watch?v=tlUg1DXhHm8",
            quantity: "x14",
          },
          {
            id: 7,
            title: "bottom leg lift left",
            description:
              "Lie on your left side with your head resting on your left hand. Then put your right foot forward on the floor Lift your left leg up and down.",
            example: "../assets/gifs/bottom_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
            quantity: "x12",
          },
          {
            id: 8,
            title: "bottom leg lift right",
            description:
              "Lie on your right side with your head resting on your right hand. Then put your left foot forward on the floor Lift your right leg up and down.",
            example: "../assets/gifs/bottom_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
            quantity: "x12",
          },
          {
            id: 9,
            title: "jumping squats",
            description:
              "Stand with feet shoulder width and knees slightly bent. Start by doing a regular squat. engage your core, and jump up explosively.",
            example: "../assets/gifs/jumping_squats.webp",
            youtube: "https://www.youtube.com/watch?v=txLE-jOCEsc",
            quantity: "x12",
          },
          {
            id: 10,
            title: "side leg circles left",
            description:
              "Lie on your side, with one leg stacked on top of the other. Extend your bottom arm straight and rest your head on it, while you place your other hand on the floor in front of your body for support. Lift the top leg up and perform leg circles.",
            example: "../assets/gifs/side_leg_circles_left.gif",
            youtube: "https://www.youtube.com/watch?v=VgysBPnVJWg",
            quantity: "x12",
          },
          {
            id: 11,
            title: "side leg circles right",
            description:
              "Lie on your side, with one leg stacked on top of the other. Extend your bottom arm straight and rest your head on it, while you place your other hand on the floor in front of your body for support. Lift the top leg up and perform leg circles.",
            example: "../assets/gifs/side_leg_circles_left.gif",
            youtube: "https://www.youtube.com/watch?v=VgysBPnVJWg",
            quantity: "x12",
          },
          {
            id: 12,
            title: "bench glute kick back left",
            description: "Same with glute kickbacks, just work with a bench.",
            example: "../assets/gifs/bench_glute_kick_back_left.gif",
            youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
            quantity: "x15",
          },
          {
            id: 13,
            title: "bench glute kick back right",
            description: "Same with glute kickbacks, just work with a bench.",
            example: "../assets/gifs/bench_glute_kick_back_right.gif",
            youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
            quantity: "x15",
          },
          {
            id: 14,
            title: "burpees",
            description:
              "Stand with your feet shoulder-width apart and your arms by your sides. Lower into a squat position and place your hands on the floor. Kick or step your legs back into a plank position. Jump or step your legs forward to return to a squat position. Return to the standing position.",
            example: "../assets/gifs/burpees.gif",
            youtube: "https://www.youtube.com/watch?v=818SkLAPyKY",
            quantity: "x6",
          },
          {
            id: 15,
            title: "squats",
            description:
              "Stand with feet a little wider than hip width, then lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. This exercise works the thighs hips buttocks, quads, hamstrings and lower body.",
            example: "../assets/gifs/squats.gif",
            youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
            quantity: "x12",
          },
          {
            id: 16,
            title: "side lying leg lift left",
            description:
              "Lie down on your right side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your left hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x10",
          },
          {
            id: 17,
            title: "side lying leg lift right",
            description:
              "Lie down on your left side on a mat or the floor. Your body should be in a straight line with your legs extended and feet stacked on top of each other. Place your arm straight on the floor under your head or bend your elbow and cradle your head for support. Place your right hand out front for extra support or let it rest on your leg or hip.",
            example: "../assets/gifs/side_lying_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
            quantity: "x10",
          },
          {
            id: 18,
            title: "side lunges",
            description:
              "Start with your feet shoulder-width apart, toes pointed straight forward. Step out with your right foot as wide as possible. Engage through the right heel as you drop your hips down and back while keeping the left leg straight, stretching the groin on the left leg and keeping both soles of the feet on the ground and toes pointed straight forward. Make sure your right knee is tracking over your right foot the whole motion. Powerfully your right heel into the floor to push yourself back to the full standing start position. This exercise strengthens your glutes and thighs.",
            example: "../assets/gifs/side_lunges.gif",
            youtube: "https://www.youtube.com/watch?v=tlUg1DXhHm8",
            quantity: "x12",
          },
          {
            id: 19,
            title: "bottom leg lift left",
            description:
              "Lie on your left side with your head resting on your left hand. Then put your right foot forward on the floor Lift your left leg up and down.",
            example: "../assets/gifs/bottom_leg_lift_left.gif",
            youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
            quantity: "x10",
          },
          {
            id: 20,
            title: "bottom leg lift right",
            description:
              "Lie on your right side with your head resting on your right hand. Then put your left foot forward on the floor Lift your right leg up and down.",
            example: "../assets/gifs/bottom_leg_lift_right.gif",
            youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
            quantity: "x10",
          },
          {
            id: 21,
            title: "jumping squats",
            description:
              "Stand with feet shoulder width and knees slightly bent. Start by doing a regular squat. engage your core, and jump up explosively.",
            example: "../assets/gifs/jumping_squats.webp",
            youtube: "https://www.youtube.com/watch?v=txLE-jOCEsc",
            quantity: "x10",
          },
          {
            id: 22,
            title: "side leg circles left",
            description:
              "Lie on your side, with one leg stacked on top of the other. Extend your bottom arm straight and rest your head on it, while you place your other hand on the floor in front of your body for support. Lift the top leg up and perform leg circles.",
            example: "../assets/gifs/side_leg_circles_left.gif",
            youtube: "https://www.youtube.com/watch?v=VgysBPnVJWg",
            quantity: "x10",
          },
          {
            id: 23,
            title: "side leg circles right",
            description:
              "Lie on your side, with one leg stacked on top of the other. Extend your bottom arm straight and rest your head on it, while you place your other hand on the floor in front of your body for support. Lift the top leg up and perform leg circles.",
            example: "../assets/gifs/side_leg_circles_left.gif",
            youtube: "https://www.youtube.com/watch?v=VgysBPnVJWg",
            quantity: "x10",
          },
          {
            id: 24,
            title: "bench glute kick back left",
            description: "Same with glute kickbacks, just work with a bench.",
            example: "../assets/gifs/bench_glute_kick_back_left.gif",
            youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
            quantity: "x12",
          },
          {
            id: 25,
            title: "bench glute kick back right",
            description: "Same with glute kickbacks, just work with a bench.",
            example: "../assets/gifs/bench_glute_kick_back_right.gif",
            youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
            quantity: "x12",
          },
          {
            id: 26,
            title: "wall sit",
            description:
              "Stand with your back to a wall, feet hip-width apart and slightly in front of you. Lean back into the wall, and slide down like you're sitting down onto a chair. Your knees should bent at 90 degrees with the knees above your ankles. Hold this position for 30 seconds.",
            example: "../assets/png/wall_sit.png",
            youtube: "https://www.youtube.com/watch?v=Yp3ZwACK9v4",
            quantity: "00:40",
          },
          {
            id: 27,
            title: "quad stretch left",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your left foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_left.jpg/",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 28,
            title: "quad stretch right",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your right foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 29,
            title: "lying butterfly stretch",
            description:
              "Lie on the floor with your feet together. Open your knees to the sides. Hold this position.",
            example: "../assets/png/lying_butterfly_stretch.png",
            youtube: "https://www.youtube.com/watch?v=bzfY0Zr3sUE",
            quantity: "00:30",
          },
        ],
      },
    ],
  },
  {
    title: "Routines",
    image: "../assets/images/morning_evening.jpg",
    block: [
      {
        id: 10,
        title: "morning warmup",
        exercisesAmt: "11",
        exercisesTime: "10",
        color:
          "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)",
        exercises: [
          {
            id: 1,
            title: "bridge",
            description:
              "Lie on your back with your knees bent. Tighten the muscles in your stomach. Raise your hips off the floor until they line up with your knees and shoulders. Hold for three deep breaths. Return to the starting position and repeat.",
            example: "../assets/images/bridge.jpg",
            youtube: "https://www.youtube.com/watch?v=-KKADnBsPzw",
            quantity: "00:20",
          },
          {
            id: 2,
            title: "reverse crunches",
            description:
              "Lie on your back with your knees up and hands behind your head. Lift your shoulders and thighs, and then stretch out.",
            example: "../assets/gifs/reverse_crunches.gif",
            youtube: "https://www.youtube.com/watch?v=UwRfRN5fYRg",
            quantity: "x20",
          },
          {
            id: 3,
            title: "abdominal crunches",
            description:
              "Keep your knees comfortably apart. Fold your arms on your chest and tighten your abdominal muscles. Raise your head and shoulders off of the floor. Hold for three deep breaths, then return to starting position.",
            example: "../assets/gifs/abdominal_crunches.gif",
            youtube: "https://www.youtube.com/watch?v=RUNrHkbP4Pc",
            quantity: "x20",
          },
          {
            id: 4,
            title: "butt bridge",
            description:
              "Lie on your back with knees bent, feet flat on the floor and arms at your sides. Push your hips up, hold for one second and slowly lower down. This exercise works your glutes.",
            example: "../assets/gifs/butt_bridge.gif",
            youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
            quantity: "x30",
          },
          {
            id: 5,
            title: "bird dog",
            description:
              "Begin on all fours in the tabletop position. Then stretch your right leg and left arm at the same time. Hold for a few seconds, then go back and repeat with the other side.",
            example: "../assets/gifs/bird_dog.gif",
            youtube: "https://www.youtube.com/watch?v=v0oCYe8__bU",
            quantity: "x25",
          },
          {
            id: 6,
            title: "plank",
            description:
              "Keep your abs tight and look at the space between your hands to ensure a neutral spine position. Hold the position. Hold the position for as long as you can",
            example: "../assets/gifs/plank.gif",
            youtube: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
            quantity: "00:30",
          },
          {
            id: 7,
            title: "cobra stretch",
            description:
              "Lie on your belly. Bend your elbows and place your hands on the floor next to your ribs, stacking your wrist and elbow. On an inhale, begin to peel your chest away from the floor, lifting into spinal extension. Hold this position. Breathe naturally.",
            example: "../assets/png/cobra.png",
            youtube: "https://www.youtube.com/watch?v=z21McHHOpAg",
            quantity: "00:30",
          },
          {
            id: 8,
            title: "shoulder stretch left",
            description:
              "Bring one arm across your upper body and hold it straight. Grasp the elbow with the other arm and gently pull toward your chest. Hold.",
            example: "../assets/gifs/shoulders_stretch_left.gif",
            youtube: "https://www.youtube.com/watch?v=9k0EN2RCGgU",
            quantity: "00:20",
          },
          {
            id: 9,
            title: "shoulder stretch right",
            description:
              "Bring one arm across your upper body and hold it straight. Grasp the elbow with the other arm and gently pull toward your chest. Hold.",
            example: "../assets/gifs/shoulders_stretch_right.gif",
            youtube: "https://www.youtube.com/watch?v=9k0EN2RCGgU",
            quantity: "00:20",
          },
          {
            id: 10,
            title: "butt kicks",
            description:
              "Run in place while kicking your heel up to touch your butt with each step. Try to do it as fast as you can. Keep your chest up, tighten your abs. It's a great exercise for the gluteus and hamstrings.",
            example: "../assets/gifs/butt_kicks.gif",
            youtube: "https://www.youtube.com/watch?v=vXVPvY1UbJI",
            quantity: "00:30",
          },
          {
            id: 11,
            title: "jumping jacks",
            description:
              "Stand upright with your legs together, arms at your sides Bend your knees slightly, and jump into the air. As you jump , spread your legs to be shoulder-width apart. Stretch your arms out and over your head. Jump back to standing position.",
            example: "../assets/gifs/jumping_jacks.gif",
            youtube: "https://www.youtube.com/watch?v=2W4ZNSwoW_4",
            quantity: "x30",
          },
        ],
      },
      {
        id: 11,
        title: "sleepy time stretch",
        exercisesAmt: "13",
        exercisesTime: "13",
        color:
          "linear-gradient(90deg, rgba(128,27,150,0.7567401960784313) 0%, rgba(214,189,221,1) 78%)",
        exercises: [
          {
            id: 1,
            title: "quad stretch left",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your left foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_left.jpg/",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 2,
            title: "quad stretch right",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your right foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 3,
            title: "quad stretch left",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your left foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_left.jpg/",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 4,
            title: "quad stretch right",
            description:
              "Stand up tall and shift your weight to the right leg. Lift your right foot and grasp it with your left hand. Pull the left foot toward your butt until you feel the stretch in your quads. Hold this position.",
            example: "../assets/images/quad_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
            quantity: "00:30",
          },
          {
            id: 5,
            title: "triceps stretch left",
            description:
              "Stand with your arms relaxed at your sides. With your affected arm, gently bend your elbow up toward you as far as possible. Your palm should face up. Then straighten your arm as much as you can.",
            example: "../assets/images/triceps_stretch_left.jpg",
            youtube: "https://www.youtube.com/watch?v=L9IGOcrdcFk",
            quantity: "00:30",
          },
          {
            id: 6,
            title: "triceps stretch right",
            description:
              "Stand with your arms relaxed at your sides. With your affected arm, gently bend your elbow up toward you as far as possible. Your palm should face up. Then straighten your arm as much as you can.",
            example: "../assets/images/tricep_stretch_right.jpg",
            youtube: "https://www.youtube.com/watch?v=L9IGOcrdcFk",
            quantity: "00:30",
          },
          {
            id: 7,
            title: "cobra stretch",
            description:
              "Lie on your belly. Bend your elbows and place your hands on the floor next to your ribs, stacking your wrist and elbow. On an inhale, begin to peel your chest away from the floor, lifting into spinal extension. Hold this position. Breathe naturally.",
            example: "../assets/png/cobra.png",
            youtube: "https://www.youtube.com/watch?v=z21McHHOpAg",
            quantity: "00:30",
          },
          {
            id: 8,
            title: "child pose",
            description:
              "Keep on the floor with your toes together and your knees hip-width apart. Rest your palms on top of your thighs. On an exhale lower your torso between your knees. Extend your arms alongside your torso with your palms facing down. Relax your shoulders towards the ground. Rest in the pose for as long as you needed.",
            example: "../assets/png/child_pose.png",
            youtube: "https://www.youtube.com/watch?v=DMwRPGMPB10",
            quantity: "00:30",
          },
          {
            id: 9,
            title: "cat cow pose",
            description:
              "Keep your hands shoulder-width apart and your knees directly below your hips. Inhale deeply while curving your lower back and bringing your head up, tilting your pelvis up like a cow. Exhale deeply and bring your abdomen in, arching your spine and bringing your head and pelvis down like a cat. Repeat several times.",
            example: "../assets/gifs/cat_cow_pose.gif",
            youtube: "https://www.youtube.com/watch?v=w_UKcI1Ftn8",
            quantity: "00:30",
          },
          {
            id: 10,
            title: "lying butterfly stretch",
            description:
              "Lie on the floor with your feet together. Open your knees to the sides. Hold this position.",
            example: "../assets/png/lying_butterfly_stretch.png",
            youtube: "https://www.youtube.com/watch?v=bzfY0Zr3sUE",
            quantity: "00:30",
          },
          {
            id: 11,
            title: "bridge",
            description:
              "Lie on your back with your knees bent. Tighten the muscles in your stomach. Raise your hips off the floor until they line up with your knees and shoulders. Hold for three deep breaths. Return to the starting position and repeat.",
            example: "../assets/images/bridge.jpg",
            youtube: "https://www.youtube.com/watch?v=-KKADnBsPzw",
            quantity: "00:30",
          },
          {
            id: 12,
            title: "lying twist stretch left",
            description:
              "Lie on your back with your arms extended at your sides. Bend your legs and twist your legs to the left. Hold this position. This exercise stretches your obliques and lower back.",
            example: "../assets/images/lying_twist_stretch_left.jpg",
            youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
            quantity: "00:30",
          },
          {
            id: 13,
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
