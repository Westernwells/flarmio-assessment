// type for houses data
export type THousesData = {
    id: string;
    animal: string;
    commonRoom: string;
    element: string;
    founder: string;
    ghost: string;
    heads: {
      id: string;
      firstName: string;
      lastName: string;
    }[];
    houseColours: string | undefined;
    name: string;
    traits: {
      id: string;
      name: string;
    }[];
  };
  
  export type THouseCard ={
    name: string;
    animal: string;
    houseColours: string[];
    founder: string
}