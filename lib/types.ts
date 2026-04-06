export interface User {
  id: number;
  displayName: string;
  email: string;
  accountNumber: string;
  username: string;
  avatar: string;
  currency: string;
  status: string;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetUsersParams {
  lastId?: number;
  size?: number;
}

export interface CreateUserPayload {
  email: string;
  username: string;
  displayName: string;
  password?: string;
}

export interface UpdateUserPayload {
  id: number;
  email?: string;
  username?: string;
  displayName?: string;
  password?: string;
}

export interface DeleteUserParams {
  id: number;
}

export interface PaginatedUsersResponse {
  content?: User[];
  users?: User[];
  data?: User[];
}

export interface DashboardStatistic {
  income: DashboardStatItem;
  balance: DashboardStatItem;
  expense: DashboardStatItem;
  totalUser: DashboardStatItem;
  totalTransactionRecorded: DashboardStatItem;
  totalPocketCreatedRecorded: DashboardStatItem;
  totalActiveCategories: DashboardStatItem;
  totalSplitBillCreated: DashboardStatItem;
  latestUsers: User[];
}

export interface DashboardStatItem {
  value: number;
  percentage: number;
  isUp: boolean;
}

export interface VerifyOtpResponse {
  token: string;
  refreshToken: string;
  expiredAt: string;
  user: User | null;
}
