import { Habit } from "../types";

let db: IDBDatabase;
let dbReady: Promise<void>;
let resolveDbReady: (value: void | PromiseLike<void>) => void;

dbReady = new Promise((resolve) => {
  resolveDbReady = resolve;
});

const openRequest = indexedDB.open("HabitDatabase", 1);

openRequest.onupgradeneeded = function (e: IDBVersionChangeEvent) {
  const db = (e.target as IDBOpenDBRequest).result;
  if (!db.objectStoreNames.contains("Habits")) {
    db.createObjectStore("Habits", { keyPath: "id", autoIncrement: true });
  }
  resolveDbReady();
};

openRequest.onsuccess = function (e: Event) {
  db = (e.target as IDBOpenDBRequest).result;
  resolveDbReady();
};

export function ready() {
  return dbReady;
}

export function addHabit(name: string, description: string): void {
  const habit: Habit = {
    title: name,
    description: description,
    successCount: 0,
    failureCount: 0,
  };
  const tx = db.transaction("Habits", "readwrite");
  const store = tx.objectStore("Habits");
  store.add(habit);
}

export function deleteHabit(id: number): void {
  const tx = db.transaction("Habits", "readwrite");
  const store = tx.objectStore("Habits");
  store.delete(id);
}

export function updateHabit(habit: Habit): void {
  const tx = db.transaction("Habits", "readwrite");
  const store = tx.objectStore("Habits");
  store.put(habit);
}

export function incrementSuccessCount(id: number): void {
  const tx = db.transaction("Habits", "readwrite");
  const store = tx.objectStore("Habits");
  const request = store.get(id);
  request.onsuccess = function () {
    const habit = request.result as Habit;
    habit.successCount++;
    store.put(habit);
  };
}

export function incrementFailureCount(id: number): void {
  const tx = db.transaction("Habits", "readwrite");
  const store = tx.objectStore("Habits");
  const request = store.get(id);
  request.onsuccess = function () {
    const habit = request.result as Habit;
    habit.failureCount++;
    store.put(habit);
  };
}

export function getAllHabits(): Promise<Habit[]> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("Habits", "readonly");
    const store = tx.objectStore("Habits");
    const request = store.getAll();
    request.onsuccess = function () {
      resolve(request.result as Habit[]);
    };
    request.onerror = function () {
      reject(request.error);
    };
  });
}
