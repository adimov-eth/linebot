import { createClient } from '@supabase/supabase-js';
import { config } from '../config';

// Initialize Supabase client
const supabaseUrl = config.supabase.url;
const supabaseAnonKey = config.supabase.anonKey;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

class SupabaseService {
  /**
   * Fetches tasks for a specific user.
   * @param userId The ID of the user.
   */
  static async fetchTasks(userId: string) {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('userId', userId);

    if (error) throw new Error(`Error fetching tasks: ${error.message}`);
    return data;
  }

  /**
   * Updates the status of a task.
   * @param taskId The ID of the task.
   * @param status The new status of the task.
   */
  static async updateTaskStatus(taskId: number, status: string) {
    const { data, error } = await supabase
      .from('tasks')
      .update({ status })
      .eq('id', taskId);

    if (error) throw new Error(`Error updating task status: ${error.message}`);
    return data;
  }

  /**
   * Records the start of a user's shift.
   * @param userId The ID of the user starting the shift.
   */
  static async startShift(userId: string) {
    const { data, error } = await supabase
      .from('shifts')
      .insert([{ userId, startTime: new Date(), endTime: null }]);

    if (error) throw new Error(`Error recording shift start: ${error.message}`);
    return data;
  }

  /**
   * Records the end of a user's shift.
   * @param shiftId The ID of the shift to end.
   */
  static async endShift(shiftId: number) {
    const { data, error } = await supabase
      .from('shifts')
      .update({ endTime: new Date() })
      .eq('id', shiftId);

    if (error) throw new Error(`Error recording shift end: ${error.message}`);
    return data;
  }

  // Add more methods as needed for your application
}

export { SupabaseService };
