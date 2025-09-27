import { faker } from "@faker-js/faker";
import { TUniqId } from "../../shared/types/uniq-id.type";
import { ConversEntity } from "./convers.entity";

export type TMsgType = 'text'|'image'|'file'|'remove-users'|'add-users'

export interface IReplyToMsg {
    id: TUniqId,
    content: string,
    author: TUniqId,
    attachments: string[]
}

export interface MsgEntity {
    id: TUniqId,
    content: string,
    type: TMsgType,
    seenBy: TUniqId[],
    idConvers: TUniqId,
    author: TUniqId,
    replyToMsg: IReplyToMsg|null, // permet de repondre à un message spécifique
    attachments: string[],
    timestamp: Date,
}

export function randomReplyToMsg(fields?: Partial<IReplyToMsg>): IReplyToMsg {
    return {
        id: faker.string.uuid(),
        content: faker.word.words(faker.number.int({ min: 3, max: 30 })),
        author: faker.string.uuid(),
        attachments: [],
        ...fields
    }
}

export function randomMsgEntity(fields?: Partial<MsgEntity>): MsgEntity {
    const randomMsgType = (): TMsgType => faker.helpers.arrayElement(['text','image','file','remove-users','add-users'])

    return {
        id: faker.string.uuid(),
        content: faker.word.words(faker.number.int({min: 3, max: 30})),
        type: randomMsgType(),
        seenBy: [],
        idConvers: faker.string.uuid(),
        author: faker.string.uuid(),
        replyToMsg: randomReplyToMsg(),
        attachments: [] as string[],
        timestamp: faker.date.recent(),
        ...fields
    }
}

export function generateMsgs(convers: ConversEntity[]): MsgEntity[] {
    let msgs: MsgEntity[] = []
    convers.forEach(conv => {
        msgs = [...msgs, ...Array.from({
            length: faker.number.int({min: 3, max: 10})},
            () => randomMsgEntity({
                idConvers: conv.id,
                author: faker.helpers.arrayElement(conv.participants.map(p => p.idUser)),
                seenBy: faker.helpers.arrayElements(conv.participants.map(p => p.idUser), {min: 1, max: conv.participants.length}),
                replyToMsg: randomReplyToMsg({
                    author: faker.helpers.arrayElement(conv.participants.map(p => p.idUser))
                })
            })
        )]
    })

    return msgs
}

