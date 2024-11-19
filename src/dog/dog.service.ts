import { Injectable } from '@nestjs/common';
// Dog Schema Model

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WoW-WOW';
  }

  public introduce(): string {
    return 'My name is REX!';
  }

  public modifyDetail(): string {
    return 'Succesfullly modified';
  }
}
