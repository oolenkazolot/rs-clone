import { IDataUser } from "../types/index";

export function setUserLocalStorage(dataUser: IDataUser): void {
  localStorage.setItem("token", dataUser.token);
  localStorage.setItem("userId", dataUser.userId);
}

export function getUserTokenLocalStorage(): boolean {
  const token: string | null = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  return true;
}

export function removeUserLocalStorage(): void {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
}

export function getUserIdLocalStorage(): string | undefined {
  const userId: string | null = localStorage.getItem("userId");

  if (!userId) {
    return;
  }

  return userId;
}
