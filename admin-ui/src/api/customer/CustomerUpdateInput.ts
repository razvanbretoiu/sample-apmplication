import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  rate?: string | null;
};
