import { Injectable, inject } from '@angular/core';
import { FirebaseStorage, Storage, StorageReference, UploadResult, getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = inject(Storage);

  private imageUrl!: string;

  constructor() { }

  async uploadImage(image: File): Promise<UploadResult> {
    const imageRef: StorageReference = ref(this.storage, `images/${image.name}`);
    return uploadBytes(imageRef, image);
  }

  async getFSImageURL(imageName: string): Promise<string> {
    const imageRef: StorageReference = ref(this.storage, `images/${imageName}`)
    return getDownloadURL(imageRef);
  }

  setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }
}
