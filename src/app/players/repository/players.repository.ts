import { Injectable } from "@nestjs/common";
import { Player } from "../model/player.entity";
import { PrismaClient } from "@prisma/client";
import { CreatePlayerDTO } from "../dtos/create-player.dto";

@Injectable()
export class PlayersRepository {
    constructor(
        private readonly prisma: PrismaClient
    ) { }

    async save(player: CreatePlayerDTO): Promise<Partial<Player>> {
        return await this.prisma.player.create({
            data: {
                name: player.name,
                birth: new Date(player.birth),
                gender: player.gender,
                height: player.height
            }
        })
    }

    async findByName(name: string): Promise<Partial<Player> | null> {
        return await this.prisma.player.findFirst({
            where: {
                name:{
                    contains: name,
                }
            }
        })
    }

}