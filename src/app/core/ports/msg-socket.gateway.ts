import { MsgEntity } from "../entities/msg.entity";
import { SocketGateway } from "./socket.gateway";

export abstract class MsgSocketGateway extends SocketGateway<MsgEntity> {}