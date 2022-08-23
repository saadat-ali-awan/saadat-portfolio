import { User, Repository } from "@prisma/client";

export interface SeedData {
  user: User;
  repos: Repository[];
}
