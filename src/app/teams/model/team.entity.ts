import { Player } from "@prisma/client"
import { Stadium } from "../../stadiums/model/stadium.entity"


export class Team {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly stadium: Stadium,
        public players: Player[] = []
    ) { }

    addPlayer(player: Player): void {
        if (this.hasPlayer(player)) {
            throw new Error('Player is already in this team.')
        }
        this.players.push(player)
    }

    private hasPlayer(newPlayer: Player): boolean {
        return this.players.some(player => player.id === newPlayer.id)
    }

    removePlayer(id: string): void {
        this.players = this.players.filter(player => player.id !== id)
    }

}