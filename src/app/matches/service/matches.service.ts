import { Injectable } from '@nestjs/common';
import { Match } from '../model/match.entity';

@Injectable()
export class MatchesService {
    isMatchStadiumHomeOrAway(match: Match): string {
        if(!match){
            throw new Error("This match doesn't exist.")
        }
        if(match.homeTeam.stadium === match.stadium){
            return 'Home'
        }
        return 'Away'
    }
}
