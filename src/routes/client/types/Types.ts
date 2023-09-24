export type CreateClientParams = {
  name: string;
  expiryDate: Date;
  contact: string;
  slug: string;
  active: boolean;
};
export type UpdateClientParams = {
  id: number;
  name: string;
  expiryDate: Date;
  contact: string;
  slug: string;
  active: boolean;
};
