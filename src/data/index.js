import {
  faCommentAlt,
  faUserCircle,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

const iconsBottom = [
  {
    icon: faCommentAlt,
    isActive: true,
    label: 'Chat',
  },
  {
    icon: faUserFriends,
    isActive: false,
    label: 'Groups',
  },
  {
    icon: faUserCircle,
    isActive: false,
    label: 'Profile',
  },
  // {
  //   icon: faPhoneAlt,
  //   isActive: false,
  // },
  // {
  //   icon: faCamera,
  //   isActive: false,
  // },
  // {
  //   icon: faUserFriends,
  //   isActive: false,
  // },
];

const users = [
  {
    id: 1,
    name: 'John Smith',
    message: 'Hi John! What are you doing?',
    seen: '14:32',
    status: 'busy',
  },
  {
    id: 2,
    name: 'Mia Nguen',
    message: "Cool! Let's meet at 16:00 near the shopping mall!",
    seen: 'Yesterday',
    status: 'offline',
  },
  {
    id: 3,
    name: 'Henna Beck',
    message: 'Typing...',
    seen: '16:12',
    status: 'online',
  },
  {
    id: 4,
    name: 'Nuria Cortez',
    message: 'Hey, will you come to party on Saturday?',
    seen: '14:32',
    status: 'block',
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
  online: 'green-500',
  offline: 'gray-300',
  block: 'red-600',
  busy: 'yellow-600',
};

const messages = [
  { id: 1, messages: 'Hi Henna, how you', time: '16:12', isYou: true },
  { id: 2, messages: 'I finally found a job!', time: '16:34', isYou: false },
  {
    id: 3,
    messages: 'Congrats! After all this searches you finally made it.',
    time: '16:14',
    isYou: true,
  },
  { id: 4, messages: 'In which company btw?', time: '16:42', isYou: true },
  { id: 5, messages: 'UI Designer in Facebook!', time: '16:45', isYou: false },
  { id: 6, messages: 'Great!', time: '16:57', isYou: true },
];

export { iconsBottom, users, eStatus, messages };
