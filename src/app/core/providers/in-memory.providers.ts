import { Provider } from "@angular/core";
import { ConversGateway } from "../ports/convers.gateway";
import { ConversInMemoryAdapter } from "../adapters/in-memory/convers-in-memory.adapter";

export const InMemoryProviders: Provider[] = [
    {
        provide: ConversGateway,
        useValue: new ConversInMemoryAdapter().withConvers([])
    }
]