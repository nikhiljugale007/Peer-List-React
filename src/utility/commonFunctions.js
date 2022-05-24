const checkUrlIsProvided = ({ url }) => {
  if (url === undefined || url === "") {
    return false;
  } else {
    return true;
  }
};

const checkUserIsFollowed = ({ user, username }) => {
  return (
    user.following.find(
      (userFollowing) => userFollowing.username === username
    ) || username === user.username
  );
};

const checkLikedPost = ({ likes, user }) => {
  const likedArray = likes.likedBy.filter(
    (userLiked) => userLiked._id === user._id
  );
  if (likedArray.length === 0) return false;
  else return true;
};
const checkBookmarkedPost = ({ user, _id }) => {
  const bookmaredArray = user.bookmarks.filter((post) => post._id === _id);
  if (bookmaredArray.length === 0) return false;
  else return true;
};
const checkPostIdOfLoggedUser = ({ user, username }) => {
  return username === user.username;
};
const getTimeInDMY = (date) => {
  const dateF = new Date(date);
  const dmy =
    dateF.getDate() +
    " " +
    dateF.toLocaleString("default", { month: "long" }) +
    ", " +
    dateF.getFullYear();
  return dmy;
};
const checkPostUpVotedByLoggedUser = ({ comment, user }) => {
  return comment.votes.upvotedBy.find(
    (comment) => comment.username === user.username
  );
};
const checkPostDownVotedByLoggedUser = ({ comment, user }) => {
  return comment.votes.downvotedBy.find(
    (comment) => comment.username === user.username
  );
};
const getDateDifferance = ({ dateToCheck }) => {
  var createdDate = new Date(dateToCheck);
  var currentDate = new Date();
  const diff = Math.floor(currentDate - createdDate);
  const days = Math.floor(diff / 86400000);
  if (days > 0) {
    return days + " days ago";
  }
  const hours = Math.floor((diff % 86400000) / 3600000);
  if (hours > 0) {
    return hours + " hours ago";
  }
  const minutes = Math.round(((diff % 86400000) % 3600000) / 60000);
  if (minutes > 0) {
    return minutes + " minutes ago";
  }
  return "Just now";
};

const getSortCommentsArray = ({ commentList, sortCommentsBy }) => {
  if (sortCommentsBy === "UPVOTES") {
    return commentList.slice().sort((commentA, commentB) => {
      const upVoteDiff =
        commentB.votes.upvotedBy.length - commentA.votes.upvotedBy.length;
      if (upVoteDiff === 0) {
        return (
          commentA.votes.downvotedBy.length - commentB.votes.downvotedBy.length
        );
      }
      return upVoteDiff;
    });
  } else if (sortCommentsBy === "DOWNVOTES") {
    return commentList.slice().sort((commentA, commentB) => {
      const downVoteDiff =
        commentB.votes.downvotedBy.length - commentA.votes.downvotedBy.length;
      if (downVoteDiff === 0) {
        return (
          commentA.votes.upvotedBy.length - commentB.votes.upvotedBy.length
        );
      }
      return downVoteDiff;
    });
  } else if (sortCommentsBy === "LATEST") {
    return commentList
      .slice()
      .sort(
        (commentA, commentB) =>
          new Date(commentB.updatedAt) - new Date(commentA.updatedAt)
      );
  }
  return commentList;
};
const getSortedFeed = ({ feed, sortPostBy }) => {
  switch (sortPostBy) {
    case "LATEST":
      return [...feed].sort(
        (postA, postB) => new Date(postB.createdAt) - new Date(postA.createdAt)
      );
    case "TRENDING":
      return [...feed].sort((postA, postB) => {
        return postB.likes.likeCount - postA.likes.likeCount;
      });
    default:
      return feed;
  }
};
export {
  checkUrlIsProvided,
  checkUserIsFollowed,
  checkLikedPost,
  checkBookmarkedPost,
  checkPostIdOfLoggedUser,
  getTimeInDMY,
  checkPostUpVotedByLoggedUser,
  checkPostDownVotedByLoggedUser,
  getDateDifferance,
  getSortCommentsArray,
  getSortedFeed,
};
