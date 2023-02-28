const trainingsData = {
  trainings: [
    {
      id: 1,
      title: "высокий шаг",
      description:
        "Бегите на месте, подтягивая колени как можно выше с каждым шагом. Делайте это так быстро, как можете. Держите спину прямою",
      example: "../assets/gifs/high_stepping.gif",
      youtube: "https://www.youtube.com/watch?v=Cmxr9xcNhgU",
      quantity: "00:22",
    },
    {
      id: 2,
      title: "боковой прыжок",
      description:
        "Прыгните обеими ногами вправо, а затем влево быстрым повторяющимся движением.",
      example: "../assets/gifs/side_hop.gif",
      youtube: "https://www.youtube.com/watch?v=nYmUEJIBj3c",
      quantity: "00:30",
    },
    {
      id: 3,
      title: "приседания",
      description:
        " Встаньте, ноги чуть шире ширины бедер, затем опустите тело, пока бедра не окажутся параллельны полу. Колени должны быть вытянуты в том же направлении, что и пальцы ног. Это упражнение работает с бедрами, ягодицами, квадрицепсами, подколенными сухожилиями и нижней частью тела.",
      example: "../assets/gifs/squats.gif",
      youtube: "https://www.youtube.com/watch?v=42bFodPahBU",
      quantity: "x12",
    },
    {
      id: 4,
      title: "отжимания от стены",
      description:
        "Стоя лицом к стене, встаньте на расстоянии вытянутой руки. Ваше тело должно быть под углом 45 градусов, когда вы кладете руки на стену. Держите ноги на ширине плеч. Опуститесь к стене. Держите тело прямо.",
      example: "../assets/gifs/wall_push_ups.gif",
      youtube: "https://www.youtube.com/watch?v=EOf3cGIQpA4",
      quantity: "x15",
    },
    {
      id: 5,
      title: "подъем ягодиц",
      description:
        "Лягте на спину, колени согнуты, ступни на полу, руки по бокам. Поднимите бедра вверх, задержитесь на одну секунду и медленно опуститесь. В этом упражнении работают ваши ягодицы.",
      example: "../assets/gifs/butt_bridge.gif",
      youtube: "https://www.youtube.com/watch?v=9qo48CYN06w",
      quantity: "x14",
    },
    {
      id: 6,
      title: "пожарный гидрант левый",
      description:
        "Начните с рук и коленей на полу, руки прямо под плечами, а колени под бедрами. Затем попытайтесь поднять левую ногу в сторону под углом 90 градусов.",
      example: "../assets/gifs/fire_hydrand_left.gif",
      youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
      quantity: "x10",
    },
    {
      id: 7,
      title: "планка",
      description:
        "Держите пресс напряженным и смотрите на пространство между руками, чтобы обеспечить нейтральное положение позвоночника. Удерживайте позицию столько, сколько сможете.",
      example: "../assets/gifs/plank.gif",
      youtube: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
      quantity: "00:30",
    },
    {
      id: 8,
      title: "удар пяткой по ягодице",
      description:
        "Бегите на месте, поднимая пятку вверх, чтобы при каждом шаге касаться ягодиц. Постарайтесь делать это как можно быстрее. Распрямите грудь, напрягите пресс. Это отличное упражнение для ягодичных и подколенных сухожилий.",
      example: "../assets/gifs/butt_kicks.gif",
      youtube: "https://www.youtube.com/watch?v=vXVPvY1UbJI",
      quantity: "00:30",
    },
    {
      id: 9,
      title: "растяжка кобры",
      description:
        "Лягте на живот. Согните руки в локтях и положите руки на пол рядом с ребрами. На вдохе начните отрывать грудь от пола, поднимая позвоночник. Держите эту позицию. Дыхание спокойное.",
      example: "../assets/png/cobra.png",
      youtube: "https://www.youtube.com/watch?v=z21McHHOpAg",
      quantity: "00:30",
    },
    {
      id: 10,
      title: "поза ребенка",
      description:
        "Лягте на пол, сомкнув пальцы ног и расставив колени на ширине плеч. Положите ладони на верхнюю часть бедер. На выдохе опустите туловище между коленями. Вытяните руки вдоль туловища ладонями вниз. Расслабьте плечи по направлению к земле. Отдыхайте в позе столько, сколько вам нужно.",
      example: "../assets/png/child_pose.png",
      youtube: "https://www.youtube.com/watch?v=DMwRPGMPB10",
      quantity: "00:30",
    },
    {
      id: 11,
      title: "растяжка левое колено к груди",
      description:
        "Лягте на спину, вытянув ноги и выпрямив спину. Держите бедра на одном уровне, а нижнюю часть спины на полу. Подтяните левое колено к груди как можно сильнее, удерживая правую ногу прямо на земле. Оставайтесь в этой позиции.",
      example: "../assets/images/knee_to_chest_left.jpg",
      youtube: "https://www.youtube.com/watch?v=bJms9YyjoBI",
      quantity: "00:30",
    },
    {
      id: 12,
      title: "растяжка правое колено к груди",
      description:
        "Лягте на спину, вытянув ноги и выпрямив спину. Держите бедра на одном уровне, а нижнюю часть спины на полу. Подтяните правое колено к груди как можно сильнее, удерживая правую ногу прямо на земле. Оставайтесь в этой позиции.",
      example: "../assets/images/knee_to_chest_right.jpg",
      youtube: "https://www.youtube.com/watch?v=bJms9YyjoBI",
      quantity: "00:30",
    },
    {
      id: 13,
      title: "джампинг джек",
      description:
        "Встаньте прямо, ноги вместе, руки по бокам. Слегка согните колени и подпрыгните. Во время прыжка расставьте ноги на ширине плеч. Вытяните руки в стороны и над головой. Прыжок обратно в положение стоя.",
      example: "../assets/gifs/jumping_jacks.gif",
      youtube: "https://www.youtube.com/watch?v=2W4ZNSwoW_4",
      quantity: "x30",
    },
    {
      id: 14,
      title: "касания пяток лежа на спине",
      description:
        "Держите спину ровной и согните колени под углом 90 градусов, ступни плотно прижаты к полу. Согнитесь, чтобы дотянуться правой рукой до правой лодыжки. Повторите это движение с левой стороны. Держите нижнюю часть спины на полу.",
      example: "../assets/gifs/heel_touch.gif",
      youtube: "https://www.youtube.com/watch?v=9bR-elyolBQ",
      quantity: "x20",
    },
    {
      id: 15,
      title: "птица-собака",
      description:
        "Станьте на четвереньки в положении стола. Затем одновременно вытяните правую ногу и левую руку. Задержитесь на несколько секунд, затем вернитесь и повторите с другой стороной.",
      example: "../assets/gifs/bird_dog.gif",
      youtube: "https://www.youtube.com/watch?v=v0oCYe8__bU",
      quantity: "x25",
    },
    {
      id: 16,
      title: "обратные скручивания",
      description: "Лягте на спину, соедините колени и локти.",
      example: "../assets/gifs/reverse_crunches.gif",
      youtube: "https://www.youtube.com/watch?v=UwRfRN5fYRg",
      quantity: "x18",
    },
    {
      id: 17,
      title: "поднятие ног",
      description:
        "Лягте на спину, ноги прямые и вместе. Держите ноги прямо и поднимите их к потолку, пока ягодицы не оторвутся от пола. Медленно опустите ноги обратно вниз, пока они не окажутся чуть выше пола. Задержитесь на мгновение. Поднимите ноги обратно вверх. Повторите.",
      example: "../assets/gifs/leg_raisers.gif",
      youtube: "https://www.youtube.com/watch?v=dGKbTKLnym4",
      quantity: "x8",
    },
    {
      id: 18,
      title: "скручивания влево в положении лежа",
      description:
        "Лягте на спину, вытянув руки по бокам. Согните ноги и поверните их влево. Держите эту позицию. Это упражнение растягивает косые мышцы живота и нижнюю часть спины.",
      example: "../assets/images/lying_twist_stretch_left.jpg",
      youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
      quantity: "00:30",
    },
    {
      id: 19,
      title: "скручивания вправо в положении лежа",
      description:
        "Лягте на спину, вытянув руки по бокам. Согните ноги и поверните их вправо. Держите эту позицию. Это упражнение растягивает косые мышцы живота и нижнюю часть спины.",
      example: "../assets/images/lying_twist_stretch_right.jpg",
      youtube: "https://www.youtube.com/watch?v=ZI-j_POtzlU",
      quantity: "00:30",
    },
    {
      id: 20,
      title: "альпинист",
      description:
        "Положите обе руки и колени на пол. Поставьте правую ногу рядом с правой рукой и вытяните левую ногу. Одним плавным движением поменяйте ноги, удерживая руки в том же положении.",
      example: "../assets/gifs/mountain_climber.gif",
      youtube: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
      quantity: "x18",
    },
    {
      id: 21,
      title: "отведение левой ноги назад",
      description:
        "Поднимите левую ногу и максимально напрягите ягодицы. Держите ​​​​напряжение.",
      example: "../assets/gifs/donkey_kicks_left.gif",
      youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
      quantity: "x12",
    },
    {
      id: 22,
      title: "отведение правой ноги назад",
      description:
        "Поднимите левую ногу и максимально напрягите ягодицы. Держите ​​​​напряжение.",
      example: "../assets/gifs/donkey_kicks_right.gif",
      youtube: "https://www.youtube.com/watch?v=4ranVQDqlaU",
      quantity: "x12",
    },
    {
      id: 23,
      title: "бёрпи",
      description:
        "Встаньте, ноги на ширине плеч и руки по бокам. Присядьте и положите руки на пол. Щагните ногами назад в положение планки. Подпрыгните или шагните ногами вперед, чтобы вернуться в присед. Вернитесь в положение стоя.",
      example: "../assets/gifs/burpees.gif",
      youtube: "https://www.youtube.com/watch?v=818SkLAPyKY",
      quantity: "x5",
    },
    {
      id: 24,
      title: "махи ногами лежа на спине",
      description:
        "Лягте на спину, руки по бокам и слегка приподнимите ноги. Затем быстро поднимите правую ногу вверх и одновременно опустите левую руку. Это упражнение может увеличить силу корпуса и улучшить вашу выносливость",
      example: "../assets/gifs/flutter_kicks.gif",
      youtube: "https://www.youtube.com/watch?v=K5wuM_gNWyw",
      quantity: "00:15",
    },
    {
      id: 25,
      title: "пожарный гидрант правый",
      description:
        "Начните с рук и коленей на полу, руки прямо под плечами, а колени под бедрами. Затем попытайтесь поднять правую ногу в сторону под углом 90 градусов.",
      example: "../assets/gifs/fire_hydrand_right.gif",
      youtube: "https://www.youtube.com/watch?v=7LnuhLi-78I",
      quantity: "x10",
    },
    {
      id: 26,
      title: "короткие шаги руками",
      description:
        "Поставьте ноги на ширине плеч. Наклоните корпус вперед и шагайтк руками вперед по полу, удерживая ноги на месте, пока не окажетесь  положении планки. Затем шагайте руками обратно в стартовую позицию.",
      example: "../assets/gifs/inchworms.gif",
      youtube: "https://www.youtube.com/watch?v=ZY2ji_Ho0dA",
      quantity: "x10",
    },
    {
      id: 27,
      title: "прыжки без скакалки",
      description:
        "Это хорошее упражнение для разогрева. Представьте, что вы держите в каждой руке ручку скакалки. Прыгайте и попеременно приземляйтесь на стопы, одновременно вращая запястьями, как будто вы крутите веревку.",
      example: "../assets/gifs/skipping_without_rope.gif",
      youtube: "https://www.youtube.com/watch?v=CYGeazlNbU4",
      quantity: "00:30",
    },
    {
      id: 28,
      title: "растяжка в позе бабочки",
      description:
        "Лягте на пол, ноги вместе. Разведите колени в стороны. Держите эту позицию.",
      example: "../assets/png/lying_butterfly_stretch.png",
      youtube: "https://www.youtube.com/watch?v=bzfY0Zr3sUE",
      quantity: "00:30",
    },
    {
      id: 29,
      title: "выпады",
      description:
        "Начните в положении стоя, ноги на ширине плеч. Сделайте шаг вперед длиннее, чем шаг ходьбы, чтобы одна нога была впереди туловища, а другая сзади. Согните колени примерно на 90 градусов. Не забывайте держать туловище в вертикальном положении и напрягать мышцы корпуса. Затем резко оттолкнитесь передней ногой, чтобы вернуться в исходное положение.",
      example: "../assets/gifs/lunges.gif",
      youtube: "https://www.youtube.com/watch?v=yIc1YbVLMZ8",
      quantity: "x14",
    },
    {
      id: 30,
      title: "хлопки над головой",
      description:
        "Встаньте, ноги на ширине плеч, руки вытянуты в стороны. Поднимите руки и хлопните в ладоши над головой. Держите руки прямыми во время выполнения упражнения.",
      example: "../assets/gifs/claps_over_head.gif",
      youtube: "https://www.youtube.com/watch?v=2i80fjp5saU",
      quantity: "x15",
    },
    {
      id: 31,
      title: "растяжка приводящей мышцы бедра в положении стоя",
      description:
        "Встаньте прямо, напрягите корпус. Шагните влево, оставив правую ногу на месте. Согните левое колено и сделайте паузу, когда верхняя часть левого бедра окажется параллельно земле. Ваша правая нога должна быть полностью прямой. Пальцы на обеих ногах должны быть направлены прямо вперед. Удерживайте эту растяжку от 20 до 40 секунд. Вернитесь в исходное положение и повторите в другую сторону.",
      example: "../assets/gifs/adductor_stretch_in_standing.gif",
      youtube: "https://www.youtube.com/watch?v=MjFb2MyaNjs",
      quantity: "x15",
    },
    {
      id: 32,
      title: "скручиваня стоя",
      description:
        "Встаньте, ноги вместе, колени слегка согнуты, руки за головой. Напрягите пресс и попытайтесь правым локтем коснуться левого колена. Повторите с другой сторой.",
      example: "../assets/gifs/standing_bicycle_crunch.gif",
      youtube: "https://www.youtube.com/watch?v=8lsAXzvVHrc",
      quantity: "x14",
    },
    {
      id: 33,
      title: "ножницы",
      description:
        "Поднимите руки прямо перед собой. Удерживая руки параллельно земле, отведите их назад, пока они не окажутся на одном уровне с туловищем. Вернитесь в исходное положение, позволяя рукам скреститься. Повторяйте движение.",
      example: "../assets/gifs/arm_scissors.gif",
      youtube: "https://www.youtube.com/watch?v=pFrJQ-MyL10",
      quantity: "00:15",
    },
    {
      id: 34,
      title: "боковые выпады",
      description:
        "Поставьте ноги на ширине плеч, носки направьте вперед. Шагните правой ногой как можно шире. Задействуйте правую пятку, опуская бедра вниз и назад, удерживая левую ногу прямо, растягивая пах на левой ноге и удерживая обе ступни на земле. Убедитесь, что ваше правое колено следует за правой ногой на протяжении всего движения. Мощно упритесь правой пяткой в ​​пол, чтобы вернуться в исходное положение стоя. Это упражнение укрепляет ягодицы и бедра.",
      example: "../assets/gifs/side_lunges.gif",
      youtube: "https://www.youtube.com/watch?v=tlUg1DXhHm8",
      quantity: "x14",
    },
    {
      id: 35,
      title: "подъем левой ноги лежа на боку",
      description:
        "Лягте на правый бок на коврик или пол. Ваше тело должно составлять прямую линию, ноги вытянуты. Положите прямую руку на пол под голову или согните локоть и обхватите голову для поддержки. Вытяните левую руку вперед для дополнительной поддержки или положите ее на ногу или бедро.",
      example: "../assets/gifs/side_lying_leg_lift_left.gif",
      youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
      quantity: "x10",
    },
    {
      id: 36,
      title: "подъем левой ноги лежа на боку",
      description:
        "Лягте на левый бок на коврик или пол. Ваше тело должно составлять прямую линию, ноги вытянуты. Положите прямую руку на пол под голову или согните локоть и обхватите голову для поддержки. Вытяните левую руку вперед для дополнительной поддержки или положите ее на ногу или бедро.",
      example: "../assets/gifs/side_lying_leg_lift_right.gif",
      youtube: "https://www.youtube.com/watch?v=VlwBJE1WtOQ",
      quantity: "x10",
    },
    {
      id: 37,
      title: "хлопки под коленями",
      description:
        "Сядьте на пол, согнув колени, слегка приподняв ступни и отведя спину назад. Поочередно поднимайте ноги и хлопайте под коленями. Выдыхайте, когда поднимаете ноги и хлопаете под коленями. Держите верхнюю часть тела неподвижно, а шею в нейтральном положении.",
      example: "../assets/png/clapping_crunches.png",
      youtube: "https://www.youtube.com/watch?v=LUQt2wSOFNM",
      quantity: "x10",
    },
    {
      id: 38,
      title: "велосипед",
      description:
        "Лягте на коврик для упражнений лицом вверх, ноги прямые, ступни на полу, голова и плечи слегка приподняты над ковриком. Положите обе руки за голову. Поднимите колени к груди, пока голени не будут параллельны полу.",
      example: "../assets/png/bicycle_crunches.png",
      youtube: "https://www.youtube.com/watch?v=-nJkAJpQemI",
      quantity: "x14",
    },
    {
      id: 39,
      title: "русский твист",
      description:
        "Сядьте, слегка приподняв ноги и откинув спину назад. Затем соедините руки и покрутите их из стороны в сторону. Держите ноги неподвижно при скручивании, а шею в нейтральном положении. Напрягите пресс.",
      example: "../assets/gifs/russian_twist.gif",
      youtube: "https://www.youtube.com/watch?v=DJQGX2J4IVw",
      quantity: "x16",
    },
    {
      id: 40,
      title: "наклонный поворот",
      description:
        "Лягте на спину, вытянув ноги и поставив локоть прямо под плечи. Поднимите левую ногу вверх под углом 45 градусов, вытянув правую руку над левым боком. Затем медленно вернитесь в исходное положение. Повторите несколько раз, а затем переключитесь на другую сторону.",
      example: "../assets/gifs/reclined_oblique_twist.gif",
      youtube: "https://www.youtube.com/watch?v=XKW5jru5pGo",
      quantity: "x16",
    },
    {
      id: 41,
      title: "ноги в небо",
      description:
        "Лягте на спину, упритесь руками в пол. Активизируйте нижнюю часть брюшного пресса и поднимите ноги, пока они не станут перпендикулярны земле.",
      example: "../assets/gifs/heels_to_the heaven.gif",
      youtube: "https://www.youtube.com/watch?v=wdS2U6z0JGY",
      quantity: "x12",
    },
    {
      id: 42,
      title: "перекрестная планка на коленях",
      description:
        "Встаньте на пол на четвереньки и примите положение планки. Чтобы выполнить это движение, напрягите пресс и подтяните левую ногу к правому локтю и назад. Повторите со второй ногой.",
      example: "../assets/gifs/cross_knee_plank.gif",
      youtube: "https://www.youtube.com/watch?v=O4fFIYpYySU",
      quantity: "x28",
    },
    {
      id: 43,
      title: "скручивания со скрещенными руками",
      description:
        "Лягте на спину и скрестите руки на груди. Согните колени и твердо поставьте стопы на пол. Напрягите корпус и оторвите плечи и верхнюю часть спины от пола. Задержитесь в верхней точке на секунду, а затем вернитесь в исходное положение.",
      example: "../assets/gifs/cross_arm_crunches.gif",
      youtube: "https://www.youtube.com/watch?v=Qz3ylqqJ90M",
      quantity: "x18",
    },
    {
      id: 44,
      title: "скручивания с вытянутыми руками",
      description:
        "Лягте на пол. Вытяните руки, не отрывая рук и ног от земли. Соедините руки и ноги посередине/ вернитесь в исходное положение.",
      example: "../assets/gifs/x_man_crunch.gif",
      youtube: "https://www.youtube.com/watch?v=f_ZsJgaqFNE",
      quantity: "x18",
    },
    {
      id: 45,
      title: "боковые скручивания влево",
      description:
        "Лягте на бок, выпрямите ноги и вытяните руку, а другую руку положите на голову для равновесия. Напрягите косые мышцы живота.",
      example: "../assets/gifs/side_crunch_left.gif",
      youtube: "https://www.youtube.com/watch?v=w0OWFjfI3zM",
      quantity: "x16",
    },
    {
      id: 46,
      title: "боковые скручивания вправо",
      description:
        "Лягте на бок, выпрямите ноги и вытяните руку, а другую руку положите на голову для равновесия. Напрягите косые мышцы живота.",
      example: "../assets/gifs/side_crunch_right.gif",
      youtube: "https://www.youtube.com/watch?v=w0OWFjfI3zM",
      quantity: "x16",
    },
    {
      id: 47,
      title: "позиция v",
      description:
        "Сядьте на пол, поднимите ноги вверх под углом 45 градусов и наклоните верхнюю часть тела назад под углом 45 градусов. Вытяните руки вперед. Держите эту позицию.",
      example: "../assets/images/vhold.jpg",
      youtube: "https://www.youtube.com/watch?v=WGwI629aTAY",
      quantity: "00:30",
    },
    {
      id: 48,
      title: "отведение левой ноги назад в положении стоя",
      description:
        "Вытяните левую ногу назад и вверх. Подошва правой ноги должна быть обращена к потолку. Напрягите ягодичные мышцы в верхней точке движения и задержитесь на некоторое время. Вернитесь в исходное положение, и повторите.",
      example: "../assets/gifs/standing_glute_kickbacks_left.gif",
      youtube: "https://www.youtube.com/watch?v=pn2EZjEE_ZU",
      quantity: "x10",
    },
    {
      id: 49,
      title: "отведение правой ноги назад в положении стоя",
      description:
        "Вытяните правую ногу назад и вверх. Подошва правой ноги должна быть обращена к потолку. Напрягите ягодичные мышцы в верхней точке движения и задержитесь на некоторое время. Вернитесь в исходное положение, и повторите.",
      example: "../assets/gifs/standing_glute_kickbacks_right.gif",
      youtube: "https://www.youtube.com/watch?v=pn2EZjEE_ZU",
      quantity: "x10",
    },
    {
      id: 50,
      title: "выпад на коленях вправо",
      description:
        "Kneel on a mat with both knees, then place one foot forward so that you have a 90-degree angle at the hip and knee. Place your hands on the front knee for support (if needed). This is the start position of the kneeling hip flexor stretch. Keeping the torso upright, slowly lean forward until you feel a comfortable stretch through the groin and top of the thigh (rear leg).",
      example: "../assets/gifs/kneeling_lunge_stretch_left.gif",
      youtube: "https://www.youtube.com/watch?v=3wthmvKWoOU",
      quantity: "00:30",
    },
    {
      id: 51,
      title: "выпад на коленях влево",
      description:
        "Встаньте на коврик обоими коленями, затем поставьте одну ногу вперед так, чтобы между бедром и коленом образовался угол 90 градусов. Положите руки на колено для поддержки (при необходимости). Держа туловище в вертикальном положении, медленно наклоняйтесь вперед, пока не почувствуете комфортное растяжение в паху и верхней части бедра (задняя нога).",
      example: "../assets/gifs/kneeling_lunge_stretch_right.gif",
      youtube: "https://www.youtube.com/watch?v=3wthmvKWoOU",
      quantity: "00:30",
    },
    {
      id: 52,
      title: "выпад на коленях вправо",
      description:
        "Встаньте на коврик обоими коленями, затем поставьте одну ногу вперед так, чтобы между бедром и коленом образовался угол 90 градусов. Положите руки на колено для поддержки (при необходимости). Держа туловище в вертикальном положении, медленно наклоняйтесь вперед, пока не почувствуете комфортное растяжение в паху и верхней части бедра (задняя нога).",
      example: "../assets/gifs/bottom_leg_lift_left.gif",
      youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
      quantity: "x12",
    },
    {
      id: 53,
      title: "подъем ноги вправо",
      description:
        "Лягте на правый бок, положив голову на правую руку. Затем поставьте левую ногу вперед на пол, поднимите правую ногу вверх и вниз.",
      example: "../assets/gifs/bottom_leg_lift_right.gif",
      youtube: "https://www.youtube.com/watch?v=Dm1GSX1vItY",
      quantity: "x12",
    },
    {
      id: 54,
      title: "подъем ноги влево",
      description:
        "Лягте на правый бок, положив голову на правую руку. Затем поставьте левую ногу вперед на пол, поднимите правую ногу вверх и вниз.",
      example: "../assets/gifs/split_squat_left.gif",
      youtube: "https://www.youtube.com/watch?v=SFSZVKzqnXA",
      quantity: "x10",
    },
    {
      id: 55,
      title: "реверансы",
      description:
        "Поставьте ноги на ширине плеч, руки на бедрах. Сделайте большой шаг назад правой ногой, скрестив ее за левой. Согните колени и опустите бедра, пока левое бедро не окажется почти параллельно полу. Держите туловище прямо. Затем повторите с другой стороны.",
      example: "../assets/gifs/curtsy_lunges.gif",
      youtube: "https://www.youtube.com/watch?v=-rTyKlHjYT8",
      quantity: "x14",
    },
    {
      id: 56,
      title: "задние выпады вправой ногой с прыжком",
      description:
        "Из положения стоя сделайте правой ногой шаг назад в выпад. Вытяните ту же ногу вперед, согнув колено. Подпрыгните, подняв колено как можно выше.",
      example: "../assets/gifs/lunge_knee_hops_right.gif",
      youtube: "https://www.youtube.com/watch?v=NSy3QKsZ7uI",
      quantity: "x12",
    },
    {
      id: 57,
      title: "задние выпады левой ногой с прыжком",
      description:
        "Из положения стоя сделайте левой ногой шаг назад  в выпад. Вытяните ту же ногу вперед, согнув колено. Подпрыгните, подняв колено как можно выше.",
      example: "../assets/gifs/lunge_knee_hops_left.gif",
      youtube: "https://www.youtube.com/watch?v=NSy3QKsZ7uI",
      quantity: "x12",
    },
    {
      id: 58,
      title: "отведение левой ноги назад на скамейке",
      description:
        "Аналогичное упражнение 'отведение ноги назад', только на скамейке.",
      example: "../assets/gifs/bench_glute_kick_back_left.gif",
      youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
      quantity: "x16",
    },
    {
      id: 59,
      title: "отведение правой ноги назад на скамейке",
      description:
        "Аналогичное упражнение 'отведение ноги назад', только на скамейке.",
      example: "../assets/gifs/bench_glute_kick_back_right.gif",
      youtube: "https://www.youtube.com/watch?v=Mi4H6YUVMCQ",
      quantity: "x16",
    },
    {
      id: 60,
      title: "сумо приседания",
      description:
        "Начните с традиционного приседания, поставив ноги на ширине плеч и направив носки вперед. Сцепите руки вместе на груди. Сделайте шаг в сторону правой ногой, пока ваша стойка не станет шириной 3–4 фута или шире ширины бедра. Шире допустимо, если вы можете выполнить движение правильно. Слегка отведите бедра назад и согните колени, опуская тело в положение приседа. Опустите копчик прямо к полу. Следите за тем, чтобы ваш позвоночник оставался нейтральным, копус был задействован, а глаза смотрели вперед во время движения. Опускайтесь, пока бедра не будут параллельны полу. Вы можете опуститься ниже или укоротить присед, если вы не можете поддерживать прямое положение ног. Задержитесь в положении приседа на несколько секунд. Затем, задействовав ягодичные мышцы, поднимитесь.",
      example: "../assets/gifs/squats.gif",
      youtube: "https://www.youtube.com/watch?v=Z2F0bArQH5s",
      quantity: "x15",
    },
    {
      id: 61,
      title: "мостик на одной ноге левый",
      description:
        "Поднимите левую ногу. Одновременно напрягайте мышцы корпуса, как будто пытаясь подтянуть пупок к позвоночнику. Задержитесь в этом положении на счет один или два. Медленно и контролируемо опустите бедра на пол, удерживая ногу вытянутой, чтобы вернуться в исходное положение. Повторите на той же ноге желаемое количество повторений.",
      example: "../assets/gifs/single_leg_bridge_left.gif",
      youtube: "https://www.youtube.com/watch?v=ZgvzRn-16zI",
      quantity: "x12",
    },
    {
      id: 62,
      title: "мостик на одной ноге правый",
      description:
        "Поднимите левую ногу. Одновременно напрягайте мышцы корпуса, как будто пытаясь подтянуть пупок к позвоночнику. Задержитесь в этом положении на счет один или два. Медленно и контролируемо опустите бедра на пол, удерживая ногу вытянутой, чтобы вернуться в исходное положение. Повторите на той же ноге желаемое количество повторений.",
      example: "../assets/gifs/single_leg_bridge_right.gif",
      youtube: "https://www.youtube.com/watch?v=ZgvzRn-16zI",
      quantity: "x12",
    },
    {
      id: 63,
      title: "приседания с прыжками",
      description:
        "Поставьте ноги на ширине плеч и слегка согните их в коленях. Резко подпрыгните.",
      example: "../assets/gifs/jumping_squats.webp",
      youtube: "https://www.youtube.com/watch?v=txLE-jOCEsc",
      quantity: "x12",
    },
    {
      id: 64,
      title: "аыпады назад",
      description:
        "Встаньте прямо, расставив ноги на расстоянии бедер. Сделайте большой шаг назад и опустите тело к полу. Обе ноги должны быть согнуты под углом 90 градусов в нижней точке выпада. Поднимитесь и повторите.",
      example: "../assets/gifs/backward_lunge.gif",
      youtube: "https://www.youtube.com/watch?v=_LGpDtENZ5U",
      quantity: "x14",
    },
    {
      id: 65,
      title: "растяжка левой ноги",
      description:
        "Встаньте прямо и перенесите вес на правую ногу. Поднимите левую ногу и возьмитесь за нее левой рукой. Подтяните левую ногу к ягодицам, пока не почувствуете растяжение в квадрицепсах. Держите эту позицию.",
      example: "../assets/images/quad_stretch_left.jpg",
      youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
      quantity: "00:30",
    },
    {
      id: 66,
      title: "растяжка правой ноги",
      description:
        "Встаньте прямо и перенесите вес на левую ногу. Поднимите правую ногу и возьмитесь за нее правой рукой. Подтяните правую ногу к ягодицам, пока не почувствуете растяжение в квадрицепсах. Держите эту позицию.",
      example: "../assets/images/quad_stretch_right.jpg",
      youtube: "https://www.youtube.com/watch?v=TfcRyYf7WLg",
      quantity: "00:30",
    },
    {
      id: 67,
      title: "фрог пресс",
      description:
        "Лягте на спину, поднимите ноги на 45 градусов от земли, подтяните колени и разведите их, соединив стопы вместе. Вернитесь в исходное положение.",
      example: "../assets/gifs/frog_press.gif",
      youtube: "https://www.youtube.com/watch?v=JvA7t9xKWgg",
      quantity: "x12",
    },
    {
      id: 68,
      title: "боковые круги левой ногой",
      description:
        "Лягте на бок, положив одну ногу на другую. Вытяните нижнюю руку прямо и положите на нее голову, а другую руку положите на пол перед собой для поддержки. Поднимите верхнюю ногу вверх и выполните круговые движения ногой.",
      example: "../assets/gifs/side_leg_circles_left.gif",
      youtube: "https://www.youtube.com/watch?v=VgysBPnVJWg",
      quantity: "x12",
    },
    {
      id: 69,
      title: "сидение у стены",
      description:
        "Встаньте спиной к стене, ноги на ширине плеч и немного впереди вас. Прислонитесь спиной к стене и соскользните вниз, как будто вы садитесь на стул. Ваши колени должны быть согнуты под углом 90 градусов, а колени должны находиться выше лодыжек. Задержитесь в этом положении на 30 секунд.",
      example: "../assets/png/wall_sit.png",
      youtube: "https://www.youtube.com/watch?v=Yp3ZwACK9v4",
      quantity: "00:40",
    },
    {
      id: 70,
      title: "мостик",
      description:
        "Лягте на спину, согнув колени. Напрягите мышцы живота. Поднимите бедра от пола, пока они не выровняются с коленями и плечами. Задержитесь на три глубоких вдоха. Вернитесь в исходное положение и повторите.",
      example: "../assets/images/bridge.jpg",
      youtube: "https://www.youtube.com/watch?v=-KKADnBsPzw",
      quantity: "x14",
    },
    {
      id: 71,
      title: "кранч-машина",
      description:
        "Держите колени разведенными. Вытяните руки вперед и напрягите мышцы живота. Оторвите голову и плечи от пола. Задержитесь на три глубоких вдоха, затем вернитесь в исходное положение.",
      example: "../assets/gifs/abdominal_crunches.gif",
      youtube: "https://www.youtube.com/watch?v=RUNrHkbP4Pc",
      quantity: "x20",
    },
    {
      id: 72,
      title: "растяжка плеча влево",
      description:
        "Положите одну руку впереди и держите ее прямо. Другой рукой возьмитесь за локоть и осторожно потяните к груди. Дерите в таком положении.",
      example: "../assets/gifs/shoulders_stretch_left.gif",
      youtube: "https://www.youtube.com/watch?v=9k0EN2RCGgU",
      quantity: "00:20",
    },
    {
      id: 73,
      title: "растяжка плеча вправо",
      description:
        "Положите одну руку впереди и держите ее прямо. Другой рукой возьмитесь за локоть и осторожно потяните к груди. Дерите в таком положении",
      example: "../assets/gifs/shoulders_stretch_right.gif",
      youtube: "https://www.youtube.com/watch?v=9k0EN2RCGgU",
      quantity: "00:20",
    },
    {
      id: 74,
      title: "растяжка трицепса влево",
      description:
        "Встаньте, расслабив руки. Поднимите руку и осторожно согните локоть, насколько это возможно. Другой рукой возмитесь за локоть и потяните.",
      example: "../assets/images/triceps_stretch_left.jpg",
      youtube: "https://www.youtube.com/watch?v=L9IGOcrdcFk",
      quantity: "00:30",
    },
    {
      id: 75,
      title: "растяжка трицепса вправо",
      description:
        "Встаньте, расслабив руки. Поднимите руку и осторожно согните локоть, насколько это возможно. Другой рукой возмитесь за локоть и потяните.",
      example: "../assets/images/tricep_stretch_right.jpg",
      youtube: "https://www.youtube.com/watch?v=L9IGOcrdcFk",
      quantity: "00:30",
    },
    {
      id: 76,
      title: "поза 'кот-корова'",
      description:
        "Встаньте на четвереньки. Глубоко вдохните, прогнув нижнюю часть спины и подняв голову, наклонив таз вверх, как корова. Глубоко выдохните и втяните живот, выгибая позвоночник и опуская голову и таз вниз, как у кошки. Повторить несколько раз.",
      example: "../assets/gifs/cat_cow_pose.gif",
      youtube: "https://www.youtube.com/watch?v=w_UKcI1Ftn8",
      quantity: "00:30",
    },
    {
      id: 77,
      title: "боковые круги правой ногой",
      description:
        "Лягте на бок, положив одну ногу на другую. Вытяните нижнюю руку прямо и положите на нее голову, а другую руку положите на пол перед собой для поддержки. Поднимите верхнюю ногу вверх и выполните круговые движения ногой.",
      example: "../assets/gifs/side_leg_circles_right.gif",
      youtube: "https://www.youtube.com/watch?v=VgysBPnVJWg",
      quantity: "x10",
    },
  ],
};

export default trainingsData;
