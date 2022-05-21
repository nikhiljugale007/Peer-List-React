import { v4 as uuid } from "uuid";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
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
        text: "Wow!",
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
    content: "This is post by sanket patil",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sanketpatil006",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f553e",
    updatedAt: "2022-03-30T21:57:19+05:30",
    createdAt: "2022-03-30T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content: "This is post by Shubham patil",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhampatil005",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f554e",
    updatedAt: "2022-04-11T21:57:19+05:30",
    createdAt: "2022-04-11T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content: "This is post by Prem Melage",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "premmelage01",
    userId: "g2eba8e4-d8ae-4510-9c3f-d7ad111f555e",
    updatedAt: "2022-03-12T21:57:19+05:30",
    createdAt: "2022-03-12T21:57:19+05:30",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "nikhiljugale007",
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
];
