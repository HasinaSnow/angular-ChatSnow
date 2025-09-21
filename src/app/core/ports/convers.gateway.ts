import { ConversEntity } from "../entities/convers.entity";
import { Gateway } from "./gateway";

export abstract class ConversGateway extends Gateway<ConversEntity, Partial<ConversEntity>, Partial<ConversEntity>> {}