import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private items = [
      {
    id: 1,
    name: "Item 1",
    description: "Description for item 1",
    price: 100
  }];

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    return this.items.find(item => item.id === id);
  }

  create(item: any) {
    this.items.push(item);
    return item;
  }

  update(id: number, updatedItem: any) {
    const index = this.items.findIndex(item => item.id === id);
    if (index > -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      return this.items[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.items.findIndex(item => item.id === id);
    if (index > -1) {
      return this.items.splice(index, 1);
    }
    return null;
  }
}
