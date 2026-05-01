export type Role = 'admin' | 'member';
export type TaskStatus = 'todo' | 'in-progress' | 'completed';
export type Priority = 'low' | 'medium' | 'high';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: Role;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  members: string[]; // UIDs
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  assignedTo: string; // User UID
  dueDate: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
