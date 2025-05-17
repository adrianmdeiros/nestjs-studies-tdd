import { Injectable } from '@nestjs/common';
import { Player } from 'src/app/players/player.entity';

@Injectable()
export class TeamsService {
    getPlayersHeightAverage(players: Player[]): number {
        if (!this.hasPlayers(players)) {
            return 0
        }
        const playersHeightAverage = this.calculatePlayersHeightAverage(players)
        
        return playersHeightAverage
    }

    hasPlayers(players: Player[]): boolean {
        return players && players.length > 0
    }

    calculatePlayersHeightAverage(players: Player[]): number {
        const average = players.reduce((sum, player) => sum + player.getHeight(), 0) / players.length
        return average
    }
}
