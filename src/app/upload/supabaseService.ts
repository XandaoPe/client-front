import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://phxzddvxvaggwukspjba.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoeHpkZHZ4dmFnZ3d1a3NwamJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTA2ODMxNywiZXhwIjoyMDI0NjQ0MzE3fQ.MGALkDBBWl7UQary0V5D01906tvb0kowbyPhu4dY3Dw'

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async uploadImage(file: File): Promise<string> {
    const { data, error } = await this.supabase.storage.from('clients').upload(file.name, file);
    if (error) {
      throw new Error(error.message);
    }
    return data.path;
  }
}
