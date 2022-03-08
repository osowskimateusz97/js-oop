export interface Comparable<T> {
    compareTo(other: T): number;
    toString(): string;
    reset(): void;
}
