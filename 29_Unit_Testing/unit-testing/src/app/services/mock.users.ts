import { IUser } from '../models/IUser';

export const mockUsers = [
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Molly',
      last: 'Lord',
    },
    location: {
      street: {
        number: 8368,
        name: 'South Street',
      },
      city: 'Leixlip',
      state: 'Wexford',
      country: 'Ireland',
      postcode: 40246,
      coordinates: {
        latitude: '25.6626',
        longitude: '149.3683',
      },
      timezone: {
        offset: '-7:00',
        description: 'Mountain Time (US & Canada)',
      },
    },
    email: 'molly.lord@example.com',
    login: {
      uuid: 'b862dc8f-52eb-41c3-837b-d36963ded001',
      username: 'sadsnake320',
      password: 'hunting',
      salt: 'i5UfWpbn',
      md5: 'ea1f8cca444ecabea970dafe3ccdae58',
      sha1: 'e6de913319064f786d1f9c3a328f9357097942bc',
      sha256:
        'c8bd3815422f5cb4fe2a5ff4ce7f6328c385a9049d019ec40e49fc3c35a56868',
    },
    dob: {
      date: '1965-07-18T01:03:33.740Z',
      age: 55,
    },
    registered: {
      date: '2012-02-20T14:10:19.688Z',
      age: 8,
    },
    phone: '021-898-0008',
    cell: '081-854-4677',
    id: {
      name: 'PPS',
      value: '5298166T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/40.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/40.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
    },
    nat: 'IE',
  },
];
