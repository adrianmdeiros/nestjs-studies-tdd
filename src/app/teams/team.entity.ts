import { Stadium } from "../stadiums/stadium.entity";

export class Team {
    constructor(
        private id: number,
        private name: string,
        private stadium: Stadium
    ){}

    getId(): number {
        return this.id
    }
}