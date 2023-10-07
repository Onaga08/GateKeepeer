import { Resident } from "../resident/resident.model";
import { getDatabase } from "../utils/database";

export const getUserByEmail = async (
    email: string
  ): Promise<Resident | undefined> => {
    const db = await getDatabase();
    const data = await db.collection("residents").findOne({ Email: email }); 
    
    if (!data) {
      return undefined;
    }
    return data
  };

