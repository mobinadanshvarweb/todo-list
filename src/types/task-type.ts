export interface Task {
  id: number;
  title: string;
  priority: string;
  date: string;
  estimate: number;
  status: string;
  hash: string;
  isAdmin?: string;
  isPassword?: string;
}
export interface Filter {
  priority: string;
  estimate: number;
  status: string;
}
