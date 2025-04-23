export interface IUserDetails {
  "_id": string,
  "email": string,
  "__v": 0,
  "contact": string,
  "image": string,
  "isDeleted": boolean,
  "isverified": boolean,
  "name": string,
  createdAt: Date,
  updatedAt: Date,
  status : 1 | 0
}

export type meta = {
  "page": number,
  "limit": number,
  "total": number,
  "totalPage": number
}

export type GameType =  {
  "_id": string,
  "name": string,
  "image": string,
  "status": boolean,
  "description": string,
  "createdAt": Date,
  "updatedAt": Date,
  link : string
  "__v": 0
}

export type ProductType = {
  "_id": string,
  "name": string,
  "images": string[],
  "price": number,
  "details": string,
  "stock": number,
  "category": string,
  "isDeleted": boolean,
  "createdAt": Date,
  "updatedAt": Date,
  "__v": 0
}

// export interface ITableUser {
//   key: string;
//   serial: string;
//   name: string;
//   email: string;
//   accountType: string;
//   date: string;
//   avatar: string;
// }
// export interface IEarningData {
//   key: string;
//   serial: string;
//   name: string;
//   subscriptionType: string;
//   purchaseDate: string;
//   amount: number;
// }

// Assuming ITableUser has the following properties:
interface ITableUser {
  key: string;
  name: string;
  email: string;
  accountType: string;
  date: string;
  avatars: string; // or any appropriate type for avatar
  // other properties you need
}

// Update IEarningData to have all the required properties
export interface IEarningData extends ITableUser {
  serial: string;
  subscriptionType: string;
  purchaseDate: string;
  amount: number;
}

export const earningData: IEarningData[] = [
  {
    key: "1",
    serial: "#0",
    name: "Anna Suraiya",
    email: "anna@example.com",
    accountType: "Basic",
    date: "2022-01-15",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Basic Plan",
    purchaseDate: "2022-01-15",
    amount: 30,
  },
  {
    key: "2",
    serial: "#1",
    name: "John Doe",
    email: "john.doe@example.com",
    accountType: "Premium",
    date: "2022-02-20",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Premium Plan",
    purchaseDate: "2022-02-20",
    amount: 50,
  },
  {
    key: "3",
    serial: "#2",
    name: "Emily Clark",
    email: "emily.clark@example.com",
    accountType: "Basic",
    date: "2022-03-10",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Basic Plan",
    purchaseDate: "2022-03-10",
    amount: 30,
  },
  {
    key: "4",
    serial: "#3",
    name: "David Smith",
    email: "david.smith@example.com",
    accountType: "Premium",
    date: "2022-04-05",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Premium Plan",
    purchaseDate: "2022-04-05",
    amount: 50,
  },
  {
    key: "5",
    serial: "#4",
    name: "Sophia Johnson",
    email: "sophia.johnson@example.com",
    accountType: "Basic",
    date: "2022-05-25",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Basic Plan",
    purchaseDate: "2022-05-25",
    amount: 30,
  },
  {
    key: "6",
    serial: "#5",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    accountType: "Premium",
    date: "2022-06-12",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Premium Plan",
    purchaseDate: "2022-06-12",
    amount: 50,
  },
  {
    key: "7",
    serial: "#6",
    name: "Olivia Harris",
    email: "olivia.harris@example.com",
    accountType: "Basic",
    date: "2022-07-08",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Basic Plan",
    purchaseDate: "2022-07-08",
    amount: 30,
  },
  {
    key: "8",
    serial: "#7",
    name: "James Williams",
    email: "james.williams@example.com",
    accountType: "Premium",
    date: "2022-08-19",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Premium Plan",
    purchaseDate: "2022-08-19",
    amount: 50,
  },
  {
    key: "9",
    serial: "#8",
    name: "Isabella Martinez",
    email: "isabella.martinez@example.com",
    accountType: "Basic",
    date: "2022-09-23",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Basic Plan",
    purchaseDate: "2022-09-23",
    amount: 30,
  },
  {
    key: "10",
    serial: "#9",
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
    accountType: "Premium",
    date: "2022-10-17",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Premium Plan",
    purchaseDate: "2022-10-17",
    amount: 50,
  },
  {
    key: "11",
    serial: "#10",
    name: "Ava Davis",
    email: "ava.davis@example.com",
    accountType: "Basic",
    date: "2022-11-01",
    avatars: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    subscriptionType: "Basic Plan",
    purchaseDate: "2022-11-01",
    amount: 30,
  },
];
