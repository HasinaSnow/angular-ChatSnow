import { Provider } from "@angular/core";
import { ConversGateway } from "../ports/convers.gateway";
import { ConversInMemoryAdapter } from "../adapters/in-memory/convers-in-memory.adapter";
import { UserGateway } from "../ports/user.gateway";
import { UserInMemoryAdapter } from "../adapters/in-memory/user-in-memory.adaper";
import { _FAKE_DATA_CONVERS, _FAKE_DATA_MSGS, _FAKE_DATA_USERS } from "../data/fake.data";
import { AuthGateway } from "../ports/auth.gateway";
import { AuthInMemoryAdapter } from "../adapters/in-memory/auth-in-memory.adapter";
import { ProfileGateway } from "../ports/profile.gateway";
import { ProfileInMemoryAdpater } from "../adapters/in-memory/profile-in-memory.adapter";
import { UserSocketGateway } from "../ports/online-user.gateway";
import { UserSocketInMemoryAdapter } from "../adapters/in-memory/user-socket-in-memory.adatper";
import { MsgGateway } from "../ports/msg.gateway";
import { MsgInMemoryAdapter } from "../adapters/in-memory/msg-in-memory.adapter";
import { MsgSocketGateway } from "../ports/msg-socket.gateway";
import { MsgSocketInMemoryAdapter } from "../adapters/in-memory/msg-socket-in-memory.adapter";
import { ConversSocketGateway } from "../ports/convers-soket.gateway";
import { ConversSocketInMemoryAdapter } from "../adapters/in-memory/convers-socket-in-memory.adapter";

const userGateways = [
    {
        provide: UserGateway,
        useValue: new UserInMemoryAdapter().withUsers(_FAKE_DATA_USERS)
    },
    {
        provide: UserSocketGateway,
        useValue: new UserSocketInMemoryAdapter()
    }
]

const authGateways = [
    {
        provide: AuthGateway,
        useValue: new AuthInMemoryAdapter()
    }
]

const profileGateways = [
    {
        provide: ProfileGateway,
        useValue: new ProfileInMemoryAdpater()
    },
]

const conversGateways = [
    {
        provide: ConversGateway,
        useValue: new ConversInMemoryAdapter().withConvers(_FAKE_DATA_CONVERS)
    },
    {
        provide: ConversSocketGateway,
        useValue: new ConversSocketInMemoryAdapter()
    },
]

const msgGateways = [
    {
        provide: MsgGateway,
        useValue: new MsgInMemoryAdapter().withMsgs(_FAKE_DATA_MSGS)
    },
    {
        provide: MsgSocketGateway,
        useValue: new MsgSocketInMemoryAdapter()
    }

]

export const InMemoryProviders: Provider[] = [
    ...userGateways,
    ...authGateways,
    ...profileGateways,
    ...conversGateways,
    ...msgGateways
]
