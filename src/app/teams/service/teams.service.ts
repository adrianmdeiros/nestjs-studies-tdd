import { Injectable } from '@nestjs/common';
import { Player } from 'src/app/players/model/player.entity';
import { Team } from './team.entity';

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
        const average = players.reduce((sum, player) => sum + player.height, 0) / players.length
        return average
    }

    addPlayerToTeam(player: Player, team: Team): void {
        return team.addPlayer(player)
    }

    removePlayerFromTeam(id: string, team: Team): void {
        return team.removePlayer(id)
    }
}
