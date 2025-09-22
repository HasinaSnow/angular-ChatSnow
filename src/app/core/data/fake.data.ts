import { ConversEntity, RandomConversEntity } from "../entities/convers.entity";
import { RandomUserEntity, UserEntity } from "../entities/user.entity";

export let _FAKE_DATA_USERS = RandomUserEntity({}, 10) as UserEntity[]
export let _FAKE_DATA_CONVERS = RandomConversEntity({}, 10) as ConversEntity[]
