import { UserEntity } from "../entities/user.entity";
import { SocketGateway } from "./socket.gateway";

export abstract class UserSocketGateway extends SocketGateway<UserEntity[]> {}