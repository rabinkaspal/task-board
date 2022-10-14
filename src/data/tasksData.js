const tasks = [
    {
        id: 1,
        title: "Toxic effect of unspecified substance",
        createdBy: "Tresa Seaman",
        members: [
            {
                userId: 1,
                userName: "Ninnetta Pinock",
                imageURL: "http://dummyimage.com/80x80.png/465c68/ffffff",
            },
            {
                userId: 2,
                userName: "Saraann Goldney",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 3,
                userName: "Dacia Brambley",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
        ],
        type: 1,
        priority: 1,
        status: 0,
    },
    {
        id: 2,
        title: "Laceration w fb of unsp great toe w damage to nail, init",
        createdBy: "Taber Bealing",
        members: [
            {
                userId: 4,
                userName: "Adele Ainsby",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 5,
                userName: "Henryetta Soffe",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
        ],
        type: 0,
        priority: 2,
        status: 1,
    },
    {
        id: 3,
        title: "Fall from non-moving wheelchair, sequela",
        createdBy: "Geneva Aubury",
        members: [
            {
                userId: 6,
                userName: "Harmonia Laurencot",
                imageURL: "http://dummyimage.com/80x80.png/ff7e8d/ffffff",
            },
            {
                userId: 4,
                userName: "Jacenta Riteley",
                imageURL: "http://dummyimage.com/80x80.png/465c68/ffffff",
            },
        ],
        type: 2,
        priority: 3,
        status: 2,
    },
    {
        id: 4,
        title: "Unspecified injury of pulmonary blood vessels",
        createdBy: "Bronson Hendrich",
        members: [
            {
                userId: 2,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 4,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/465c68/ffffff",
            },
            {
                userId: 6,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
        ],
        type: 0,
        priority: 0,
        status: 3,
    },
    {
        id: 5,
        title: "Acute chemical otitis externa, right ear",
        createdBy: "Florri Pellew",
        members: [
            {
                userId: 1,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 4,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
            {
                userId: 5,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
        ],
        type: 1,
        priority: 1,
        status: 0,
    },
    {
        id: 6,
        title: "Nondisp spiral fx shaft of l fibula, 7thN",
        createdBy: "Jo-anne Cruddas",
        members: [
            {
                userId: 2,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 5,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
            {
                userId: 1,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/465c68/ffffff",
            },
        ],
        type: 0,
        priority: 2,
        status: 1,
    },
    {
        id: 7,
        title: "Otitis externa in oth diseases classd elswhr, left ear",
        createdBy: "Tisha Ainge",
        members: [
            {
                userId: 2,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 6,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
            {
                userId: 3,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
        ],
        type: 0,
        priority: 3,
        status: 2,
    },
    {
        id: 8,
        title: "Puncture wound without foreign body, right hip, sequela",
        createdBy: "Milton Kinkade",
        members: [
            {
                userId: 1,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/ca8a4a/ffffff",
            },
            {
                userId: 4,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
            {
                userId: 5,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
        ],
        type: 0,
        priority: 0,
        status: 1,
    },
    {
        id: 9,
        title: "Minor laceration of right vertebral artery, subs encntr",
        createdBy: "Georgy Mourton",
        members: [
            {
                userId: 4,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 2,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
            {
                userId: 1,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/353d3b/ffffff",
            },
        ],
        type: 1,
        priority: 1,
        status: 3,
    },
    {
        id: 10,
        title: "Subluxation of other parts of left shoulder girdle, sequela",
        createdBy: "Natasha Pedrollo",
        members: [
            {
                userId: 2,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/ca8a4a/ffffff",
            },
            {
                userId: 4,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/465c68/ffffff",
            },
            {
                userId: 5,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
        ],
        type: 0,
        priority: 2,
        status: 0,
    },
    {
        id: 11,
        title: "Tuberculosis of cervix",
        createdBy: "Filberte Chasmer",
        members: [
            {
                userId: 3,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 6,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
            {
                userId: 7,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
        ],
        type: 1,
        priority: 3,
        status: 1,
    },
    {
        id: 12,
        title: "Burn of unspecified degree of right ankle, sequela",
        createdBy: "Shurlocke Spearman",
        members: [
            {
                userId: 7,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 1,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/ca8a4a/000000",
            },
            {
                userId: 5,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/465c68/ffffff",
            },
        ],
        type: 0,
        priority: 0,
        status: 1,
    },
    {
        id: 13,
        title: "Sltr-haris Type IV physl fx upr end l tibia, 7thD",
        createdBy: "Cammy Madge",
        members: [
            {
                userId: 2,
                userName: "Penelopa Pendre",
                imageURL: "http://dummyimage.com/80x80.png/877652/ffffff",
            },
            {
                userId: 7,
                userName: "Timothea Whimp",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
            {
                userId: 4,
                userName: "Marlow Verillo",
                imageURL: "http://dummyimage.com/80x80.png/c0ccff/000000",
            },
        ],
        type: 2,
        priority: 1,
        status: 2,
    },
    {
        id: 14,
        title: "Arthropathies in oth diseases classd elswhr, right knee",
        createdBy: "Arlyn Ventom",
        members: [
            {
                userId: 3,
                userName: "Richardo Master",
                imageURL: "http://dummyimage.com/80x80.png/ff7e8d/ffffff",
            },
            {
                userId: 7,
                userName: "Gardener Baldwin",
                imageURL: "http://dummyimage.com/80x80.png/5fa2dd/ffffff",
            },
        ],
        type: 0,
        priority: 2,
        status: 3,
    },
    {
        id: 15,
        title: "Unspecified intestinal obstruction",
        createdBy: "Cordula Kembery",
        members: [
            {
                userId: 2,
                userName: "Richardo Master",
                imageURL: "http://dummyimage.com/80x80.png/465c68/ffffff",
            },
            {
                userId: 6,
                userName: "Gardener Baldwin",
                imageURL: "http://dummyimage.com/80x80.png/5fa2dd/ffffff",
            },
        ],
        type: 1,
        priority: 3,
        status: 2,
    },
    {
        id: 16,
        title: "Traumatic rupture of cervical intervertebral disc, sequela",
        createdBy: "Elfrieda Coryndon",
        members: [
            {
                userId: 3,
                userName: "Richardo Master",
                imageURL: "http://dummyimage.com/80x80.png/ca8a4a/ffffff",
            },
            {
                userId: 5,
                userName: "Gardener Baldwin",
                imageURL: "http://dummyimage.com/80x80.png/5fa2dd/ffffff",
            },
        ],
        type: 0,
        priority: 0,
        status: 0,
    },
    {
        id: 17,
        title: "Lead-induced gout, unspecified ankle and foot",
        createdBy: "Bertie Evins",
        members: [
            {
                userId: 4,
                userName: "Richardo Master",
                imageURL: "http://dummyimage.com/80x80.png/ff7e8d/ffffff",
            },
            {
                userId: 7,
                userName: "Gardener Baldwin",
                imageURL: "http://dummyimage.com/80x80.png/5fa2dd/ffffff",
            },
        ],
        type: 1,
        priority: 1,
        status: 3,
    },
    {
        id: 18,
        title: "Pressure ulcer of sacral region, stage 4",
        createdBy: "Opaline O'Kelly",
        members: [
            {
                userId: 1,
                userName: "Richardo Master",
                imageURL: "http://dummyimage.com/80x80.png/ca8a4a/ffffff",
            },
            {
                userId: 5,
                userName: "Gardener Baldwin",
                imageURL: "http://dummyimage.com/80x80.png/5fa2dd/ffffff",
            },
        ],
        type: 0,
        priority: 2,
        status: 3,
    },
    {
        id: 19,
        title: "Melanoma in situ of left ear and external auricular canal",
        createdBy: "Phillie D'Ambrosio",
        members: [
            {
                userId: 3,
                userName: "Richardo Master",
                imageURL: "http://dummyimage.com/80x80.png/ff7e8d/ffffff",
            },
            {
                userId: 4,
                userName: "Gardener Baldwin",
                imageURL: "http://dummyimage.com/80x80.png/5fa2dd/ffffff",
            },
        ],
        type: 0,
        priority: 3,
        status: 2,
    },
    {
        id: 20,
        title: "Abrasion of unspecified hand",
        createdBy: "Les Kovalski",
        members: [
            {
                userId: 4,
                userName: "Richardo Master",
                imageURL: "http://dummyimage.com/80x80.png/ff7e8d/ffffff",
            },
            {
                userId: 7,
                userName: "Gardener Baldwin",
                imageURL: "http://dummyimage.com/80x80.png/ca8a4a/ffffff",
            },
        ],
        type: 0,
        priority: 0,
        status: 1,
    },
];

export default tasks;
