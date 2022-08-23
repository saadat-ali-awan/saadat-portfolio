import { ReactNode, useEffect, useState, createContext, useContext } from "react";
import { SeedData } from "./app_seed_types";
import path from 'path';

// Create App Seed Context
export const AppSeedDataContext = createContext<SeedData | undefined>(undefined);

// Use App Seed Context
export const useAppSeedData = () => useContext(AppSeedDataContext);

// Create Context Provider that will fetch data from server and pass it to all components
export const AppSeedDataProvider: React.FC<{ children: ReactNode, user_name: string }> = ({ children, user_name }) => {
  const [seedData, setSeedData] = useState<SeedData>();

  useEffect(() => {
    // Fetch data from server
    fetch(path.join(process.cwd(), 'api', user_name, 'app-seed'))
      .then(res => res.json())
      .then(data => setSeedData(data));
  } , []);

  return (
    <AppSeedDataContext.Provider value={seedData}>
      {children}
    </AppSeedDataContext.Provider>
  );
}
