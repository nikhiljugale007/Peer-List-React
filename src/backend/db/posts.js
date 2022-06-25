import { v4 as uuid } from "uuid";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "I wrote a short note on LinkedIn about how I learnt how to use NextJs in 2 days. You can find the link below and learn a few things. Also feel free to connect with me on LinkedIn too. 🥰",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          username: "premmelage01",
          _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f555e",
        },
        {
          username: "harshalshelake02",
          _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f556e",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-5.jpg",
    userId: "f2eba8e4-d8ae-4510-9c3f-d7ad111f541e",
    createdAt: "2022-05-19T21:57:19+05:30",
    updatedAt: "2022-05-19T21:57:19+05:30",
    comments: [
      {
        _id: uuid(),
        username: "nikhiljugale007",
        userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f552e",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        updatedAt: "2022-05-16T21:57:19+05:30",
      },
      {
        _id: uuid(),
        username: "sanketpatil006",
        userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f553e",
        text: "Good read!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        updatedAt: "2022-05-12T21:57:19+05:30",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "I made this side project where I have some of my favourite scenes from various animes which the user can scroll through. It has undergone cosmetic and underlying stack changes since deployed which can be traced through my blog articles .  Live link:https://animeccha.com/",
    firstName: "Sanket",
    lastName: "Patil",
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-6.jpg",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          username: "harshalshelake02",
          _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f556e",
        },
      ],
      dislikedBy: [],
    },
    username: "sanketpatil006",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f553e",
    updatedAt: "2022-03-30T21:57:19+05:30",
    createdAt: "2022-03-30T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content:
      "How does peerlist position itself? Is it 'connection and profile part of LinkedIn' + 'tweets part of Twitter'? I'm still figuring out.Also, since a context is mandatory, link to my company website:  https://emergeflow.com/",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          username: "harshalshelake02",
          _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f556e",
        },
        {
          username: "adarshbalika",
          _id: "f2eba8e4-d8ae-4510-9c3f-d7ad111f541e",
        },
        {
          username: "nikhiljugale007",
          _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f552e",
        },
      ],
      dislikedBy: [],
    },
    username: "shubhampatil005",
    firstName: "Shubham",
    lastName: "Patil",
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-7.jpg",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f554e",
    updatedAt: "2022-04-11T21:57:19+05:30",
    createdAt: "2022-04-11T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content:
      "Hey,We are looking for problem setter interns and freelancers for iMochaWorks. We help fortune 500 organizations hire qualified talent and upskill the existing workforce. Problem setters curate problems in domains technology, coding, soft skills, marketing, finance, etc",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "premmelage01",
    firstName: "Prem",
    lastName: "Melage",
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-8.jpg",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f555e",
    updatedAt: "2022-03-12T21:57:19+05:30",
    createdAt: "2022-03-12T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          username: "adarshbalika",
          _id: "f2eba8e4-d8ae-4510-9c3f-d7ad111f541e",
        },
      ],
      dislikedBy: [],
    },
    username: "nikhiljugale007",
    firstName: "Nikhil",
    lastName: "Jugale",
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-4.jpg",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f552e",
    comments: [
      {
        _id: uuid(),
        username: "adarshbalika",
        userId: "f2eba8e4-d8ae-4510-9c3f-d7ad111f541e",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        updatedAt: "2022-05-12T21:57:19+05:30",
      },
      {
        _id: uuid(),
        username: "harshalshelake02",
        userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f556e",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        updatedAt: "2022-05-16T21:57:19+05:30",
      },
    ],
    createdAt: "2022-01-10T21:57:19+05:30",
    updatedAt: "2022-01-10T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content:
      "It was a lazy Saturday and suddenly I am excited now! 😂Thank you Google for sending these awesome goodies and keeping us motivated throughout the internship ✨",
    media:
      "https://media-exp1.licdn.com/dms/image/C4D22AQEgbZL0p_SOnQ/feedshare-shrink_800/0/1656143339227?e=1658966400&v=beta&t=Jb0wLvLo4B7d7sDvraGEUByqlMO1-ID99VPPyNmEzjo",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "muktakulkarni007",
    firstName: "Mukta",
    lastName: "Kulkarni",
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-9.jpg",
    userId: "g2eba8e4-d8ae-4510-9c3f-d8bc111f556e",
    updatedAt: "2022-06-12T21:57:19+05:30",
    createdAt: "2022-06-12T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content:
      " Recent interview experience:   Machine coding: One said skip CSS for now & work on the code. -> Cleared the round The other said, you're good with JS but you need to focus a bit on CSS -> Ghosted/Rejected Conclusion:You need to be the best of both. PS: CSS ne dhoka de diya 😓",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vrushali01",
    firstName: "Vrushali",
    lastName: "Kadam",
    userProfile:
      "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f556e",
    updatedAt: "2022-03-12T21:57:19+05:30",
    createdAt: "2022-03-12T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content:
      "Hello everyone, I am last year computer science engineering student looking for opportunity as a frontend developer",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          username: "adarshbalika",
          _id: "f2eba8e4-d8ae-4510-9c3f-d7ad111f541e",
        },
      ],
      dislikedBy: [],
    },
    username: "nikhiljugale007",
    firstName: "Nikhil",
    lastName: "Jugale",
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-4.jpg",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f552e",

    createdAt: "2022-06-20T21:57:19+05:30",
    updatedAt: "2022-06-20T21:57:19+05:30",
  },
];
