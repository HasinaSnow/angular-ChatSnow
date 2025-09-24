import { UserEntity } from "../entities/user.entity";
import { SocketGateway } from "./socket.gateway";

export abstract class OnlineUserGateway extends SocketGateway<UserEntity[]> {}