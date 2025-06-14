import { Injectable } from '@nestjs/common';
import { Player } from '../model/player.entity';
import { CreatePlayerDTO, createPlayerDtoSchema } from '../dtos/create-player.dto';

@Injectable()
export class PlayersService {
    create(dto: CreatePlayerDTO): Player {
        const validPlayer = createPlayerDtoSchema.parse(dto)

        return new Player(
            validPlayer.name,
            new Date(validPlayer.birth),
            validPlayer.gender,
            validPlayer.height
        )

    }
}
