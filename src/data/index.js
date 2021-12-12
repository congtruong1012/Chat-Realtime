import {
  faUserFriends,
  faPhoneAlt,
  faCamera,
  faCommentAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const iconsBottom = [
  {
    icon: faUserFriends,
    isActive: false,
  },
  {
    icon: faPhoneAlt,
    isActive: false,
  },
  {
    icon: faCamera,
    isActive: false,
  },
  {
    icon: faUserFriends,
    isActive: false,
  },
  {
    icon: faCommentAlt,
    isActive: true,
  },
  {
    icon: faUserCircle,
    isActive: false,
  },
];

const users = [
  {
    id: 1,
    name: "John Smith",
    message: "Hi John! What are you doing?",
    seen: "14:32",
    status: "busy",
  },
  {
    id: 2,
    name: "Mia Nguen",
    message: "Cool! Let's meet at 16:00 near the shopping mall!",
    seen: "Yesterday",
    status: "offline",
  },
  {
    id: 3,
    name: "Henna Beck",
    message: "Typing...",
    seen: "16:12",
    status: "online",
  },
  {
    id: 4,
    name: "Nuria Cortez",
    message: "Hey, will you come to party on Saturday?",
    seen: "14:32",
    status: "block",
  },
  // {
  //   id: 5,
  //   name: "Nuria Cortez",
  //   message: "Hey, will you come to party on Saturday?",
  //   seen: "14:32",
  //   status: "block",
  // },
  // {
  //   id: 6,
  //   name: "Nuria Cortez",
  //   message: "Hey, will you come to party on Saturday?",
  //   seen: "14:32",
  //   status: "block",
  // },
  // {
  //   id: 7,
  //   name: "Nuria Cortez",
  //   message: "Hey, will you come to party on Saturday?",
  //   seen: "14:32",
  //   status: "block",
  // },
  // {
  //   id: 8,
  //   name: "Nuria Cortez",
  //   message: "Hey, will you come to party on Saturday?",
  //   seen: "14:32",
  //   status: "block",
  // },
  // {
  //   id: 9,
  //   name: "Nuria Cortez",
  //   message: "Hey, will you come to party on Saturday?",
  //   seen: "14:32",
  //   status: "block",
  // },
  // {
  //   id: 10,
  //   name: "Nuria Cortez",
  //   message: "Hey, will you come to party on Saturday?",
  //   seen: "14:32",
  //   status: "block",
  // },
  // {
  //   id: 11,
  //   name: "Nuria Cortez",
  //   message: "Hey, will you come to party on Saturday?",
  //   seen: "14:32",
  //   status: "block",
  // },
  // {
  //   id: 12,
  //   name: "Nuria Cortez",
  //   message: "Hey, will you come to party on Saturday?",
  //   seen: "14:32",
  //   status: "block",
  // },
];

const eStatus = {
  online: "bg-green-500",
  offline: "bg-gray-300",
  block: "bg-red-600",
  busy: "bg-yellow-600",
};

export { iconsBottom, users, eStatus };
