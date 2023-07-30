export interface Character {
    id?: string;
    name: string;
    powerLevel: number;
    age: number;
    specialPower: SpecialPower;
}

export enum SpecialPower {
    Kamehameha, Masenko, Henkidama, Kaioken
}