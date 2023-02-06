import { IDataUser } from "../types/index";

export function setUserLocalStorage(dataUser: IDataUser): void {
  localStorage.setItem("token", JSON.stringify(dataUser.token));
  localStorage.setItem("userId", JSON.stringify(dataUser.userId));
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
