export interface Character {
    id?: number;
    name: string;
    powerLevel: number;
    age: number;
    specialPower: SpecialPower;
}

export enum SpecialPower {
    Kamehameha, Masenko, Henkidama, Kaioken
}