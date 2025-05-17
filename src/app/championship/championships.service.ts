import { Injectable } from '@nestjs/common';
import { Team } from '../teams/team.entity';
import { Championship } from './championship.entity';

@Injectable()
export class ChampionshipService {
    addTeam(team: Team, championship: Championship): void {
        return championship.addTeam(team)
    }
}
