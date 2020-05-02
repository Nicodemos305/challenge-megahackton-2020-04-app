import { Plugins } from '@capacitor/core';

export class StorageItem {
  key: string;
  value: string | {};
}

class Storage {
  private storage;
  constructor() {
    const { Storage } = Plugins;
    this.storage = Storage;
  }

  set(item: StorageItem): void {
    const { key, value } = item;
    this.storage
      .set({
        key,
        value,
      })
      .then(console.log);
  }

  async get(key: string) {
    const response = await this.storage.get({ key });
    return await response.value;
  }

  remove(key: string): Promise<void> {
    return this.storage.remove({ key });
  }

  keys(): Promise<string[]> {
    return this.storage.keys();
  }

  clear(): Promise<void> {
    return this.storage.clear();
  }
}

const storage = new Storage();

export { storage };
