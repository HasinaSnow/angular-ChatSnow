import { Provider } from "@angular/core";
import { ConversGateway } from "../ports/convers.gateway";
import { ConversInMemoryAdapter } from "../adapters/in-memory/convers-in-memory.adapter";
import { UserGateway } from "../ports/user.gateway";
import { UserInMemoryAdapter } from "../adapters/in-memory/user-in-memory.adaper";
import { _FAKE_DATA_CONVERS, _FAKE_DATA_USERS } from "../data/fake.data";
import { AuthGateway } from "../ports/auth.gateway";
import { AuthInMemoryAdapter } from "../adapters/in-memory/auth-in-memory.adapter";

export const InMemoryProviders: Provider[] = [
    {
        provide: AuthGateway,
        useValue: new AuthInMemoryAdapter()
    },
    {
        provide: UserGateway,
        useValue: new UserInMemoryAdapter().withUsers(_FAKE_DATA_USERS)
    },
    {
        provide: ConversGateway,
        useValue: new ConversInMemoryAdapter().withConvers(_FAKE_DATA_CONVERS)
    }
]