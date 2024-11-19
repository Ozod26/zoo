import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WoW-WOW';
  }

  public introduce(): string {
    return 'My name is REX!';
  }
}
