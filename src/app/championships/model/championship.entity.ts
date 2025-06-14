import { Team } from "src/app/teams/model/team.entity";
import { Match } from "../../matches/model/match.entity";
import { MatchFilters } from "../interfaces/match-filters.interface";

export class Championship {
    constructor(
        public readonly id: number,
        public readonly year: number,
        public readonly name: string,
        public readonly teams: Team[],
        private matches: Match[] = []
    ) { }

    addTeam(team: Team): void {
        if (this.hasTeam(team)) {
            throw new Error('Team is already in this championship.')
        }
        this.teams.push(team)
    }

    private hasTeam(newTeam: Team): boolean {
        return this.teams.some(team => team.id === newTeam.id)
    }

    addMatch(match: Match): void {
        if (this.hasMatch(match)) {
            throw new Error('Match is already in this championship.')
        }
        this.matches.push(match)
    }

    private hasMatch(newMatch: Match): boolean {
        return this.matches?.some(match => match.id === newMatch.id)
    }

    getMatchesBy(filters: MatchFilters): Match[] | [] {
        // Aplicar Strategy Depois
        return this.matches.filter(match => {
            if (filters.date && match.date.getTime() !== filters.date.getTime()) return false;
            if (filters.stadiumId && match.stadium.id !== filters.stadiumId) return false;
            if (filters.homeTeamId && match.homeTeam.id !== filters.homeTeamId) return false;
            if (filters.awayTeamId && match.awayTeam.id !== filters.awayTeamId) return false;
            return true;
        })
    }

}