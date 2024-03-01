import { Component } from '@angular/core';
import { SupabaseService } from './supabaseService';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.component.html',
  styleUrls: []
})
export class UploadComponent {
  constructor(private supabaseService: SupabaseService) {}

  async uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      try {
        const key = await this.supabaseService.uploadImage(file);
        console.log(`File uploaded with key: ${key}`);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }
}
