import { Team } from "../teams/team.entity";

export class Championship {
    constructor(
        private id: number,
        private year: number,
        private name: string,
        private teams: Team[]
    ) { }

    addTeam(team: Team): void {
        if (this.hasTeam(team)) {
            throw new Error('Team is already in this championship.')
        }
        this.teams.push(team)
    }

    private hasTeam(newTeam: Team): boolean {
        return this.teams.some(team => team.getId() === newTeam.getId())
    }
}