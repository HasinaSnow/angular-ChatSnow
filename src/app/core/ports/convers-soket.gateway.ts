import { ConversEntity } from "../entities/convers.entity";
import { SocketGateway } from "./socket.gateway";

export abstract class ConversSocketGateway extends SocketGateway<ConversEntity> {}