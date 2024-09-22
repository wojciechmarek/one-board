import { Account, Client, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint('http://localhost:7070/v1').setProject('675734a7000666d574a6');

export const account = new Account(client);
export const databases = new Databases(client);
