import { GenezioDeploy, GenezioMethod } from "@genezio/types";

@GenezioDeploy()
export class BackendService {
  constructor() {}

  @GenezioMethod()
  async dummy() {
    return "Hello, I'm a dummy method!";
  }
}
