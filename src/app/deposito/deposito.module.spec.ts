import { DepositoModule } from './deposito.module';

describe('DepositoModule', () => {
  let depositoModule: DepositoModule;

  beforeEach(() => {
    depositoModule = new DepositoModule();
  });

  it('should create an instance', () => {
    expect(depositoModule).toBeTruthy();
  });
});
